import pathlib,json,subprocess,concurrent.futures,hashlib,time,csv,io,os,re,argparse
p=argparse.ArgumentParser(description='Extract local source PDFs into quarantined per-page OCR drafts. Never publishes automatically.');p.add_argument('--pdf-dir',required=True);p.add_argument('--output-dir',required=True);p.add_argument('--inventory',required=True);args=p.parse_args()
base=pathlib.Path(args.pdf_dir);out=pathlib.Path(args.output_dir);out.mkdir(parents=True,exist_ok=True);x=json.load(open(args.inventory))
def work(job):
 r,page=job;id=r['id'];p=base/(id+'.pdf');dest=out/id;dest.mkdir(exist_ok=True);result=dest/(str(page)+'.json')
 if result.exists():return json.loads(result.read_text())
 raw=subprocess.run(['pdftotext','-f',str(page),'-l',str(page),'-layout',str(p),'-'],capture_output=True,text=True).stdout.strip()
 mode='text';confidence=None
 if len(raw)<80:
  image=dest/('page-'+str(page));subprocess.run(['pdftoppm','-f',str(page),'-l',str(page),'-singlefile','-scale-to','1800','-jpeg','-jpegopt','quality=90',str(p),str(image)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,check=True)
  env=os.environ.copy();env['OMP_THREAD_LIMIT']='1'
  tsv=subprocess.run(['tesseract',str(image)+'.jpg','stdout','--psm','3','-l','eng','tsv'],capture_output=True,text=True,env=env,check=True).stdout
  words=list(csv.DictReader(io.StringIO(tsv),delimiter='\t'));lines={};scores=[]
  for w in words:
   t=w.get('text','').strip()
   if not t:continue
   key=(w['block_num'],w['par_num'],w['line_num']);lines.setdefault(key,[]).append(t)
   try:
    c=float(w['conf'])
    if c>=0:scores.append(c)
   except:pass
  raw='\n'.join(' '.join(ws) for ws in lines.values());confidence=round(sum(scores)/len(scores),2) if scores else 0;mode='ocr'
  # PSM6 captures text within coloured infographic boxes that automatic segmentation misses.
  if len(raw)<150:
   alt=subprocess.run(['tesseract',str(image)+'.jpg','stdout','--psm','6','-l','eng'],capture_output=True,text=True,env=env).stdout.strip()
   if len(alt)>len(raw):raw=alt;mode='ocr-psm6'
  pathlib.Path(str(image)+'.jpg').unlink(missing_ok=True)
 item={'documentId':id,'page':page,'text':raw,'characters':len(raw),'method':mode,'meanWordConfidence':confidence,'quality':'review-required' if len(raw)<100 or (confidence is not None and confidence<65) else 'ocr-unverified' if mode.startswith('ocr') else 'text-unverified'}
 result.write_text(json.dumps(item,ensure_ascii=False,indent=2));return item
jobs=[]
for r in x['pdfs']:
 info=subprocess.check_output(['pdfinfo',str(base/(r['id']+'.pdf'))],text=True);pages=int(re.search(r'^Pages:\s+(\d+)',info,re.M).group(1));jobs.extend((r,i) for i in range(1,pages+1))
print('START',len(jobs),'pages',flush=True);done=0
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
 for res in ex.map(work,jobs):
  done+=1
  if done%20==0:print('EXTRACTED',done,'/',len(jobs),flush=True)
allpages=[json.loads((out/r['id']/(str(i)+'.json')).read_text()) for r,i in jobs];(out/'pages.json').write_text(json.dumps(allpages,ensure_ascii=False));print('DONE',len(allpages),'chars',sum(p['characters'] for p in allpages),'review',sum(p['quality']=='review-required' for p in allpages),flush=True)
