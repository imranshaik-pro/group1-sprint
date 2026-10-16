import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {topics} from '../app/content.js';
import {curriculumBatches} from '../app/curriculum-plan.js';
import {batch1Lessons} from '../app/curriculum-batch1.js';
import {curriculumQuestions} from '../app/curriculum-questions.js';
import {learningContent} from '../app/lesson-content.js';
import {practiceBank} from '../app/practice-bank.js';
import {choosePractice,practiceTotals,validPracticeItems} from '../app/study-engine.js';

test('six balanced batches cover each stable syllabus topic once, without a separate questions track',()=>{
 assert.deepEqual(curriculumBatches.map(b=>b.topicIds.length),[11,11,11,11,11,10]);
 const ids=curriculumBatches.flatMap(b=>b.topicIds);assert.equal(new Set(ids).size,65);assert.deepEqual(ids,topics.map(t=>t.id));
});
test('Batch 1 teaches every listed section bilingually and includes recall, source and revision support',()=>{
 assert.deepEqual(Object.keys(batch1Lessons),curriculumBatches[0].topicIds);
 for(const id of curriculumBatches[0].topicIds){const c=learningContent(id);assert.equal(c.batch,1);assert.ok(c.segments.length>=4,id);assert.equal(c.outline.length,c.segments.length);assert.ok(c.summary.length>=4);assert.equal(c.recall.length,3);assert.equal(c.references.length,3);
  for(const p of c.segments){assert.ok(p.text.length>300,id);assert.match(p.te,/[\u0c00-\u0c7f]/);assert.ok(p.te.length>160,id);assert.ok(p.teTitle&&p.teExample);assert.ok(p.example&&p.trap&&p.recall);}
  for(const [,url] of [[c.source.name,c.source.url],...c.sources]){assert.match(url,/^https:/);assert.doesNotMatch(url,/github|\.json$/);}
 }
});
test('each new topic has eight scored original questions linked to taught sections with valid answer keys',()=>{
 assert.equal(curriculumQuestions.length,88);
 for(const id of curriculumBatches[0].topicIds){const qs=curriculumQuestions.filter(q=>q.topic===id);assert.equal(qs.length,8);assert.ok(new Set(qs.map(q=>q.chapterSegment)).size>=4);
  for(const q of qs){assert.equal(q.kind,'original');assert.equal(q.year,undefined);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.options[q.answer]);assert.equal(q.sourceSection,batch1Lessons[id].segments[q.chapterSegment].title);assert.ok(q.explanation.length>60);}
 }
});
test('new history questions exhaust without exact repetition and retain negative marking in persisted attempts',()=>{
 const bank=practiceBank().filter(q=>q.topic==='t-0-0'),history=[],now=Date.now(),selected=[];
 for(let n=0;n<2;n++){const next=choosePractice(bank,{count:5,history,now,uniqueFamilies:true,random:()=>.5});selected.push(...next);history.push(...next.map(q=>({id:q.id,at:now})));}
 assert.equal(selected.length,8);assert.equal(new Set(selected.map(q=>q.id)).size,8);assert.equal(choosePractice(bank,{history,now}).length,0);
 const items=selected.slice(0,3).map((q,i)=>({id:q.id,topic:q.topic,answer:q.answer,choice:i===0?q.answer:i===1?(q.answer+1)%4:null,kind:q.kind}));
 assert.equal(validPracticeItems(items,3),true);const score=practiceTotals(items);assert.equal(score.correct,1);assert.equal(score.wrong,1);assert.equal(score.attempted,2);assert.ok(Math.abs(score.score-2/3)<1e-9);
});
test('metadata corrections do not invent imported question texts, official keys or provenance',()=>{
 const index=JSON.parse(fs.readFileSync(new URL('../app/bhimboy-index.json',import.meta.url),'utf8'));
 assert.equal(index.questions.length,1460);for(const q of index.questions){assert.equal(q.text,undefined);assert.equal(q.answer,undefined);assert.equal(q.verified,false);}
 assert.equal(index.microtopics.find(m=>m.id==='MN-PII-HCOA-071').topic,null);
 assert.equal(index.microtopics.find(m=>m.id==='PRE-PI-HC-037').topic,'t-0-6');
 assert.ok(index.questions.some(q=>q.topics.includes('t-0-8')));
});
