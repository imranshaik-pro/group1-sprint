"""Build explicitly reviewed derivatives; preserve uploaded text and prior decisions."""
import json,pathlib,hashlib
R=pathlib.Path(__file__).resolve().parents[1]
read=lambda p:json.loads((R/p).read_text())
snapshot=read('docs/import-repair-input-2026-10-17.json')
specs=read('docs/import-repair-specs-2026-10-17.json')
held=read('docs/held-repair-specs-2026-10-17.json')
by={r['position']:r for r in snapshot['items']}
assert len(specs)==71 and len(held)==32 and len(by)==103
specmap={r[0]:r for r in specs+held}
assert len(specmap)==103
originals={}
for p in (R/'app/imports').glob('*.json'):
 for q in json.loads(p.read_text()).get('questions',[]):originals[q['id']]=q
overrides={
7:('https://cwc.gov.in/sites/default/files/dfsitrepca-19082021.pdf','CWC reservoir table: Godavari/Middle Godavari stations in Telangana'),
20:('https://indianathletics.in/india-to-host-2028-world-athletics-indoor-championships-in-bhubaneswar/','AFI hosting announcement, 19 March 2026'),
137:('https://main.knesset.gov.il/EN/News/PressReleases/Pages/press176261.aspx','Knesset account: recognition and post-1991 Republic of Somaliland'),
141:('https://www.pib.gov.in/PressReleasePage.aspx?PRID=2300762&lang=1&reg=48&v=1','National Sports Awards 2025 announcement, 18 August 2026; complete category/recipient list')}
explanations={
7:'CWC’s Godavari reservoir table includes Telangana locations such as Mancherial and Sriramsagar. Basin extent and main-channel course are different geographical measures.',
20:'AFI’s 19 March 2026 announcement identifies Kalinga’s indoor facility in Bhubaneswar for the 2028 event. It is a future hosting award, not a completed championship.',
141:'No Khel Ratna recipient is listed in the dated Ministry announcement. A nomination report is not a final award decision; this repaired question asks only what that announcement contains.',
288:'India placed tenth overall at the World Para Athletics Championships 2025, with22 medals. Tenth satisfies both top-ten and top-fifteen, so the original nested alternatives were not exclusive.'}
withdraw_reasons={
8:'The complete regional flood-pair table was not authenticated, especially the combined Punjab/Rajasthan flash-flood claim. Withdrawal is not a finding that the pair is false.',
123:'The universal largest-electrified-network premise lacks a comparable dated international metric (route-km versus track-km and network coverage). No original option is authenticated.',
128:'The January2026 rice-overtaking claim lacks a reconciled production basis, crop year and comparable underlying table. The proposed China key is not approved.',
225:'NIA’s case page confirms the case identity, but the signed FIR provisions were not retrieved. NIA involvement alone does not prove which law applies.',
243:'No certified election result and stated winning measure were obtained to authenticate the original landslide/election assertion. The candidate key is not promoted.',
252:'No dated notices from both shrine authorities were retrieved. Festival coincidence does not authenticate both closure claims for a named year.',
270:'The stem lacks a date, shipment class, valuation base and applicable tariff order. No universal flat DDP percentage is established.',
273:'The 2025 recruitment-rule amendment/implementation order was not authenticated. Ongoing RRB cycles do not settle a claimed future RPF recruiting-agency transition.'}
questions=[];decisions=[]
for pos,old in sorted(by.items()):
 original=originals[old['id']]
 digest=hashlib.sha256(json.dumps(original,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
 row={'position':pos,'sourceQuestionId':old['id'],'previousDecision':old['decision'],'checkedAt':'2026-10-17','originalSha256':digest,'originalPrompt':original['prompt'],'previousReview':old}
 if pos not in specmap:
  assert pos in withdraw_reasons
  row.update(disposition='withdrawn-from-scoring',scoredEligible=False,reason=withdraw_reasons[pos],factVerification='unresolved; no forced answer',candidateAnswerNotApproved=old['solution'])
  decisions.append(row);continue
 spec=specmap[pos];_,text,options,*extra=spec
 if extra:explanation,source,locator=extra
 else:
  explanation=explanations.get(pos,old['explanation']);source=old['evidence'][0]['url'];locator=old['evidence'][0]['locator']
  if pos in overrides:source,locator=overrides[pos]
 if pos==193:options=['Lakshya Sen','H. S. Prannoy','Kidambi Srikanth','Kiran George']
 topic=old['proposedTopicId'] or ('t-6-2' if pos==17 else 't-6-1')
 shift=pos%4;rotated=options[shift:]+options[:shift];answer=(-shift)%4
 assert len(set(options))==4 and len(explanation)>60
 verification={'checkedAt':'2026-10-17','source':source,'locator':locator,'priorReviewSourceTextSha256':old.get('sourceTextSha256'),'evidenceSha256':hashlib.sha256(json.dumps({'source':source,'locator':locator,'statement':explanation},sort_keys=True).encode()).hexdigest(),'hashMeaning':'Hash of evidence pointer and checked explanation; NOT a newly downloaded primary-text hash','method':'Individual editorial rewrite and key review; source-specific dates and claim scope retained. Original import unchanged.'}
 if pos==8:verification['corroboratingSource']='https://mausam.imd.gov.in/backend/assets/cyclone_pdf/NATIONAL_BULLETIN_NO_13_19July_2025_1130IST.pdf'
 elif pos in [225,267,275]:verification['sourceType']='Attributed original news report; not an official government record'
 elif pos==252:verification['sourceType']='Dated official public-broadcaster report of both shrine closures'
 elif pos==277:verification['sourceType']='Official public-broadcaster event reporting; BWF result sheet not independently retrieved'
 elif pos==84:verification['sourceType']='Reproduced primary court order; does not establish later/current procedural status'
 elif pos==231:verification['sourceType']='Official translated biography; translation caveat retained'
 elif pos==278:
  verification['corroboratingSource']='https://newsonair.gov.in/mea-confirms-restoration-of-indias-embassy-in-afghanistan-with-immediate-effect/'
  verification['accessNote']='Direct MEA URL returned403; dated official broadcaster reproduces the statement'
 elif pos==280:verification['corroboratingSource']='https://www.whitehouse.gov/gallery/president-trumps-visit-to-the-middle-east/'
 q={'id':old['id']+'-repair-20261017','sourceQuestionId':old['id'],'sourceDocument':original['sourceId'],'topic':topic,'paper':'II' if topic.startswith(('t-4-','t-5-','t-6-')) else 'I','text':text,'options':rotated,'answer':answer,'explanation':explanation,'source':source,'kind':'practice','stage':'prelims','exam':'PSC common','usableExams':['APPSC Group-I','UPSC','Other PSC'],'reviewStatus':'reviewed','reviewed':True,'scope':old['scope'],'familyId':old['id'],'verification':verification,'originalSha256':digest,'correctionNote':old['requiredCorrectionOrHoldReason'],'derivative':True}
 questions.append(q)
 row.update(disposition='corrected-and-approved',scoredEligible=True,replacementId=q['id'],repairedText=text,repairedOptions=rotated,repairedAnswer=answer,repairedExplanation=explanation,verification=verification,reason='Rewritten derivative; approval applies only to this version, not the original wording/key.')
 decisions.append(row)
assert len(questions)==103 and sum(d['disposition']=='withdrawn-from-scoring' for d in decisions)==0
module='// Explicit reviewed derivatives; original imported documents remain unchanged.\nexport const repairedImports = '+json.dumps(questions,ensure_ascii=False,indent=2)+';\n'
statuses=[{k:d[k] for k in ['sourceQuestionId','disposition','scoredEligible','reason']} for d in decisions]
module+='export const importRepairDecisions = '+json.dumps(statuses,ensure_ascii=False,indent=2)+';\n'
for p in ['studio/lib/repaired-imports.js','app/repaired-imports.js']:(R/p).write_text(module)
report={'date':'2026-10-17','inputCommit':snapshot['snapshot'],'requestedCount':72,'actualCorrections':71,'heldInput':32,'correctionsRewritten':71,'heldRewritten':32,'withdrawn':0,'newScoredDerivatives':103,'originalImportsModified':0,'important':'All approvals apply to revised derivatives. Some held premises were replaced with narrower dated and attributed questions; original claims are not retroactively authenticated. Original documents and review assignments are preserved.','items':decisions}
(R/'docs/IMPORT-REPAIR-RESULTS-2026-10-17.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k not in ['items','important']}))
