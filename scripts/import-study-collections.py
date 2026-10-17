"""Reproducible, data-only import. Never executes uploaded JavaScript, MDX or HTML."""
import collections,hashlib,html,json,pathlib,re,subprocess,sys,zipfile
from urllib.parse import quote
ROOT=pathlib.Path(__file__).resolve().parents[1]
UPLOAD=pathlib.Path(sys.argv[1]);TREE=pathlib.Path(sys.argv[2]);OUT=ROOT/'app/imports';OUT.mkdir(exist_ok=True)
MANIFEST=[];AUDIT=[];SEEN={};COUNTS=collections.Counter()
def digest(b):return hashlib.sha256(b).hexdigest()
def plain(s):
 s=re.sub(r'<br\s*/?>','\n',s,flags=re.I);s=re.sub(r'<[^>]+>','',s);s=html.unescape(s)
 return re.sub(r'(?m)^>\s*','',s).strip()
def title(p):return re.sub(r'[_-]+',' ',pathlib.Path(p).stem).strip()
def mapping(s):
 s=s.lower().replace('_',' ').replace('-',' ')
 rules=[
  (r'andhra pradesh|amaravati|tirupati','Current Events','Andhra Pradesh events',['t-6-0']),
  (r'government budget|budget economy|finance bill|taxation|gst|union budget','Economy & Planning','Public finance & taxation',['t-2-2']),
  (r'national income|macro.?econom|gross domestic|gdp','Economy & Planning','National income',['t-2-0']),
  (r'money banking|banking|reserve bank|monetary|inflation','Economy & Planning','Banking and monetary policy',['t-2-3','t-2-1']),
  (r'income employ|unemployment|poverty','Economy & Planning','Poverty & employment',['t-2-9']),
  (r'open economy|economic survey','Economy & Planning','Indian economy',[]),
  (r'soil|agriculture|farming','Geography','Soils & agriculture',['t-3-4']),
  (r'drainage|river|water resource','Geography','Rivers & water resources',['t-3-3']),
  (r'disaster|natural hazard|earthquake|tsunami','Geography','Disaster management',['t-3-9']),
  (r'climate|atmospher|coriolis|monsoon|solar radi','Geography','Climate & monsoons',['t-3-1']),
  (r'natural vegetation|biodiversity|conservation|wildlife|environment|ecolog|zero waste','Geography','Environment & ecology',['t-3-8']),
  (r'population|human geograph|human environment|people economy|census','Geography','Population & urbanisation',['t-3-7']),
  (r'india.*(?:location|physical|size)|physical features|structure physiography|our country india','Geography','Indian physical geography',['t-3-2']),
  (r'earth|landform|geomorph|rocks|ocean|continents|latitudes|longitudes|major domains|water oceans','Geography','Earth & geomorphology',['t-3-0']),
  (r'mineral|resources and development|natural resources','Geography','Resources & industries',['t-3-5']),
  (r'biology|human health|vaccine|tuberculosis','Science & Technology','Biology & human health',['t-5-2']),
  (r'chemistry','Science & Technology','Everyday chemistry',['t-5-1']),
  (r'physics','Science & Technology','Everyday physics',['t-5-0']),
  (r'artificial intelligence|bhashini|information technology','Science & Technology','Information technology & AI',['t-5-5']),
  (r'biotechnology','Science & Technology','Biotechnology',['t-5-3']),
  (r'satellite|space station|isro|astronaut','Science & Technology','Space technology',['t-5-4']),
  (r'bengal|murshid|medieval','History & Culture','Medieval India',['t-0-5']),
  (r'scheme|yojana|welfare','Polity & Governance','Schemes & policy changes',['t-6-3']),
  (r'international relations|united nations|neighbour|nato','Polity & Governance','International relations',['t-1-9']),
  (r'constitution|polity|parliament|supreme court|judiciary','Polity & Governance','Constitution and governance',[]),
  (r'social issues','Polity & Governance','Social justice & welfare',['t-1-8']),
  (r'geography','Geography','Geography',[]),
  (r'economy|economics','Economy & Planning','Economy & Planning',[]),
  (r'history|art.culture','History & Culture','History & Culture',[]),
  (r'science','Science & Technology','Science & Technology',[]),
 ]
 for pattern,subject,topic,ids in rules:
  if re.search(pattern,s):return dict(syllabusSubject=subject,upscTopics=[topic],appscTopics=ids,mappingStatus='provisional' if ids else 'subject-only')
 return dict(syllabusSubject='Current Events' if 'current' in s else 'General studies',upscTopics=['Current events' if 'current' in s else 'General studies'],appscTopics=[],mappingStatus='subject-only')
def register(doc,questions=None,sections=None):
 doc.setdefault('sourceURL','');doc.setdefault('period','');doc.setdefault('reviewStatus','unreviewed');doc.setdefault('license','Not specified');doc.setdefault('archiveOnly',False)
 qs=questions or []
 for q in qs:
  normalized=re.sub(r'\W+','',q['prompt'].lower());key=digest(normalized.encode());q['fingerprint']=key;q['duplicateOf']=SEEN.get(key);SEEN.setdefault(key,q['id']);q['verified']=False;q['reviewStatus']='unreviewed';q['sourceId']=doc['id'];q['sourceTitle']=doc['title'];q['period']=doc['period'];q['sourceURL']=doc['sourceURL']
  if q['duplicateOf']:COUNTS['duplicates']+=1
 doc['appscTopics']=sorted(set(doc['appscTopics']+[t for q in qs for t in q['appscTopics']]))
 doc['uniqueQuestionCount']=sum(not q['duplicateOf'] for q in qs)
 data={'document':doc,'questions':qs,'sections':sections or []};raw=json.dumps(data,ensure_ascii=False,separators=(',',':'))
 path=OUT/(doc['id']+'.json')
 if qs or sections:path.write_text(raw)
 doc['questionCount']=len(qs);doc['sectionCount']=len(sections or []);doc['dataPath']='imports/'+path.name if qs or sections else ''; doc['dataSha256']=digest(raw.encode());MANIFEST.append(doc)
 COUNTS['questions']+=len(qs);COUNTS['missingAnswers']+=sum(not q.get('answer') for q in qs)

def split_md(text,doc):
 pattern=r'(?m)^#{1,6}\s+Q(\d+)\.\s*';matches=list(re.finditer(pattern,text));qs=[]
 for i,m in enumerate(matches):
  block=text[m.end():matches[i+1].start() if i+1<len(matches) else len(text)];clean=plain(block)
  a=re.search(r'(?im)^\s*\*{0,2}Answer\*{0,2}\s*:',clean)
  prompt=clean[:a.start()].strip() if a else clean.strip();answer=clean[a.end():].strip().strip('-').strip() if a else ''
  prompt=re.sub(r'\n---\s*$','',prompt);option_start=re.search(r'(?m)^\s*A\.\s+',prompt)
  stem=prompt[:option_start.start()].strip() if option_start else prompt
  qs.append(dict(id=doc['id']+'-q'+str(i+1),number=m.group(1),prompt=prompt,answer=answer,kind='Model question',stage='Prelims',page=None,**mapping(stem+' '+doc['path'].rsplit('/',1)[-1])))
 intro=plain(text[:matches[0].start()] if matches else text)
 return qs,[{'title':'Notes and introduction','page':None,'text':intro}] if intro else []
# User-supplied Markdown collection; do not conflate it with utsingh/upsc.
z=zipfile.ZipFile(UPLOAD/'upsc-main.zip');sha=digest((UPLOAD/'upsc-main.zip').read_bytes());revision=z.comment.decode()
for info in z.infolist():
 if info.is_dir() or not info.filename.endswith('.md'):continue
 path=info.filename.split('/',1)[1];text=z.read(info).decode('utf-8-sig');heading=re.search(r'(?m)^#\s+(.+)',text)
 doc=dict(id='uploaded-upsc-'+digest(path.encode())[:12],collection='Uploaded UPSC Markdown',title=heading.group(1) if heading else title(path),path=path,archiveSha256=sha,revision=revision,sourceFile='upsc-main.zip',**mapping(path.rsplit('/',1)[-1]+(' economics' if path.startswith('economy/') else ' geography')))
 qs,sections=split_md(text,doc);register(doc,qs,sections)
# Only actual study notes, not starter examples, caches, dependencies or executable MDX.
z=zipfile.ZipFile(UPLOAD/'civils-india-main.zip');sha=digest((UPLOAD/'civils-india-main.zip').read_bytes())
for path in ['data/blog/history/Bengal.md','data/blog/history/murshid-quli-khan.md']:
 text=z.read('civils-india-main/'+path).decode();text=re.sub(r'^---.*?---\s*','',text,flags=re.S)
 doc=dict(id='civils-'+digest(path.encode())[:12],collection='Civils India',title=title(path),path=path,archiveSha256=sha,revision=z.comment.decode(),sourceFile='civils-india-main.zip',license='MIT (bundled repository licence)',**mapping(path));register(doc,sections=[dict(title=doc['title'],page=None,text=plain(text))])
(ROOT/'docs/CIVILS-INDIA-LICENSE.txt').write_bytes(z.read('civils-india-main/LICENSE'))
# Exact upstream inventory captured from GitHub Git Trees API; do not download/rehost unlicensed PDFs.
tree=json.loads(TREE.read_text());rev='279b329dc6addaf11053dfa81b0cdaf23132ba97'
if tree.get('truncated'):raise ValueError('Upstream tree incomplete')
for item in tree['tree']:
 if item['type']!='blob' or not item['path'].lower().endswith('.pdf'):continue
 path=item['path'];url='https://github.com/utsingh/upsc/blob/'+rev+'/'+quote(path,safe='/');year=re.search(r'20(?:16|17|18|19)',path)
 doc=dict(id='utsingh-'+digest(path.encode())[:12],collection='Utkarsh Singh UPSC archive',title=path.replace('/',' · '),path=path,sourceFile=path,sourceURL=url,revision=rev,blobSha=item['sha'],bytes=item.get('size',0),period=year.group(0) if year else 'Repository snapshot: November 2019',archiveOnly=True,**mapping(path));register(doc)
# Source PDF pages and questions. Preserve supplied wording; no implied answer verification.
for filename,period in [('Last 6 Months Current affairs April to september -.pdf','1 April–30 September 2026'),('Last 6 Months MCQs (1 Sep 2025 to31 March 2026) Current affairs.pdf','1 September 2025–31 March 2026 (seven calendar months)')]:
 p=UPLOAD/filename;raw=subprocess.check_output(['pdftotext','-layout',str(p),'-']).decode();pages=raw.split('\f');pages=pages[:-1] if not pages[-1].strip() else pages
 cleaned=[];offsets=[];pos=0;sections=[]
 for number,page in enumerate(pages,1):
  lines=[s for s in page.splitlines() if not re.fullmatch(r'\s*(?:LAST 6 MONTHS CURRENT AFFAIRS|GKNOW\.IN\s*\d*|\d+)\s*',s)]
  body='\n'.join(lines).strip();offsets.append((pos,number));cleaned.append(body);pos+=len(body)+2
  if body:sections.append(dict(title='Source page '+str(number),page=number,text=body))
 text='\n\n'.join(cleaned);doc=dict(id='current-'+digest(p.read_bytes())[:12],collection='Uploaded current affairs PDFs',title=filename.removesuffix('.pdf'),path=filename,sourceFile=filename,sourceURL='https://gknow.in/',sha256=digest(p.read_bytes()),period=period,pages=len(pages),**mapping('current affairs'))
 matches=list(re.finditer(r'(?mi)^[ \t]*Q\s*[.:]+\s*',text));qs=[]
 for i,m in enumerate(matches):
  block=text[m.end():matches[i+1].start() if i+1<len(matches) else len(text)].strip();a=re.search(r'(?im)(?:\bAnswer|\bAns\.?)[ \t]*(?:/[^:\n]{0,30})?[ \t]*:',block)
  prompt=block[:a.start()].strip() if a else block;answer=block[a.end():].strip() if a else ''
  # Remove the next article/date heading from the prior answer, but preserve the whole source page separately.
  for sep in [r'(?im)^\s*Current Affairs MCQs',r'(?im)^\s*Date:\s*\d',r'(?im)^\s*Monthly Current Affairs',r'(?im)^\s*Current Affairs (?:One|Question)']:
   answer=re.split(sep,answer,maxsplit=1)[0].strip()
  page=max((n for off,n in offsets if off<=m.start()),default=1)
  label='Model question';mapping_data=mapping(prompt+' current affairs')
  if not mapping_data['appscTopics']:mapping_data=dict(syllabusSubject='Current Events',upscTopics=['Current events'],appscTopics=[],mappingStatus='subject-only')
  qs.append(dict(id=doc['id']+'-q'+str(i+1),number=i+1,prompt=prompt,answer=answer,kind=label,stage='Prelims',page=page,extractionStatus='answer-found' if answer else 'answer-needs-review',**mapping_data))
 register(doc,qs,sections)
index=dict(version=1,documents=MANIFEST,totals=dict(documents=len(MANIFEST),**COUNTS),notes='All question answers and mappings await review. Linked archive PDFs are not extracted questions.')
for target in [ROOT/'app/study-imports.json',ROOT/'studio/public/study-imports.json']:
 target.parent.mkdir(parents=True,exist_ok=True);target.write_text(json.dumps(index,ensure_ascii=False,indent=2))
import shutil
shutil.copytree(OUT,ROOT/'studio/public/imports',dirs_exist_ok=True)
(ROOT/'docs/STUDY-IMPORT-INVENTORY.json').write_text(json.dumps(index,ensure_ascii=False,indent=2))
print(json.dumps(index['totals']));print(collections.Counter(d['collection'] for d in MANIFEST))
