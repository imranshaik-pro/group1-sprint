"""Rebuild same-origin scanned-page assets from pinned, checksummed PDF sources.
Requires Poppler (pdftoppm); downloads happen at build time, never in learner navigation.
"""
import pathlib,json,urllib.request,concurrent.futures,hashlib,subprocess,os,sys
root=pathlib.Path(sys.argv[1] if len(sys.argv)>1 else 'app').resolve();manifest=json.loads((root/'pdf-source-manifest.json').read_text());cache=pathlib.Path(os.environ.get('PDF_SOURCE_CACHE','/tmp/group1-pdf-cache'));cache.mkdir(exist_ok=True)
def doc(r):
 dest=root/'pdf-scans'/r['id'];dest.mkdir(parents=True,exist_ok=True)
 if all((dest/(str(n)+'.jpg')).is_file() for n in range(1,r['pages']+1)):return r['id']
 p=cache/(r['id']+'.pdf')
 if not p.exists() or hashlib.sha256(p.read_bytes()).hexdigest()!=r['sha256']:
  req=urllib.request.Request(r['downloadURL'],headers={'User-Agent':'Group1-Sprint-Content-Build/1.0'})
  with urllib.request.urlopen(req,timeout=90) as response:data=response.read(45*1024*1024)
  if hashlib.sha256(data).hexdigest()!=r['sha256']:raise ValueError('Source checksum mismatch: '+r['id'])
  p.write_bytes(data)
 for n in range(1,r['pages']+1):
  target=dest/str(n)
  if target.with_suffix('.jpg').exists():continue
  subprocess.run(['pdftoppm','-f',str(n),'-l',str(n),'-singlefile','-scale-to','1450','-jpeg','-jpegopt','quality=78',str(p),str(target)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
 return r['id']
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
 for id in ex.map(doc,manifest['documents']):print('Page assets ready:',id,flush=True)
