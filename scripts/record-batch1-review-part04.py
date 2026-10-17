"""Individually authored source checks for Batch 1, positions 201–250."""
from pathlib import Path
import json
import runpy
from review_report_utils import persist
ROOT=Path(__file__).resolve().parents[1]
previous=runpy.run_path(str(ROOT/'scripts/record-batch1-review-part03.py'))
source_path=ROOT/'docs/QUESTION-REVIEW-SOURCES-PART04-2026-10-17.json'
source_map=json.loads(source_path.read_text())
add=previous['add'];rows=previous['rows']
add.__globals__['sources'].update(source_map);source_map=add.__globals__['sources']
add(201,'C','Nine gold medals',
    'World Boxing’s final report states that India topped the Greater Noida 2025 Cup Finals medal table with nine golds. This is not the total medal count.',
    'turn77search0')
add(202,'A','The Blue Trail',
    'The official IFFI opening account identifies Gabriel Mascaro’s The Blue Trail as the opening film of the 56th festival on 20 November 2025.',
    'turn77search3')
add(203,'B','Rajinikanth',
    'The closing-ceremony release records Rajinikanth being honoured for fifty years in cinema. The generic phrase specially honoured is broad and should be replaced with that specific distinction.',
    'turn77search4','correction_required','Ask who was honoured for completing fifty years in cinema at the 2025 closing ceremony.')
add(204,'B','Curacao, by population',
    'FIFA describes Curacao as the smallest nation by population to qualify for the 2026 men’s World Cup. Population and land area are different measures, so smallest must be qualified.',
    'turn77search5 turn77search6','correction_required','Specify smallest by population and the men’s FIFA World Cup.')
add(205,'B','The US-backed Comprehensive Plan to End the Gaza Conflict',
    'The UN’s resolution 2803 and meeting coverage record endorsement of the Gaza plan and authorisation concerning an international stabilisation force. This is not a resolution approving an Iran nuclear agreement.',
    'turn78search1 turn78search2 turn78search3',topic='t-1-9')
add(206,'B','Sheikh Hasina',
    'The UN Bangladesh/OHCHR account names Hasina and describes the in-absentia verdict and capital sentence. It also raises due-process concerns; verification of who was sentenced is not endorsement of the verdict.',
    'turn89search3',topic='t-6-2')
add(207,'C','Ajeya Warrior',
    'The Defence Ministry records the eighth India–UK exercise beginning at Mahajan Field Firing Ranges, Rajasthan, on 17 November, scheduled through 30 November 2025.',
    'turn78search6',topic='t-1-9')
add(208,'B','ColoNoX',
    'DAE’s launch account names the nitric-oxide-releasing dressing for diabetic foot ulcers, based on BARC technology commercialised with Cologenesis.',
    'turn78search7 turn78search8',topic='t-5-3')
add(209,'B','Greater Noida',
    'The boxing federation’s report identifies the event as World Boxing Cup Finals — Greater Noida 2025, concluding on 20 November after five days.',
    'turn77search0')
add(210,'C','Kushal Dalal',
    'The government sports report identifies Dalal as the senior men’s compound gold medallist. Thirumuru was an Under-21 bronze medallist, not the senior champion.',
    'turn76search1 turn76search7')
add(211,'C','LCA Tejas and the Suryakiran Aerobatic Team',
    'The Ministry of Defence’s 16 November announcement identifies the Indian participation. The 17–18 dates describe the ministerial delegation programme and should not automatically be treated as the entire air-show duration.',
    'turn76search2','correction_required','Ask which aircraft/team were announced for India’s participation; distinguish delegation dates from full show dates.',topic='t-5-9')
add(212,'C','BJP, candidate answer pending the complete official party tally',
    'Public results reporting identifies BJP as the largest party, but the retrieved constituency sample and turnout press note are not a complete party-wise result table.',
    'turn90search5','held','Retrieve and read the complete ECI party tally/Form-20 compilation before confirming the seat-ranking answer. The cited government results feature requires full-table inspection.')
add(213,'C','Ek Bharat Shreshtha Bharat',
    'The Commerce Ministry’s inauguration release explicitly names the IITF 2025 theme. Aatmanirbhar Bharat describes broader policy and pavilion content, not this fair’s exact theme.',
    'turn90search0')
add(214,'B','France',
    'Garuda 25 was the eighth Indian–French air exercise; the official conclusion report records its completion at Mont-de-Marsan on 27 November 2025.',
    'turn79search0 turn79search1',topic='t-1-9')
add(215,'B','Insulin, as a co-discoverer',
    'WHO ties World Diabetes Day to Banting’s birth and calls him a co-discoverer of insulin. The explanation must not erase Charles Best and the wider research team.',
    'turn79search3',topic='t-5-2')
add(216,'C','Jawaharlal Nehru',
    'The official government-hosted educational account links India’s 14 November Children’s Day to Nehru’s birth anniversary. The UN’s World Children’s Day is a different observance.',
    'turn79search6',topic='t-1-8')
add(217,'B','Sri Lanka',
    'The official eleventh Mitra Shakti release identifies India and Sri Lanka, with the exercise at Belagavi from 10 to 23 November 2025.',
    'turn79search2',topic='t-1-9')
add(218,'A','India, United States, Japan and Australia',
    'The official Malabar account identifies the four participating navies. It is a naval exercise; it should not be confused with India–France Garuda air training.',
    'turn80search0',topic='t-1-9')
add(219,'C','128 years',
    'ICC records cricket’s last Olympic appearance at Paris 1900 and its planned return at Los Angeles 2028. Subtracting 1900 from 2028 gives 128.',
    'turn80search2 turn80search3')
add(220,'D','T20 / Twenty20',
    'The ICC’s IOC-quota announcement specifies T20 tournaments for both men and women at LA28. It does not prescribe Tests, ODIs or T10.',
    'turn80search3')
add(221,'B','Eight, in the November 2025 symbolic gift announcement',
    'The President’s November announcement records eight gifted cheetahs; the later February 2026 arrival report records nine. Those are different event stages and must not be silently substituted.',
    'turn80search4 turn80search5','correction_required','Ask the number in the November 2025 gift announcement, not the later physical transfer count.',topic='t-3-8')
add(222,'B','Punatsangchhu-II',
    'The PMO’s Bhutan-visit outcomes list the inauguration of the 1,020 MW Punatsangchhu-II hydropower project. Punatsangchhu-I is separately described as a resumption-of-work matter.',
    'turn80search6',topic='t-5-6')
add(223,'B','Maharashtra',
    'The official National Water Awards presentation release ranks Maharashtra first, Gujarat second and Haryana third for the 2024 award edition presented in 2025.',
    'turn81search2',topic='t-3-3')
add(224,'A','Om Birla',
    'The official parliamentary orientation record identifies Birla as Speaker of the Eighteenth Lok Sabha. A dated election/term question is more durable than an unspecified current-office question.',
    'turn81search29','correction_required','Ask who was elected Speaker at the start of the 18th Lok Sabha in 2024, rather than an undated who-is question.',topic='t-1-3')
add(225,'C','UAPA is the candidate; applicable FIR provisions not authenticated',
    'NIA’s official case page identifies RC-21/2025/NIA/DLI and the 10 November explosion but the retrieved page does not show the full FIR’s statutory sections.',
    'turn90search7','held','Open the signed FIR and record its exact provisions. Do not infer the applicable law solely from NIA involvement.',topic='t-1-4')
add(226,'B','9 November',
    'The PMO’s Silver Jubilee speech is dated 9 November 2025 and explicitly identifies that day with Uttarakhand’s formation anniversary.',
    'turn81search4',topic='t-1-6')
add(227,'B','November',
    'The Culture Ministry’s 8 November 2025 arrival release records the Buddha relics reaching Bhutan for public exposition beginning that day.',
    'turn82search1',topic='t-0-2')
add(228,'B','Angola',
    'The President’s Secretariat records Murmu arriving in Luanda on 8 November 2025 and calls it the first visit by an Indian President to Angola.',
    'turn82search2',topic='t-1-9')
add(229,'B','2025',
    'Hockey India defines the centenary as 1925–2025, referring to the first Indian hockey administrative body formed on 7 November 1925. It is not the date the sport itself first appeared in India.',
    'turn82search3 turn82search4')
add(230,'C','1875, the commemorative composition year',
    'The official 150-year commemoration in 2025 places the composition in 1875. Inclusion in Anandamath in 1882 is a later publication event and should not replace the composition year.',
    'turn82search5 turn82search6',topic='t-0-8')
add(231,'B','Hyderabad is the candidate; birth-place evidence not yet authenticated',
    'The official Virginia biography confirms Hashmi’s office and January 2026 oath. The retrieved excerpt did not establish her birthplace, so that detail is not verified from office-holder identity alone.',
    'turn83search0','held','Retrieve her complete official biography or her own documented autobiographical statement identifying birthplace.',topic='t-6-2')
add(232,'C','121 constituencies',
    'ECI’s Bihar 2025 election-details page lists all 121 phase-one constituencies polling on 6 November and the other 122 in phase two.',
    'turn83search3',topic='t-1-7')
add(233,'C','IIT Delhi',
    'IIT Delhi’s own 19 June 2025 release identifies its 123rd global rank and first position among Indian institutions in QS World University Rankings 2026. The edition year differs from the publication year.',
    'turn89search2',topic='t-6-4')
add(234,'B','IFFCO and Amul / GCMMF, in the GDP-per-capita-adjusted ranking',
    'The government’s report identifies these cooperatives in the adjusted ranking. Absolute-turnover rankings and turnover relative to GDP per capita are different measures.',
    'turn88search5','correction_required','Specify the turnover-to-GDP-per-capita metric and do not infer the order from the option’s word order. Read the publisher’s table before scoring an ordinal ranking.',topic='t-6-4')
add(235,'B','Sanjay Garg',
    'The BIS appointment Gazette and official charge-assumption release both give Sanjay Garg’s effective date as 1 November 2025.',
    'turn84search0 turn84search6',topic='t-6-1')
add(236,'D','India — ICC Women’s Cricket World Cup 2025',
    'ICC’s final report records India defeating South Africa by 52 runs on 2 November 2025. The original generic Women’s World Cup label needs the sport and format to be unambiguous.',
    'turn84search1 turn84search2','correction_required','Specify ICC Women’s Cricket World Cup 2025 (50-over ODI).')
add(237,'B','Make Aadhaar future-ready through technological and strategic upgrades',
    'UIDAI’s announcement describes a strategic review, emerging technology and a robust, inclusive identity platform under Aadhaar Vision 2032. It does not announce replacement by a new identity system.',
    'turn84search3',topic='t-5-5')
add(238,'C','Swami Dayanand Saraswati',
    'The official Arya Samaj 150-year event material identifies Dayanand’s founding legacy. The anniversary concerns 1875–2025 and should not be confused with a birth bicentenary.',
    'turn84search4 turn84search5',topic='t-0-7')
add(239,'C','Justice Surya Kant',
    'The Law Ministry’s October notification appoints Surya Kant CJI effective 24 November 2025. A complete official predecessor list is needed to separately confirm the ordinal claim.',
    'turn86search0','correction_required','Anchor to the notified effective date and omit the incidental 53rd ordinal until the official succession list is checked.',topic='t-1-4')
add(240,'B','Air Force Station Ambala',
    'The President’s official 29 October 2025 release gives Ambala as the departure station for her Rafale sortie. Her earlier Sukhoi sortie was a different event.',
    'turn86search2','correction_required','Replace recently with on 29 October 2025.',topic='t-5-9')
add(241,'A','SJ-100',
    'HAL’s signed investor transcript records an October 2025 MoU with Russia’s UAC concerning SJ-100 production. An MoU does not establish completed production or an unconditional final manufacturing contract.',
    'turn86search7','correction_required','Ask which aircraft was covered by the 27 October 2025 MoU; avoid promising future joint production as an accomplished or guaranteed fact.',topic='t-5-9')
add(242,'B','Justice Ranjana Prakash Desai',
    'The Commission’s own website identifies Desai as chairperson and the notification establishing the Eighth Central Pay Commission.',
    'turn86search3 turn86search4',topic='t-2-2')
add(243,'B','Javier Milei is the candidate; result and landslide characterisation remain unverified',
    'The official Argentine sources retrieved here give the election date and procedure, not the complete national outcome. Calendar evidence cannot authenticate victory or its margin.',
    '','held','Read the certified election results and define the winning measure; remove the subjective landslide label.',topic='t-6-2')
add(244,'B','Bharat Mandapam, New Delhi',
    'The official ISA assembly announcement specifies the eighth session for 27–30 October 2025 at Bharat Mandapam.',
    'turn88search4',topic='t-5-6')
add(245,'C','Vigilance: Our Shared Responsibility',
    'CVC’s official release gives this exact theme and the 27 October–2 November 2025 observance dates. The associated three-month campaign has a different date span.',
    'turn88search2')
add(246,'B','Intensive verification and updating of electoral rolls',
    'ECI explains that SIR aims to include eligible electors and exclude ineligible entries through verification with transparency. It is not an opinion poll or a party-symbol review.',
    'turn87search6',topic='t-1-7')
add(247,'C','Kuala Lumpur',
    'ASEAN’s own Chairman’s Statement and closing report place the 47th summit and related meetings in Kuala Lumpur in October 2025.',
    'turn85search2 turn85search0',topic='t-1-9')
add(248,'B','Prof. Jayant Vishnu Narlikar, posthumously',
    'The official 2025 Rashtriya Vigyan Puraskar announcement lists Narlikar under Vigyan Ratna. The other listed names belong to different categories.',
    'turn85search4',topic='t-5-8',locator='Rashtriya Vigyan Puraskar 2025, awardee list, item 1')
add(249,'C','24 October',
    'ITBP’s own anniversary publication identifies its Raising Day on 24 October. The event’s stable annual date is not changed by the publication year of the source.',
    'turn85search9')
add(250,'B','Sardar Vallabhbhai Patel',
    'The official National Unity Day account identifies 31 October with Patel’s birth anniversary; 2025 marked the 150th anniversary.',
    'turn85search6 turn85search7',topic='t-0-8')
ledger=persist(ROOT,rows,201,250,4,source_map,source_path)
