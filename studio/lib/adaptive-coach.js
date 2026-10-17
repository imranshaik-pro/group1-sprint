import {choosePractice} from './study-engine.js';
/** Aim for 60% weakness work, then 20% overdue recall, filling shortages with eligible breadth. */
export function chooseCoachedPractice(bank,options={}){
 const count=options.count??10,weak=new Set(options.mistakes||[]),due=new Set(options.overdue||[]);if(!weak.size&&!due.size)return choosePractice(bank,options);
 const selected=[];const add=(pool,n)=>{if(n<=0)return;const ids=new Set(selected.map(q=>q.id)),families=new Set(selected.map(q=>q.familyId||q.parentId||q.id));const available=pool.filter(q=>!ids.has(q.id)&&(!options.uniqueFamilies||!families.has(q.familyId||q.parentId||q.id)));selected.push(...choosePractice(available,{...options,count:n}));};
 if(weak.size)add(bank.filter(q=>weak.has(q.topic)),Math.ceil(count*.6));
 if(due.size)add(bank.filter(q=>due.has(q.topic)),Math.min(count-selected.length,Math.ceil(count*.2)));
 add(bank,count-selected.length);return selected.slice(0,count);
}
