import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const luminance=(hex:string)=>{const v=hex.replace('#','').match(/../g)!.map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722;};
test('actual CSS reading text tokens exceed 4.5 contrast in each appearance',()=>{const css=readFileSync(new URL('../app/globals.css',import.meta.url),'utf8');const blocks=css.match(/\.app(?:\[data-reading-theme=(?:sepia|dark)\])?\{--reading-canvas:[^}]+\}/g)!;assert.equal(blocks.length,3);for(const block of blocks){const value=(name:string)=>block.match(new RegExp('--reading-'+name+':(#[a-f0-9]{6})'))![1];for(const name of ['ink','muted']){const a=luminance(value(name)),b=luminance(value('surface'));assert.ok((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5);}}});
