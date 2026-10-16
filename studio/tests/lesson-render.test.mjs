import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';
import {topics} from '../lib/content.js';
const require=createRequire(new URL('../package.json',import.meta.url));
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),ts=require('typescript');
test('the real lesson component renders every topic with in-app teaching text',async()=>{
 const tmp=await fs.mkdtemp(path.join(os.tmpdir(),'appsc-lesson-render-'));
 try{const source=await fs.readFile(new URL('../app/learning-journey.tsx',import.meta.url),'utf8');let code=ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
 code=code.replaceAll('"react/jsx-runtime"',JSON.stringify(pathToFileURL(require.resolve('react/jsx-runtime')).href)).replaceAll("from 'react'",'from '+JSON.stringify(pathToFileURL(require.resolve('react')).href));
 code=code.replace(/from '((?:\.\.\/lib\/)[^']+)'/g,(_,relative)=>'from '+JSON.stringify(new URL(relative,new URL('../app/learning-journey.tsx',import.meta.url)).href));
 const file=path.join(tmp,'component.mjs');await fs.writeFile(file,code);const {default:Journey}=await import(pathToFileURL(file).href);
 for(const topic of topics){const html=renderToStaticMarkup(React.createElement(Journey,{topic,events:[],notes:'',save:()=>true,revise:()=>{}}));assert.match(html,/journey-reading/,topic.id);assert.doesNotMatch(html,/not available here yet/,topic.id);assert.ok(html.length>1500,topic.id);if(topic.id==='t-5-0')assert.match(html,/చలనం/);}
 }finally{await fs.rm(tmp,{recursive:true,force:true});}
});
