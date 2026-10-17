import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {topics} from '../app/content.js';
import {practiceBank} from '../app/practice-bank.js';
import {selectDocuments,selectImportedQuestions,importedMaterialsHTML,loadCollection} from '../app/imported-materials.js';
const index=JSON.parse(fs.readFileSync('app/study-imports.json','utf8'));
test('new source inventory and every document hash match mirrored content with retained question provenance',()=>{
 assert.deepEqual(index.totals,{documents:238,questions:3834,missingAnswers:4,duplicates:8});
 const ids=new Set(),topicIds=new Set(topics.map(t=>t.id));let total=0,dup=0,missing=0;
 for(const d of index.documents){for(const t of d.appscTopics)assert.ok(topicIds.has(t),d.title);if(!d.dataPath){assert.equal(d.archiveOnly,true);assert.match(d.sourceURL,/^https:\/\/github.com\/utsingh\/upsc\/blob\/279b/);continue;}
 const raw=fs.readFileSync('app/'+d.dataPath);assert.equal(createHash('sha256').update(raw).digest('hex'),d.dataSha256);assert.equal(raw.toString(),fs.readFileSync('studio/public/'+d.dataPath,'utf8'));const data=JSON.parse(raw);total+=data.questions.length;
 for(const q of data.questions){assert.ok(!ids.has(q.id));ids.add(q.id);assert.equal(q.verified,false);assert.equal(q.reviewStatus,'unreviewed');assert.equal(q.sourceId,d.id);assert.ok(q.prompt.length>10);for(const t of q.appscTopics)assert.ok(topicIds.has(t));if(q.duplicateOf)dup++;if(!q.answer)missing++;if(q.page)assert.ok(q.page>=1&&q.page<=d.pages);}
 assert.equal(selectImportedQuestions(data,{limit:10000}).length,d.uniqueQuestionCount);
 }
 assert.equal(total,3834);assert.equal(dup,8);assert.equal(missing,4);assert.ok(practiceBank().every(q=>!ids.has(q.id)));assert.equal(fs.readFileSync('app/study-imports.json','utf8'),fs.readFileSync('studio/public/study-imports.json','utf8'));
});
test('collection filters and reader render escaped uploaded text and never execute MDX/HTML',()=>{
 const bank=selectDocuments(index,{collection:'Uploaded UPSC Markdown',query:'money'});assert.equal(bank.length,1);assert.ok(bank[0].appscTopics.includes('t-2-3'));
 assert.equal(selectDocuments(index,{collection:'Civils India'}).length,2);assert.equal(selectDocuments(index,{collection:'Utkarsh Singh UPSC archive'}).length,177);
 const html=importedMaterialsHTML(index,{query:'<script>alert(1)</script>'});assert.match(html,/No matching collections/);assert.doesNotMatch(html,/<script>/);
 const doc=bank[0],data=JSON.parse(fs.readFileSync('app/'+doc.dataPath));data.questions[0].prompt='<img src=x onerror=alert(1)> Fake';const rendered=importedMaterialsHTML(index,{selected:doc,data});assert.match(rendered,/&lt;img/);assert.doesNotMatch(rendered,/<img/);
});
test('lazy loader rejects unsafe paths, bad checksums and failed network reads',async()=>{
 await assert.rejects(()=>loadCollection(fetch,'../secret.json'),/Invalid/);
 await assert.rejects(()=>loadCollection(async()=>new Response('oops',{status:404}),'imports/a.json'),/could not load/);
 await assert.rejects(()=>loadCollection(async()=>Response.json({}),'imports/a.json','bad'),/checksum/);
 const text=JSON.stringify({questions:[],sections:[]}),hash=createHash('sha256').update(text).digest('hex');assert.deepEqual(await loadCollection(async()=>new Response(text),'imports/a.json',hash),{questions:[],sections:[]});
});
