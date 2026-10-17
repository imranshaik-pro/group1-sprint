import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {curriculumBatches} from '../lib/curriculum-plan.js';
import {batch2Lessons} from '../lib/curriculum-batch2.js';
import {batch2Questions} from '../lib/curriculum-batch2-questions.js';
import {learningContent} from '../lib/lesson-content.js';
import {practiceBank} from '../lib/practice-bank.js';
import {choosePractice,practiceTotals,validPracticeItems} from '../lib/study-engine.js';
import {curriculumProgress} from '../lib/curriculum-progress.js';

test('Batch 2 covers its eleven stable IDs with fifty bilingual sections and explicit learning support',()=>{
 assert.deepEqual(Object.keys(batch2Lessons),curriculumBatches[1].topicIds);
 assert.equal(Object.values(batch2Lessons).reduce((n,c)=>n+c.segments.length,0),50);
 for(const id of curriculumBatches[1].topicIds){const c=learningContent(id);assert.equal(c.batch,2);assert.ok(c.segments.length>=4);assert.deepEqual(c.outline,c.segments.map(s=>s.title));assert.equal(c.recall.length,3);assert.equal(c.references.length,3);assert.ok(c.summary.length>=4);
 for(const p of c.segments){assert.ok(p.text.length>300,id);assert.match(p.te,/[\u0c00-\u0c7f]/);assert.ok(p.te.length>150,id);assert.ok(p.teExample&&p.teTitle&&p.example&&p.trap&&p.recall);}}
});
test('ninety-two new original questions are topic/section mapped, unique and not promoted to PYQs',()=>{
 assert.equal(batch2Questions.length,92);const bank=practiceBank();assert.equal(bank.length,1057);assert.equal(new Set(bank.map(q=>q.id)).size,1057);assert.equal(new Set(bank.map(q=>q.text)).size,1057);
 for(const id of curriculumBatches[1].topicIds){const qs=batch2Questions.filter(q=>q.topic===id);assert.equal(qs.length,id==='t-1-1'?12:8);assert.ok(new Set(qs.map(q=>q.chapterSegment)).size>=4);for(const q of qs){assert.equal(q.kind,'original');assert.equal(q.year,undefined);assert.equal(new Set(q.options).size,4);assert.ok(q.options[q.answer]);assert.ok(q.explanation.length>60);assert.equal(q.sourceSection,batch2Lessons[id].segments[q.chapterSegment].title);const c=batch2Lessons[id];assert.ok([c.source.url,...c.sources.map(s=>s[1])].includes(q.source));}}
});
test('rights teaching distinguishes enabling clauses, beneficiary scope and emergency exceptions',()=>{
 const c=learningContent('t-1-1');assert.equal(c.segments.length,8);const text=c.segments.map(s=>s.text).join(' ');
 for(const phrase of ['Clause (3)','Clause (4)','Clause (5)','Clause (6)','descent and residence','twenty-four hours','Articles 20 and 21','Article 300A'])assert.ok(text.includes(phrase),phrase);
 assert.match(c.segments[2].text,/does not require that a woman also belong to a backward class/);
 const find=part=>batch2Questions.find(q=>q.text.includes(part));
 assert.equal(find('Which grounds').options[find('Which grounds').answer],'Descent and residence');
 assert.equal(find('Article 16(3)').options[find('Article 16(3)').answer],'Parliament');
 assert.equal(find('Article 359').options[find('Article 359').answer],'Articles 20 and 21');
});
test('worked economy answers match independent arithmetic and the correct percentage base',()=>{
 const cases=[['A mill buys',160-100,'₹'],['GVA at basic',900+120-20,''],['nominal GDP is',120/100*100,''],['With C=60',60+20+15+10-5,''],['An index rises from 125',(130-125)/125*100,'']];
 for(const [stem,value,prefix] of cases){const q=batch2Questions.find(q=>q.text.includes(stem));assert.ok(q,stem);assert.equal(parseFloat(q.options[q.answer].replace(prefix,'').replace(',','')),value);}
});
test('new-topic practice records scoring and exact-repeat exclusion through exhaustion',()=>{
 const bank=practiceBank().filter(q=>q.topic==='t-2-0'),history=[],seen=[];const now=Date.now();
 for(let i=0;i<2;i++){const set=choosePractice(bank,{count:5,now,history,uniqueFamilies:true});seen.push(...set);history.push(...set.map(q=>({id:q.id,at:now})));}
 assert.equal(seen.length,8);assert.equal(new Set(seen.map(q=>q.id)).size,8);assert.equal(choosePractice(bank,{history,now}).length,0);
 const items=seen.slice(0,3).map((q,i)=>({id:q.id,topic:q.topic,answer:q.answer,choice:i===0?q.answer:i===1?(q.answer+1)%4:null,kind:q.kind}));assert.ok(validPracticeItems(items,3));const total=practiceTotals(items);assert.equal(total.correct,1);assert.equal(total.wrong,1);assert.equal(total.attempted,2);assert.ok(Math.abs(total.score-2/3)<1e-9);
});
test('progress counts chapter editions separately from question coverage',()=>{
 const all=curriculumProgress().flatMap(b=>b.topics);assert.equal(all.filter(t=>t.expanded).length,65);assert.equal(all.filter(t=>t.questions>0).length,65);assert.equal(all.filter(t=>!t.questions).length,0);assert.equal(all.length,65);
});
test('Batch 2 module bytes and offline assets are shared by website and mobile',()=>{
 for(const name of ['curriculum-batch2.js','curriculum-batch2-questions.js','lesson-content.js','practice-bank.js'])assert.equal(fs.readFileSync(new URL('../lib/'+name,import.meta.url),'utf8'),fs.readFileSync(new URL('../public/sprint/'+name,import.meta.url),'utf8'));
 const sw=fs.readFileSync(new URL('../public/sprint/sw.js',import.meta.url),'utf8');for(const name of ['curriculum-batch2.js','curriculum-batch2-questions.js'])assert.ok(sw.includes("'./"+name+"'"));
});
test('economic lessons avoid undated current policy-rate claims and keep their series update dated',()=>{
 const income=learningContent('t-2-0').segments.at(-1).text;assert.match(income,/31 August 2026/);assert.match(income,/2022–23/);
 const policy=learningContent('t-2-1').segments.map(p=>p.text).join(' ');assert.match(policy,/rather than quote current settings/);assert.doesNotMatch(policy,/current repo rate is [0-9]/i);
});

