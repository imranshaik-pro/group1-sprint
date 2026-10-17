"""Release only the33 explicitly confirmed answers from import-review-02 positions1–50."""
from pathlib import Path
import json,re,hashlib,runpy,collections
R=Path(__file__).resolve().parents[1]
previous=runpy.run_path(str(R/'scripts/release-confirmed-imports.py'))
english=previous['english'];originals=previous['originals']
rows=[r for p in sorted((R/'docs').glob('QUESTION-REVIEW-BATCH-02-PART0[12]-2026-10-17.json')) for r in json.loads(p.read_text())['items']]
assert len(rows)==50 and len({r['id'] for r in rows})==50
questions=[]
stems={
 2:'Which city hosted the September2026 SCO Heads of State summit marking the organisation’s25th anniversary?',
 6:'According to ICAT’s26 August2026 announcement, Synaty Automotive’s15-metre multi-axle sleeper bus received compliance certification under which standards?',
 12:'What quantity of raw sugar did the Government approve for duty-free import in its21 August2026 announcement?',
 16:'Who was selected for the Arjuna Award(Lifetime)2025 in Football, as announced on18 August2026?',
 18:'According to Akashvani’s17 August2026 report, in which city were a virtual zoo,14-D cinema and virtual jungle safari inaugurated?',
 21:'Who won the2026 Esports World Cup chess title after also winning the inaugural2025 edition?',
 29:'Which name does the introduced Kerala(Alteration of Name)Bill,2026 propose for Kerala?',
 31:'What2030 target for non-fossil installed electricity capacity is stated on MNRE’s mission portal?',
 38:'Under proposed section13(3A) in the introduced Registration of Births and Deaths(Amendment)Bill,2026, whose order would be needed for registration reported after more than two years?',
 45:'According to the official Glasgow2026 medal standings and Indian Olympic Association tally, what was India’s position?',
 46:'As recorded on the PM-KISAN portal in October2026, how much annual support is provided to an eligible farmer family?',
 47:'What is the full form of NAKSHA, the urban land-parcel mapping initiative?',
 48:'At the conclusion of the Shravan Kanwar Yatra, the main Jalabhishek is associated with which observance?'}
def typography(s):
 s=re.sub(r'(?<=[A-Za-z’])(?=\d)', ' ',s)
 s=re.sub(r'(?<=\d)(?=[A-Za-z])', ' ',s)
 s=s.replace('Award(', 'Award (').replace('Kerala(', 'Kerala (').replace('Deaths(', 'Deaths (').replace(')Bill', ') Bill').replace('section13','section 13')
 return re.sub(r'\s+',' ',s).strip().replace('13(3 A)', '13(3A)')
for review in rows:
 if review['decision']!='confirmed':continue
 q=originals[review['id']];prompt=q['prompt'];matches=list(re.finditer(r'(?mi)^\s*\(?([abcd])[.)]\s*',prompt));options={}
 for i,m in enumerate(matches):options.setdefault(m[1].upper(),english(prompt[m.end():matches[i+1].start() if i+1<len(matches) else len(prompt)]).replace('✅','').strip())
 assert list(options)==list('ABCD') and len(set(options.values()))==4 and all(options.values())
 if review['position']==44:options['C']='Air Marshal Narmdeshwar Tiwari'
 text=stems.get(review['position'],english(prompt[:matches[0].start()]))
 text=re.sub(r'(?<=[?])\s+\d{1,4}$','',text)
 digest=hashlib.sha256((q['prompt']+'\n'+q['answer']).encode()).hexdigest()
 assert digest==review['sourceTextSha256'] and review['evidence'] and review['solvedOption'] in 'ABCD'
 topic=review['proposedTopicId'];first=review['evidence'][0]
 questions.append(dict(id=q['id'],sourceQuestionId=q['id'],sourceDocument=q['sourceId'],topic=topic,
  paper='II' if topic.startswith(('t-4-','t-5-','t-6-')) else 'I',text=typography(text),options=list(options.values()),answer='ABCD'.index(review['solvedOption']),
  explanation=typography(review['explanation']),source=first['url'],kind='practice',stage='prelims',exam='PSC common',usableExams=['APPSC Group-I','UPSC','Other PSC'],
  reviewStatus='reviewed',reviewed=True,scope=review['scope'],familyId=q['id'],releaseBatch='import-review-02-confirmed',reviewPosition=review['position'],
  verification=dict(checkedAt='2026-10-17',source=first['url'],locator=first['locator'],evidence=review['evidence'],sourceTextSha256=digest,
  method='Individually confirmed review decision; English stem/options/key and historical claim scope checked at release. Introduced Bill questions explicitly concern proposals, not current law.')))
assert len(questions)==33
module='// Released confirmed import-review-02 answers;13 corrections and4 held items stay out of scoring.\nexport const batch2ReleasedImports = '+json.dumps(questions,ensure_ascii=False,indent=2)+';\n'
for p in ['app/batch2-released-imports.js','studio/lib/batch2-released-imports.js']:(R/p).write_text(module)
report=dict(date='2026-10-17',batchId='import-review-02',reviewed=50,released=33,correctionRequiredNotReleased=13,heldNotReleased=4,unreviewedInBatch=328,
 policy='This explicit release supersedes review-recorded/scoredEligible:false only for these33 confirmed IDs. Original review snapshots, uploads and fixed assignments remain unchanged.',
 byTopic=dict(collections.Counter(q['topic'] for q in questions)),items=[dict(id=q['id'],position=q['reviewPosition'],topic=q['topic'],status='released',scoredEligible=True,sourceTextSha256=q['verification']['sourceTextSha256']) for q in questions])
(R/'docs/BATCH2-IMPORT-RELEASE-2026-10-17.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('Released33 confirmed Batch2 questions;13 corrections+4 held excluded;328 still unreviewed in batch.')
