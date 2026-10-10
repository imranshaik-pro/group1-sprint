import fs from 'node:fs';
fs.mkdirSync('app/vendor',{recursive:true});
// Legacy build includes typed-array/polyfill support needed on older Android engines.
for(const n of ['pdf.mjs','pdf.worker.mjs'])fs.copyFileSync('node_modules/pdfjs-dist/legacy/build/'+n,'app/vendor/'+n);
const assets=['./vendor/pdf.mjs','./vendor/pdf.worker.mjs','./vendor/cache-assets.js'];
for(const dir of ['standard_fonts','cmaps']){fs.cpSync('node_modules/pdfjs-dist/'+dir,'app/vendor/'+dir,{recursive:true});for(const name of fs.readdirSync('app/vendor/'+dir))assets.push('./vendor/'+dir+'/'+name)}
fs.copyFileSync('node_modules/pdfjs-dist/LICENSE','app/vendor/PDFJS-LICENSE');
fs.writeFileSync('app/vendor/cache-assets.js','self.PDF_ASSETS='+JSON.stringify(assets)+';\n');
console.log('Built compatible offline PDF.js worker, fonts and character maps; no runtime CDN required.');
