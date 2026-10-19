import { getChatGPTUser } from '../../chatgpt-auth';
import { getDb } from '../../../db';
import { ownership, members, events, audit, invitations } from '../../../db/schema';
import { eq, desc, and, ne, sql } from 'drizzle-orm';
import { accessDecision } from '../../../lib/access';
import { newInvitationToken, invitationHash, invitationUsable, invitationJoinStatus } from '../../../lib/invitations';
import { validEvent } from '../../../lib/event-validation';
export const dynamic = 'force-dynamic';
const json = (body: unknown, status = 200) => Response.json(body, {status,headers:{'Cache-Control':'no-store'}});
async function context() {
  const user = await getChatGPTUser();
  if (!user) return null;
  const db = getDb();
  await db.insert(members).values({userId:user.userId,email:user.email,name:user.fullName || user.email,status:'unregistered',createdAt:new Date().toISOString()}).onConflictDoNothing();
  const [owner] = await db.select().from(ownership).where(eq(ownership.key,1));
  const [member] = await db.select().from(members).where(eq(members.userId,user.userId));
  return {user, db, owner, member, admin:owner?.userId === user.userId};
}
export async function GET(request:Request) {
 try {
  const c=await context(); if(!c) return json({error:'Sign in to continue.'},401);
  const {db,user,member,owner,admin}=c;
  const active=admin || member.status==='active';
  return json({member:{...member,role:admin?'superadmin':'learner'},needsSetup:!owner,events:active?(await db.select().from(events).where(and(eq(events.userId,user.userId),sql`${events.eventId} NOT LIKE 'content:%' AND ${events.eventId} NOT LIKE 'ops:%' AND (${new URL(request.url).searchParams.get('interface')==='app'} OR ${events.eventId} NOT LIKE 'app-%')`)).orderBy(desc(events.createdAt)).limit(5000)).map(e=>JSON.parse(e.payload)):[],members:admin?await db.select().from(members).where(ne(members.status,'unregistered')).orderBy(desc(members.createdAt)):[],invitations:admin?await db.select({id:invitations.id,label:invitations.label,status:invitations.status,createdAt:invitations.createdAt,expiresAt:invitations.expiresAt}).from(invitations).orderBy(desc(invitations.createdAt)).limit(100):[],audit:admin?await db.select().from(audit).orderBy(desc(audit.createdAt)).limit(50):[]});
 }catch {return json({error:'The workspace is temporarily unavailable. Your saved device changes are safe.'},503);}
}
export async function POST(request: Request) {
 if(request.headers.get('origin') !== new URL(request.url).origin) return json({error:'Invalid request origin.'},403);
 const length=Number(request.headers.get('content-length')||0);if(length>100000) return json({error:'Request too large.'},413);
 let body;try {const raw=await request.text();if(raw.length>100000)return json({error:'Request too large.'},413);body=JSON.parse(raw);}catch{return json({error:'Invalid request.'},400);}
 try {
 const c=await context();if(!c)return json({error:'Sign in to continue.'},401);
 const {db,user,member,admin,owner}=c;
 const decision=accessDecision(user.userId,owner?.userId,member.status,body.action,body.userId);
 if(decision!==200)return json({error:decision===409?'An owner is already configured.':decision===400?'Invalid access change.':'Your account is not allowed to perform this action.'},decision);
 if(body.action==='claim-owner') {
   if(owner)return json({error:'An owner is already configured.'},409);
   // Bootstrap is exposed only while this Site is owner-private. Claim before granting Site access.
   await db.insert(ownership).values({key:1,userId:user.userId,createdAt:new Date().toISOString()}).onConflictDoNothing();
   const [claimed]=await db.select().from(ownership).where(eq(ownership.key,1));
   if(claimed.userId!==user.userId)return json({error:'An owner is already configured.'},409);
   await db.update(members).set({status:'active'}).where(eq(members.userId,user.userId));
   return json({ok:true});
 }
 if(body.action==='create-invitation') {
  if(!owner || !admin)return json({error:'Only the super admin can create invitations.'},403);
  const label=typeof body.label==='string'?body.label.trim():'';
  if(!label || label.length>80 || ![1,7,30].includes(body.days))return json({error:'Choose a label and a valid invitation duration.'},400);
  const token=newInvitationToken(),hash=(await invitationHash(token))!,id=crypto.randomUUID();
  const now=new Date(),expiresAt=new Date(now.getTime()+body.days*86400000).toISOString();
  await db.batch([db.insert(invitations).values({id,tokenHash:hash,label,status:'active',createdBy:user.userId,createdAt:now.toISOString(),expiresAt}),db.insert(audit).values({id:crypto.randomUUID(),actor:user.userId,subject:id,action:'invitation-created',createdAt:now.toISOString()})]);
  return json({ok:true,id,token,expiresAt});
 }
 if(body.action==='revoke-invitation') {
  if(typeof body.id!=='string')return json({error:'Invalid invitation.'},400);
  const [invite]=await db.select().from(invitations).where(eq(invitations.id,body.id));
  if(!invite)return json({error:'Invitation not found.'},404);
  if(invite.status==='revoked')return json({ok:true});
  await db.batch([db.update(invitations).set({status:'revoked'}).where(eq(invitations.id,body.id)),db.insert(audit).values({id:crypto.randomUUID(),actor:user.userId,subject:body.id,action:'invitation-revoked',createdAt:new Date().toISOString()})]);
  return json({ok:true});
 }
 if(body.action==='redeem-invitation') {
  const hash=await invitationHash(body.token);if(!hash)return json({error:'This invitation is invalid.'},400);
  const [invite]=await db.select().from(invitations).where(eq(invitations.tokenHash,hash));
  if(!invitationUsable(invite))return json({error:'This invitation has expired or was revoked. Ask the admin for a new link.'},410);
  if(member.status==='suspended'||member.status==='rejected')return json({error:'Your existing access decision needs an admin review. A new invitation cannot change it.'},403);
  if(admin||member.status==='active')return json({ok:true,alreadyMember:true});
  // A single conditional write prevents revocation/expiry races from admitting a new request.
  const joined=await db.update(members).set({status:invitationJoinStatus(member.status),invitationId:invite.id}).where(and(eq(members.userId,user.userId),sql`${members.status} IN ('unregistered','pending')`,sql`(${members.invitationId} IS NULL OR ${members.invitationId} = ${invite.id})`,sql`EXISTS (SELECT 1 FROM invitations WHERE id = ${invite.id} AND status = 'active' AND expires_at > ${new Date().toISOString()})`)).returning({status:members.status});
  if(!joined.length)return json({error:member.invitationId?'Your existing request is already linked to another invitation.':'This invitation is no longer available. Ask the admin for a new link.'},409);
  return json({ok:true,pending:true});
 }
 if(body.action==='membership') {
  if(!admin)return json({error:'Only the super admin can manage access.'},403);
  if(!['active','rejected','suspended'].includes(body.status)||typeof body.userId!=='string'||body.userId===user.userId)return json({error:'Invalid access change.'},400);
  const [target]=await db.select().from(members).where(eq(members.userId,body.userId));if(!target)return json({error:'Account not found.'},404);
  await db.batch([db.update(members).set({status:body.status}).where(eq(members.userId,body.userId)),db.insert(audit).values({id:crypto.randomUUID(),actor:user.userId,subject:body.userId,action:body.status,createdAt:new Date().toISOString()})]);
  return json({ok:true});
 }
 if(body.action==='request-access') {
  if(member.status!=='pending' && member.status!=='active' && !admin)await db.update(members).set({status:'pending'}).where(eq(members.userId,user.userId));
  return json({ok:true});
 }
 if(!admin && member.status!=='active')return json({error:'Your account needs admin approval.'},403);
 if(body.action==='sync') {
  if(!Array.isArray(body.events)||body.events.length>50||!body.events.every(validEvent))return json({error:'Invalid study events.'},400);
  const ops=body.events.map((e:{id:string;at:string})=>db.insert(events).values({id:user.userId+':'+e.id,userId:user.userId,eventId:e.id,payload:JSON.stringify(e),createdAt:e.at}).onConflictDoNothing());
  if(ops.length)await db.batch(ops as [typeof ops[number],...typeof ops[number][]]);
  return json({ok:true,accepted:body.events.map((e:{id:string})=>e.id)});
 }
 return json({error:'Unknown action.'},400);
 }catch{return json({error:'Could not save right now. Please retry.'},503);}
}
