import {test} from 'node:test';
import assert from 'node:assert/strict';
// Minimal storage/document adapters exercise the actual module startup without a browser.
test('app startup renders its dashboard with the complete module graph',async()=>{
 const stores=new Map();const node={innerHTML:'',textContent:'',classList:{add(){},remove(){}}};const listeners=new Map();
 globalThis.location={origin:'http://localhost',hostname:'localhost',pathname:'/',hash:'',href:'http://localhost/'};
 globalThis.history={state:null,replaceState(v){this.state=v;}};
 globalThis.window={addEventListener(name,cb){listeners.set(name,cb)}};
 globalThis.document={querySelector:q=>q==='#app'?node:null,querySelectorAll:()=>[],addEventListener(){}};
 globalThis.BroadcastChannel=class{addEventListener(){}postMessage(){}close(){}};
 globalThis.fetch=async()=>Response.json({microtopics:[],questions:[]});
 globalThis.indexedDB={open(){const r={result:{createObjectStore(name){stores.set(name,new Map())},transaction(name){const tx={objectStore(){return {get(key){const req={};setTimeout(()=>{req.result=stores.get(name)?.get(key);req.onsuccess?.();},0);return req;},getAll(){const req={};setTimeout(()=>{req.result=[...(stores.get(name)?.values()||[])];req.onsuccess?.();},0);return req;},put(value,key){stores.get(name).set(key||value.id,value);setTimeout(()=>tx.oncomplete?.(),0);}}}};return tx;}}};setTimeout(()=>{r.onupgradeneeded?.();r.onsuccess?.();},0);return r;}};
 const interval=globalThis.setInterval;globalThis.setInterval=()=>({unref(){}});
 try{await import('../app/ui.js');await new Promise(r=>setTimeout(r,60));assert.match(node.innerHTML,/Make today count, Aspirant/);assert.doesNotMatch(node.innerHTML,/Workspace could not open/);
 for(const route of ['today','plan','library','upsc','catalogue','learn/t-5-0','revisions','practice','ledger','papers','current','insights','tutor','settings']){location.hash='#'+route;listeners.get('hashchange')();assert.match(node.innerHTML,/<h1>/,route);assert.doesNotMatch(node.innerHTML,/Workspace could not open/,route);if(route==='tutor')assert.match(node.innerHTML,/id="tutorform"/);if(route==='library')assert.match(node.innerHTML,/topiccard/);if(route==='plan')assert.match(node.innerHTML,/id="planform"/);}
 const {topics}=await import('../app/content.js');for(const topic of topics){location.hash='#learn/'+topic.id;listeners.get('hashchange')();assert.ok(node.innerHTML.includes(topic.title.replaceAll('&','&amp;')),topic.id);assert.match(node.innerHTML,/learningjourney/,topic.id);if(topic.id.startsWith('t-0-')||topic.id==='t-1-0'){assert.match(node.innerHTML,/Chapter outline/,topic.id);assert.match(node.innerHTML,/Revision summary/,topic.id);assert.match(node.innerHTML,/Sources for further study/,topic.id);assert.doesNotMatch(node.innerHTML,/A foundation to build on/,topic.id);}}
 location.hash='#catalogue';listeners.get('hashchange')();assert.ok(!node.innerHTML.includes('Open source file'));
 }finally{globalThis.setInterval=interval;}
});

