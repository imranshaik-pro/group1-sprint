import {build} from 'esbuild';import fs from 'node:fs';
const source=fs.existsSync('studio/app/workspace.tsx')?'studio':'.',dest='.qa-website';fs.mkdirSync(dest,{recursive:true});
fs.cpSync(source+'/public',dest,{recursive:true});
fs.writeFileSync(dest+'/website.css',fs.readFileSync(source+'/app/globals.css','utf8').replace(/^@import[^;]+;/gm,''));
fs.writeFileSync(dest+'/index.html','<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/website.css"></head><body><div id="root"></div><script type="module" src="/website.js"></script></body></html>');
await build({entryPoints:[source+'/tests/fixtures/website-navigation.entry.tsx'],outfile:dest+'/website.js',bundle:true,format:'esm',platform:'browser',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
