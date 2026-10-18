import {topics} from './content.js';
// Only pre-release historical records may backfill dated completion.
export const legacyCompletionCutoff='2026-10-18T18:13:03.182153Z';
export const studyDay=(value=Date.now())=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(value));
const dayNumber=d=>Date.parse(d+'T12:00:00Z')/86400000;
export const validDay=d=>typeof d==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(d)&&Number.isFinite(dayNumber(d))&&new Date(d+'T12:00:00Z').toISOString().slice(0,10)===d;
export function validTaskCompletion(d){return !!d&&validDay(d.day)&&validDay(d.planStart)&&/^t-[0-6]-[0-9]$|^(gma-daily|current-daily|revision-daily|mock-daily)$/.test(d.topic)&&typeof d.taskId==='string'&&new RegExp('^daily-'+d.planStart+'-'+d.day+'-[0-3]$').test(d.taskId);}
export function tasksForDay(plan,date){
 if(!plan||!validDay(plan.start)||!validDay(date))return [];
 const day=dayNumber(date)-dayNumber(plan.start)+1,days=Number(plan.days)||105;
 if(day<1||day>days)return [];
 const gs=topics.filter(t=>t.paper==='I'),science=topics.filter(t=>t.subject==='Science & Technology'),current=topics.filter(t=>t.subject==='Current Events');
 const staticTopic=gs[day<=60?Math.min(gs.length-1,Math.floor((day-1)/1.5)):(day-61)%gs.length],scienceTopic=science[Math.floor((day-1)/2)%science.length],news=current[(day-1)%current.length];
 const minutes=Math.round((Number(plan.hours)||3)*60),final=day>days-12;
 const base=final?[{topic:'mock-daily',label:'Timed mock practice',route:'practice',subject:'Exam practice'},{topic:staticTopic.id,label:'Review '+staticTopic.title,route:'learn/'+staticTopic.id,subject:staticTopic.subject},{topic:'revision-daily',label:'Error review & spaced recall',route:'revisions',subject:'Revision'},{topic:news.id,label:news.title,route:'learn/'+news.id,subject:news.subject}]:[{topic:staticTopic.id,label:'Understand '+staticTopic.title,route:'learn/'+staticTopic.id,subject:staticTopic.subject},{topic:'gma-daily',label:'Daily GMA drill',route:'practice',subject:'General Mental Ability'},{topic:day%2?scienceTopic.id:'revision-daily',label:day%2?scienceTopic.title:'Interleaved revision',route:day%2?'learn/'+scienceTopic.id:'revisions',subject:'Science & revision'},{topic:news.id,label:news.title,route:'learn/'+news.id,subject:news.subject}];
 return base.map((t,i)=>({...t,id:'daily-'+plan.start+'-'+date+'-'+i,day:date,planStart:plan.start,planDay:day,duration:Math.floor(minutes/4)+(i<minutes%4?1:0)}));
}
// Calendar assignments are derived even for days when the app was never opened.
// Task completion is separate from lifetime topic completion; older records are preserved.
export function dailySchedule(plan,events=[],date=studyDay()){
 const completed=new Set(events.filter(e=>e.type==='task-complete'&&validTaskCompletion(e.data)).map(e=>e.data.taskId));
 const legacy=events.filter(e=>e.at&&Date.parse(e.at)<Date.parse(legacyCompletionCutoff)&&(e.type==='complete'||(e.type==='topic'&&e.data?.done===true)));
 const decorate=t=>({...t,done:completed.has(t.id)||legacy.some(e=>(e.data.topic||e.entity)===t.topic&&(e.data.day||(e.at?studyDay(e.at):''))===t.day)});
 const today=tasksForDay(plan,date).map(decorate),pending=[];
 if(plan&&validDay(plan.start)&&validDay(date)){const n=Math.min(Number(plan.days)||105,Math.max(0,dayNumber(date)-dayNumber(plan.start)));for(let i=0;i<n;i++){const d=new Date((dayNumber(plan.start)+i)*86400000).toISOString().slice(0,10);pending.push(...tasksForDay(plan,d).map(decorate).filter(t=>!t.done));}}
 // Preserve past assignments from earlier plan versions up to their replacement date.
 const plans=events.filter(e=>e.type==='plan'&&validDay(e.data?.start));
 for(let k=0;k<plans.length-1;k++){const old=plans[k].data,next=plans[k+1],cutoff=next.at?studyDay(next.at):date;const n=Math.min(Number(old.days)||105,Math.max(0,dayNumber(cutoff<date?cutoff:date)-dayNumber(old.start)));for(let i=0;i<n;i++){const d=new Date((dayNumber(old.start)+i)*86400000).toISOString().slice(0,10);pending.push(...tasksForDay(old,d).map(decorate).filter(t=>!t.done));}}
 const uniquePending=[...new Map(pending.map(t=>[t.id,t])).values()].sort((a,b)=>a.day.localeCompare(b.day)||a.id.localeCompare(b.id));
 return {today,pending:uniquePending,day:plan&&validDay(plan.start)?Math.max(0,dayNumber(date)-dayNumber(plan.start)+1):0};
}
