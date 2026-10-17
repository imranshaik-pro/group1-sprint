import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {releasedImports} from '../app/released-imports.js';
import {practiceBank} from '../app/practice-bank.js';
import {eligible,choosePractice} from '../app/study-engine.js';
import {topics} from '../app/content.js';
import {releasedLibraryHTML,selectReleased} from '../app/released-library.js';
test('only individually confirmed IDs are released, with immutable source lineage and complete taxonomy',()=>{
 const confirmed=fs.readdirSync('docs').filter(p=>/^QUESTION-REVIEW-BATCH-(?:01.*|02-PART0[12]-2026-10-17)\.json$/.test(p)).flatMap(p=>JSON.parse(fs.readFileSync('docs/'+p)).items).filter(q=>q.decision==='confirmed');
 const originals=new Map(fs.readdirSync('app/imports').flatMap(p=>JSON.parse(fs.readFileSync('app/imports/'+p)).questions).map(q=>[q.id,q]));
 assert.equal(releasedImports.length,230);assert.deepEqual(new Set(releasedImports.map(q=>q.id)),new Set(confirmed.map(q=>q.id)));
 for(const q of releasedImports){const t=topics.find(t=>t.id===q.topic);assert.ok(t);assert.equal(q.paper,t.paper);assert.ok(q.verification.evidence.length);const raw=originals.get(q.id);assert.equal(q.verification.sourceTextSha256,createHash('sha256').update(raw.prompt+'\n'+raw.answer).digest('hex'));assert.ok(q.text.length>20);assert.ok(q.options.every(o=>o.trim()));assert.doesNotMatch(q.options.join(' '),/\bCorrect\b/);for(const exam of ['APPSC Group-I','UPSC','Other PSC'])assert.ok(eligible(q,exam));}
 const bank=practiceBank();assert.equal(bank.length,new Set(bank.map(q=>q.id)).size);assert.equal(bank.length,1090);assert.equal(bank.length,new Set(bank.map(q=>q.text)).size);
 assert.equal(choosePractice(bank,{exam:'UPSC',count:1000}).length,383);
});
test('learners can filter, reveal checked solutions and start scored topic practice from both clients',()=>{
 const q=releasedImports.find(q=>q.topic==='t-1-3'),t=topics.find(t=>t.id===q.topic);
 const result=selectReleased({subject:t.subject,topic:t.id});assert.ok(result.some(r=>r.id===q.id));assert.ok(result.every(r=>r.topic===t.id));
 const html=releasedLibraryHTML({subject:t.subject,topic:t.id});assert.match(html,/Reveal verified answer and solution/);const escape=s=>s.replaceAll('&','&amp;').replaceAll("'",'&#39;');for(const text of [t.subject,t.title,q.explanation,q.source])assert.ok(html.includes(escape(text)));assert.ok(html.includes('data-reviewed-topic="'+t.id+'"'));
 assert.equal(selectReleased({subject:'Geography',topic:'t-1-3'}).length,0);assert.match(releasedLibraryHTML({query:'<script>no-match'}),/No questions match/);
 for(const name of ['released-imports.js','released-library.js','practice-bank.js','imported-materials.js'])assert.equal(fs.readFileSync('app/'+name,'utf8'),fs.readFileSync('studio/lib/'+name,'utf8'));
 assert.match(fs.readFileSync('app/sw.js','utf8'),/released-library\.js/);assert.match(fs.readFileSync('app/ui.js','utf8'),/releasedLibraryHTML\(releaseFilters\)/);assert.match(fs.readFileSync('studio/app/workspace.tsx','utf8'),/<ReleasedQuestions/);
});

