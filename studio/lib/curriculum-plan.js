import {topics} from './content.js';

// One shared sequence: a topic's chapter and its scored questions travel together.
// Stable topic IDs retain existing learner notes, scores and revision history.
export const curriculumBatches = Array.from({length:6},(_,i)=>({
 id:i+1,
 title:['History & constitutional foundations','Rights, government & economic foundations','Economy & physical geography','Geography & quantitative foundations','Reasoning & science foundations','Technology & current affairs'][i],
 topicIds:topics.slice(i*11,i===5?65:(i+1)*11).map(t=>t.id)
}));
export const batchForTopic=id=>curriculumBatches.find(b=>b.topicIds.includes(id))?.id;
export const chapterRequirements=['Explicit subtopic outline','Original English explanation and Telugu teaching','Worked examples and distinctions','Exam traps and active recall','Revision summary','Topic-mapped scored questions with answer explanations','Source and answer review','Website and mobile app publication'];
