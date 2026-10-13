import {test} from 'node:test';
import assert from 'node:assert/strict';
import {saveAccessMessage} from '../lib/save-access.ts';
import {accessDecision} from '../lib/access.ts';
test('pending learner is not incorrectly told to perform owner setup or register again',()=>{const m=saveAccessMessage(true,true,false,'pending');assert.match(m,/awaiting/);assert.match(m,/do not need to join again/);assert.doesNotMatch(m,/finish workspace setup/);});
test('checking membership is distinguished from a real denial',()=>{assert.match(saveAccessMessage(true,false,false),/Checking/);assert.match(saveAccessMessage(false,false,false),/Sign in/);assert.match(saveAccessMessage(true,true,true,'pending'),/owner must finish/);assert.match(saveAccessMessage(true,true,false,'suspended'),/paused/);});
test('approved learner can save but cannot manage another member',()=>{assert.equal(accessDecision('learner','owner','active','sync'),200);assert.equal(accessDecision('learner','owner','active','membership','other'),403);assert.equal(accessDecision('owner','owner','active','membership','learner'),200);assert.equal(accessDecision('learner','owner','pending','sync'),403);});
