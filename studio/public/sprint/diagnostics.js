import {BUILD_ID} from './product-core.js';
const KEY='group1-safe-diagnostics-v1';
const routeName=()=>{const name=location.hash.replace(/^#/,'').split(/[/?]/)[0];return /^[a-z-]{1,25}$/.test(name)?name:'unknown';};
export function diagnostics(){try{const a=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(a)?a.slice(-30):[];}catch{return [];}}
export function noteDiagnostic(error,kind='runtime'){const name=error instanceof TypeError?'TypeError':error instanceof RangeError?'RangeError':'Error';const row={build:BUILD_ID,at:new Date().toISOString(),route:routeName(),kind:['runtime','promise','storage','network'].includes(kind)?kind:'runtime',name};try{localStorage.setItem(KEY,JSON.stringify([...diagnostics(),row].slice(-30)));}catch{}return row;}
export function installDiagnostics(){if(globalThis.__group1Diagnostics)return;globalThis.__group1Diagnostics=true;window.addEventListener('error',e=>noteDiagnostic(e.error));window.addEventListener('unhandledrejection',e=>noteDiagnostic(e.reason,'promise'));}
export function clearDiagnostics(){try{localStorage.removeItem(KEY);}catch{}}
