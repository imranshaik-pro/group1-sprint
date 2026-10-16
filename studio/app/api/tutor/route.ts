import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '../../chatgpt-auth';
import {getDb} from '../../../db';
import {members,ownership} from '../../../db/schema';
import {eq} from 'drizzle-orm';
import {tutorStatus,tutorInput,tutorReply,type TutorConfig} from '../../../lib/live-tutor';
export const dynamic='force-dynamic';
const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
const config=()=>env as unknown as TutorConfig;
async function allowed(){const user=await getChatGPTUser();if(!user)return {status:401,error:'Sign in to use the AI tutor.'};const db=getDb();const [owner]=await db.select().from(ownership).where(eq(ownership.key,1));const [member]=await db.select().from(members).where(eq(members.userId,user.userId));if(owner?.userId!==user.userId&&member?.status!=='active')return {status:403,error:'Your study account needs access approval.'};return {status:200,user};}
export async function GET(){try{const a=await allowed();if(!a.user)return json({error:a.error},a.status);return json(tutorStatus(config()));}catch{return json({error:'Could not check AI connection. Retry shortly.'},503);}}
export async function POST(request:Request){
 if(request.headers.get('origin')!==new URL(request.url).origin)return json({error:'Invalid request origin.'},403);
 try{const a=await allowed();if(!a.user)return json({error:a.error},a.status);
 if(!tutorStatus(config()).configured)return json({error:'AI is not activated yet. The owner must configure an API key and model.'},503);
 if(Number(request.headers.get('content-length')||0)>70000)return json({error:'Request too large.'},413);
 const raw=await request.text();if(raw.length>70000)return json({error:'Request too large.'},413);
 let b;try{b=tutorInput(JSON.parse(raw));}catch{}if(!b)return json({error:'Enter a question of 5–16000 characters. Only the configured OpenAI provider is available.'},400);
 // Durable daily limits shared by all Worker isolates. Reserve atomically before billing.
 const db=env.DB!;await db.exec('CREATE TABLE IF NOT EXISTS tutor_usage (scope TEXT NOT NULL, day TEXT NOT NULL, count INTEGER NOT NULL, PRIMARY KEY(scope,day))');
 const day=new Date().toISOString().slice(0,10);
 const reserve=async(scope:string,limit:number)=>db.prepare('INSERT INTO tutor_usage(scope,day,count) VALUES(?,?,1) ON CONFLICT(scope,day) DO UPDATE SET count=count+1 WHERE count < ? RETURNING count').bind(scope,day,limit).first();
 if(!await reserve(a.user.userId,20)||!await reserve('__global__',200))return json({error:'Daily AI request limit reached. Continue with source-backed notes and try tomorrow.'},429);
 try{return json(await tutorReply(config(),b.prompt));}catch(e){return json({error:e instanceof Error?e.message:'AI request failed.'},502);}
 }catch{return json({error:'AI is temporarily unavailable. Please retry shortly.'},503);}
}
