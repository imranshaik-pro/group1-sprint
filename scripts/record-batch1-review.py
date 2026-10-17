"""Reproduce the individually authored first-100 review ledger; never approves quiz items."""
from pathlib import Path
import collections
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT/'docs/QUESTION-REVIEW-BATCHES-2026-10-17.json').read_text())
source_registry_path = ROOT/'docs/QUESTION-REVIEW-SOURCES-2026-10-17.json'
sources = json.loads(source_registry_path.read_text())
questions = {q['id']: q for p in (ROOT/'app/imports').glob('*.json') for q in json.loads(p.read_text())['questions']}
rows = []

def add(n, key, answer, explanation, refs, status='confirmed', correction='', topic='t-6-1', scope='PSC common', locator='Main factual statement in the cited release/report'):
    qid = manifest['batches'][0]['questionIds'][n-1]
    q = questions[qid]
    evidence = []
    for ref in refs.split():
        assert ref in sources, (n, ref)
        evidence.append({'sourceId': ref, 'url': sources[ref]['url'], 'locator': locator})
    assert status in ('confirmed', 'correction_required', 'held')
    assert status == 'confirmed' or correction
    rows.append({'position': n, 'id': qid, 'batch': 'import-review-01', 'reviewedAt': '2026-10-17',
        'decision': status, 'solvedOption': key, 'solution': answer, 'explanation': explanation,
        'requiredCorrectionOrHoldReason': correction, 'proposedTopicId': topic,
        'scope': scope, 'evidence': evidence,
        'sourceTextSha256': hashlib.sha256((q['prompt']+'\n'+q['answer']).encode()).hexdigest(),
        'releaseStatus': 'not_integrated', 'scoredEligible': False})

add(1,'A','West Bengal, Tamil Nadu, Kerala, Assam and Puducherry',
    'The ECI schedule covers these four states and one Union Territory. Andhra Pradesh and Telangana are not part of that set.',
    'turn7search0 turn7search1',topic='t-6-1',locator='ECI schedule heading; PIB 2 April 2026 poll-date table')
add(2,'C','Odisha',
    'DRDO launched two Pralay missiles from the same launcher off Odisha on 31 December 2025. The question concerns the test location, not the Hyderabad development laboratory.',
    'turn7search3',topic='t-5-9')
add(3,'B','Kakinada is the intended nearest option; exact landfall wording needs the final IMD record',
    'The retrieved IMD bulletin forecasts crossing around Kakinada. A forecast alone does not prove where landfall actually occurred; later accounts distinguish the area south of Kakinada near Narsapur.',
    'turn7search6 turn22search1','held','Retrieve and reconcile the final IMD cyclone report before approving the stated actual landfall and date.',topic='t-3-9',scope='AP-specific event; wider cyclone study relevance')
add(4,'C','Southern Naval Command, Kochi',
    'The Ministry of Defence announcement identifies Kochi for the eighth bilateral EOD exercise, scheduled for 10–14 August 2026.',
    'turn7search4','correction_required','Use: According to the 9 August 2026 announcement, where was the eighth India–US EOD exercise scheduled? The retrieved announcement is prospective, not a completion report.',topic='t-1-9')
add(5,None,'The imported A is not approved as written',
    'The parliamentary bill proposes inserting Amaravati in section 5(2), effective 2 June 2024. Its own account says Hyderabad was a common capital for up to ten years. The broad statement about ending all uncertainty is not a precise legal proposition.',
    'turn8search10','held','Check the enacted Gazette text, assent and commencement. Rewrite subjective statement 2 and preserve the 2014–2024 common-capital distinction; a passed Bill alone is insufficient.',topic='t-1-6',scope='AP-specific')
add(6,'D','All four statements, with the wind statement clarified',
    'October–November is the retreating-monsoon season. Southern peninsular rainfall includes Tamil Nadu and coastal Andhra Pradesh; this should not suggest that southwest winds physically retrace an identical path.',
    'turn23view0','correction_required','Replace statement 2 with: Northeasterly seasonal flow from land towards the Bay can pick up moisture and bring rain to the southeast coast. Reclassify from current events to climate.',topic='t-3-1',locator='NCERT Climate, Season of Retreating Monsoon, PDF pp. 11–12')
add(7,'A','Statements 1, 2 and a corrected statement 3',
    'Krishna originates near Mahabaleshwar and flows east to the Bay of Bengal. Its basin includes Maharashtra, Karnataka, Telangana and Andhra Pradesh; Tungabhadra is a tributary. Statement 4 is false.',
    'turn9search6','correction_required','Add Telangana to statement 3 and the explanation. Reclassify to rivers. Confirm the tributary detail against the basin chapter before scored release.',topic='t-3-3',locator='CWC basin description and state-wise drainage-area table')
add(8,'D','All four pairs are the likely intended answer; not fully verified in this pass',
    'The pairings describe familiar flood patterns. A third-party NCERT transcription matches the list, but the complete original NCERT chapter was not retrieved from its official host in this pass.',
    'turn22search9 turn24search7','held','Verify every pairing, especially Punjab flash floods, against a complete primary text. Do not treat a matching secondary transcription as completed authentication.',topic='t-3-9')
add(9,'B','David Noble Relays',
    'The March 2026 meet was held in San Angelo, Texas. The reported winning total of 7,947 was wind-assisted and must not be called a ratified national decathlon record.',
    'turn9search4 turn9search5',locator='World Athletics meet listing, 26–28 March 2026; Akashvani results report')
add(10,'B','Gautam Buddha Nagar',
    'The official inauguration itinerary locates Noida International Airport at Jewar, Gautam Buddha Nagar, Uttar Pradesh. The inauguration release confirms the 28 March event.',
    'turn14search1 turn14search0',topic='t-2-6')
add(11,'C','10 teams',
    'The official league schedule lists ten distinct franchises. The official first-phase release starts the season on 28 March and the playoff advisory schedules the final on 31 May 2026.',
    'turn24search6 turn24search1 turn24search0',locator='Official schedule: distinct home/away franchise names; opening and final-date announcements')
add(12,'B','India — 7.6% for FY 2025–26 in the March 2026 Outlook',
    'OECD paragraph 20 gives 7.6% for FY 2025–26, then 6.1% for FY 2026–27 and 6.4% for FY 2027–28. The 7.6% figure must retain its report edition and financial year; it is not a timeless current forecast.',
    'turn14search2',topic='t-6-4',locator='OECD March 2026 Interim Outlook, Projections, paragraph 20')
add(13,'C','Balendra Shah',
    'Nepal’s Prime Minister’s Office records his assumption of office on 27 March 2026. India’s same-day congratulatory release independently corroborates the appointment.',
    'turn24search4','correction_required','Ask who assumed office on 27 March 2026; omit the unverified youngest-elected-PM superlative.',topic='t-6-2')
add(14,'B','Gujarat',
    'The 25 March 2026 Home Ministry release says Gujarat followed Uttarakhand in passing its UCC Bill. Passing a Bill must not be conflated with its commencement or universal applicability.',
    'turn6search7','correction_required','Anchor to the 25 March official release unless the precise 24 March passage date is separately confirmed from Assembly records.',topic='t-1-6')
add(15,'C','Approximately 33%, more precisely as nearly as may be one-third',
    'The 106th Amendment provides women’s reservation in the Lok Sabha and State Assemblies. A question about the reserved fraction must not imply seats were already operationally reserved in every election.',
    'turn45search3',topic='t-1-3',locator='PMO release, 12 April 2026: one-third reservation under the 2023 Act')
add(16,'C','Pawan Kumar Chamling',
    'The 22 March 2026 official statement compares Modi’s combined head-of-government tenure with former Sikkim Chief Minister Chamling’s 8,930 days. This is not a comparison of Prime Minister tenure alone.',
    'turn10search2')
add(17,'C','Iranian/Persian calendar',
    'Nowruz marks the Persian new year around the spring equinox. Parsi observances use different calendar traditions, so a universal March 21 Parsi-New-Year claim conflates distinct observances.',
    'turn10search3','correction_required','Use: Nowruz, associated with the spring equinox and International Nowruz Day, marks the new year in which calendar tradition? Retain C.',topic=None)
add(18,'C','Shawwal',
    'Eid-ul-Fitr falls on 1 Shawwal, immediately after Ramadan. The Gregorian date can vary by lunar observation; the Islamic month does not change.',
    'turn19search4',topic=None)
add(19,'D','Vikram Samvat 2083',
    'The official 19 March 2026 greeting explicitly names Vikram Samvat 2083. India has multiple regional and religious new-year traditions, so Hindu New Year should not be presented as one universal date.',
    'turn10search5','correction_required','Specify the Chaitra/Nav Samvatsar observance referred to in the 19 March 2026 greeting.',topic=None)
add(20,'B','The indoor athletics facility at Kalinga Stadium, Bhubaneswar',
    'World Athletics awarded the 2028 indoor championships to Odisha; its calendar specifies Kalinga Indoor Stadium, Bhubaneshwar, 3–5 March 2028.',
    'turn20search0 turn20search8','correction_required','Make option B explicitly Kalinga Indoor Stadium/facility, Bhubaneswar. This is a scheduled future event, not a completed championship.')
add(21,'B','Plug-and-play industrial parks',
    'The Cabinet’s 18 March 2026 BHAVYA release approves development of 100 plug-and-play industrial parks. Export processing zones and IT-only SEZs do not describe the scheme.',
    'turn11search2',topic='t-2-6')
add(22,'C','One Battle after Another',
    'The Academy’s official 98th Oscars winners list marks this film as the Best Picture winner, distinct from Sinners and Frankenstein, which appear in other categories.',
    'turn11search5',locator='98th Oscars 2026: Best Picture, Winner')
add(23,'B','Dal Lake',
    'Jammu and Kashmir Tourism Development Corporation places the Srinagar tulip garden beside Dal Lake. This location is independently established without needing an opening-day claim.',
    'turn11search4','correction_required','Remove the March 2026 opening clause unless verified from the opening announcement; ask the stable location fact.',topic='t-3-2')
add(24,'B','Mamta Kalia',
    'Sahitya Akademi’s official 2025 award table lists the Hindi memoir Jeete Jee Allahabad and its author Mamta Kalia.',
    'turn14search5',locator='Annexure A, Hindi row')
add(25,'B','Iran and Oman',
    'The strait connects the Persian Gulf to the Gulf of Oman, between Iran and Oman. Oil-flow shares depend on year and denominator, and restricted traffic is not equivalent to an absolute continuous closure.',
    'turn14search4','correction_required','Ask the stable geographical location; remove undated trade percentages and the blanket closure assertion.',topic='t-3-2')
add(26,'B','Disruption of imports through the Strait of Hormuz is the intended cause',
    'March government briefings discuss West Asia supply disruption while prioritising household LPG and report Indian LPG carriers crossing the strait. A universal domestic shortage and completely closed strait are overstatements.',
    'turn19search2 turn19search3','correction_required','Ask which international disruption put pressure on LPG imports in March 2026. Replace option B closure with disruption/restriction of shipping. Remove unsupported 25-day delays and universal shortage claims.',topic='t-2-6')
add(27,'C','Shubman Gill',
    'BCCI identifies Gill for the Polly Umrigar Award for Best International Cricketer (Men), covering the 2024–25 performance season, at the 2026 Naman ceremony. Smriti Mandhana is the separate women’s winner.',
    'turn12search0','correction_required','Name the men’s Polly Umrigar category and the performance season; do not use an unqualified Cricketer of the Year label.',locator='BCCI 14 March 2026 advisory, Best International Cricketer paragraph')
add(28,'B','New Delhi',
    'World Para Athletics lists New Delhi competition dates as 11–13 March 2026; classification takes place on 8–10 March. These are distinct parts of the programme.',
    'turn12search2 turn12search6')
add(29,'C','Common Cause v. Union of India (2018)',
    'The Supreme Court’s Harish Rana summary links dignified withdrawal of treatment to Common Cause and Article 21. The medical condition is an irreversible vegetative state, which should not be casually equated with every long-term coma.',
    'turn19search1','correction_required','Use the Court’s terminology: irreversible vegetative state and withdrawal of clinically assisted nutrition/hydration under safeguards. Retain C.',topic='t-1-4',locator='Harish Rana, 2026 INSC 222, factual background and questions')
add(30,'B','Up to 10% non-controlling beneficial ownership',
    'The March Cabinet decision applies the beneficial-owner test at investor-entity level. The automatic route remains subject to sectoral caps, entry routes, conditions and reporting; it is not blanket approval for all investments.',
    'turn12search5 turn12search3','correction_required','Include the sectoral and reporting conditions and distinguish Cabinet approval in March from the 1 May 2026 notified rules.',topic='t-2-6')
add(31,'B','150 kilograms',
    'The DRDO/Indian Navy release explicitly describes a 150 kg payload for ADC-150 and four release trials from P8I off Goa between 21 February and 1 March 2026.',
    'turn13search0',topic='t-5-9')
add(32,'A','Exercise Lamitiye',
    'The defence release identifies the eleventh India–Seychelles Lamitiye at Seychelles Defence Academy, 9–20 March 2026. The conclusion report confirms the maiden tri-service participation.',
    'turn13search1 turn13search9',topic='t-1-9')
add(33,'C','Zojila Pass',
    'Akashvani’s report quoting the BRO project chief says the pass operated for an unusually long winter period but was closed for four days. That contradicts the imported explanation’s uninterrupted-connectivity wording.',
    'turn24search3','correction_required','Remove first-ever and continuously/uninterruptedly open claims. Attribute the unusually long winter operation to the 9 March 2026 BRO-account report.',topic='t-3-2')
add(34,'C','10 March 1969',
    'India Code gives 10 March 1969 as the CISF Act’s enforcement date. The enactment year is 1968, which explains the distractor but is not the force’s raising date.',
    'turn17search3',locator='India Code Act details: enforcement date and notification')
add(35,'C','India — 2026 ICC Men’s T20 World Cup',
    'ICC’s final scorecard records India 255/5, New Zealand 159 and India’s 96-run victory on 8 March 2026. The event year must be in the question because Australia also defeated New Zealand in the 2021 final.',
    'turn15search0 turn15search1','correction_required','Insert 2026 in the stem. Without a year, more than one offered team has defeated New Zealand in a men’s T20 World Cup final.')
add(36,'B','Lin Chun-yi',
    'The title sponsor’s event report names Lin as the 2026 All England men’s singles champion. Taiwan’s official overseas-affairs report confirms his final win over Lakshya Sen.',
    'turn17search8 turn26search3')
add(37,'C','Mojtaba Khamenei',
    'The US Government Publishing Office’s March 2026 presidential record identifies Mojtaba as Iran’s Supreme Leader and son of Ali Khamenei. This is an event-dated succession question, not a claim about an unspecified future incumbent.',
    'turn18search6','correction_required','Anchor the question explicitly to the March 2026 succession.',topic='t-6-2',locator='DCPD-202600217, editorial notes identifying the office holder')
add(38,'B','Anuj Agnihotri',
    'UPSC’s official CSE 2025 final-result merit list places Anuj Agnihotri first, followed by Rajeshwari Suve M and Akansh Dhull. College labels are unnecessary to establish rank.',
    'turn15search7',locator='Official final result, merit list serial numbers 1–3')
add(39,None,'Ambiguous: Balendra Shah is a senior leader; Rabi Lamichhane is party president',
    'Nepal’s PM Office calls Shah a senior RSP leader. RSP’s own office-bearer list identifies Rabi Lamichhane as president. The generic leader wording does not distinguish the offices.',
    'turn24search4 turn25search2','held','Replace leader with either prime-ministerial candidate or party president. If asking party president, none of the original options is correct.',topic='t-6-2')
add(40,'B','Shiv Pratap Shukla',
    'The President’s 5 March 2026 communique appoints Shukla Governor of Telangana. The appointment notification date must be distinguished from assuming charge.',
    'turn17search0',topic='t-1-5',locator='5 March 2026 communique, paragraph 2(i)')
add(41,'A','Jishnu Dev Varma',
    'The same presidential communique transfers Jishnu Dev Varma from Telangana to Maharashtra as Governor. This is the March appointment, not a timeless incumbent query.',
    'turn17search0',topic='t-1-5',locator='5 March 2026 communique, paragraph 2(ii)')
add(42,'C','Narendra Modi Stadium, Ahmedabad',
    'The ICC final match record gives Ahmedabad’s Narendra Modi Stadium as the venue on 8 March 2026. Eden Gardens hosted a different match, not this final.',
    'turn15search2',locator='ICC final match record: venue and date')
add(43,'C','Hiranyakashipu',
    'NCERT’s art-education module describes Prahlad as Hiranyakashipu’s son and a devotee of Vishnu in its explanation of the Narasimha sculpture. This is a traditional narrative, not an asserted historical event.',
    'turn28search7',topic=None,locator='Module 6: Narasimha/Hiranyakashipu sculpture panel')
add(44,'D','Jammu and Kashmir',
    'BCCI’s final record shows a drawn Karnataka–Jammu and Kashmir final, won by Jammu and Kashmir on first-innings advantage. A draw therefore did not make them joint champions.',
    'turn16search5',locator='Ranji Trophy final, Hubli, 24–28 February 2026: result')
add(45,None,'Uranium supply agreement, approximately CAD 2.6 billion; no exact original option',
    'The Canada–India joint statement explicitly uses CAD 2.6 billion. Cameco also specifies Canadian dollars unless otherwise stated. The original option C incorrectly says USD and the stem’s most significant ranking is subjective.',
    'turn28search0 turn28search2','correction_required','Replace USD with CAD in option C and ask which civil-nuclear supply agreement was welcomed, rather than ranking its significance. After correction, C is correct.',topic='t-1-9',locator='Canada–India 2 March 2026 joint statement paragraph 3; Cameco currency heading')
add(46,'C','United States and Israel, in the broader joint operation',
    'The US official record dates Ali Khamenei’s death to an Israeli airstrike on 28 February 2026; a Congressional resolution describes the wider US–Israel operation. Attribute the specific strike precisely.',
    'turn25search0 turn25search6','correction_required','Ask which countries conducted the wider February operation; explain that the specific fatal strike is described as Israeli. Do not assert both forces performed the same strike.',topic='t-6-2')
add(47,'D','Sanju Samson',
    'ICC records West Indies 195/4 and India 199/5, with Samson unbeaten on 97. The target was 196; India’s completed score was 199, so these figures are not contradictory.',
    'turn26search0')
add(48,'C','Special Strategic Partnership for Peace, Innovation and Prosperity',
    'The official 26 February 2026 India–Israel statement uses this full title. The shorter option Special Strategic Partnership is the matching answer.',
    'turn16search2 turn16search3',topic='t-1-9')
add(49,None,'Durand Line dispute is intended, but Pashtunistan is also historically relevant',
    'The historical diplomatic document records Pakistan–Afghanistan disagreement over the Durand Line. The offered Pashtunistan movement also concerns long-standing bilateral tensions, so the generic historical-issue stem is not uniquely discriminating.',
    'turn18search9','held','Ask specifically which disputed boundary separates Afghanistan and Pakistan, then B is unique. Do not approve the original broad stem.',topic='t-1-9')
add(50,'C','Knesset',
    'The official 25 February 2026 release explicitly identifies Modi as the first Indian Prime Minister to address Israel’s Parliament. A visit to Israel in 2017 does not establish an earlier Knesset address.',
    'turn20search3',topic='t-1-9')

add(51,'C','Vajra Prahar',
    'The defence announcement names the sixteenth India–US Special Forces exercise at Bakloh, scheduled for 24 February–16 March 2026. Yudh Abhyas is a different exercise.',
    'turn29search0',topic='t-1-9')
add(52,'B','Keralam',
    'The Cabinet approved a renaming proposal on 24 February 2026. The release sets out subsequent Article 3 referral and parliamentary steps; Cabinet approval alone does not complete a constitutional state-name change.',
    'turn29search1',topic='t-1-6')
add(53,'C','Japan',
    'The seventh Dharma Guardian began at Chaubattia on 24 February 2026 with Indian Army and Japan Ground Self-Defense Force contingents.',
    'turn29search2',topic='t-1-9')
add(54,'C','Boong',
    'BAFTA’s official 2026 winners announcement places Boong in Children’s & Family Film. Animated Film is a separate category won by Zootropolis 2.',
    'turn29search3 turn29search4',locator='BAFTA 22 February 2026 official winners, Children’s & Family Film')
add(55,'D','One Battle After Another',
    'BAFTA’s official announcement credits the film with six awards, including Best Film, Director and Adapted Screenplay. The Oscars are a separate awards ceremony.',
    'turn29search3',locator='BAFTA official 2026 winners announcement, headline results')
add(56,'C','Deny terrorist access to financing, weapons and support',
    'PRAHAAR’s prevention section addresses disruption of financial and logistical support and illegal-arms links. The strategy also stresses rule-of-law processes and international cooperation, contradicting the other choices.',
    'turn42view0','correction_required','Use funds, weapons and logistical support, which the cited prevention section directly supports; check a separate policy passage before retaining the precise safe-havens phrase.',topic='t-6-3',locator='PRAHAAR official policy, printed page 4: Prevention of Terror Attacks')
add(57,'B','Delhi–Meerut',
    'The February 2026 PMO release concerns dedication of the entire Delhi–Meerut Namo Bharat corridor and the Meerut Metro. The initial priority RRTS section had begun earlier, so first launch in February 2026 is misleading.',
    'turn30search3 turn30search5','correction_required','Ask which entire corridor was dedicated in February 2026, instead of dating the initial RRTS launch to that month.',topic='t-2-6')
add(58,'B','Vijay Goel',
    'The Vice-President’s Secretariat names Vijay Goel as author of the coffee-table book. C. P. Radhakrishnan released the book and is not its author.',
    'turn30search4')
add(59,'C','20 February',
    'The UN observes World Day of Social Justice annually on 20 February. Human Rights Day on 10 December is a different observance.',
    'turn30search8',topic='t-1-8')
add(60,'B','1 April 2026 was the proposed date',
    'NHAI’s 20 February announcement contemplated ending cash toll payments from 1 April. A proposal does not prove nationwide implementation occurred on that date.',
    'turn31search0','correction_required','Add According to NHAI’s 20 February 2026 proposal. Preserve proposed rather than implemented language.',topic='t-2-6')
add(61,'B','Responsible, trusted and inclusive AI through global cooperation',
    'The New Delhi Declaration announcement emphasises collaborative, trusted, resilient and efficient AI for economic growth and social good. It does not confine AI to military use, developed countries or industry.',
    'turn31search2',topic='t-5-5')
add(62,'B','Dr. Shashi Tharoor',
    'The official book-launch record identifies Tharoor as author. Vice-President Radhakrishnan was the person releasing the book, which is a common author-versus-launcher distractor.',
    'turn31search3 turn31search6')
add(63,'B','17 February',
    'UN General Assembly resolution 77/269, operative paragraph 2, proclaims 17 February as Global Tourism Resilience Day.',
    'turn44search8',locator='A/RES/77/269, operative paragraph 2')
add(64,'B','AI impact for inclusive and sustainable development',
    'The official declaration frames AI around broad access and social/economic benefit. Official material distinguishes summit sessions from the extended programme, so the imported 16–20 February date range should not be treated as a definitive record of every event.',
    'turn31search2 turn31search5','correction_required','Ask the main objective of the February 2026 summit without an uncertain programme date range.',topic='t-5-5')
add(65,'C','Tarique Rahman',
    'The 13 February 2026 PMO release congratulates Tarique Rahman on leading the BNP to its parliamentary-election victory. The question is anchored to that election, not an unspecified future leadership position.',
    'turn32search0',topic='t-6-2')
add(66,'C','Prime Minister’s Office',
    'The Cabinet’s official transition note identifies the new PMO as Seva Teerth. Other institutions may share the wider complex; the new PMO name is the fact being tested.',
    'turn32search2',topic='t-1-3')
add(67,'D','Pakistan',
    'ICC’s 9 February 2026 statement confirms Pakistan’s participation in all scheduled matches, including India on 15 February in Colombo.',
    'turn32search4')
add(68,'C','Expand dairy cooperatives, milk procurement, employment and women’s empowerment',
    'The Ministry of Cooperation describes White Revolution 2.0 as a cooperative-led expansion, including increased procurement and coverage. It is not privatisation or a reduction of milk production.',
    'turn32search3',topic='t-2-5')
add(69,'D','Men’s heptathlon',
    'World Athletics lists Shankar first in the men’s indoor heptathlon in Tianjin on 6–8 February 2026. Indoor heptathlon should not be confused with outdoor decathlon.',
    'turn35search0 turn35search1')
add(70,'B','45th',
    'The NRI publisher’s India profile places India 45th among 127 economies. The February release date is confirmed by the publisher and PIB; 49th refers to the previous edition.',
    'turn35search8 turn35search7 turn35search6',topic='t-6-4')
add(71,'C','Sanae Takaichi; her initial appointment was in October 2025',
    'Japan’s PM Office records Takaichi’s designation and cabinet inauguration on 21 October 2025. The original claim that she first became female PM after the 2026 election misdates the milestone.',
    'turn35search4 turn35search5','correction_required','Replace the first-appointment date with 21 October 2025. Distinguish any later election or reappointment from first becoming PM.',topic='t-6-2')
add(72,'B','5.25%, at the February 2026 MPC meeting',
    'RBI’s 6 February resolution keeps the repo rate at 5.25%, SDF at 5.00% and MSF/Bank Rate at 5.50%. These are separate policy rates; the answer is tied to that meeting.',
    'turn43view0','correction_required','Replace current repo rate with repo rate decided at the 4–6 February 2026 meeting. It is not a claim about today’s rate.',topic='t-2-1',locator='RBI resolution dated 6 February 2026, paragraph 2')
add(73,'B','England',
    'ICC’s final report records India beating England by 100 runs at Harare Sports Club on 6 February 2026 for its sixth men’s U19 title.',
    'turn33search0 turn33search1')
add(74,'C','Rouble Nagi',
    'The award organiser identifies Rouble Nagi as the 2026 Global Teacher Prize winner. The prize is an initiative of the Varkey Foundation organised in collaboration with UNESCO.',
    'turn33search5',topic='t-1-8')
add(75,'C','Yumnam Khemchand Singh',
    'The PMO’s 4 February 2026 congratulations name Khemchand Singh as the newly sworn-in Manipur Chief Minister. To verify the full premise, the revocation of President’s Rule needs its own legal notification.',
    'turn33search3','correction_required','Ask who took oath as Manipur CM on 4 February 2026; omit the revocation clause until the official notification is checked.',topic='t-1-5')
add(76,'C','Long-range air-to-air missiles',
    'The DRDO release states that SFDR technology enables development of long-range air-to-air missiles. Demonstrating propulsion technology does not itself mean a finished operational missile was inducted.',
    'turn41search1',topic='t-5-9')
add(77,'C','Kyrgyzstan',
    'The official defence announcement identifies the thirteenth India–Kyrgyzstan KHANJAR at Missamari, Assam, beginning 4 February 2026.',
    'turn34search0',topic='t-1-9')
add(78,'C','Ramsar Convention / Convention on Wetlands',
    'The Convention Secretariat explains that World Wetlands Day marks adoption of the Convention on 2 February 1971 in Ramsar, Iran.',
    'turn34search4',topic='t-3-8')
add(79,'C','18% in the announced February 2026 framework',
    'The US–India joint statement specifies an 18% reciprocal tariff on specified originating Indian goods, with conditions and potential exclusions. It is not a uniform tariff on all goods, nor a timeless rate.',
    'turn34search3','correction_required','Specify the 6 February 2026 interim-agreement framework and the announced reciprocal rate on covered goods. Do not describe negotiations as a fully concluded comprehensive trade treaty.',topic='t-1-9',locator='Joint statement: key terms, reciprocal tariff bullet')
add(80,'D','Haryana Thunders',
    'The league organiser’s 2 February 2026 report records Haryana’s 5–4 final win over Delhi Dangal Warriors at Noida Indoor Stadium.',
    'turn34search8')
add(81,'C','Patna Bird Sanctuary and Chhari Dhand',
    'The Convention Secretariat’s 30 January 2026 announcement identifies these additions. Patna Bird Sanctuary is in Uttar Pradesh, not Bihar; Chhari Dhand is in Gujarat.',
    'turn36search0 turn36search2',topic='t-3-8')
add(82,'C','India’s indigenous Automatic Train Protection system',
    'Railways describes Kavach 4.0 as indigenous ATP. It monitors movements and can apply brakes to prevent signal-passed-at-danger events and collisions; it is not a fare system.',
    'turn36search1 turn36search5',topic='t-5-9')
add(83,'D','Article 21 — right to life and personal liberty',
    'The Jaya Thakur judgment treats dignified menstrual health as part of Article 21. Its analysis also uses equality under Article 14 and education under Article 21A, so these related provisions should not be denied in the explanation.',
    'turn42search10','correction_required','Ask specifically which provision’s right-to-life guarantee grounds dignified menstrual health. Preserve the judgment’s additional equality and education dimensions.',topic='t-1-1',locator='2026 INSC 97, section C, printed pages 45–71')
add(84,'C','Constitutional concerns, including vague/exclusionary provisions, are the intended answer',
    'The retrieved order transcription discusses the 2026 UGC Regulations and challenges to the caste-discrimination definition. The official signed order and latest procedural status were not authenticated here.',
    'turn36search3','held','Retrieve the Supreme Court’s signed 29 January order and subsequent orders. Do not convert reported concerns at an interim hearing into a final finding of invalidity.',topic='t-1-4')
add(85,'C','Indian Navy — judges’ award',
    'The official results separate three-services judging from other categories and the popular-choice poll. Navy won the judges’ three-services category.',
    'turn39search0 turn39search1','correction_required','Specify the judges’ award among the three services at Republic Day Parade 2026, to avoid confusion with popular-choice results.')
add(86,'D','Delhi Police — judges’ CAPF/auxiliary category',
    'The official judging results name Delhi Police in the CAPF/other auxiliary forces category. This is distinct from the popular-choice category.',
    'turn39search0 turn39search1','correction_required','Specify judges’ award and the CAPF/other auxiliary category.')
add(87,'B','Maharashtra',
    'The panel of judges placed Maharashtra’s Ganeshotsav tableau first among states and UTs, followed by Jammu and Kashmir and Kerala.',
    'turn39search0','correction_required','Specify the judges’ state/UT tableau ranking, rather than an unspecified audience poll.')
add(88,'C','Baramati Airport',
    'AAIB’s preliminary report identifies accident aircraft VT-SSK and Baramati on 28 January 2026. A preliminary report should not be used to invent a final cause of the crash.',
    'turn39search8',locator='AAIB preliminary-report title and occurrence particulars')
add(89,'D','Mother of all deals',
    'The official 27 January trade factsheet uses that descriptive phrase for the conclusion of India–EU FTA negotiations. The phrase is a political/communications label, not the treaty’s legal name or proof it entered into force.',
    'turn39search5 turn39search4',topic='t-1-9')
add(90,'B','Inclusion of OBC students is the imported/intended answer; comparison not authenticated',
    'A valid comparison requires reading the actual 2012 and 2026 regulatory definitions and the subsequent court orders. The sources retrieved in this pass did not establish that full comparison on an official host.',
    'turn36search3','held','Retrieve both Gazette/UGC texts, identify exact clauses and distinguish promulgation from stayed operation. Do not treat the imported comparison as independently verified.',topic='t-1-8')
add(91,'B','Group Captain Shubhanshu Shukla',
    'The Defence Ministry’s Republic Day gallantry list names Shukla for the Ashoka Chakra. Ashoka Chakra and wartime Param Vir Chakra are different decorations.',
    'turn37search0',locator='25 January 2026 gallantry-awards release: Ashoka Chakra row')
add(92,'C','Scotland',
    'ICC’s 24 January 2026 announcement formally replaces Bangladesh with Scotland in the men’s T20 World Cup 2026.',
    'turn37search2')
add(93,'B','Dharmendra Singh Deol, posthumously',
    'The official Padma Awards 2026 material names Dharmendra for Padma Vibhushan in Art, posthumously. The later Gazette notification confirms conferral; do not confuse notification and January announcement dates.',
    'turn37search5 turn37search4',locator='Padma Vibhushan 2026, Dharmendra Singh Deol row')
add(94,'C','Visakhapatnam — January 2026, not January 2025',
    'Railways’ 23 January 2026 release identifies the deployment at Visakhapatnam. The original stem’s year 2025 is wrong.',
    'turn37search1','correction_required','Change January 2025 to January 2026 in the stem and explanation.',topic='t-5-5')
add(95,'C','Netaji Subhas Chandra Bose',
    'The Ministry of Culture identifies Parakram Diwas with Netaji’s birth anniversary on 23 January.',
    'turn38search0 turn38search1',topic='t-0-8')
add(96,'C','Goddess Saraswati',
    'The official Basant Panchami greeting invokes Saraswati as the deity of knowledge and arts. This identifies the religious tradition tested, without asserting a historical supernatural event.',
    'turn38search4',topic=None)
add(97,'C','Mughal Gardens',
    'The Ministry of Tourism’s Incredible India page explicitly introduces Amrit Udyan as formerly known as the Mughal Gardens.',
    'turn42search5')
add(98,'B','Nawang Dorjan Stobdan (NDS) Stadium, Leh',
    'The Sports Ministry’s 20 January release places the sixth Khelo India Winter Games opening at NDS Stadium. This was the Ladakh ice-sports leg; Gulmarg hosts the separate snow leg.',
    'turn38search5')
add(99,'B','Surendra Kumar Pachauri',
    'The Vice-President’s release names Pachauri as author of Chalice of Ambrosia. The official who launched it is not the author.',
    'turn40search0 turn40search1')
add(100,'C','Davos',
    'The organiser identifies Davos-Klosters as the location of its 2026 Annual Meeting. Traditional location does not mean every exceptional past meeting had to be held there.',
    'turn40search3',topic='t-6-2')

assert [r['position'] for r in rows] == list(range(1, 101))
assert len({r['id'] for r in rows}) == 100
assert all(r['id'] == manifest['batches'][0]['questionIds'][r['position']-1] for r in rows)
counts = dict(collections.Counter(r['decision'] for r in rows))
ledger = {'batchId': 'import-review-01', 'checkedAt': '2026-10-17', 'assigned': 378,
    'reviewed': len(rows), 'remainingInBatch': 278, 'counts': counts,
    'allTenBatchesTotal': 3776, 'unexaminedAcrossTenBatches': 3676,
    'scoredBankNewApprovals': 0,
    'policy': 'Independent answer review with cited evidence. Confirmed means the substantive answer has source support; it does not auto-approve scoring. Correction-required items need repaired stems/options. Held items are unresolved. No batch is fully verified.',
    'method': 'Read original stem/options; formulate answer and explanation; compare authoritative evidence with imported claims; record caveats, dates, corrections and topic proposals. No imported key was bulk-promoted.',
    'items': rows}
(ROOT/'docs/QUESTION-REVIEW-BATCH-01-2026-10-17.json').write_text(json.dumps(ledger, ensure_ascii=False, indent=2)+'\n')
# Persist only evidence references actually used, retaining original immutable source IDs.
used = {e['sourceId'] for r in rows for e in r['evidence']}
source_registry_path.write_text(json.dumps({k: sources[k] for k in sorted(used)}, indent=2)+'\n')
lines = ['# Batch 1: independently solved questions and source checks', '',
    '**Partial review, 17 October 2026:** 100 of 378 questions examined; 278 not yet examined. '
    'Across all ten batches, 3,676 questions are still unexamined. '
    'The 21 prompts from the earlier collection remain outside this plan.', '',
    '**Decisions:** '+', '.join(f'{n} {s.replace("_", " ")}' for s,n in counts.items())+'. '
    'No new questions were added to scored practice in this documentation-only checkpoint. '
    'Existing 50 approved imports are unaffected.', '',
    'Confirmed means the answer has source support. Correction required means the original question is not release-ready. '
    'Held means an ambiguity or authentication gap remains. All dates/figures are tied to the referenced event or publication; '
    'historical questions are not silently replaced with a different year’s latest answer. '
    'A current publisher page is not a guarantee that every assertion is correct: date, scope and wording are checked separately.', '',
    'Topic proposals with no existing topic ID identify a syllabus taxonomy gap (for example static festivals/culture); '
    'they must not be forced into an unrelated topic. Shared-PSC applicability concerns general knowledge relevance, '
    'not a promise of identical state syllabuses.', '',
    '## Item-level solutions', '']
for r in rows:
    q = questions[r['id']]
    # Original bilingual text remains immutable in app/imports, addressed by ID/hash.
    lines += [f'### {r["position"]}. {r["id"]}', '',
        f'**Decision:** {r["decision"].replace("_", " ")} · **Answer:** '+(r['solvedOption']+' — ' if r['solvedOption'] else '')+r['solution'], '',
        r['explanation'], '']
    if r['requiredCorrectionOrHoldReason']:
        lines += ['**Correction / hold:** '+r['requiredCorrectionOrHoldReason'], '']
    lines += ['**Topic:** '+(r['proposedTopicId'] or 'Taxonomy gap: static Indian culture/festivals')+' · **Scope:** '+r['scope'], '',
        '**Evidence:** '+'; '.join(f'[{e["sourceId"]}]({e["url"]})' for e in r['evidence'])+'. '+r['evidence'][0]['locator']+'.', '']
lines += ['## Reconciliation and next checkpoint', '',
    'Assignments remain fixed in QUESTION-REVIEW-BATCHES-2026-10-17.json. Continue Batch 1 at position 101 '
    '(current-9b819719a94c-q125), then return to held/correction-required entries. '
    'The JSON ledger includes original prompt+answer SHA-256 hashes so changes cannot silently invalidate a check. '
    'No automated background verification is scheduled and the remaining batches are not claimed complete.', '',
    'Validation: exactly 100 unique assigned IDs in positions 1–100, original-source hashes, nonempty explanations, '
    'source-reference resolution and complete status accounting. Original imported answers and the scored bank were not changed.', '']
(ROOT/'docs/QUESTION-REVIEW-BATCH-01-2026-10-17.md').write_text('\n'.join(lines))
print(json.dumps({'reviewed': len(rows), 'counts': counts, 'remainingInBatch': 278, 'unexaminedTotal': 3676, 'evidenceSources': len(used)}))
