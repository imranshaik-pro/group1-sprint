"""Publish the explicitly confirmed review subset, retaining immutable audit/source imports."""
from pathlib import Path
import json, re, hashlib, collections
R=Path(__file__).resolve().parents[1]
originals={q['id']:q for p in (R/'app/imports').glob('*.json') for q in json.loads(p.read_text())['questions']}
reviews=[q for p in sorted((R/'docs').glob('QUESTION-REVIEW-BATCH-01*.json')) for q in json.loads(p.read_text())['items'] if q['decision']=='confirmed']
# Existing topic IDs remain stable; festival material belongs to national cultural events.
fallback={18:'t-6-1',43:'t-6-1',96:'t-6-1',255:'t-6-1'}
def english(s):
    if re.match(r'\s*[\u0900-\u097f]',s) and '/' in s:s=s.split('/',1)[1]
    s=re.split(r'[\u0900-\u097f]',s)[0]
    s=re.sub(r'\bCorrect\s*$','',s.strip())
    s=re.sub(r'\s*/\s*\d+\s*$','',s)
    return re.sub(r'\s+',' ',s).strip(' /—\n(')
out=[]
for review in reviews:
    q=originals[review['id']];p=q['prompt'];matches=list(re.finditer(r'(?mi)^\s*\(?([abcd])[.)]\s*',p));options={}
    for i,m in enumerate(matches):options.setdefault(m[1].upper(),english(p[m.end():matches[i+1].start() if i+1<len(matches) else len(p)]))
    assert list(options)==list('ABCD') and all(options.values()),(review['position'],options)
    text=english(p[:matches[0].start()])
    # Duplicated bilingual prefixes sometimes end with the translated question's year/day.
    text=re.sub(r'(?<=[?])\s+\d{1,4}$','',text)
    text=re.sub(r'\bhas been\b','was',text)
    if review['position']==43:text='In the Prahlad–Narasimha traditional narrative, which king was Prahlad’s father?'
    if review['position']==89:text='Which phrase was used by leaders to describe the India–EU FTA negotiations concluded in January 2026?'
    if review['position']==101:text='Who was elected BJP National President in January 2026?'
    if review['position']==107:text='Which two EU leaders were announced as the chief guests for India’s Republic Day celebrations in 2026?'
    if review['position']==120:text='According to the January 2026 official commemoration, which milestone did Somnath Swabhiman Parv mark?'
    if review['position']==132:options['C']='Air Marshal Nagesh Kapoor'
    if review['position']==153:text='Which Indian film appeared on the December 2025 shortlist for International Feature Film at the 98th Academy Awards?'
    if review['position']==165:text='Which festival did India nominate for UNESCO intangible cultural heritage inscription at the December 2025 session?'
    if review['position']==167:text='Which three countries were selected to co-host the FIFA World Cup 2026?'
    if review['position']==168:text='How many teams were included in the expanded FIFA World Cup 2026 format?'
    if review['position']==206:text='According to the November 2025 tribunal verdict, which former Bangladesh Prime Minister was sentenced to death over the 2024 protest crackdown?'
    if review['position']==229:text='The November 2025 centenary event marking the foundation of the Indian Hockey Federation was held in which year?'
    if review['position']==242:text='Who was appointed chairperson of the Eighth Central Pay Commission in the 2025 announcement?'
    topic=review['proposedTopicId'] or fallback[review['position']]
    assert review['evidence'] and review['solvedOption'] in 'ABCD'
    digest=hashlib.sha256((q['prompt']+'\n'+q['answer']).encode()).hexdigest()
    assert digest==review['sourceTextSha256']
    evidence=review['evidence'];source=evidence[0]
    item=dict(id=q['id'],sourceQuestionId=q['id'],sourceDocument=q['sourceId'],topic=topic,
        paper='II' if topic.startswith(('t-4-','t-5-','t-6-')) else 'I',text=text,options=list(options.values()),
        answer='ABCD'.index(review['solvedOption']),explanation=review['explanation'],source=source['url'],
        kind='practice',stage='prelims',exam='PSC common',usableExams=['APPSC Group-I','UPSC','Other PSC'],
        reviewStatus='reviewed',reviewed=True,scope=review['scope'],familyId=q['id'],
        verification=dict(checkedAt='2026-10-17',source=source['url'],locator=source['locator'],
            evidence=evidence,sourceTextSha256=digest,method='Individually confirmed answer; English presentation and options checked at publication. Dated facts retain their event/report period.'),
        releaseBatch='import-review-01-confirmed',reviewPosition=review['position'])
    assert len(set(item['options']))==4
    out.append(item)
assert len(out)==197 and len({q['id'] for q in out})==197
module='// Confirmed import-review-01 answers released for learners. Original audit ledgers are immutable.\nexport const releasedImports = '+json.dumps(out,ensure_ascii=False,indent=2)+';\n'
for p in ['app/released-imports.js','studio/lib/released-imports.js']:(R/p).write_text(module)
report=dict(date='2026-10-17',released=197,sourceReviewBatch='import-review-01',
    note='Supersedes not_integrated only for the listed IDs. Original review snapshots and source imports remain unchanged. Existing103 revised derivatives are a separate prior release. No pending keys promoted.',
    byTopic=dict(collections.Counter(q['topic'] for q in out)),items=[dict(id=q['id'],position=q['reviewPosition'],topic=q['topic'],status='released',scoredEligible=True,sourceTextSha256=q['verification']['sourceTextSha256']) for q in out])
(R/'docs/CONFIRMED-IMPORT-RELEASE-2026-10-17.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('Released197 individually confirmed models; original uploads and fixed batch assignments unchanged.')
