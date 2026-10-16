import fs from 'node:fs';
import {topics} from '../app/content.js';
import {learningContent} from '../app/lesson-content.js';
import {practiceBank} from '../app/practice-bank.js';
import {curriculumBatches,chapterRequirements} from '../app/curriculum-plan.js';

const file='app/bhimboy-index.json',index=JSON.parse(fs.readFileSync(file,'utf8'));
const corrected=new Map();
function link(prefix,nums,topic){for(const n of nums)corrected.set(prefix+String(n).padStart(3,'0'),topic);}
link('PRE-PI-HC-',[9],'t-0-3');
link('PRE-PI-HC-',[23,25,26,27,28,29],'t-0-5');
link('PRE-PI-HC-',[24],'t-0-4');
link('PRE-PI-HC-',[37,38],'t-0-6');
link('PRE-PI-HC-',[39,41,42,43],'t-0-7');
link('PRE-PI-HC-',[44,45,46,47,48,129,130],'t-0-8');
link('PRE-PI-HC-',[49],'t-1-0');
link('PRE-PI-HC-',[50],'t-0-9');
link('MN-PII-HCOI-',[18],'t-0-6');
link('MN-PII-HCOI-',[21,22],'t-0-5');
link('MN-PII-HCOI-',[23,24,27,28,29,31,97],'t-0-7');
link('MN-PII-HCOI-',[32,33,34,35,37,38,39,40,41,94,95,96],'t-0-8');
link('MN-PII-HCOI-',[36],'t-1-0');
link('MN-PII-HCOI-',[42],'t-0-9');
link('MN-PII-HCOA-',[45],'t-0-4');
link('MN-PII-HCOA-',[47],'t-0-5');
link('MN-PII-HCOA-',[48,50,54,59,60,61,63,65,66,68],'t-0-9');
link('MN-PII-HCOA-',[55,56,57,58],'t-0-7');
// Do not guess a replacement for an economic/reorganisation item put under Indus.
link('MN-PII-HCOA-',[71],null);
link('PRE-PI-PSJI-',[53],'t-1-1');
link('PRE-PI-PSJI-',[54,55],'t-1-2');
link('PRE-PI-PSJI-',[62],'t-1-7');
link('MN-PIII-PC-',[2,3,5],'t-1-6');
link('MN-PIII-PC-',[4],'t-1-5');
link('MN-PIII-PC-',[6],'t-1-6');
link('MN-PIII-PC-',[7],'t-1-7');
link('MN-PIII-PC-',[8,9],'t-1-3');
link('MN-PIII-PC-',[10,12],'t-1-4');
const changes=[];
for(const m of index.microtopics){if(corrected.has(m.id)&&m.topic!==corrected.get(m.id)){
 changes.push({id:m.id,title:m.title,from:m.topic,to:corrected.get(m.id)});
 m.previousTopic=m.topic;m.topic=corrected.get(m.id);m.mapping=m.topic?'editorial-topic-link; scope-review-pending':'unassigned; review required';
}}
const byId=new Map(index.microtopics.map(m=>[m.id,m]));let questionLinksChanged=0;
for(const q of index.questions){const next=[...new Set(q.microthemes.map(id=>byId.get(id)?.topic).filter(Boolean))];
 if(JSON.stringify(next)!==JSON.stringify(q.topics)){q.previousTopics=q.topics;q.topics=next;q.mapping='editorial-topic-link; official-paper-and-key-pending';questionLinksChanged++;}
}
index.mappingAudit={date:'2026-10-16',method:'Explicit topic-ID corrections from microtopic titles, not question-text validation',verifiedPYQs:0};
for(const target of [file,'studio/public/reference/bhimboy-index.json'])fs.writeFileSync(target,JSON.stringify(index));
const allCorrections=index.microtopics.filter(m=>Object.prototype.hasOwnProperty.call(m,'previousTopic')).map(m=>({id:m.id,title:m.title,from:m.previousTopic,to:m.topic}));
const relinkedTotal=index.questions.filter(q=>q.previousTopics).length;
const bank=practiceBank(),coverage=topics.map(t=>{const c=learningContent(t.id);return {...t,level:c.level,segments:c.segments.length,questions:bank.filter(q=>q.topic===t.id).length,chapterEdition:c.edition||null,chapterOutline:c.outline||[],fullChapterReviewed:false};});
fs.writeFileSync('docs/CONTENT_COVERAGE.json',JSON.stringify({date:'2026-10-16',scope:'65 existing study units; expanded chapter editions are not certification of full official syllabus coverage',topics:coverage},null,2)+'\n');
fs.mkdirSync('docs',{recursive:true});
fs.writeFileSync('docs/CURRICULUM_PLAN.json',JSON.stringify({date:'2026-10-16',scope:'Current 65-topic layout, one combined chapter-and-practice track',requirements:chapterRequirements,batches:curriculumBatches.map(b=>({...b,status:b.id===1?'chapter-edition-authored-and-tested':'not-started',topics:coverage.filter(t=>b.topicIds.includes(t.id))}))},null,2)+'\n');
fs.writeFileSync('docs/REFERENCE_AUDIT_2026-10-16.json',JSON.stringify({date:'2026-10-16',origin:index.origin,sourceCommit:index.commit,referenceRecords:index.questions.length,microtopics:index.microtopics.length,recordsWithQuestionText:index.questions.filter(q=>q.text).length,recordsWithAnswerKey:index.questions.filter(q=>q.answer!==undefined).length,usableBundledImportedMCQs:0,approvedAsOfficialPYQ:0,reason:'Imported index is metadata-only; original source and official answer verification are not established. No absent distractors or answer keys are invented.',questionLinksChanged:relinkedTotal,microtopicCorrections:allCorrections,pending:'Question-by-question official-paper/key checks, content permissions and complete current official syllabus reconciliation remain pending.'},null,2)+'\n');
console.log(JSON.stringify({topics:coverage.length,expandedChapterEditions:coverage.filter(t=>t.chapterEdition).length,scoredTopics:coverage.filter(t=>t.questions).length,questions:bank.length,referenceRecords:index.questions.length,mappingCorrections:changes.length,questionLinksChanged}));
