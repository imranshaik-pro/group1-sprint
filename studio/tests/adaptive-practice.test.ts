import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validEvent} from '../lib/event-validation.ts';
import {choosePractice} from '../lib/study-engine.js';
import {reviewedVariants} from '../lib/reviewed-variants.js';
const event=(type:string,data:Record<string,unknown>)=>({id:'test-reading',type,at:new Date().toISOString(),data});
test('reading preferences remain bounded and sync/backup compatible',()=>{assert.equal(validEvent(event('reading-preferences',{theme:'dark',font:20,spacing:1.9,focus:true,motion:true})),true);assert.equal(validEvent(event('reading-preferences',{theme:'dark',font:60,spacing:1.9,focus:true,motion:true})),false);});
test('answer history must agree with aggregate scores and cannot repeat IDs',()=>{const items=[{id:'gma-1',topic:'t-4-1',choice:1,answer:2,kind:'original'}];const d={items,total:1,attempted:1,correct:0,wrong:1,score:-1/3,seconds:60,mode:'mixed'};assert.equal(validEvent(event('practice',d)),true);assert.equal(validEvent(event('practice',{...d,correct:1,wrong:0,score:1})),false);assert.equal(validEvent(event('practice',{...d,items:[]})),false);});
test('original variants can be selected; unreviewed or Mains variants cannot',()=>{assert.ok(choosePractice(reviewedVariants,{count:3}).length===3);assert.equal(choosePractice(reviewedVariants.map(q=>({...q,reviewed:false})),{count:3}).length,0);assert.equal(choosePractice(reviewedVariants.map(q=>({...q,stage:'mains'})),{count:3}).length,0);});
