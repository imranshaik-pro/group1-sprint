import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {upscCatalogue as data} from '../app/upsc-resources.js';
import {upscLibrary} from '../app/upsc-library.js';
import {topics} from '../app/content.js';
import {practiceBank} from '../app/practice-bank.js';
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
test('UPSC import retains source identity, safe URLs and unreviewed status without entering practice',()=>{
 assert.equal(data.resources.length,183);assert.equal(data.resources.filter(r=>r.text).length,141);
 assert.equal(new Set(data.resources.map(r=>r.id)).size,183);
 assert.equal(new Set(data.resources.map(r=>r.subject)).size,22);
 for(const r of data.resources){assert.equal(r.reviewStatus,'unreviewed');assert.ok(r.url.startsWith(data.source+'/blob/'+data.revision+'/'));assert.ok(!r.path.includes('..'));for(const url of r.links){assert.equal(new URL(url).protocol,'https:');}}
 assert.ok(practiceBank().every(q=>!q.id.startsWith('upsc-')));
 assert.equal(fs.readFileSync('app/upsc-resources.js','utf8'),fs.readFileSync('studio/lib/upsc-resources.js','utf8'));
});
test('UPSC search filters notes and subject together, handles empty results and escapes user text',()=>{
 const all=upscLibrary(esc);assert.match(all,/183 resources found/);assert.match(all,/showing 20/);assert.match(all,/Show more resources/);
 const polity=upscLibrary(esc,{subject:'Polity & Governance',query:'education',limit:200});assert.match(polity,/National Education Policy/);assert.doesNotMatch(polity,/<span class="pill">Anthropology/);
 const missing=upscLibrary(esc,{query:'<script>alert("x")</script>'});assert.match(missing,/No matching resources/);assert.doesNotMatch(missing,/<script>/);
});

test('question extraction preserves numbered statements and separates models from unverified PYQ claims',()=>{
 assert.equal(data.questions.length,21);assert.equal(new Set(data.questions.map(q=>q.id)).size,21);
 assert.equal(data.questions.filter(q=>q.stage==='Prelims').length,10);
 assert.equal(data.questions.filter(q=>q.stage==='Mains').length,11);
 assert.ok(data.questions.every(q=>q.answer.length>40&&!q.verified&&q.reviewStatus==='unreviewed'));
 const jain=data.questions.find(q=>q.stage==='Prelims'&&q.number===4);assert.match(jain.prompt,/1\. The surest/);assert.match(jain.prompt,/3\. Karma/);assert.match(jain.answer,/1, 2 and 3/);
 const bhakti=data.questions.find(q=>q.stage==='Prelims'&&q.number===10);assert.deepEqual(bhakti.appscTopics,['t-0-6']);
 const maps=new Set(topics.map(t=>t.id));for(const r of [...data.resources,...data.questions])for(const id of r.appscTopics)assert.ok(maps.has(id));
 const prelim=upscLibrary(esc,{mode:'questions',stage:'Prelims',topic:'t-0-2',limit:50});assert.match(prelim,/9 questions found/);assert.match(prelim,/Reveal imported answer/);assert.doesNotMatch(prelim,/Model question/);
 assert.ok(data.resources.flatMap(r=>r.links).some(url=>url.endsWith('UPSC_Syllabus(Pre_Mains)_2025.pdf')));
});
