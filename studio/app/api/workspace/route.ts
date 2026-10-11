import { getChatGPTUser } from '../../chatgpt-auth';
import { getDb } from '../../../db';
import { ownership, members, events, audit } from '../../../db/schema';
import { eq, desc } from 'drizzle-orm';
import { accessDecision } from '../../../lib/access';
import { validEvent } from '../../../lib/event-validation';
export const dynamic = 'force-dynamic';
const json = (body: unknown, status = 200) => Response.json(body, {status,headers:{'Cache-Control':'no-store'}});
async function context() {
  const user = await getChatGPTUser();
  if (!user) return null;
  const db = getDb();
  await db.insert(members).values({userId:user.userId,email:user.email,name:user.fullName || user.email,status:'pending',createdAt:new Date().toISOString()}).onConflictDoNothing();
  const [owner] = await db.select().from(ownership).where(eq(ownership.key,1));
  const [member] = await db.select().from(members).where(eq(members.userId,user.userId));
  return {user, db, owner, member, admin:owner?.userId === user.userId};
}
export async function GET() {
 try {
  const c=await context(); if(!c) return json({error:'Sign in to continue.'},401);
  const {db,user,member,owner,admin}=c;
  const active=admin || member.status==='active';
  return json({member:{...member,role:admin?'superadmin':'learner'},needsSetup:!owner,events:active?(await db.select().from(events).where(eq(events.userId,user.userId)).orderBy(desc(events.createdAt)).limit(5000)).map(e=>JSON.parse(e.payload)):[],members:admin?await db.select().from(members).orderBy(desc(members.createdAt)):[],audit:admin?await db.select().from(audit).orderBy(desc(audit.createdAt)).limit(50):[]});
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
