import {topics} from './content.js';
import {curriculumBatches,batchForTopic} from './curriculum-plan.js';
import {learningContent} from './lesson-content.js';
import {practiceBank} from './practice-bank.js';
export function curriculumProgress(){
 const bank=practiceBank();
 return curriculumBatches.map(b=>({...b,topics:b.topicIds.map(id=>{
  const topic=topics.find(t=>t.id===id),lesson=learningContent(id),questions=bank.filter(q=>q.topic===id).length;
  if(!topic||!lesson)throw new Error('Unknown topic in curriculum batch: '+id);
  return {...topic,batch:batchForTopic(id),expanded:lesson.level==='Expanded chapter',segments:lesson.segments.length,questions};
 })}));
}
export function topicEdition(id){const c=learningContent(id);return c.batch?'Batch '+c.batch+' · '+c.segments.length+' bilingual sections · scored practice':c.level==='Short foundation'?'Short foundation · expansion pending':c.level;}
