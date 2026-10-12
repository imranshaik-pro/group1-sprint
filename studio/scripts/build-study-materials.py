"""Create licensed chapter PDFs from downloaded publisher PDFs; never ingest into AI."""
from pathlib import Path
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit
from io import BytesIO
import hashlib,json,fitz,subprocess
ROOT=Path(__file__).resolve().parents[1]
SOURCES={
 'economics':('Principles of Economics 3e','Steven A. Greenlaw, David Shapiro and Daniel MacDonald','https://openstax.org/details/books/principles-economics-3e','https://assets.openstax.org/oscms-prodcms/media/documents/principles-economics-3e_-_WEB.pdf','CC BY-NC-SA 4.0'),
 'prealgebra':('Prealgebra','Lynn Marecek and MaryAnne Anthony-Smith','https://openstax.org/details/books/prealgebra','https://assets.openstax.org/oscms-prodcms/media/documents/Prealgebra-OP_oYhyXVE.pdf','CC BY 4.0'),
 'computer-science':('Introduction to Computer Science','OpenStax and its contributing authors','https://openstax.org/details/books/introduction-computer-science','https://assets.openstax.org/oscms-prodcms/media/documents/Introduction_To_Computer_Science_-_WEB.pdf','CC BY-NC-SA 4.0')}
PACKS=[
 ('economics-demand-supply','Demand and supply','economics',63,100,'Economy & Planning','t-2-0'),
 ('economics-national-income','The macroeconomic perspective','economics',463,492,'Economy & Planning','t-2-0'),
 ('economics-inflation','Inflation foundations','economics',545,572,'Economy & Planning','t-2-1'),
 ('economics-money-banking','Money and banking','economics',663,682,'Economy & Planning','t-2-3'),
 ('gma-percent','Understand percentages','prealgebra',525,541,'General Mental Ability','t-4-1'),
 ('gma-proportions','Proportions and their applications','prealgebra',578,595,'General Mental Ability','t-4-1'),
 ('science-computing','Introduction to computer science','computer-science',19,48,'Science & Technology','t-5-5'),
 ('science-computer-hardware','Computer systems and hardware','computer-science',203,248,'Science & Technology','t-5-5')]
readers={name:PdfReader(ROOT/'tmp/pdfs'/f'{name}.pdf') for name in SOURCES}
items=[]
for id,title,src,start,end,subject,topic in PACKS:
 book,authors,url,pdf_url,license=SOURCES[src]
 stream=BytesIO();c=canvas.Canvas(stream,pagesize=(595,842))
 c.setFillColorRGB(.12,.27,.19);c.rect(0,620,595,222,fill=1,stroke=0)
 c.setFillColorRGB(.8,.87,.69);c.setFont('Helvetica',9);c.drawString(45,781,'GROUP1 SPRINT / FOUNDATION READING')
 c.setFillColorRGB(1,1,.93);c.setFont('Times-Roman',31)
 y=735
 for line in simpleSplit(title,'Times-Roman',31,500):c.drawString(45,y,line);y-=38
 c.setFont('Helvetica',10);c.setFillColorRGB(.75,.83,.69);c.drawString(45,645,subject+' / English')
 c.setFillColorRGB(.24,.34,.25);y=577
 rows=[('SOURCE BOOK',book),('AUTHORS',authors),('PUBLISHER','OpenStax, Rice University'),('LICENSE',license),('ORIGINAL PDF PAGES',f'{start}-{end} (PDF page positions, inclusive)'),('SOURCE',url),('REUSE','Attribution retained; chapter pages reproduced as-is.'),('SCOPE','Foundation study, not APPSC PYQs or an India/AP-specific chapter.'),('CHECKED','12 October 2026')]
 for heading,text in rows:
  c.setFont('Helvetica-Bold',8);c.setFillColorRGB(.5,.6,.4);c.drawString(45,y,heading);y-=18
  c.setFont('Helvetica',10);c.setFillColorRGB(.25,.34,.27)
  for line in simpleSplit(text,'Helvetica',10,505):c.drawString(45,y,line);y-=15
  y-=13
 c.setFont('Helvetica',8);c.drawString(45,45,'No publisher endorsement is implied. Review against the current official syllabus.')
 c.save();stream.seek(0)
 writer=PdfWriter();writer.add_page(PdfReader(stream).pages[0]);writer.add_page(readers[src].pages[3])
 for page in readers[src].pages[start-1:end]:writer.add_page(page)
 writer.add_metadata({'/Title':title+' - licensed OpenStax excerpt','/Author':authors,'/Subject':license+'; selected unchanged publisher pages'})
 path=ROOT/'public/materials'/f'{id}.pdf'
 with path.open('wb') as f:writer.write(f)
 optimized=fitz.open(path);clean_path=path.with_suffix('.optimized.pdf');optimized.save(clean_path,garbage=4,deflate=True,clean=True);optimized.close();clean_path.replace(path)
 compact=path.with_suffix('.compact.pdf');subprocess.run(['gs','-q','-dSAFER','-dBATCH','-dNOPAUSE','-sDEVICE=pdfwrite','-dCompatibilityLevel=1.7','-dPDFSETTINGS=/ebook','-sOutputFile='+str(compact),str(path)],check=True);compact.replace(path)
 data=path.read_bytes()
 items.append({'id':id,'title':title,'subject':subject,'topic':topic,'mode':'download','description':'Selected publisher chapter for foundational understanding. Examples and data may use a US context; check Indian/AP facts separately.','url':'/materials/'+path.name,'source':url,'sourcePdf':pdf_url,'originalPages':[start,end],'license':license,'licenseUrl':'https://creativecommons.org/licenses/'+('by/4.0/' if license=='CC BY 4.0' else 'by-nc-sa/4.0/'),'attribution':authors+'; OpenStax, Rice University','pages':len(writer.pages),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'checkedOn':'2026-10-12','aiUse':'Not used for AI ingestion or training'})
for id,title,subject in [('ncert-polity','NCERT polity and civics catalogue','NCERT'),('ncert-history','NCERT history catalogue','NCERT'),('ncert-economics','NCERT economics catalogue','NCERT'),('ncert-geography','NCERT geography catalogue','NCERT'),('ncert-science','NCERT science catalogue','NCERT'),('ncert-biology','NCERT biology catalogue','NCERT'),('ncert-maths','NCERT mathematics catalogue','NCERT')]:
 items.append({'id':id,'title':title,'subject':subject,'mode':'source','source':'https://ncert.nic.in/','description':'Open NCERT and choose Publications / Textbooks PDF, then your class and subject. This is a discovery reference, not a hosted textbook.','license':'NCERT copyright - hosting permission not confirmed','checkedOn':'2026-10-12'})
for id,title,url in [('appsc-papers','APPSC official papers and answer keys','https://psc.ap.gov.in/'),('upsc-papers','UPSC previous question papers','https://upsc.gov.in/examinations/previous-question-papers'),('ndli-discovery','National Digital Library of India','https://www.ndl.gov.in/')]:
 items.append({'id':id,'title':title,'subject':'Exam resources','mode':'source','source':url,'description':'Official source discovery. No unverified paper years or question text have been imported.','license':'Provider terms apply; no mirrored PDF','checkedOn':'2026-10-12'})
(ROOT/'public/materials/catalog.json').write_text(json.dumps(items,indent=2)+'\n')
print(json.dumps({'pdfs':8,'sourceReferences':10,'totalBytes':sum(i.get('bytes',0) for i in items),'files':[{'id':i['id'],'bytes':i['bytes'],'pages':i['pages']} for i in items if i['mode']=='download']}))
