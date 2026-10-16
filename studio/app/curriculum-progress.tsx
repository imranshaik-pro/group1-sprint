'use client';
import {curriculumProgress} from '../lib/curriculum-progress.js';
export default function CurriculumProgress({openTopic}:{openTopic:(id:string)=>void}){
 const batches=curriculumProgress();
 const expanded=batches.flatMap(b=>b.topics).filter(t=>t.expanded).length;
 return <section className="panel curriculum-progress" aria-label="Six-batch curriculum progress"><span className="eyebrow">CHAPTERS AND PRACTICE, TOGETHER</span><h2>Six batches. One syllabus sequence.</h2><p>{expanded} of 65 topics have the new chapter edition. Each topic keeps its chapter and scored questions together.</p><p className="muted">Chapter editions cover their listed outline. This is progress through our study units, not certification that the entire official syllabus is complete.</p>{batches.map(b=><details key={b.id}><summary>Batch {b.id} · {b.topics.length} topics · {b.topics.filter(t=>t.expanded).length}/{b.topics.length} chapter editions available</summary><p>{b.title}</p><ul>{b.topics.map(t=><li key={t.id}><button className="text-button" onClick={()=>openTopic(t.id)}>{t.title}</button><span> — {t.expanded?'Chapter available':'Chapter expansion pending'} · {t.questions} scored questions</span></li>)}</ul></details>)}</section>;
}
