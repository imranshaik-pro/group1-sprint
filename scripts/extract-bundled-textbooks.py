import pathlib,json,hashlib,subprocess,shutil
import sys
s=pathlib.Path(sys.argv[1] if len(sys.argv)>1 else '.').resolve();pub=s/'public';cat=json.loads((pub/'pdf-index.json').read_text());books=json.loads((pub/'materials/catalog.json').read_text())
cat['documents']=[d for d in cat['documents'] if d.get('materialType')!='textbooks']
for d in cat['documents']:d['materialType']='notes'
for b in books:
 if b.get('mode')!='download':continue
 pdf=pub/b['url'].lstrip('/');raw=pdf.read_bytes();assert hashlib.sha256(raw).hexdigest()==b['sha256']
 text=subprocess.check_output(['pdftotext','-layout',str(pdf),'-'],text=True);pages=text.split('\f');
 if not pages[-1].strip():pages.pop()
 assert len(pages)==b['pages'],(b['id'],len(pages),b['pages'])
 id='textbook-'+b['id'];sections=[{'page':i+1,'title':f'Page {i+1}','text':t.strip(),'image':None,'method':'selectable-text','quality':'publisher excerpt; India/AP context needs separate study','transcriptionReviewed':True,'appscTopics':[b['topic']]} for i,t in enumerate(pages)]
 data={'id':id,'title':b['title'],'sections':sections,'questions':[],'notice':b['description']+' This is a textbook excerpt, not the complete book. Use Original PDF layout to view figures and equations.','attribution':b['attribution']+' · '+b['license']+' · '+b['source']}
 out=(json.dumps(data,ensure_ascii=False,indent=1)+'\n').encode();path='pdf-extracts/'+id+'.json';(pub/path).write_bytes(out);(pub/'sprint'/path).write_bytes(out)
 cat['documents'].append({'id':id,'title':b['title'],'subject':b['subject'],'appscTopics':[b['topic']],'mappingStatus':'foundation chapter relevance; not a complete APPSC topic','pages':len(pages),'sourceName':b['attribution'],'sourceURL':b['source'],'sourceSha256':b['sha256'],'license':b['license'],'publication':'embedded-text','transcriptReviewPages':0,'questionCount':0,'period':'Publisher textbook excerpt; foundational examples may use US context','reviewStatus':'publisher source; text mechanically extracted','dataPath':path,'dataSha256':hashlib.sha256(out).hexdigest(),'materialType':'textbooks','pdfPath':'materials/'+b['id']+'.pdf'})
 (pub/'sprint/materials').mkdir(exist_ok=True);shutil.copy2(pdf,pub/'sprint/materials'/pdf.name)
cat['totals']['documents']=len(cat['documents']);cat['totals']['pages']=sum(d['pages'] for d in cat['documents']);cat['date']='2026-10-19'
for p in [pub/'pdf-index.json',pub/'sprint/pdf-index.json']:p.write_text(json.dumps(cat,ensure_ascii=False,indent=1)+'\n')
module='// Generated from checked local PDF extraction.\nexport const pdfCatalogue = '+json.dumps(cat,ensure_ascii=False,indent=1)+';\n'
for p in [s/'lib/pdf-catalogue.js',pub/'sprint/pdf-catalogue.js']:p.write_text(module)
print(cat['totals'])
