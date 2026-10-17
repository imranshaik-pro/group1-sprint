import {batch5Lessons} from './curriculum-batch5.js';
import {batch4Lessons} from './curriculum-batch4.js';
import {batch3Lessons} from './curriculum-batch3.js';
import {guideFor} from './guides.js';
import {lesson} from './content.js';
import {teluguSegments,recallPrompts,recallReferences} from './learning-flow.js';
import {topicExample} from './topic-examples.js';
import {physicsLesson} from './physics-lesson.js';
import {batch1Lessons} from './curriculum-batch1.js';
import {batch2Lessons} from './curriculum-batch2.js';
/** @returns {{topic:string,level:string,batch?:number,edition?:string,outline?:string[],summary?:string[],source:{name:string,url:string},sources:string[][],segments:Array<{title:string,text:string,example:string,trap:string,recall:string,teTitle?:string,te?:string,teExample?:string}>,recall:string[],references:string[]}|null} */
export function learningContent(id){
 const guide=guideFor(id);if(!guide)return null;const example=topicExample(id);
 if(batch5Lessons[id])return batch5Lessons[id];
 if(batch4Lessons[id])return batch4Lessons[id];
 if(batch3Lessons[id])return batch3Lessons[id];
 if(batch2Lessons[id])return batch2Lessons[id];
 if(batch1Lessons[id])return batch1Lessons[id];
 if(id==='t-5-0')return physicsLesson;
 if(id==='t-1-1')return {topic:id,level:'Guided foundation',source:{name:'Constitution of India, Part III',url:lesson.source},sources:[],segments:lesson.steps.map((s,i)=>({title:s.heading,text:s.text,teTitle:teluguSegments[i].title,te:teluguSegments[i].text,example:s.recall,teExample:teluguSegments[i].example,trap:i===2?'Property is outside Part III. Equality and freedom are separate article groups.':'Read the scope and exceptions of each article.',recall:s.recall})),recall:recallPrompts,references:recallReferences};
 return {topic:id,level:'Short foundation',source:guide.source,sources:[],segments:[{title:guide.title,text:guide.core,example:example?.[0]||guide.example,trap:example?.[1]||guide.status,recall:guide.recall}],recall:[guide.recall,'Give an example and explain the cause or mechanism.','Name a confusing pair and explain the distinction.'],references:[guide.core,example?.[0]||guide.example,example?.[1]||guide.recall]};
}

