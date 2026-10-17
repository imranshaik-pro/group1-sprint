"""Record the next fifty individually authored decisions; no scored-bank mutation."""
from pathlib import Path
import collections
import json
import runpy

ROOT=Path(__file__).resolve().parents[1]
ns=runpy.run_path(str(ROOT/'scripts/record-batch1-review.py'))
source_path=ROOT/'docs/QUESTION-REVIEW-SOURCES-PART02-2026-10-17.json'
source_map=json.loads(source_path.read_text())
ns['sources'].update(source_map)
source_map=ns['sources']
add=ns['add']
rows=ns['rows']
add(101,'C','Nitin Nabin',
    'Nabin’s own official site identifies his January 2026 appointment as BJP’s youngest national president. This is a party-office fact, not a constitutional government office.',
    'turn46search0',locator='Official Nitin Nabin biography, National President section')
add(102,'B','President of the United Arab Emirates',
    'The 19 January 2026 joint statement explicitly names Mohamed bin Zayed as UAE President. Crown Prince Khaled bin Mohamed is a different person.',
    'turn46search2',topic='t-1-9')
add(103,'B','Strategic oversight of transitional governance and reconstruction',
    'The White House describes the Board’s role as strategic oversight, mobilisation of resources and accountability during Gaza’s transition. It is distinct from a political party or a purely military command.',
    'turn46search3 turn46search6',topic='t-1-9')
add(104,'B','Praveen Vashista',
    'The official CVC release records an appointment warrant dated 12 December 2025 and oath on 16 January 2026. Treating oath, notification and appointment-warrant dates as identical loses an important distinction.',
    'turn46search4','correction_required','Ask who took oath as Vigilance Commissioner on 16 January 2026, and retain B.',topic='t-1-7')
add(105,'C','Shatrujeet Singh Kapoor is the candidate answer; appointment date not authenticated',
    'The exact BSF appointment order and its effective date were not retrieved from an official source in this pass. The imported date and key cannot be independently approved.',
    '','held','Retrieve the ACC/DoPT or BSF appointment order; no official appointment source has been authenticated.')
add(106,'B','16 January 2016',
    'DPIIT/Startup India dates the initiative’s Action Plan launch to 16 January 2016. Distinguish the 2015 Independence Day announcement from the formal action-plan launch.',
    'turn48search3 turn48search6',topic='t-2-6')
add(107,'B','Antonio Luis Santos da Costa and Ursula von der Leyen',
    'The European Council’s official summit account confirms both Presidents attended India’s 77th Republic Day as guests of honour on 26 January 2026.',
    'turn48search7',topic='t-1-9')
add(108,'C','K. M. Cariappa — first Indian Commander-in-Chief of the Indian Army',
    'The Army Day release identifies the 15 January 1949 transition from British leadership to Cariappa. There had been British Commanders-in-Chief before him, so first Commander-in-Chief without Indian is inaccurate.',
    'turn48search2','correction_required','Insert first Indian Commander-in-Chief of the Indian Army in the stem.')
add(109,'B','Iran',
    'The UN Special Rapporteur’s January communication describes protests beginning in Tehran’s Grand Bazaar on 28 December 2025, triggered initially by severe economic conditions and then spreading.',
    'turn47search11',topic='t-6-2',locator='OHCHR communication dated 9 January 2026, opening account of protests')
add(110,None,'Til and rorhi is one proposed derivation; no uniquely authenticated answer',
    'Lohri has multiple popular etymologies. The wording believed by many does not identify an authority or make the alternatives objectively distinguishable.',
    '','held','Do not score an unattributed folk etymology. Replace with a documented observance/custom question. No authoritative etymological source was authenticated in this pass.',topic=None)
add(111,'C','Field Marshal K. M. Cariappa',
    'The 2026 Veterans Day account records Cariappa’s retirement on 14 January 1953. Army Day concerns his 15 January 1949 appointment; the two commemorations must not be confused.',
    'turn47search6')
add(112,'B','Building for Resilience, Innovation, Cooperation and Sustainability',
    'MEA’s 14 May 2026 BRICS@20 statement uses this wording. It is the 2026 presidency formulation, not a theme that automatically carries into later presidencies.',
    'turn58search0 turn58search1',topic='t-1-9',locator='MEA statement title, 14 May 2026')
add(113,'B','Hamnet',
    'The organiser’s 2026 Golden Globes list marks Hamnet as Best Motion Picture — Drama. Best Motion Picture — Musical or Comedy is a separate award.',
    'turn49search0 turn49search1',locator='Golden Globes, 2026 winner, Drama')
add(114,'C','One Battle After Another',
    'The organiser lists this film as the 2026 Musical or Comedy winner, distinct from Drama winner Hamnet.',
    'turn49search0 turn49search2',locator='Golden Globes, 2026 winner, Musical or Comedy')
add(115,'B','Friedrich Merz',
    'The official India–Germany statement records Chancellor Merz’s January 2026 visit. Frank-Walter Steinmeier is not the Chancellor named in that visit record.',
    'turn49search4 turn49search5',topic='t-1-9')
add(116,'D','Swami Vivekananda',
    'The Home Ministry’s 12 January 2026 observance explicitly links National Youth Day to Vivekananda’s birth anniversary.',
    'turn49search6')
add(117,'B','Denmark / the Kingdom of Denmark',
    'Denmark’s Foreign Ministry identifies Greenland as part of the Kingdom with extensive self-government. Self-government is not the same as an independent sovereign state.',
    'turn53search0',topic='t-3-2')
add(118,'C','Navi Mumbai and Vadodara',
    'The official WPL schedule allocates the 9 January–5 February 2026 tournament to these two cities, with the first leg at Navi Mumbai and the later fixtures at Vadodara.',
    'turn53search3 turn53search9')
add(119,'C','Mahatma Gandhi',
    'MEA explains that 9 January commemorates Gandhi’s return from South Africa in 1915. The annual observance and biennial convention format are separate matters.',
    'turn59search0',topic='t-0-8')
add(120,'D','1,000 years since the 1026 attack on Somnath',
    'The January official backgrounder explicitly identifies this thousand-year commemoration. A separate May 2026 observance also marks 75 years since the 1951 reopening.',
    'turn59search4 turn59search3')
add(121,'C','Indian Military History: Valour and Wisdom @75',
    'The National Book Trust’s announcement and retrospective fair report give this exact 2026 theme.',
    'turn51search0 turn51search1')
add(122,'B','Bio-bitumen',
    'The 7 January official release attributes the world-first commercial-production claim to the Minister. Subsequent technical material explains pyrolysis of agricultural residue and partial blending with conventional bitumen.',
    'turn51search2 turn51search4','correction_required','Phrase the superlative as According to the 7 January 2026 Ministry announcement; do not present an independently audited global industrial ranking.',topic='t-5-9')
add(123,None,'The original world-ranking premise is not established',
    'Electrification share and absolute electrified route length are different metrics. The July Railways release gives 99.6% broad-gauge electrification and a percentage comparison with Switzerland, not proof that India overtook China and Russia in route length.',
    'turn51search5','held','Specify date, network scope, route-km versus track-km and ranking metric. Do not accept the imported B without comparable international data.',topic='t-2-6')
add(124,None,'Port Blair and Sri Vijaya Puram denote the same city',
    'The original options A and D are old and new names for the same place. Even if the inauguration location is established, these cannot be mutually exclusive answer options.',
    'turn58search6','held','Retrieve the official inauguration release and rename notification, replace one duplicate-location option, then solve the repaired MCQ. The retrieved project-news account is not authentication.',topic='t-2-6')
add(125,'C','Telangana',
    'The Fisheries Ministry locates the Smart Green Aquaculture RAS rainbow-trout farm near Hyderabad. Its directly supported distinction is commercial-scale tropical RAS trout farming, not an unqualified largest inland farm claim.',
    'turn52search0 turn52search1','correction_required','Name the specific farm and its tropical recirculating system; remove largest unless supported by comparable farm data.',topic='t-5-7')
add(126,'B','Operation Absolute Resolve',
    'The White House and Pentagon both identify the 3 January 2026 Venezuela operation by this codename.',
    'turn52search3 turn52search4',topic='t-6-2')
add(127,'C','4 January',
    'The UN calendar lists World Braille Day on 4 January; official explanatory material links the date to Louis Braille’s birth.',
    'turn52search5 turn52search7',topic='t-1-8')
add(128,'D','China is the intended comparison; the date and production basis need reconciliation',
    'Official agricultural material states that India became the largest rice producer with 150.18 million tonnes in crop year 2024–25. That is not a quantity produced during January 2026, and rice/paddy versus milled equivalents must be compared consistently.',
    'turn58search4 turn58search10','held','Obtain the underlying global production table with China, definition and crop year. Do not verify the precise overtaking claim from a report’s publication month alone.',topic='t-2-5')
add(129,'C','Sjoerd Marijne',
    'Hockey India’s coach profile and July 2026 squad announcement identify Marijne as chief coach of the women’s side. These establish the role at a specified time, not indefinitely.',
    'turn50search1 turn50search2','correction_required','Anchor the question to the 2026 appointment/season or July squad announcement.')
add(130,'C','Indian Army and UAE Land Forces',
    'The defence release identifies Desert Cyclone-II in Abu Dhabi, scheduled for 18–30 December 2025, with Indian mechanised-infantry and UAE land-force contingents.',
    'turn50search4',topic='t-1-9')
add(131,'D','The Light & the Lotus: Relics of the Awakened One',
    'The PMO announcement gives this title for the sacred Piprahwa relics exposition at Rai Pithora Cultural Complex, scheduled to open on 3 January 2026.',
    'turn50search5','correction_required','Use scheduled for inauguration on 3 January according to the 1 January release, unless a completion report is cited.',topic='t-0-2')
add(132,'C','Air Marshal Nagesh Kapoor',
    'The Defence Ministry’s 1 January 2026 release directly records Kapoor taking over as Vice Chief of the Air Staff on that date.',
    'turn50search6')
add(133,'B','Nashik–Solapur–Akkalkot',
    'The Cabinet’s 31 December 2025 release approves a 374 km six-lane greenfield corridor in Maharashtra on BOT toll mode. Approval does not mean the corridor was already completed.',
    'turn54search0',topic='t-2-6')
add(134,'C','Magnus Carlsen',
    'FIDE’s official final report records Carlsen’s 10.5/13 score and sixth World Rapid title in Doha in December 2025. The women’s winner was Aleksandra Goryachkina.',
    'turn54search4')
add(135,'B','Pinaka Long Range Guided Rocket, LRGR 120',
    'The 29 December defence release records the maiden LRGR 120 flight at Chandipur with a demonstrated 120 km maximum range. Pralay is a different missile system.',
    'turn54search2',topic='t-5-9')
add(136,'C','INS Vaghsheer',
    'The President’s Secretariat records Murmu’s dived sortie from Karwar on 28 December 2025. She was the second Indian President to undertake a submarine sortie, after A. P. J. Abdul Kalam.',
    'turn54search3')
add(137,'C','Israel, in relation to the post-1991 Republic of Somaliland',
    'The Knesset’s account confirms Israel’s formal recognition in late 2025. The phrase first in the world needs the post-1991 context because the short-lived State of Somaliland existed in 1960.',
    'turn55search0','correction_required','Specify the Republic of Somaliland that declared restored independence in 1991; authenticate the exact 26 December date from the original recognition statement before scored release.',topic='t-1-9')
add(138,'C','Vaibhav Suryavanshi',
    'The Women and Child Development Ministry lists Vaibhav as a 2025 Bal Puraskar sports recipient; the President’s release confirms presentation on 26 December.',
    'turn55search2 turn55search1',locator='WCD 2025 awardee listing and presidential presentation release')
add(139,'C','Sahibzada Zorawar Singh and Sahibzada Fateh Singh',
    'The official Veer Bal Diwas backgrounder identifies the two youngest sons of Guru Gobind Singh whose martyrdom is commemorated on 26 December.',
    'turn55search3')
add(140,'C','Atal Bihari Vajpayee',
    'The official Good Governance Day backgrounder links 25 December to Vajpayee’s birth anniversary.',
    'turn55search4')
add(141,'B','Hardik Singh was reported as nominated, not necessarily awarded',
    'Akashvani’s December bulletin reports Hardik as the selection-panel nominee. Nomination is a distinct stage from the Ministry’s final award announcement; later reporting indicates the final outcome changed.',
    'turn57search0','correction_required','Anchor to the December 2025 nomination report. Check the final Sports Ministry outcome before describing him as the 2025 award winner.')
add(142,'C','23 December',
    'The ICAR’s official Kisan Diwas account records the annual observance on 23 December.',
    'turn57search6',topic='t-2-5')
add(143,'C','Science, technology and innovation',
    'The President’s 2025 award release explains that Rashtriya Vigyan Puraskar recognises scientists, technologists and innovators individually or in teams across these fields.',
    'turn57search4 turn57search5',topic='t-5-8')
add(144,'C','Suryakumar Yadav, for the 2026 T20 World Cup squad',
    'The answer is event-specific: later in 2026 ICC reported Shreyas Iyer’s appointment for subsequent assignments, which cannot replace the World Cup captain retrospectively. The original World Cup squad release still needs direct authentication.',
    'turn15search1 turn57search1','held','Retrieve the BCCI World Cup squad announcement or the tournament squad/scorecard captain field before confirming the key.')
add(145,'C','Srinivasa Ramanujan',
    'Official December 2025 material links National Mathematics Day on 22 December to Ramanujan’s birth anniversary.',
    'turn56search0 turn56search1')
add(146,'C','50% is confirmed in the later official reply; the December 2025 change needs the notification',
    'The July 2026 Home Ministry reply gives 50% reservation for ex-Agniveers, while the 2023 reply gave 10%. This supports the policy levels but does not alone authenticate the exact December 2025 amendment date.',
    'turn60search0 turn56search7','held','Retrieve the BSF recruitment-rule Gazette amendment and effective date before approving the original dated change claim.')
add(147,'C','Vande Mataram',
    'The Parliamentary Affairs Ministry’s session summary records special discussions on its 150th anniversary in both Houses in December 2025.',
    'turn56search3 turn56search5',topic='t-0-8')
add(148,'C','Sultan Haitham bin Tarik',
    'The official 18 December conferment release names Sultan Haitham as the person presenting the Order of Oman. Sultan Qaboos instituted the Order in 1970 but did not present this 2025 award.',
    'turn60search1 turn60search5',topic='t-1-9')
add(149,'C','My Ayush Integrated Services Portal',
    'The PMO’s 18 December 2025 programme announcement names the portal for launch at the summit closing ceremony the following day.',
    'turn59search5','correction_required','State that the portal was scheduled for launch according to the announcement, unless the actual 19 December launch report is cited.',topic='t-5-5')
add(150,'D','Nuclear energy',
    'SHANTI stands for Sustainable Harnessing and Advancement of Nuclear Energy for Transforming India. The official explanation addresses nuclear-sector regulation and participation; the February reply confirms presidential assent on 20 December 2025.',
    'turn59search7 turn59search6',topic='t-5-6')

part=rows[100:]
assert len(part)==50
assert [r['position'] for r in part]==list(range(101,151))
assert len({r['id'] for r in rows})==150
counts=dict(collections.Counter(r['decision'] for r in part))
cumulative=dict(collections.Counter(r['decision'] for r in rows))
ledger={'batchId':'import-review-01','checkedAt':'2026-10-17','part':2,'positions':[101,150],
    'reviewedInPart':50,'counts':counts,'cumulativeReviewed':150,'cumulativeCounts':cumulative,
    'remainingInBatch':228,'unexaminedAcrossTenBatches':3626,'newScoredApprovals':0,
    'policy':'Review decisions only. Confirmed answers have evidence support; corrections and holds are not release-ready. None is automatically eligible for scoring.',
    'items':part}
(ROOT/'docs/QUESTION-REVIEW-BATCH-01-PART02-2026-10-17.json').write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n')
used={e['sourceId'] for r in part for e in r['evidence']}
source_path.write_text(json.dumps({k:source_map[k] for k in sorted(used)},indent=2)+'\n')
lines=['# Batch 1 review, part 2: positions 101–150','',
    '**Partial checkpoint, 17 October 2026:** Batch 1 has 150/378 examined; 228 unexamined. '
    'Across all ten batches, 3,626 are unexamined. The earlier 21 prompts are a separate backlog.','',
    '**This part:** '+', '.join(f'{v} {k.replace("_"," ")}' for k,v in counts.items())+'.','',
    '**Cumulative first 150:** '+', '.join(f'{v} {k.replace("_"," ")}' for k,v in cumulative.items())+'.','',
    'Solutions, corrections, holds and source checks are recorded below. No new scored questions are enabled in this checkpoint. '
    'Where an official order or a precise date was not authenticated, that limitation is explicit; contextual evidence is not passed off as proof.','']
for r in part:
    lines += [f'## {r["position"]}. {r["id"]}','',
        '**Decision:** '+r['decision'].replace('_',' ')+' · **Answer:** '+(r['solvedOption']+' — ' if r['solvedOption'] else '')+r['solution'],'',r['explanation'],'']
    if r['requiredCorrectionOrHoldReason']:lines += ['**Correction / hold:** '+r['requiredCorrectionOrHoldReason'],'']
    lines += ['**Topic:** '+(r['proposedTopicId'] or 'Taxonomy gap: static Indian culture/festivals')+' · **Scope:** '+r['scope'],'',
        '**Evidence:** '+('; '.join(f'[{e["sourceId"]}]({e["url"]})' for e in r['evidence'])+'. '+r['evidence'][0]['locator']+'.' if r['evidence'] else 'No authoritative source authenticated; held.'),'']
lines += ['## Next unresolved work','',
    'Continue Batch 1 at position 151 (current-9b819719a94c-q187). '
    'Earlier held and correction-required decisions also require resolution before scored release. '
    'The exact 150 examined IDs are the first 150 entries of the immutable ten-batch manifest, with one recorded decision each. '
    'No background verification job is scheduled.','']
(ROOT/'docs/QUESTION-REVIEW-BATCH-01-PART02-2026-10-17.md').write_text('\n'.join(lines))
print(json.dumps({k:v for k,v in ledger.items() if k!='items'}))
