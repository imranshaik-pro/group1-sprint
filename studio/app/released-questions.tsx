'use client';
import {useState} from 'react';
import {releasedLibraryHTML} from '../lib/released-library.js';
export default function ReleasedQuestions({onPractise}:{onPractise:(topic:string)=>void}){
 const [filters,setFilters]=useState({subject:'',topic:'',query:'',limit:10});
 return <div onChange={event=>{const el=event.target as HTMLInputElement;const key=el.dataset.releaseFilter;if(key&&['subject','topic','query'].includes(key))setFilters(f=>({...f,[key]:el.value,...(key==='subject'?{topic:''}:{}),limit:10}));}} onClick={event=>{const target=(event.target as HTMLElement).closest<HTMLElement>('[data-reviewed-topic],[data-release-more]');if(target?.dataset.reviewedTopic)onPractise(target.dataset.reviewedTopic);else if(target?.hasAttribute('data-release-more'))setFilters(f=>({...f,limit:f.limit+10}));}} dangerouslySetInnerHTML={{__html:releasedLibraryHTML(filters)}}/>;
}
