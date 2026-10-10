import sys,json,base64,tempfile,subprocess,pathlib
from pypdf import PdfReader
request=json.load(sys.stdin);blob=base64.b64decode(request['bytes'],validate=True)
if len(blob)>4*1024*1024:raise ValueError('PDF limit is 4 MB')
with tempfile.TemporaryDirectory() as d:
 path=pathlib.Path(d)/'paper.pdf';path.write_bytes(blob);reader=PdfReader(path)
 if len(reader.pages)>40:raise ValueError('OCR limit is 40 pages')
 pages=[]
 for i,page in enumerate(reader.pages,1):
  text=page.extract_text() or ''
  if len(text.strip())<40:
   prefix=str(pathlib.Path(d)/f'page-{i}')
   subprocess.run(['pdftoppm','-f',str(i),'-l',str(i),'-r','130','-singlefile','-png',str(path),prefix],check=True,timeout=40,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
   lang=request.get('language','eng')
   if lang not in ['eng','tel','eng+tel']:raise ValueError('Unsupported OCR language')
   text=subprocess.check_output(['tesseract',prefix+'.png','stdout','-l',lang],timeout=50,stderr=subprocess.DEVNULL).decode('utf8')
  pages.append({'page':i,'text':text})
 print(json.dumps({'pages':pages},ensure_ascii=False))
