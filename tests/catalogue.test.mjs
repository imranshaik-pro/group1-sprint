import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('external reference catalogue stays separate from scored questions',()=>{const c=JSON.parse(readFileSync(new URL('../app/bhimboy-index.json',import.meta.url),'utf8'));assert.equal(c.questions.length,1460);assert.equal(c.microtopics.length,469);assert.equal(new Set(c.questions.map(q=>q.id)).size,1460);for(const q of c.questions){assert.equal(q.text,undefined);assert.equal(q.answer,undefined);assert.equal(q.verified,false);assert.ok(['Prelims','Mains'].includes(q.stage));}});
