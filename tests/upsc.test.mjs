import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {upscCatalogue as data} from '../app/upsc-resources.js';
import {upscLibrary} from '../app/upsc-library.js';
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
 const polity=upscLibrary(esc,{subject:'Polity',query:'education',limit:200});assert.match(polity,/National Education Policy/);assert.doesNotMatch(polity,/<span class="pill">Anthropology/);
 const missing=upscLibrary(esc,{query:'<script>alert("x")</script>'});assert.match(missing,/No matching resources/);assert.doesNotMatch(missing,/<script>/);
});
