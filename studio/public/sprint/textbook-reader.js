import {pdfDocuments} from './pdf-library.js';
const status=document.querySelector('#status'),button=document.querySelector('#zoom'),canvas=document.querySelector('#canvas');
try{
 const params=new URLSearchParams(location.search),doc=pdfDocuments.find(d=>d.id===params.get('id')&&d.materialType==='textbooks');
 if(!doc||!/^materials\/[a-z0-9-]+\.pdf$/.test(doc.pdfPath))throw Error('Unknown textbook. Return to Notes & Textbooks.');
 const number=Math.min(doc.pages,Math.max(1,Math.floor(Number(params.get('page'))||1)));
 const lib=await import('./vendor/pdf.mjs');lib.GlobalWorkerOptions.workerSrc='./vendor/pdf.worker.mjs';
 const response=await fetch('./'+doc.pdfPath);if(!response.ok)throw Error('Connect online to open this textbook page.');const bytes=await response.arrayBuffer();
 const hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(n=>n.toString(16).padStart(2,'0')).join('');if(hash!==doc.sourceSha256)throw Error('Textbook checksum mismatch. Refresh and retry.');
 const pdf=await lib.getDocument({data:new Uint8Array(bytes),isEvalSupported:false,standardFontDataUrl:'./vendor/standard_fonts/',cMapUrl:'./vendor/cmaps/',cMapPacked:true}).promise;
 const page=await pdf.getPage(number),viewport=page.getViewport({scale:1.5});canvas.width=viewport.width;canvas.height=viewport.height;await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;
 status.textContent=doc.title+' · Page '+number+' of '+doc.pages;button.hidden=false;let enlarged=false;button.onclick=()=>{enlarged=!enlarged;canvas.style.maxWidth=enlarged?'none':'100%';button.textContent=enlarged?'Fit page':'Enlarge page';};
}catch(e){status.textContent=e.message||'Unable to load this page. Return to Notes & Textbooks.';}
