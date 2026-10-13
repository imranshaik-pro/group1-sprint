import { validEvent, type StudyEvent } from './event-validation.ts';
export type Resume={page:string;topic?:string};
export type ReadingBackup={id:string;page:number;pages:number;notes:string;bookmarks:number[];lastReadAt?:string};
export type StudyBackup={app:'group1-studio';version:2;exportedAt:string;account:{id:string;email:string};events:StudyEvent[];resume:Resume;reading:ReadingBackup[]};
export const STUDY_PAGES=['today','plan','library','lesson','revision','practice','papers','reading','current','insights','tutor','settings'];
export function validResume(value:unknown):value is Resume {if(!value||typeof value!=='object')return false;const v=value as Resume;return STUDY_PAGES.includes(v.page)&&(v.page!=='lesson'||typeof v.topic==='string'&&/^t-[0-6]-[0-9]$/.test(v.topic));}
export function routeHash(resume:Resume){return '#'+resume.page+(resume.page==='lesson'?'?topic='+resume.topic:'');}
export function parseRoute(hash:string):Resume|null {const raw=hash.replace(/^#/,'');const [page,query]=raw.split('?');const r={page,topic:new URLSearchParams(query||'').get('topic')||undefined};return validResume(r)?r:null;}
function stable(value:unknown):string {if(Array.isArray(value))return '['+value.map(stable).join(',')+']';if(value&&typeof value==='object')return '{'+Object.keys(value).sort().map(k=>JSON.stringify(k)+':'+stable((value as Record<string,unknown>)[k])).join(',')+'}';return JSON.stringify(value);}
export function mergeBackup(current:StudyEvent[],incoming:StudyEvent[]){const map=new Map(current.map(e=>[e.id,e]));for(const e of incoming){const old=map.get(e.id);if(old&&stable(old)!==stable(e))throw Error('This backup conflicts with a saved event. Nothing was imported.');map.set(e.id,e);}return [...map.values()].sort((a,b)=>a.at.localeCompare(b.at)||a.id.localeCompare(b.id));}
function validReading(value:unknown):value is ReadingBackup{if(!value||typeof value!=='object')return false;const b=value as ReadingBackup;return typeof b.id==='string'&&b.id.length<=100&&Number.isInteger(b.page)&&b.page>=1&&Number.isInteger(b.pages)&&b.page<=b.pages&&b.pages<=10000&&typeof b.notes==='string'&&b.notes.length<=20000&&Array.isArray(b.bookmarks)&&b.bookmarks.length<=1000&&b.bookmarks.every(p=>Number.isInteger(p)&&p>=1&&p<=b.pages);}
export function parseBackup(text:string,accountId:string):{events:StudyEvent[];resume:Resume|null;reading:ReadingBackup[];legacy:boolean;exportedAt:string} {
 if(text.length>10*1024*1024)throw Error('Choose a backup smaller than 10 MB.');let b;try{b=JSON.parse(text);}catch{throw Error('This file is not valid JSON.');}
 if(b?.app==='group1-sprint')throw Error('This is an original offline-app backup. Restore it in that app, not this website.');
 const legacy=b?.version===1&&!b?.app;
 if(!legacy&&(b?.app!=='group1-studio'||b?.version!==2))throw Error('Unsupported study backup format.');
 if(!legacy&&(!b.account||b.account.id!==accountId))throw Error('Sign in with the same account that created this backup.');
 if(!Array.isArray(b.events)||b.events.length>5000||!b.events.every(validEvent))throw Error('The backup contains invalid study events. Nothing was imported.');
 const events=mergeBackup([],b.events);
 if(!legacy&&(!validResume(b.resume)||!Array.isArray(b.reading)||b.reading.length>500||!b.reading.every(validReading)))throw Error('The backup has invalid resume or reading information.');
 return {events,resume:legacy?null:b.resume,reading:legacy?[]:b.reading,legacy,exportedAt:typeof b.exportedAt==='string'?b.exportedAt:''};
}
