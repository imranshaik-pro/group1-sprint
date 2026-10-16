import {test} from 'node:test';
import assert from 'node:assert/strict';
import {topics} from '../app/content.js';
import {learningContent} from '../app/lesson-content.js';
import {validFlow,lessonSegmentCount} from '../app/learning-flow.js';
import {mergeEvents,reduce} from '../app/core.js';
test('every real chapter section survives flow, cursor, backup and reducer validation',()=>{
 for(const topic of topics){const size=learningContent(topic.id).segments.length;assert.equal(lessonSegmentCount(topic.id),size,topic.id);
  for(let segment=0;segment<size;segment++){const data={topic:topic.id,stage:'learn',segment,answers:['','',''],reviewed:false,reflection:'',practiceDone:false};assert.equal(validFlow(data),true,topic.id+' section '+segment);
   const common={v:1,device:'chapter-check',clock:1,at:'2026-10-16T18:00:00Z'};
   const flow={...common,id:'flow-'+topic.id+'-'+segment,type:'learning-flow',entity:topic.id,data};
   const cursor={...common,clock:2,id:'cursor-'+topic.id+'-'+segment,type:'cursor',entity:'current',data:{topic:topic.id,step:segment,stage:'learn'}};
   const state=reduce(mergeEvents(JSON.parse(JSON.stringify([flow,cursor]))));assert.equal(state.learningFlows[topic.id].segment,segment);assert.equal(state.cursor.step,segment);
  }
  assert.equal(validFlow({topic:topic.id,stage:'learn',segment:size,answers:['','',''],reviewed:false,reflection:''}),false,topic.id+' invalid end');
 }
});
test('unknown topics and out-of-chapter cursors remain rejected',()=>{
 assert.equal(lessonSegmentCount('t-6-9'),0);
 assert.equal(validFlow({topic:'t-6-9',stage:'learn',segment:0,answers:['','',''],reviewed:false,reflection:''}),false);
 const event={v:1,id:'invalid-cursor',device:'chapter-check',clock:1,at:'2026-10-16T18:00:00Z',type:'cursor',entity:'current',data:{topic:'t-2-0',step:5,stage:'learn'}};
 assert.throws(()=>mergeEvents([event]));
});

