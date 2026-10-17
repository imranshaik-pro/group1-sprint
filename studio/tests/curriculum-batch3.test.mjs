import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {batch3Lessons} from '../lib/curriculum-batch3.js';
import {batch3Questions} from '../lib/curriculum-batch3-questions.js';
import {curriculumBatches} from '../lib/curriculum-plan.js';
import {learningContent} from '../lib/lesson-content.js';
import {practiceBank} from '../lib/practice-bank.js';
import {curriculumProgress} from '../lib/curriculum-progress.js';
test('Batch 3 covers eleven stable IDs with forty-four complete bilingual teaching sections',()=>{
 assert.deepEqual(Object.keys(batch3Lessons),curriculumBatches[2].topicIds);
 let sections=0;for(const id of curriculumBatches[2].topicIds){const c=learningContent(id);assert.equal(c.batch,3);assert.equal(c.segments.length,4);sections+=c.segments.length;assert.deepEqual(c.outline,c.segments.map(x=>x.title));assert.equal(c.recall.length,3);assert.equal(c.references.length,3);assert.equal(c.summary.length,4);assert.ok(c.sources.length);
 for(const s of c.segments){assert.ok(s.text.length>400,s.title);assert.ok(s.te.length>150,s.title);for(const k of ['teTitle','example','teExample','trap','recall'])assert.ok(s[k].length>10,s.title+' '+k);}}
 assert.equal(sections,44);
});
test('88 original questions cover every new section with four distinct options and source-linked keys',()=>{
 assert.equal(batch3Questions.length,88);for(const id of curriculumBatches[2].topicIds){const c=batch3Lessons[id],qs=batch3Questions.filter(q=>q.topic===id);assert.equal(qs.length,8);for(let i=0;i<4;i++)assert.equal(qs.filter(q=>q.chapterSegment===i).length,2);
 for(const q of qs){assert.equal(q.kind,'original');assert.equal(q.year,undefined);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.options[q.answer]);assert.ok(q.explanation.length>60);assert.equal(q.sourceSection,c.segments[q.chapterSegment].title);assert.ok([c.source.url,...c.sources.map(s=>s[1])].includes(q.source));}}
 const bank=practiceBank();assert.equal(bank.length,977);assert.equal(new Set(bank.map(q=>q.id)).size,977);assert.equal(new Set(bank.map(q=>q.text)).size,977);
});
test('worked calculations and rotated answer keys match independent arithmetic',()=>{
 const cases=[['Total expenditure is',1000-700-50],['Fiscal deficit is',250-100],['fully eligible illustrative',180-100],['20% reserve fraction',100/.2],['farm harvests',24/8],['processor sells',500-300],['Thirty of 200',30/200*100],['For population 200',10/(90+10)*100]];
 for(const [stem,n] of cases){const q=batch3Questions.find(q=>q.text.includes(stem));assert.ok(q,stem);assert.equal(parseFloat(q.options[q.answer]),n,stem);}
 const find=s=>{const q=batch3Questions.find(q=>q.text.includes(s));assert.ok(q,s);return q.options[q.answer]};
 assert.equal(find('Debt stays at'),'20% to 25%');assert.equal(find('share rises from'),'Five percentage points and 25% relative growth');assert.equal(find('same population of 200'),'50% and 45%');assert.match(find('maximum aggregate cover'),/5 lakh/);
});
test('AP notes distinguish boundaries, estimate status and data observation dates; dynamic facts are dated',()=>{
 const ap=batch3Lessons['t-2-7'].segments.map(s=>s.text).join(' '),survey=batch3Lessons['t-2-8'].segments.map(s=>s.text).join(' ');
 for(const x of ['2014','Budget Estimate','Revised Estimate','actuals','constant-price'])assert.ok(ap.includes(x),x);
 for(const x of ['17 October 2026','2024–25','not a claim','observation year','percentage points'])assert.ok(survey.includes(x),x);
 assert.match(batch3Lessons['t-2-3'].segments[3].text,/17 October 2026/);
});
test('new content preserves broader progress and has identical website/mobile module bytes',()=>{
 const all=curriculumProgress().flatMap(b=>b.topics);assert.equal(all.filter(t=>t.expanded).length,55);assert.equal(all.filter(t=>t.questions>0).length,64);assert.equal(all.filter(t=>!t.questions).length,1);
 for(const file of ['curriculum-batch3.js','curriculum-batch3-questions.js','lesson-content.js','practice-bank.js','learning-flow.js'])assert.equal(fs.readFileSync(new URL('../lib/'+file,import.meta.url),'utf8'),fs.readFileSync(new URL('../public/sprint/'+file,import.meta.url),'utf8'));
 const sw=fs.readFileSync(new URL('../public/sprint/sw.js',import.meta.url),'utf8');for(const file of ['curriculum-batch3.js','curriculum-batch3-questions.js'])assert.ok(sw.includes("'./"+file+"'"));
});
