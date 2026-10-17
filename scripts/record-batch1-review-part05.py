"""Individually authored source checks for Batch 1, positions 251–300."""
from pathlib import Path
import json
import runpy
from review_report_utils import persist
ROOT=Path(__file__).resolve().parents[1]
previous=runpy.run_path(str(ROOT/'scripts/record-batch1-review-part04.py'))
source_path=ROOT/'docs/QUESTION-REVIEW-SOURCES-PART05-2026-10-17.json'
source_map=json.loads(source_path.read_text());add=previous['add'];rows=previous['rows']
add.__globals__['sources'].update(source_map);source_map=add.__globals__['sources']
add(251,None,'No current launch date is authenticated from these options',
    'ISRO’s G1 campaign and component-test accounts describe preparations, not a definitive launch commitment matching one of the four choices. A launch schedule without an as-of announcement date becomes stale.',
    'turn94search1 turn94search2 turn94search3','held','Retrieve a dated ISRO schedule for the period being tested. Do not select an old aspirational date or label a preparation milestone as a launch.',topic='t-5-4')
add(252,'B','Bhai Dooj is the candidate; shrine-specific closure notices remain unverified',
    'A general Bhai Dooj greeting does not authenticate the closure of both shrines in a specified year. Their official closure notices and the event year are needed.',
    '','held','Retrieve the temple committee/administration notices and add the year; do not infer closure from festival coincidence.',topic=None)
add(253,None,'The first trial location/date is unresolved',
    'The Delhi Lieutenant Governor’s page establishes discussions about cloud seeding, not proof of a first trial at one of the offered localities on 23 October 2025.',
    'turn94search7','held','Retrieve the IIT Kanpur/Delhi flight/trial report and distinguish dry runs, actual seeding and measured rainfall. Do not turn a discussion into proof of a trial.',topic='t-5-9')
add(254,'C','Neeraj Chopra',
    'The Defence Ministry’s 22 October 2025 account records formal conferral of the honorary Lieutenant Colonel insignia in the Territorial Army on Chopra. Honourary rank is distinct from regular commissioned-service recruitment.',
    'turn94search6')
add(255,'C','Manipur',
    'The government broadcaster’s event account identifies Ningol Chakouba with Manipur and family bonds between married women and their natal families. The Meitei calendar date differs from a fixed Gregorian date.',
    'turn93search0 turn93search4',topic=None)
add(256,None,'Author not authenticated in the retrieved official launch account',
    'The official 22 October book-launch report establishes discussion of civil–military fusion but the retrieved text did not authenticate the exact author attribution among these choices.',
    'turn93search1','held','Obtain the publisher’s bibliographic record or book title page. Do not equate the person releasing a book with its author.')
add(257,'C','Ninth',
    'The Environment Ministry’s October 2025 release and parliamentary answer give India ninth in total forest area under GFRA 2025. Third refers instead to net annual forest-area gain.',
    'turn103search1 turn103search6',topic='t-6-4')
add(258,'B','Sanae Takaichi',
    'Japan’s official designation and cabinet-inauguration records place Takaichi’s first appointment on 21 October 2025, unlike the misdated 2026 version elsewhere in the import.',
    'turn35search4 turn35search5',topic='t-6-2')
add(259,'C','Goa; the Arpora venue and date wording need alignment',
    'The official FIDE event site gives Goa and the event span 30 October–27 November 2025. Opening ceremonies and first playing rounds can have different dates.',
    'turn93search3 turn93search7','correction_required','Use the organiser’s full event dates; verify Resort Rio/Arpora in the venue particulars before retaining that precise locality. Do not date the whole event from the first playing round alone.')
add(260,'B','Qatar and Turkiye',
    'Both mediators’ Foreign Ministries identify Qatar and Turkiye in the Doha ceasefire process of 18–19 October 2025 and later Istanbul talks.',
    'turn92search0 turn92search4',topic='t-1-9')
add(261,'C','Rodrigo Paz',
    'Bolivia’s electoral authority records delivery of the elected-president credentials to Rodrigo Paz on 5 November 2025. That final certification is stronger evidence than a preliminary election-night count.',
    'turn92search5',topic='t-6-2')
add(262,'C','The 1959 Hot Springs incident in Ladakh',
    'The official Police Commemoration Day account identifies ten policemen killed at Hot Springs on 21 October 1959 and explains the annual observance.',
    'turn92search7')
add(263,'C','Sultan of Johor Cup — junior men’s team',
    'Hockey India’s 17 October report records its junior men’s side reaching the final in Johor. It is not the senior national team’s Champions Trophy final.',
    'turn104search3','correction_required','Specify Indian junior men’s hockey team in the stem.')
add(264,'C','1984',
    'The official NSG foundation-day account describes 41 years in October 2025, corresponding to establishment in 1984. The NSG Act of 1986 is a later statutory milestone.',
    'turn103search0')
add(265,'B','India and Indonesia',
    'The Navy’s official fifth Samudra Shakti account identifies India and Indonesia at Visakhapatnam, 14–17 October 2025.',
    'turn91search0',topic='t-1-9')
add(266,'C','SIG716',
    'The contract release explicitly identifies the SIG716 7.62×51 mm rifle and night sights under the INR 659.47 crore agreement of 15 October 2025.',
    'turn91search2',topic='t-5-9')
add(267,'A','Mallojula Venugopal Rao alias Bhupati is the candidate',
    'The retrieved reporting identifies the person, but the official surrender record and exact organisational office were not authenticated here.',
    '','held','Check the Maharashtra Police/Home Department surrender statement; do not approve a specific political-bureau designation from a copied key.')
add(268,'B','General Anil Chauhan',
    'The official 14 October release names the Chief of Defence Staff as author. Rajnath Singh released the book and is not its author.',
    'turn98search5')
add(269,'B','Busan',
    'The Navy’s official account records INS Sahyadri arriving at Busan Naval Harbour on 13 October 2025 for the inaugural India–Republic of Korea bilateral exercise.',
    'turn98search2',topic='t-1-9')
add(270,None,'No universal flat customs duty can be authenticated from the stem',
    'India Post’s October resumption notice concerns a postal Delivered Duty Paid mechanism. Customs liability depends on the dated US rule, product/origin and exemptions; a postal collection arrangement is not a universal tariff for every India–US shipment.',
    'turn98search26','held','Read the full dated postal notice and applicable US tariff order. State the covered shipment class, exclusions and valuation base before offering a single percentage.',topic='t-2-2')
add(271,'B','Joel Mokyr, Philippe Aghion and Peter Howitt',
    'The Royal Swedish Academy’s announcement awards the 2025 economics prize for explaining innovation-driven growth. Mokyr receives half; Aghion and Howitt share the other half for sustained growth through creative destruction.',
    'turn98search0',topic='t-2-4')
add(272,'B','Ukhnaagiin Khurelsukh / Khurelsukh Ukhnaa',
    'The Lok Sabha Secretariat’s October 2025 account identifies the visiting Mongolian President by that name. Name-order transliterations should not create a false distractor.',
    'turn96search0',topic='t-1-9')
add(273,None,'Recruitment-agency transition remains unresolved; do not assume RRB or SSC from old cycles',
    'The official Railways recruitment review describes RRB-era ongoing RPF notifications, while secondary material claims a later SSC role. Neither a prior-cycle notice nor a copied annual-current-affairs answer authenticates the specific October reform.',
    'turn104search2','held','Retrieve the RPF 2025 recruitment-rule amendment and official implementation notice, distinguishing future selection from ongoing RRB cycles.')
add(274,'C','Gorkha Rifles',
    'The Defence Ministry’s AUSTRAHIND 2025 announcement states that a Gorkha Rifles battalion led the Indian contingent to Perth for 13–26 October.',
    'turn96search1',topic='t-1-9')
add(275,'C','Darul Uloom Deoband is the candidate; inferred motive is not verified',
    'The institutional visit is reported, but no primary institutional/MEA account was authenticated here. The phrase to signal outreach assigns a motive not established by the offered factual visit.',
    '','held','Retrieve the seminary or MEA visit record and remove the unsupported motive clause.',topic='t-1-9')
add(276,'C','Venezuela',
    'The Norwegian Nobel Committee’s official 2025 release identifies Machado’s work for democratic rights in Venezuela, establishing the country association.',
    'turn97search5 turn97search4',topic='t-6-2')
add(277,'C','Mixed team event is the candidate answer',
    'Reports call India a losing semifinalist in the Suhandinata Cup. The retrieved primary event preview confirms that Cup is the mixed-team competition but does not itself establish the final bronze result.',
    'turn105search8','held','Authenticate the BWF/Badminton Association of India final results. Do not use a preview as proof of a medal.')
add(278,'C','A limited technical mission is the candidate',
    'The exact MEA announcement upgrading the Kabul presence and the date of the earlier technical mission were not authenticated in the retrieved sources.',
    '','held','Read the dated MEA mission-upgrade release before approval; diplomatic presence and political recognition are different questions.',topic='t-1-9')
add(279,'C','Laszlo Krasznahorkai',
    'The Swedish Academy’s official 9 October 2025 announcement names the Hungarian author as Literature laureate. Accented and unaccented spellings denote the same person.',
    'turn97search11')
add(280,None,'The stem conflates negotiation, phase-one agreement and a later declaration',
    'The White House documents the October 13 declaration and the Sharm el-Sheikh summit. It does not establish that every document called the first phase was signed there by Israel and Hamas.',
    'turn95search0 turn95search1','held','Identify the exact document, signatories and date. Ask about the October 13 summit declaration if Sharm el-Sheikh is intended; do not merge different stages.',topic='t-1-9')
add(281,'B','Keir Starmer, on the October 2025 visit',
    'The PMO’s 8 October release names Starmer as the visiting UK Prime Minister. The historical visit identity should not be recast as an undated current-office question.',
    'turn95search2','correction_required','Remove current and anchor the question to the October 2025 visit.',topic='t-1-9')
add(282,'B','10 October',
    'WHO identifies 10 October as World Mental Health Day. Its annual theme varies, while the observance date remains fixed.',
    'turn95search3',topic='t-5-2')
add(283,'C','8 October',
    'The Defence Ministry’s current 2026 release index records the Air Force Day celebration on 8 October, consistent with the annual observance.',
    'turn95search6')
add(284,None,'Ulwe, Navi Mumbai, in Panvel taluka; options A and B overlap',
    'The airport’s environmental report explicitly places it at Ulwe in Panvel taluka. An unqualified Panvel option is therefore not cleanly exclusive of Ulwe.',
    'turn101search7 turn101search0','correction_required','Ask the specific locality (Ulwe) and replace Panvel with an unrelated locality, or ask the district/taluka with consistently scoped options.',topic='t-2-6')
add(285,'C','6 and 11 November 2025',
    'ECI’s Bihar election schedule gives these dates for the first and second phases. Counting took place on a different date, 14 November.',
    'turn83search3',topic='t-1-7')
add(286,'C','Empowering Finance for a Better World, Powered by AI',
    'The event organiser’s 2025 site states this theme and the 7–9 October Mumbai dates. It distinguishes augmented intelligence with human insight in its theme explanation.',
    'turn101search3 turn101search4',topic='t-5-5')
add(287,'B','Mary E. Brunkow, Fred Ramsdell and Shimon Sakaguchi',
    'The Nobel Assembly’s 2025 announcement names these three for discoveries concerning peripheral immune tolerance. Ambros and Ruvkun belong to the prior year’s medicine prize.',
    'turn101search9',topic='t-5-3')
add(288,'C','10th place; original threshold options are not mutually exclusive',
    'The Sports Ministry records tenth overall with 22 medals, including six golds. A tenth-place finish satisfies both top ten and top fifteen, so the original choices overlap; it was a best medal count, not necessarily the best ranking.',
    'turn105search3','correction_required','Replace top-3/top-5/top-10/top-15 with distinct exact ranks, or ask the best threshold among the offered ranges. Remove any first-ever/best-ranking implication.')
add(289,'C','Shubman Gill',
    'BCCI’s 4 October 2025 Australia-tour squad directly names Gill captain of the ODI side and Suryakumar captain of the separate T20I squad.',
    'turn99search0 turn99search2')
add(290,'B','India and the United Kingdom',
    'The official KONKAN-25 commencement release identifies the Indian Navy and the Royal Navy off India’s western coast.',
    'turn99search1',topic='t-1-9')
add(291,'B','At ages 5 and 15',
    'UIDAI’s update material distinguishes the child’s two mandatory biometric-update milestones and their service windows. The free-update age windows and fee waivers should not be mistaken for different milestone ages.',
    'turn99search5 turn99search6',topic='t-5-5')
add(292,'B','Three percentage points, from 55% to 58% of basic pay/pension',
    'The 1 October Cabinet release makes the additional instalment effective 1 July 2025. The change is three percentage points of basic pay/pension, not a three-percent multiplication of the existing allowance.',
    'turn105search0',topic='t-2-2')
add(293,'B','INR 2,585 per quintal',
    'The official RMS 2026–27 table gives wheat MSP of INR 2,585 versus INR 2,425 in the prior season; subtraction verifies the INR 160 increase.',
    'turn102search2',topic='t-2-5')
add(294,'B','Outstanding Achievements in Social Security',
    'ISSA’s own 3 October 2025 release names the award and its recognition of expanded social-security coverage. It is not an education or trade award.',
    'turn102search3',topic='t-1-8')
add(295,'B','View, store and review their question papers, responses and correct answers',
    'SSC’s official October reform announcement provides for this disclosure and also discusses challenge fees and integrity measures. It does not remove negative marking.',
    'turn102search4')
add(296,'C','Donald Trump',
    'UN resolution 2803 annexes the Comprehensive Plan of 29 September 2025 and refers explicitly to President Trump’s plan. This identifies the proposer without endorsing the plan’s claims.',
    'turn78search2',topic='t-1-9')
add(297,None,'India was the designated host; the 2025 tournament’s matches also used Sri Lanka',
    'ICC’s June 2025 schedule explicitly says the event ran across venues in India and Sri Lanka. Selecting India alone without defining host designation versus playing venues omits part of the event geography.',
    'turn102search6 turn102search7','correction_required','Ask which country was designated host (India), or add an India-and-Sri-Lanka option when asking where matches were held. Specify the full September–November event.')
add(298,'C','Bhutan',
    'Bhutan’s Foreign Ministry records the 29 September 2025 railway MoU for Gelephu–Kokrajhar and Samtse–Banarhat. These are Bhutan’s first planned cross-border rail links, not India’s first rail links with any neighbour.',
    'turn100search0 turn100search2',topic='t-2-6')
add(299,'B','Pakistan',
    'The Asian Cricket Council and Pakistan Cricket Board record India’s five-wicket final victory over Pakistan at Dubai on 28 September 2025.',
    'turn100search5 turn100search7')
add(300,'B','Himachal Pradesh',
    'UNESCO places the Cold Desert Biosphere Reserve in Lahaul–Spiti, Himachal Pradesh, and records its 2025 inclusion. A UNESCO biosphere reserve is not the same designation as a World Heritage Site.',
    'turn100search4 turn100search3',topic='t-3-8')
ledger=persist(ROOT,rows,251,300,5,source_map,source_path)
