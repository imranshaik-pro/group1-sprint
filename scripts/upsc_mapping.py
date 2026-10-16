"""Curated syllabus placements. Broad folders do not imply an exact APPSC topic match."""
import re
SUBJECTS={'Anthropology':'Anthropology optional','Art_and_Culture':'History & Culture','CSAT':'General Mental Ability','Current_Affairs':'Current Events','Economics':'Economy & Planning','Environment_Ecology':'Environment & Ecology','Essay':'Essay','Ethics':'Ethics','Geography':'Geography','History':'History & Culture','International_Relations':'Polity & Governance','Language':'Language','Polity':'Polity & Governance','Science_Technology':'Science & Technology','Static_Current_GK':'General knowledge'}
# First matching path rule wins; precise concepts take precedence over source folders.
RULES=[
 ('Selected UPSC  Prelims Questions', 'History & Culture',['Buddhism & Jainism','Bhakti & Sufi movements'],['t-0-2','t-0-6']),
 ('Anthropology/Notes/Religion','Anthropology optional',['Religion and society'],[]),
 ('Anthropology/','Anthropology optional',['Anthropology optional'],[]),
 ('Temple_Architecture','History & Culture',['Temple architecture'],[]),
 ('Doomsday_Algorithm','General Mental Ability',['Calendar reasoning'],['t-4-6']),
 ('Act_East_Policy','Polity & Governance',['International relations'],['t-1-9','t-6-2']),
 ('America_Venezuela','Current Events',['International events','Energy resources'],['t-6-2','t-3-5']),
 ('India-EU','Polity & Governance',['International trade relations'],['t-1-9','t-6-2']),
 ('Union_Budget','Economy & Planning',['Public finance & taxation'],['t-2-2']),
 ('Bhashini','Science & Technology',['Information technology & AI'],['t-5-5','t-6-3']),
 ('US_Tariffs','Economy & Planning',['International trade'],['t-6-2']),
 ('Operation_Sindoor','Current Events',['National events'],['t-6-1']),
 ('Ahmedabad_Plane','Current Events',['National events'],['t-6-1']),
 ('NCP_25','Current Events',['National events'],['t-6-1']),
 ('Chess_World_Cup','Current Events',['International events'],['t-6-2']),
 ('UNESCO_Tentative','History & Culture',['Cultural heritage'],[]),
 ('VB-GRAMG','Economy & Planning',['Rural development schemes'],['t-2-5','t-6-3']),
 ('Economic_Survey','Economy & Planning',['Indian economic survey'],[]),
 ('Agriculture_Other_Cultures','Geography',['Agriculture'],['t-3-4']),
 ('Biotechnology','Science & Technology',['Biotechnology'],['t-5-3']),
 ('Cities_Nicknames','Geography',['Cities and places'],[]),
 ('Country_Nationality','Geography',['World geography'],[]),
 ('Eastern_Western_Ghats','Geography',['Indian physical geography'],['t-3-2']),
 ('Fossil_Fuels','Geography',['Energy resources'],['t-3-5','t-5-6']),
 ('Indira_Point','Geography',['Indian physical geography'],['t-3-2']),
 ('International_Boundaries','Geography',['World geography'],[]),
 ('Middle_East','Geography',['West Asia','Energy resources'],['t-3-5']),
 ('Mineral_Resources','Geography',['Mineral resources'],['t-3-5']),
 ('Ocens_Seas','Geography',['Oceans and seas'],['t-3-0']),
 ('Physical_Division_India','Geography',['Indian physical geography'],['t-3-2']),
 ('World_Geography','Geography',['World geography'],[]),
 ('Historical_Geological','History & Culture',['Prehistory and human evolution'],[]),
 ('Early_Ancient_India','History & Culture',['Prehistory and archaeology'],[]),
 ('Indian_National_Movement','History & Culture',['National movement'],['t-0-8']),
 ('Indo-Pak','History & Culture',['Post-independence India'],[]),
 ('Seven_Sisters','Geography',['Indian physical geography'],['t-3-2']),
 ('International_Relations','Polity & Governance',['International relations'],['t-1-9']),
 ('Medieval_History','History & Culture',['Medieval India'],['t-0-5']),
 ('Slave_Dynasty','History & Culture',['Delhi Sultanate'],['t-0-5']),
 ('Rare_Earth','Geography',['Mineral resources'],['t-3-5']),
 ('BIMSTEC','Polity & Governance',['International relations'],['t-1-9']),
 ('GI_Tag','Economy & Planning',['Intellectual property and trade'],[]),
 ('IUCN','Environment & Ecology',['Biodiversity and conservation'],['t-3-8']),
 ('Ramsar','Environment & Ecology',['Wetland conservation'],['t-3-8']),
 ('Seven_Wonders','History & Culture',['Cultural heritage'],[]),
 ('UNESCO','History & Culture',['Cultural heritage'],[]),
 ('United_Nations','Polity & Governance',['International relations'],['t-1-9']),
 ('Army_Regiments','Current Events',['Defence references'],[]),
 ('Domain_Top_Name','Science & Technology',['Information technology & AI'],['t-5-5']),
 ('Education/','Polity & Governance',['Education policy and social justice'],['t-1-8']),
 ('Extremism','Polity & Governance',['Internal security'],[]),
 ('One_Nation_One_Election','Polity & Governance',['Electoral reform'],['t-6-3']),
 ('PM-MITRA','Economy & Planning',['Industry & infrastructure'],['t-2-6','t-6-3']),
 ('Government_Policies','Polity & Governance',['Government schemes'],['t-6-3']),
 ('Government_Structure','Polity & Governance',['Union executive & Parliament'],['t-1-3']),
 ('Leaders_Ministries','Polity & Governance',['Union executive & Parliament'],['t-1-3']),
 ('Organs_of_Government','Polity & Governance',['Constitutional institutions'],['t-1-3','t-1-4']),
 ('Law/Constitution','Polity & Governance',['Constitution & Preamble'],['t-1-0']),
 ('National_Highways','Economy & Planning',['Industry & infrastructure'],['t-2-6']),
 ('State_Union_Territories','Polity & Governance',['Federalism'],['t-1-6']),
]
def placement(path):
 subject=SUBJECTS.get(path.split('/')[0],'Preparation guidance')
 for fragment,subject_name,upsc,appsc in RULES:
  if fragment in path:return dict(syllabusSubject=subject_name,upscTopics=upsc,appscTopics=appsc)
 return dict(syllabusSubject=subject,upscTopics=[],appscTopics=[])

def questions_from(entries):
 out=[]
 for entry in entries:
  path=entry['path'];text=entry['text'].replace('\r\n','\n')
  if path.endswith('Selected UPSC  Prelims Questions.txt'):
   pattern=r'(?m)^([0-9]+)\.\s+(?=[“A-Z])';kind='PYQ claim';stage='Prelims'
  elif path.endswith('5 model mains questions with answer.txt'):
   pattern=r'(?m)^Q([0-9]+)\.\s+';kind='Model question';stage='Mains'
  elif path.endswith('Early_Ancient_India/Questions_Answers.md'):
   pattern=r'(?m)^# Q\.([0-9]+)\s+';kind='Model question';stage='Mains'
  else:continue
  matches=[]
  for candidate in re.finditer(pattern,text):
   if int(candidate.group(1))==len(matches)+1: matches.append(candidate)
  for i,match in enumerate(matches):
   block=text[match.end():matches[i+1].start() if i+1<len(matches) else len(text)].strip()
   # Ignore section separators and next-paper labels between questions.
   block=re.sub(r'\n---\s*\nPaper II \(Indian Anthropology\)\s*$','',block).strip()
   split=re.split(r'(?im)^\s*(?:##\s*)?Answer(?:\s*\(outline\))?\s*:',block,maxsplit=1)
   prompt=split[0].strip().rstrip('-').strip();answer=split[1].strip().rstrip('-').strip() if len(split)>1 else ''
   number=int(match.group(1));mapping=placement(path)
   if stage=='Prelims':
    mapping=dict(syllabusSubject='History & Culture',upscTopics=['Bhakti & Sufi movements' if number==10 else 'Buddhism & Jainism'],appscTopics=['t-0-6' if number==10 else 't-0-2'])
   elif 'Anthropology/' in path and number in [4,5]:
    mapping=dict(syllabusSubject='Anthropology optional',upscTopics=['Caste and religion' if number==4 else 'Religious syncretism'],appscTopics=['t-1-8','t-0-6'] if number==4 else ['t-0-6'])
   claimed=re.search(r'\b((?:19|20)\d{2}) Prelims\b',prompt)
   out.append(dict(id=entry['id']+'-q'+str(number),resourceId=entry['id'],number=number,prompt=prompt,answer=answer,kind=kind,stage=stage,exam='UPSC',claimedYear=int(claimed.group(1)) if claimed else None,verified=False,reviewStatus='unreviewed',source=entry['url'],**mapping))
 return out
