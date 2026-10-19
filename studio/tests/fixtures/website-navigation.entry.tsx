import React from 'react';import {createRoot} from 'react-dom/client';
import Workspace from '../../app/workspace';import {topics} from '../../lib/content.js';import {practiceBank} from '../../lib/practice-bank.js';import {learningContent} from '../../lib/lesson-content.js';
const mode=new URLSearchParams(location.search).get('mode')||'guest';
(window as any).__qa={bank:()=>practiceBank().map(q=>({id:q.id,family:q.familyId})),topics,lessons:Object.fromEntries(topics.map(t=>[t.id,learningContent(t.id)]))};
const user=mode==='guest'?null:{id:'qa-'+mode,name:'Navigation test',email:'navigation@example.test'};
createRoot(document.getElementById('root')!).render(<Workspace user={user}/>);
