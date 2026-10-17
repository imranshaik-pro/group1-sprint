import json,pathlib,re,hashlib
R=pathlib.Path(__file__).resolve().parents[1];rows=json.load(open(R/'app/imports/uploaded-upsc-2f2cc8e61186.json'))['questions'];out=[];audit=[]
# Independently inspected keys, not inferred from the imported Answer field.
keys='B C A A A B B B C B B B D A B B B B B A B B B B B D C B D B B A C A D B B B B B D D A B D A D C B B'.split()
held={17:'Expectation/realised-rate sequence is ambiguous; requires rewrite.',33:'Distinguish an initial reserve injection from an ordinary deposit transfer.',37:'Repo/OMO framing needs precise transaction perspective.',39:'Repo/reverse-repo wording lacks clear buyer/seller perspective.',49:'Retain for separately dated review of historical demonetisation claims.'}
def strip(s):return re.sub(r'(?m)^#+\s*','',s.replace('**','')).strip()
def convert(q,expected,topic,url,locator,explanation=None,scope='static-common'):
 prompt=strip(q['prompt']);options=list(re.finditer(r'(?m)^\s*([ABCD])[.)]\s*',prompt));assert len(options)==4,(q['id'],len(options))
 text=prompt[:options[0].start()].strip()
 if q['id']=='uploaded-upsc-2f2cc8e61186-q21':text='In the simplified two-component NCERT money-demand framework:\n\n'+text
 opts=[prompt[m.end():options[i+1].start() if i<3 else len(prompt)].strip() for i,m in enumerate(options)];assert [m.group(1) for m in options]==list('ABCD')
 found=re.search(r'(?:\*\*)?([ABCD])(?:\*\*)?[.)]?',q['answer']);assert found and found.group(1)==expected,(q['id'],expected,q['answer'][:40])
 exp=explanation or re.sub(r'^\s*\*{0,2}[ABCD]\*{0,2}\s*','',q['answer']).strip();exp=re.sub(r'^\s*\*{0,2}Explanation:\*{0,2}\s*','',exp).strip();exp=strip(exp)
 rawhash=hashlib.sha256((q['prompt']+'\n'+q['answer']).encode()).hexdigest()
 item=dict(id=q['id'],sourceQuestionId=q['id'],sourceDocument=q['sourceId'],topic=topic,paper='II' if topic.startswith(('t-5','t-6')) else 'I',text=text,options=opts,answer='ABCD'.index(expected),explanation=exp,source=url,kind='practice',stage='prelims',exam='PSC common',usableExams=['APPSC Group-I','UPSC','Other PSC'],reviewStatus='reviewed',reviewed=True,scope=scope,familyId=q['id'],verification=dict(checkedAt='2026-10-17',source=url,locator=locator,sourceTextSha256=rawhash,method='Individual stem/options/key/explanation review against primary source; calculations independently recomputed.'))
 out.append(item);audit.append(dict(id=q['id'],status='approved',topic=topic,expectedAnswer=expected,source=url,locator=locator,sourceTextSha256=rawhash))
for i,q in enumerate(rows,1):
 if i in held:audit.append(dict(id=q['id'],status='held',reason=held[i]));continue
 topic='t-2-3' if i in list(range(22,37))+[44,45,46,47,48] else 't-2-1'
 loc='Chapter 3, sections 3.1–3.4 and Box 3.1; PDF pp. '+('1–2' if i<=4 else '2, 8–10' if i<=12 else '10–12' if i<=21 else '12–13' if i<=28 else '3–7' if i<=48 else '7, 10–12')
 convert(q,keys[i-1],topic,'https://www.ncert.nic.in/textbook/pdf/leec103.pdf',loc)
# Current affairs with all-PSC relevance; date-specific facts remain explicitly dated.
byid={q['id']:q for p in (R/'app/imports').glob('current-*.json') for q in json.load(open(p))['questions']}
selected=[
('current-9b819719a94c-q4','C','t-3-8','https://www.un.org/observances/zero-waste-day','Background and zero-waste/circular-economy objectives','The 3Rs support waste prevention and circular resource use. The UN observes the International Day of Zero Waste on 30 March.','evergreen-observance'),
('current-9b819719a94c-q15','B','t-5-2','https://www.who.int/campaigns/world-tb-day','World Tuberculosis Day: date and historical discovery','World TB Day on 24 March commemorates Robert Koch’s 1882 announcement of the bacterium that causes tuberculosis.','evergreen-observance'),
('current-9b819719a94c-q58','B','t-5-8','https://www.ursc.gov.in/science-promotion/nsd-2026/','National Science Day and Raman Effect','National Science Day marks C. V. Raman’s discovery of the Raman Effect on 28 February 1928.','evergreen-observance'),
('current-a4b49eee3ea8-q297','C','t-3-8','https://www.un.org/en/observances/earth-day','International Mother Earth Day: 22 April','International Mother Earth Day is observed annually on 22 April.','evergreen-observance'),
('current-a4b49eee3ea8-q213','A','t-3-8','https://www.unep.org/en/events/un-day/world-environment-day-2026','2026 event: host country','UNEP records Azerbaijan as the host of World Environment Day 2026. This answer concerns 2026, not the host of a later edition.','dated-2026')]
for args in selected:convert(byid[args[0]],*args[1:])
assert len(out)==50,len(out)
for path in ['app/reviewed-imports.js','studio/lib/reviewed-imports.js']:(R/path).write_text('// Individually source-checked imported model questions. See docs/QUESTION-VERIFICATION-2026-10-17.json.\nexport const reviewedImports = '+json.dumps(out,ensure_ascii=False,indent=2)+';\n')
(R/'docs/QUESTION-VERIFICATION-2026-10-17.json').write_text(json.dumps(dict(checkedAt='2026-10-17',approved=50,held=5,uniqueImportedPrompts=3826,pendingUnapproved=3776,previousCollectionUnreviewed=21,reviewed=audit),ensure_ascii=False,indent=2))
print('Approved 50; held 5; new-import unique backlog 3776; prior collection 21 pending.')
