// Isolated dummy identities and mocked transports; never logs in or writes production data.
const {chromium}=require('playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
const out='qa-artifacts/dashboards';fs.mkdirSync(out,{recursive:true});
const routes=['today','library','practice','revision','insights','pdfs','coverage','upsc','materials','plan','papers','reading','current','tutor','help','settings','admin','account','recovery'];
const findings=[],results=[];let browser;
const day=d=>new Date(Date.now()+d*86400000).toISOString();
function seed(){return [
 {id:'dummy-plan',at:day(-3),type:'plan',data:{start:day(-3).slice(0,10),days:105,hours:3,level:'Building foundations',weak:'Polity & Governance'}},
 {id:'dummy-complete',at:day(-2),type:'complete',data:{topic:'t-1-1'}},
 {id:'dummy-note',at:day(-1),type:'note',data:{topic:'t-1-1',text:'Dummy learner note: Article 17 abolishes untouchability.'}},
 {id:'dummy-practice',at:day(-1),type:'practice',data:{mode:'mixed',total:5,correct:2,wrong:1,attempted:3,score:2-1/3,seconds:90}},
 {id:'dummy-mistake',at:day(-1),type:'mistake',data:{concept:'Equality and freedom',errorType:'Confusion',correction:'Articles 14–18 concern equality; Articles 19–22 concern freedom.'}}
];}
async function mock(page,mode,{empty=false}={}){
 let events=empty?[]:seed(),posts=[];
 const member={userId:'qa-'+mode,name:'Dummy Learner With A Long Display Name',email:'dummy-dashboard-qa-long-address@example.test',role:mode==='admin'?'superadmin':'learner',status:mode==='pending'?'pending':'active',createdAt:day(-4)};
 let members=[member,{...member,userId:'dummy-pending',name:'Pending Dummy Learner',status:'pending'},{...member,userId:'dummy-paused',name:'Paused Dummy Learner',status:'suspended'}];
 await page.route('**/api/workspace*',async r=>{
  if(r.request().method()==='POST'){
   const b=r.request().postDataJSON();posts.push(b);
   if(mode==='guest'||mode==='pending')return r.fulfill({status:403,json:{error:'Approval required'}});
   if(b.action==='sync'){events.push(...(b.events||[]));return r.fulfill({json:{accepted:(b.events||[]).map(e=>e.id)}});}
   if(b.action==='membership')members=members.map(m=>m.userId===b.userId?{...m,status:b.status}:m);
   return r.fulfill({json:{ok:true}});
  }
  return r.fulfill({json:{member,needsSetup:false,events,members:mode==='admin'?members:[],invitations:[],audit:[]}});
 });
 await page.route('**/api/product*',r=>r.fulfill({json:{admin:mode==='admin',records:[],reviews:[],quarantined:[],cohort:{open:false,target:40},pilot:{participants:0,activated:0,eligibleD7:0,returnedD7:0,d7Rate:null}}}));
 return {posts,get events(){return events}};
}
async function inspect(page,label){
 await page.locator('main h1').first().waitFor({timeout:15000});
 await page.evaluate(()=>document.fonts.ready);
 const geometry=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,overflow:[...document.querySelectorAll('main *,.topbar *')].filter(e=>{const b=e.getBoundingClientRect();return b.width>0&&b.right>innerWidth+1&&!e.closest('.table-scroll,.reading-frame,.pdf-page-viewport')}).slice(0,12).map(e=>({tag:e.tagName,cls:e.className,text:e.textContent.slice(0,70)}))}));
 if(geometry.width>geometry.viewport+1)findings.push({label,type:'horizontal-overflow',...geometry});
 const boundary=await page.getByText('This study section could not open.',{exact:false}).count();
 if(boundary)findings.push({label,type:'error-boundary'});
 results.push({label,...geometry});
 await page.screenshot({path:out+'/'+label+'.png',fullPage:true});
}
(async()=>{
 browser=await chromium.launch({headless:true});
 for(const width of [320,390,1440]){
  for(const mode of ['active','admin']){
   const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce',timezoneId:'Asia/Kolkata'}),page=await context.newPage();
   page.on('pageerror',e=>findings.push({label:width+'-'+mode,type:'runtime',message:e.message}));
   const dummy=await mock(page,mode);
   for(const route of routes){
    await page.goto('http://127.0.0.1:8081/?mode='+mode+'#'+route);
    await page.getByText('Up to date',{exact:true}).first().waitFor();
    await inspect(page,'website-'+width+'-'+mode+'-'+route);
   }
   if(width===390&&mode==='admin'){
    await page.goto('http://127.0.0.1:8081/?mode=admin#admin');
    const row=page.locator('tbody tr').filter({hasText:'Pending Dummy Learner'});
    await row.getByRole('button',{name:'Approve',exact:true}).click();
    await row.getByRole('button',{name:'Suspend',exact:true}).waitFor();
    assert.ok(dummy.posts.some(x=>x.action==='membership'&&x.userId==='dummy-pending'&&x.status==='active'));
    await inspect(page,'website-390-admin-approved-dummy');
   }
   if(width===390&&mode==='active'){
    for(const theme of ['paper','sepia','dark']){
     await page.goto('http://127.0.0.1:8081/?mode=active#today');
     if(await page.locator('.reading-controls').getAttribute('open')===null)await page.locator('.reading-controls summary').click();
     await page.locator('.reading-controls label').filter({hasText:'Appearance'}).locator('select').selectOption(theme);
     await page.locator('.reading-controls label').filter({hasText:'Text size'}).locator('select').selectOption('22');
     await inspect(page,'website-390-active-'+theme+'-22px');
     const ratios=await page.locator('.stat-card').evaluateAll(cards=>{
      const luminance=s=>{const c=s.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4});return c[0]*.2126+c[1]*.7152+c[2]*.0722};
      return cards.flatMap(card=>[...card.children].filter(e=>e.tagName!=='SVG').map(e=>{const a=luminance(getComputedStyle(e).color),b=luminance(getComputedStyle(card).backgroundColor);return (Math.max(a,b)+.05)/(Math.min(a,b)+.05)}));
     });
     assert.ok(ratios.every(x=>x>=4.5),theme+' dashboard statistic text contrast');
    }
   }
   // Exercise the mobile drawer rather than relying only on hash navigation.
   if(width<700){await page.getByRole('button',{name:'Open navigation',exact:true}).click();await page.locator('.sidebar .nav-item').filter({hasText:'Today'}).click();await page.getByRole('heading',{name:'Let’s make today count.',exact:true}).waitFor();assert.equal(await page.locator('.scrim').count(),0);}
   await context.close();
  }
 }
 for(const mode of ['guest','pending','active']){
  const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage();const state=await mock(page,mode,{empty:true});
  await page.goto('http://127.0.0.1:8081/?mode='+mode+'#today');
  if(mode!=='guest')await page.getByText(mode==='pending'?'Approval pending':'Up to date',{exact:true}).first().waitFor();
  await inspect(page,'website-390-'+mode+'-empty-today');
  await page.getByRole('button',{name:'Save & end session',exact:true}).click();
  const message=await page.locator('.toast').innerText();
  if(mode!=='active'&&/Session saved/.test(message))findings.push({label:mode,type:'false-save-confirmation',message});
  if(mode!=='active')assert.equal(state.posts.length,0,'unapproved session wrote cloud data');
  await context.close();
 }
 // The browser-backed Android app uses these same PWA routes.
 for(const width of [320,390,1440]){
  const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',e=>findings.push({label:'app-'+width,type:'runtime',message:e.message}));
  await page.goto('http://127.0.0.1:8080/#today');await page.locator('nav[aria-label="Main navigation"] a').first().waitFor();
  const links=await page.locator('nav[aria-label="Main navigation"] a').evaluateAll(xs=>xs.map(a=>a.getAttribute('href')));links.push('#plan','#learn/t-1-1');
  assert.ok(links.length>=15,'PWA navigation did not render');for(const hash of links){await page.goto('http://127.0.0.1:8080/'+hash);await inspect(page,'app-'+width+'-'+hash.slice(1).replaceAll('/','-'));}
  await context.close();
 }
 fs.writeFileSync(out+'/results.json',JSON.stringify({testedAt:new Date().toISOString(),results,findings},null,2));
 console.log(JSON.stringify({screens:results.length,findings},null,2));
 await browser.close();assert.deepEqual(findings,[],'Dashboard QA findings; see results.json and screenshots');
})().catch(async e=>{console.error(e);findings.push({type:'test-failure',message:e.message});fs.writeFileSync(out+'/results.json',JSON.stringify({testedAt:new Date().toISOString(),results,findings},null,2));if(browser)await browser.close().catch(()=>{});process.exitCode=1});
