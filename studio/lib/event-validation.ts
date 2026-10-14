import {validReading,validPracticeItems,practiceTotals} from './study-engine.js';
import {validFlow} from './learning-flow.js';
export type StudyEvent={id:string;at:string;type:string;data:Record<string,unknown>};
const short=(value:unknown,max=300)=>typeof value==='string'&&value.length>0&&value.length<=max;
const topic=(value:unknown)=>typeof value==='string'&&/^t-[0-6]-[0-9]$/.test(value);
const https=(value:unknown,official=false)=>{try{if(typeof value!=='string'||value.length>2000)return false;const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password&&(!official||u.hostname==='psc.ap.gov.in');}catch{return false;}};
export function validEvent(value:unknown):value is StudyEvent {
 if(!value||typeof value!=='object')return false;
 const e=value as StudyEvent;
 if(typeof e.id!=='string'||!/^[a-zA-Z0-9-]{1,80}$/.test(e.id)||typeof e.at!=='string'||!Number.isFinite(Date.parse(e.at))||!e.data||typeof e.data!=='object'||Array.isArray(e.data)||JSON.stringify(e.data).length>10000)return false;
 const d=e.data;
 switch(e.type){
 case 'reading-preferences':return validReading(d);
 case 'learning-flow':return validFlow(d);
 case 'cursor':return ['today','plan','library','lesson','revision','practice','papers','reading','current','insights','tutor','settings'].includes(String(d.page))&&(d.page!=='lesson'||topic(d.topic));
 case 'reading':return short(d.resource,100)&&short(d.title,300)&&typeof d.page==='number'&&Number.isInteger(d.page)&&d.page>=1&&typeof d.total==='number'&&Number.isInteger(d.total)&&d.total>=d.page&&d.total<=10000;
 case 'plan':return typeof d.start==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(d.start)&&Number.isFinite(Date.parse(d.start))&&typeof d.hours==='number'&&d.hours>=1&&d.hours<=12&&short(d.level)&&short(d.weak)&&d.days===105;
 case 'complete':return topic(d.topic)||['gma-daily','current-daily'].includes(String(d.topic));
 case 'note':return topic(d.topic)&&typeof d.text==='string'&&d.text.length<=8000;
 case 'recall':return topic(d.topic)&&short(d.key,100);
 case 'practice':{
  const count=(v:unknown)=>typeof v==='number'&&Number.isInteger(v)&&v>=0&&v<=120;
  return count(d.total)&&Number(d.total)>0&&count(d.correct)&&count(d.wrong)&&count(d.attempted)&&Number(d.correct)+Number(d.wrong)===d.attempted&&Number(d.attempted)<=Number(d.total)&&typeof d.score==='number'&&Number.isFinite(d.score)&&Math.abs(d.score-(Number(d.correct)-Number(d.wrong)/3))<1e-8&&typeof d.seconds==='number'&&d.seconds>=0&&d.seconds<=7200&&['gma','rights','mixed'].includes(String(d.mode))&&(!('items' in d)||(validPracticeItems(d.items,d.total)&&(()=>{const v=practiceTotals(d.items);return v.correct===d.correct&&v.wrong===d.wrong&&v.attempted===d.attempted;})()));
 }
 case 'mistake':return short(d.concept)&&short(d.correction,8000)&&['Knowledge','Confusion','Careless','Time'].includes(String(d.errorType));
 case 'headline':return short(d.text,4000)&&https(d.url)&&topic(d.topic);
 case 'paper':return short(d.title)&&/^\d{4}$/.test(String(d.year))&&https(d.url,true)&&d.verified===false;
 default:return false;
 }
}
