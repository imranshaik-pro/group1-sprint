import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validEvent} from '../lib/event-validation.ts';
import {latestFlow,canAdvance} from '../lib/learning-flow.js';
const data={topic:'t-1-1',stage:'recall',segment:2,answers:['A remedy enforces a right.','Equality differs from liberty.','Property is outside Part III.'],reviewed:true,reflection:'',practiceDone:false};
test('learning position and recall answers survive validated backup events',()=>{const e={id:'flow-1',at:new Date().toISOString(),type:'learning-flow',data};assert.equal(validEvent(e),true);assert.deepEqual(latestFlow(JSON.parse(JSON.stringify([e])),data.topic),data);assert.equal(latestFlow([e],'t-2-1').stage,'learn');});
test('recall cannot advance without three attempts and explicit review',()=>{assert.equal(canAdvance(data),true);assert.equal(canAdvance({...data,reviewed:false}),false);assert.equal(canAdvance({...data,answers:['','','']}),false);assert.equal(canAdvance({...data,stage:'practice',reflection:''}),false);});
test('sync refuses invalid stages, oversized recall and forged topic IDs',()=>{for(const change of [{stage:'admin'},{topic:'owner'},{answers:['x']},{segment:4},{answers:['x'.repeat(1501),'a','b']},{practiceDone:'yes'}])assert.equal(validEvent({id:'test',at:new Date().toISOString(),type:'learning-flow',data:{...data,...change}}),false);});
