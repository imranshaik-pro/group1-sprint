import {pdfCatalogue} from './pdf-catalogue.js';
export const OFFLINE_CACHE='group1-offline-documents-v1';
const MAX_FILE=20*1024*1024,MAX_DOCUMENT=64*1024*1024;
const digest=async bytes=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(x=>x.toString(16).padStart(2,'0')).join('');
const stopped=signal=>{if(signal?.aborted)throw new DOMException('Download cancelled. Saved files are retained for resume.','AbortError');};
function documentById(id){const d=pdfCatalogue.documents.find(d=>d.id===id);if(!d)throw Error('Unknown published document.');return d;}
function absolute(path,base){const u=new URL(path,base),b=new URL(base);if(u.origin!==b.origin||u.search||u.hash||!u.pathname.startsWith(b.pathname))throw Error('Invalid offline asset path.');return u.href;}
function settings(options){const base=new URL('./',options.base||globalThis.location?.href||'https://study.invalid/').href;const storage=options.storage||globalThis.caches;if(!storage||!globalThis.crypto?.subtle)throw Error('Offline storage requires a supported browser on HTTPS.');return {base,storage,fetcher:options.fetcher||globalThis.fetch};}
async function checked(response,asset){
 if(!response?.ok||response.redirected||['opaque','opaqueredirect'].includes(response.type))throw Error('Material unavailable. Sign in online and retry.');
 const type=response.headers.get('content-type')||'';if(type.includes('text/html'))throw Error('Sign-in page received instead of study material.');
 const declared=Number(response.headers.get('content-length')||0);if(declared>MAX_FILE)throw Error('Material exceeds the offline file limit.');
 const bytes=await response.arrayBuffer();if(bytes.byteLength>MAX_FILE)throw Error('Material exceeds the offline file limit.');
 if(asset.hash&&await digest(bytes)!==asset.hash)throw Error('Offline checksum mismatch. Download the current copy again.');
 if(asset.kind==='image'&&!(new Uint8Array(bytes)[0]===255&&new Uint8Array(bytes)[1]===216))throw Error('Invalid source-page image.');
 return {bytes,response:new Response(bytes,{headers:{'Content-Type':asset.kind==='image'?'image/jpeg':asset.kind==='pdf'?'application/pdf':'application/json'}})};
}
function plan(d,data){
 if(data.id!==d.id||!Array.isArray(data.sections)||data.sections.length!==d.pages)throw Error('Invalid published document.');
 const assets=[{path:d.dataPath,kind:'json',hash:d.dataSha256}];
 for(const s of data.sections)if(s.image){if(!new RegExp('^pdf-scans/'+d.id+'/[1-9][0-9]*\\.jpg$').test(s.image))throw Error('Invalid offline page path.');assets.push({path:s.image,kind:'image'});}
 if(d.pdfPath){if(!/^materials\/[a-z0-9-]+\.pdf$/.test(d.pdfPath))throw Error('Invalid textbook path.');assets.push({path:d.pdfPath,kind:'pdf',hash:d.sourceSha256});}
 return [...new Map(assets.map(a=>[a.path,a])).values()];
}
async function cached(cache,url,asset){try{const r=await cache.match(url);return r?await checked(r,asset):null;}catch{return null;}}
/** Explicit, bounded downloads of published material; never cache accounts or API calls. */
export async function saveOfflineDocument(id,options={}){
 const d=documentById(id),{base,storage,fetcher}=settings(options),cache=await storage.open(OFFLINE_CACHE),signal=options.signal;
 stopped(signal);const first={path:d.dataPath,kind:'json',hash:d.dataSha256},url=absolute(first.path,base);
 let descriptor=await cached(cache,url,first);if(!descriptor)descriptor=await checked(await fetcher(url,{cache:'no-store',signal,credentials:'same-origin'}),first);
 stopped(signal);const assets=plan(d,JSON.parse(new TextDecoder().decode(descriptor.bytes)));let saved=0,bytes=0;
 for(const asset of assets){stopped(signal);const target=absolute(asset.path,base);let item=asset.path===d.dataPath?descriptor:await cached(cache,target,asset);if(!item)item=await checked(await fetcher(target,{cache:'no-store',signal,credentials:'same-origin'}),asset);stopped(signal);bytes+=item.bytes.byteLength;if(bytes>MAX_DOCUMENT)throw Error('Document exceeds the 64 MB offline limit. Saved files remain available.');try{await cache.put(target,item.response);}catch(e){if(e.name==='QuotaExceededError')throw Error('Browser storage is full. Remove an offline copy or free storage, then resume.');throw e;}saved++;options.onProgress?.({id,state:'saving',saved,total:assets.length,bytes});}
 const result={id,state:'ready',saved,total:assets.length,bytes,complete:true};options.onProgress?.(result);return result;
}
export async function offlineDocumentStatus(id,options={}){
 const d=documentById(id),{base,storage}=settings(options),cache=await storage.open(OFFLINE_CACHE),first={path:d.dataPath,kind:'json',hash:d.dataSha256};
 const descriptor=await cached(cache,absolute(first.path,base),first);if(!descriptor)return {id,state:'missing',saved:0,total:0,complete:false};
 const assets=plan(d,JSON.parse(new TextDecoder().decode(descriptor.bytes)));let saved=0,bytes=0;
 for(const asset of assets){const item=await cached(cache,absolute(asset.path,base),asset);if(item){saved++;bytes+=item.bytes.byteLength;}}
 return {id,state:saved===assets.length?'ready':'partial',saved,total:assets.length,bytes,complete:saved===assets.length};
}
export async function removeOfflineDocument(id,options={}){
 const d=documentById(id),{base,storage}=settings(options),cache=await storage.open(OFFLINE_CACHE);const descriptor=await cached(cache,absolute(d.dataPath,base),{hash:d.dataSha256});
 let paths=[d.dataPath,...(d.pdfPath?[d.pdfPath]:[])];if(descriptor)paths=plan(d,JSON.parse(new TextDecoder().decode(descriptor.bytes))).map(a=>a.path);
 else {const prefix=new URL('pdf-scans/'+d.id+'/',base).href;for(const key of await cache.keys())if(key.url.startsWith(prefix))paths.push(key.url);}
 for(const path of paths)await cache.delete(absolute(path,base));return {id,state:'missing',saved:0,total:0,complete:false};
}
/** Install the existing study shell so saved packs have an offline entry point. */
export async function prepareOfflineStudyApp(options={}){
 const {base}=settings(options);if(!globalThis.navigator?.serviceWorker)throw Error('This browser cannot prepare the offline study app.');
 const registration=await navigator.serviceWorker.register(new URL('sw.js',base).href);const worker=registration.installing||registration.waiting||registration.active;
 if(!worker)throw Error('Offline app installation did not start.');if(worker.state==='activated')return;
 await new Promise((resolve,reject)=>{const timer=setTimeout(()=>finish(Error('Offline app preparation timed out. Reconnect and retry.')),90000);const changed=()=>{if(worker.state==='activated')finish();else if(worker.state==='redundant')finish(Error('Offline app preparation failed. Reconnect and retry.'));};function finish(error){clearTimeout(timer);worker.removeEventListener('statechange',changed);error?reject(error):resolve();}worker.addEventListener('statechange',changed);changed();});
}
