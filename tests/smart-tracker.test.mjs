import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {learningReport,websiteSessions,validQuizDraft,appSessions,trackerHTML} from '../app/learning-analytics.js';
import {chooseCoachedPractice} from '../app/adaptive-coach.js';
import {eligible,choosePractice} from '../app/study-engine.js';
import {reviewedImports} from '../app/reviewed-imports.js';
import {practiceBank} from '../app/practice-bank.js';
import {topics} from '../app/content.js';
const sourceQuestions=new Map(fs.readdirSync('app/imports').flatMap(path=>JSON.parse(fs.readFileSync('app/imports/'+path)).questions.map(q=>[q.id,q])));
test('50 reviewed models preserve actual source identity/hash and are eligible across APPSC/UPSC/common PSC only after review',()=>{
 assert.equal(reviewedImports.length,50);assert.equal(new Set(reviewedImports.map(q=>q.id)).size,50);
 const audit=JSON.parse(fs.readFileSync('docs/QUESTION-VERIFICATION-2026-10-17.json'));assert.equal(audit.held,5);assert.equal(audit.pendingUnapproved,3776);
 for(const q of reviewedImports){const source=sourceQuestions.get(q.id);assert.ok(source);assert.equal(createHash('sha256').update(source.prompt+'\n'+source.answer).digest('hex'),q.verification.sourceTextSha256);assert.ok(q.verification.locator);assert.ok(q.verification.source.startsWith('https://'));assert.ok(eligible(q));assert.ok(eligible(q,'UPSC'));assert.ok(eligible(q,'Other PSC'));assert.equal(eligible({...q,reviewStatus:'unreviewed'}),false);assert.equal(eligible({...q,verification:null}),false);assert.equal(q.kind,'practice');assert.equal(new Set(q.options).size,4);}
 assert.equal(choosePractice(practiceBank(),{exam:'UPSC',count:1000}).length,350);assert.ok(choosePractice(practiceBank(),{exam:'UPSC',count:10}).every(q=>q.exam==='PSC common'));
 for(const n of [17,33,37,39,49])assert.ok(!reviewedImports.some(q=>q.id==='uploaded-upsc-2f2cc8e61186-q'+n));
 for(const [n,v] of [[8,60],[9,4],[15,100],[27,1000],[34,5],[46,150],[48,2000]]){const q=reviewedImports.find(q=>q.id==='uploaded-upsc-2f2cc8e61186-q'+n);assert.ok(q);assert.ok(q.options[q.answer].replaceAll(',','').includes(String(v)));}
});
const session=(id,start,wrong=0,skip=0,at='2026-10-17T01:00:00Z')=>({id,at,items:Array.from({length:5},(_,i)=>({id:'question-'+(start+i),topic:'t-2-3',answer:0,choice:i<wrong?1:i<wrong+skip?null:0,kind:'practice'}))});
test('topic report distinguishes incorrect, skipped and insufficient evidence, then detects recovery from recent distinct questions',()=>{
 let r=learningReport([session('one',0,2,1)],topics).topics.find(t=>t.id==='t-2-3');assert.equal(r.correct,2);assert.equal(r.wrong,2);assert.equal(r.skipped,1);assert.equal(r.accuracy,.5);assert.equal(r.status,'More evidence needed');
 const bad=session('bad',0,4);let report=learningReport([bad,session('bad2',5,4)],topics);r=report.topics.find(t=>t.id==='t-2-3');assert.equal(r.status,'Focus next');assert.ok(report.weakTopics.includes(r.id));
 const repaired={...bad,id:'repair',at:'2026-10-18T01:00:00Z',items:bad.items.map(q=>({...q,choice:0}))};report=learningReport([bad,repaired],topics);assert.equal(report.weakTopics.includes('t-2-3'),false);assert.equal(report.topics.find(t=>t.id==='t-2-3').wrong,4);
 assert.match(trackerHTML(report),/Subject performance/);assert.match(trackerHTML(report),/Practise this topic/);
});
test('saved-result retry deduplicates by attempt ID; legacy totals and unattempted topics never create invented weakness evidence',()=>{
 const one={...session('one',0),attemptId:'same'};const two={...one,id:'retry'};const report=learningReport([one,two,{id:'old',at:one.at,total:20,score:12}],topics);assert.equal(report.sessions.length,2);assert.equal(report.legacySessions,1);assert.equal(report.topics.find(t=>t.id==='t-2-3').total,5);assert.equal(report.topics.find(t=>t.id==='t-0-0').accuracy,null);
 const events=[{id:'saved',at:one.at,type:'practice',data:{...one,id:'forged'}}];assert.equal(websiteSessions(events)[0].id,'saved');
 const app=appSessions({a:{id:'a',finished:true,ended:Date.now(),started:Date.now()-1000,label:'Mock',questions:[{id:'q',topic:'t-2-3',answer:0,kind:'practice'}],answers:[{choice:1}]}});assert.equal(learningReport(app,topics).topics.find(t=>t.id==='t-2-3').wrong,1);
});
test('weakness quota supplies at least six fresh eligible focus questions when available, excludes recent exact questions and fills shortages',()=>{
 const bank=reviewedImports,now=Date.now(),opts={count:10,exam:'UPSC',mistakes:['t-2-3'],uniqueFamilies:true,random:()=>.5,now};const out=chooseCoachedPractice(bank,opts);assert.equal(out.length,10);assert.ok(out.filter(q=>q.topic==='t-2-3').length>=6);
 const recent=out.map(q=>({id:q.id,at:now}));const next=chooseCoachedPractice(bank,{...opts,history:recent});assert.equal(next.length,10);assert.ok(next.every(q=>!out.some(x=>x.id===q.id)));assert.equal(chooseCoachedPractice(bank.slice(0,2),opts).length,2);
});
test('practice drafts restore IDs and selected answers without accepting unknown questions, invalid scopes or malformed answers',()=>{
 const draft={version:1,attemptId:'draft-1',deadline:Date.now()+60000,duration:60,mode:'mixed',examScope:'UPSC',ids:[reviewedImports[0].id],answers:{0:2}};
 assert.ok(validQuizDraft(JSON.parse(JSON.stringify(draft)),practiceBank()));assert.equal(validQuizDraft({...draft,ids:['missing']},practiceBank()),false);assert.equal(validQuizDraft({...draft,answers:{0:4}},practiceBank()),false);assert.equal(validQuizDraft({...draft,answers:[2]},practiceBank()),false);assert.equal(validQuizDraft({...draft,examScope:'Any unverified bank'},practiceBank()),false);
});
