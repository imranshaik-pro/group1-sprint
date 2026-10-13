import json,re,argparse
from pathlib import Path
a=argparse.ArgumentParser();a.add_argument('--source-dir',required=True);a.add_argument('--website-output',default='studio/public/reference/bhimboy-index.json');a.add_argument('--app-output',default='app/bhimboy-index.json');args=a.parse_args();src=Path(args.source_dir);sy=json.loads((src/'data/appsc_syllabus_v2.json').read_text());themes=sy['micro_themes'];by={x['id']:x for x in themes}
groups=[['indus','vedic','buddh','jain','maury','gupta','satavahana','medieval','bhakti','sufi','colonial','national movement','andhra'],['constitution','preamble','rights','duties','parliament','judiciary','federal','bodies','justice','international'],['income','inflation','tax','bank','planning','agricultur','industr','ap economy','survey','poverty'],['earth','climate','physical','river','soil','resource','ap geography','population','ecology','disaster'],['number','percent','profit','work','speed','series','logic','data interpretation','administrative','psychological'],['physics','chemistry','biology','biotech','space','ict','energy','agricultur','institutions','science policy'],['andhra','national','international','scheme','reports']]
def mapped(m):
 section=m.get('section','').lower();text=' '.join(str(m.get(k,'')) for k in ['section','unit','theme','micro_theme']).lower()
 if section in ['english','telugu','essay skills','essay content bank']:return None
 if 'history' in section:g=0
 elif any(k in section for k in ['polity','law','ethics','governance']):g=1
 elif any(k in section for k in ['econom','agricultur','budget','growth','industrial','resource mobil','infrastructure']):g=2
 elif section=='geography':g=3
 elif 'mental' in section:g=4
 elif section=='current events':g=6
 else:g=5
 candidates=[(len(k),i) for i,k in enumerate(groups[g]) if k in text]
 if g==0:
  candidates=[(len(k),i) for i,ks in enumerate([['indus'],['vedic'],['buddh','jain'],['maury','gupta'],['satavahana'],['medieval'],['bhakti','sufi'],['colonial'],['national movement'],['andhra']]) for k in ks if k in text]
 if not candidates:return None
 return f't-{g}-{max(candidates)[1]}'
micro=[{'id':m['id'],'title':m['micro_theme'],'theme':m['theme'],'section':m['section'],'stage':m['stage'],'paper':m['paper'],'topic':mapped(m),'mapping':'provisional' if mapped(m) else 'needs-review'} for m in themes]
rows=[]
for p in sorted((src/'data/pyq').glob('*.json')):
 for n,q in enumerate(json.loads(p.read_text())):
  codes=q.get('microthemes') or [q.get('microtheme')];matches=[by[c] for c in codes if c in by];mappedtopics=list(dict.fromkeys(mapped(m) for m in matches if mapped(m)))
  stage='Prelims' if 'prelims' in p.name else 'Mains'
  rows.append({'id':p.stem+'-'+str(n+1),'year':q.get('year'),'paper':q.get('paper_label',''),'number':q.get('no'),'part':q.get('part',''),'stage':stage,'microthemes':[c for c in codes if c], 'topics':mappedtopics,'mapping':'provisional' if mappedtopics else 'needs-review','source':'https://github.com/BhavishyaIAS/bhimboy/blob/d06cee211aa37f3820cd26f06ac9ff695f1f39ef/data/pyq/'+p.name,'verified':False,'reuse':'permission-unconfirmed'})
assert len(rows)==1460 and len(micro)==469
out={'version':1,'origin':'BhavishyaIAS/bhimboy','commit':'d06cee211aa37f3820cd26f06ac9ff695f1f39ef','syllabus':'2018 reference; reconcile with current APPSC syllabus','notice':'Metadata and source links only. Question texts, answers, authored notes and components are not copied. Mapping and PYQ claims need review.','microtopics':micro,'questions':rows}
for target in [args.website_output,args.app_output]:
 Path(target).parent.mkdir(parents=True,exist_ok=True)
 Path(target).write_text(json.dumps(out,ensure_ascii=False,separators=(',',':')))
print('Indexed',len(rows),'question references;',len(micro),'micro-topics; unmapped questions',sum(not r['topics'] for r in rows))
