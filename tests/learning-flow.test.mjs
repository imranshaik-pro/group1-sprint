import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mergeEvents,reduce} from '../app/core.js';
const data={topic:'t-1-1',stage:'recall',segment:1,answers:['A remedy enforces a right.','Equality differs from liberty.','Property is outside Part III.'],reviewed:true,reflection:''};
const e={v:1,id:'learning-event',device:'phone',clock:1,at:new Date().toISOString(),type:'learning-flow',entity:'t-1-1',data};
test('device sync and event backup retain the guided learning stage and recall',()=>{assert.deepEqual(reduce(mergeEvents([e],JSON.parse(JSON.stringify([e])))).learningFlows['t-1-1'],data);});
test('malformed guided learning stages are rejected before import',()=>{assert.throws(()=>mergeEvents([],[{...e,data:{...data,stage:'admin'}}]));});
