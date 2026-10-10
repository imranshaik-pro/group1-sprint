import fs from 'node:fs';
fs.mkdirSync('app/vendor',{recursive:true});for(const n of ['pdf.mjs','pdf.worker.mjs'])fs.copyFileSync('node_modules/pdfjs-dist/build/'+n,'app/vendor/'+n);fs.copyFileSync('node_modules/pdfjs-dist/LICENSE','app/vendor/PDFJS-LICENSE');console.log('Built local PDF.js worker and module; no runtime CDN required.');
