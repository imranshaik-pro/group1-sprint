"""Individually authored source checks for Batch 1, positions 151–200."""
from pathlib import Path
import collections
import json
import runpy
ROOT=Path(__file__).resolve().parents[1]
previous=runpy.run_path(str(ROOT/'scripts/record-batch1-review-part02.py'))
source_path=ROOT/'docs/QUESTION-REVIEW-SOURCES-PART03-2026-10-17.json'
source_map=json.loads(source_path.read_text())
add=previous['add']; rows=previous['rows']
add.__globals__['sources'].update(source_map)
source_map=add.__globals__['sources']
add(151,'D','AH-64E Apache is the candidate; exact fleet-completion claim remains held',
    'The retrieved defence-industry reporting identifies the Apache and 451 Army Aviation Squadron. An official Army/manufacturer delivery record authenticating the full December completion premise was not retrieved.',
    'turn61search4','held','Obtain the Army or Boeing delivery/induction record before confirming all six aircraft, squadron and completion date. Industry reporting is not marked as primary authentication.',topic='t-5-9')
add(152,'C','Great Honor Nishan of Ethiopia',
    'The PMO’s 16 December 2025 conferment release gives this award name and identifies Prime Minister Abiy Ahmed as the presenting leader.',
    'turn61search2',topic='t-1-9')
add(153,'C','Homebound',
    'The Academy’s December 2025 International Feature shortlist includes India’s Homebound. Shortlisting is an intermediate stage and does not mean the film won or reached the final nominations.',
    'turn61search3',locator='98th Oscars shortlists, International Feature Film, India entry')
add(154,'C','Bangladesh',
    'Vijay Diwas recalls the 16 December 1971 surrender and the war associated with Bangladesh’s liberation. It is distinct from the July Kargil Vijay Diwas observance.',
    'turn61search0',topic='t-0-8')
add(155,'D','Hong Kong, China',
    'The Sports Ministry reports India’s maiden Squash World Cup and a 3–0 final victory over Hong Kong. The opponent’s squash association independently records the same final result.',
    'turn62search0 turn62search1')
add(156,'C','Raj Kumar Goyal',
    'The President’s Secretariat records Goyal’s oath as Chief Information Commissioner at Rashtrapati Bhavan on 15 December 2025. CIC here concerns the Information Commission, not the Central Vigilance Commission.',
    'turn62search2 turn62search4',topic='t-1-7')
add(157,'B','Mahajan Field Firing Range, Rajasthan',
    'The defence commencement release locates the fifth Harimau Shakti at Mahajan and gives 5–18 December 2025 as its dates.',
    'turn62search5',topic='t-1-9')
add(158,'C','Auction coal linkages for seamless, efficient and transparent utilisation',
    'The Cabinet’s CoalSETU window permits auction-based long-term linkages for industrial use and qualifying exports. It does not give free coal or impose a general export ban.',
    'turn62search6 turn62search7',topic='t-2-6')
add(159,'B','Bilateral relations and wider strategic cooperation; the specific trade-focus ranking is not established',
    'The 11 December PMO account describes a review of bilateral progress and regional/international developments. It does not establish that one trade topic was the overriding primary focus.',
    'turn64search0','correction_required','Ask which broad area the official account says was reviewed; remove the unsupported primary-focus ranking and avoid implying a pact was finalised.',topic='t-1-9')
add(160,'C','Deepavali / Diwali',
    'UNESCO’s 10 December 2025 announcement records Deepavali’s inscription during the twentieth committee session; the nomination file separately records decision 20.COM 7.b.24.',
    'turn64search1 turn64search6')
add(161,'B','Germany',
    'FIH records Germany defeating Spain in the final for its eighth junior men’s title. India won the bronze-medal match against Argentina.',
    'turn64search3')
add(162,'B','President Petr Pavel',
    'The Czech President’s official 9 December 2025 statement records Pavel appointing Andrej Babis Prime Minister under Article 68(2) of the Czech Constitution.',
    'turn64search2',topic='t-6-2')
add(163,'C','50% of installed electricity capacity from non-fossil sources',
    'The official July 2025 release says this threshold was already reached in June 2025. Capacity share is not the same as electricity-generation share, and nuclear counts as non-fossil but not renewable.',
    'turn63search1 turn63search0','correction_required','Change In December 2025 India achieved to By June 2025 India had achieved, as announced in July. Retain C and explicitly say installed capacity.',topic='t-5-6')
add(164,'B','Approximately 485 GW total and 243 GW non-fossil',
    'The official 30 June 2025 figures are 484.82 GW total and 242.78 GW non-fossil. Rounding to the nearest whole GW gives 485 and 243; the fraction is about 50.08%.',
    'turn63search0',topic='t-5-6',locator='Installed generation capacity as on 30 June 2025')
add(165,'C','Diwali / Deepavali',
    'UNESCO’s nomination file 02312 identifies Deepavali and records its subsequent 2025 inscription. A nominated element and an inscribed element are different stages.',
    'turn64search6')
add(166,'C','7 December',
    'The Defence Ministry’s 7 December 2025 Armed Forces Flag Day appeal confirms the date and its welfare purpose for veterans and dependants.',
    'turn63search2')
add(167,'C','Canada, Mexico and the United States',
    'FIFA identifies these three co-hosts for the 2026 men’s World Cup. Brazil, the UK and France are not 2026 co-hosts.',
    'turn63search4')
add(168,'D','48 teams',
    'FIFA’s tournament information calls the 2026 edition the first with 48 teams, expanded from 32 in the previous edition.',
    'turn63search4')
add(169,'C','Abhijit Joag; original incidental launch date is wrong',
    'IGNCA identifies Joag as author and lists the book-launch event on 6 December 2025 at 5 pm. The imported stem instead says 7 December.',
    'turn63search3 turn63search6','correction_required','Change the launch date to 6 December 2025 and align the spelling with the organiser’s Abhijit Joag.')
add(170,'C','USD 100 billion by 2030, an existing target rather than newly set in December',
    'The official pre-summit backgrounder already refers to the USD 100 billion target during the August 2025 Moscow meetings. The December joint statement discusses timely achievement of bilateral trade targets.',
    'turn67search1 turn67search0','correction_required','Ask which existing trade ambition was reaffirmed/pursued. Do not claim the target was first set at the December 2025 summit.',topic='t-1-9')
add(171,'C','India and Malaysia',
    'The fifth Harimau Shakti release identifies Indian and Royal Malaysian Army participation at Mahajan in Rajasthan.',
    'turn62search5',topic='t-1-9')
add(172,'C','First India visit since the February 2022 full-scale invasion is the intended distinction',
    'MEA’s pre-visit bilateral brief places the last India summit in December 2021 and the next in December 2025. Referring generically to when the Russia–Ukraine war began obscures the conflict that dates to 2014.',
    'turn69search7 turn67search0','correction_required','Specify since Russia’s full-scale invasion of Ukraine in February 2022. Replace the subjective strategic-significance question with the concrete visit chronology.',topic='t-1-9')
add(173,None,'The 2025 title winner is not yet authenticated in this record',
    'The federation-uploaded round-robin table puts Peter Svidler first, but the event had a later knockout stage. A table winner or an organiser page describing last year’s winner does not prove the 2025 overall champion.',
    'turn74search3 turn67search6 turn74search1','held','Read the final knockout bracket and dated organiser conclusion before selecting A–D. Do not mistake round-robin rank or a prior-year recap for the overall title.')
add(174,'B','Operation Trident',
    'The Navy’s official 2025 backgrounder explicitly connects Navy Day on 4 December with the 1971 Operation Trident attack on Karachi harbour.',
    'turn75search1',locator='Navy self-reliance backgrounder, Introduction')
add(175,'C','High-speed rocket-sled dynamic test of an aircraft escape system',
    'The 2 December DRDO release describes canopy severance, ejection sequencing and aircrew recovery at the TBRL rocket-sled facility. It expressly distinguishes this dynamic test from simpler static tests.',
    'turn72search1',topic='t-5-9')
add(176,'C','Varanasi',
    'The Education Ministry’s official 2 December inauguration report places Kashi Tamil Sangamam 4.0 in Varanasi, with Dharmendra Pradhan and Yogi Adityanath.',
    'turn65search10')
add(177,'C','Gyanesh Kumar',
    'International IDEA states that India assumed the 2026 Council chairship on 3 December 2025 and that CEC Gyanesh Kumar would represent India. This is a Council chairship, not appointment as the institute’s executive head.',
    'turn65search5 turn65search4',topic='t-1-7')
add(178,'C','Seva Teerth',
    'The February 2026 Cabinet note calls the new PMO Seva Teerth. The question needs a date and the official spelling; it should not imply the name is a constitutional change to the office itself.',
    'turn32search2','correction_required','Anchor to the February 2026 move and use Seva Teerth in option C. This is a building/address designation.',topic='t-1-3')
add(179,'B','1 December 2025',
    'The official PMO greeting marks BSF Raising Day on 1 December. The 2025 commemoration marks 60 completed years since 1965 and entry into the 61st year; individual ceremonies may be held on other days.',
    'turn73search0 turn73search1 turn73search4')
add(180,'C','Pakistan and Bangladesh',
    'The government’s BSF account identifies those two international borders as the force’s primary frontier responsibilities, while also noting other internal-security duties.',
    'turn75search7')
add(181,'B','Armand “Mondo” Duplantis',
    'World Athletics names Duplantis as the overall men’s World Athlete of the Year for 2025. Track and out-of-stadium category winners are separate awards.',
    'turn66search0 turn66search2')
add(182,'C','The active SIM associated with the Indian mobile number',
    'The December DoT direction extends SIM binding to covered app-based communication services using Indian numbers. It separately requires periodic logout/relinking for web access; it is not an email-linking requirement.',
    'turn66search3 turn66search7','correction_required','Anchor to the 1 December 2025 direction and its covered services; verify subsequent amendments and deadlines before describing it as the currently enforced rule.',topic='t-5-5')
add(183,'C','Naga Heritage Village, Kisama',
    'Nagaland’s Information Department records the 26th Hornbill Festival beginning on 1 December 2025 at Kisama near Kohima.',
    'turn66search5')
add(184,'B','1 December',
    'WHO lists 1 December as World AIDS Day, distinct from World Environment Day on 5 June.',
    'turn66search6',topic='t-5-2')
add(185,'B','1–19 December 2025',
    'The Parliamentary Affairs Ministry’s closing summary records the Winter Session opening on 1 December and adjournment sine die on 19 December, with 15 sittings.',
    'turn56search3','correction_required','Restore A–D labels to the four extracted date choices in their original order; 1–19 December is the second choice, B.',topic='t-1-3')
add(186,'D','Skin of Youth',
    'The official IFFI closing account names Skin of Youth, directed by Ash Mayfair, as the Golden Peacock Best Feature winner. The Director award is a different category.',
    'turn68search4')
add(187,'C','India and Sri Lanka',
    'ICC’s official event documentation names BCCI and SLC as joint hosts of the 2026 men’s T20 World Cup. The tournament extended into March, not just February.',
    'turn68search7','correction_required','Specify the February–March 2026 tournament and say countries rather than the singular country.')
add(188,'D','26 November',
    'The government’s Constitution Day decision marks adoption on 26 November 1949. Coming into force on 26 January 1950 is commemorated as Republic Day.',
    'turn68search5',topic='t-1-0')
add(189,'C','Dr. B. R. Ambedkar',
    'The parliamentary record and Constitution Day release identify Ambedkar as Chairman of the Drafting Committee. Rajendra Prasad presided over the Constituent Assembly, a different role.',
    'turn68search8 turn68search5',topic='t-1-0')
add(190,'B','He-Man of Bollywood; death year must be 2025',
    'The PMO condolence is dated 24 November 2025, and the official Padma Awards profile describes Dharmendra as the He-Man of Bollywood. November 2026 in the import is both wrong and later than this review date.',
    'turn68search6 turn37search4','correction_required','Replace November 2026 with November 2025; preferably remove the incidental death clause and ask the documented sobriquet.')
add(191,'D','India',
    'The PMO congratulates the Indian women’s team on its 2025 Kabaddi World Cup victory; the federation’s circular locates the tournament in Dhaka.',
    'turn71search0 turn71search9')
add(192,'B','INS Mahe — first of the Mahe class, not India’s first ASW shallow-water craft overall',
    'The defence announcement specifically calls Mahe the first of eight CSL-built Mahe-class ASW-SWC. The broader claim first indigenous ASW shallow-water vessel erases other builders’ preceding classes.',
    'turn71search4','correction_required','Specify first Mahe-class craft built by CSL, scheduled for commissioning on 24 November 2025. Confirm actual commissioning before changing scheduled to completed.',topic='t-5-9')
add(193,'C','Lakshya Sen — badminton Australian Open',
    'The Sports Authority of India’s account records Sen defeating Yushi Tanaka in the 2025 badminton men’s singles final. This is not the Australian Open tennis championship.',
    'turn73search5','correction_required','Insert badminton/BWF Super 500 into the stem so it cannot be confused with tennis.')
add(194,'B','United States',
    'South Africa’s Presidency explicitly states that the United States chose not to attend the 2025 G20 Leaders Summit, while some US businesses and civil-society entities attended other G20 activities.',
    'turn73search6',topic='t-1-9')
add(195,'B','Justice Surya Kant',
    'The President’s Secretariat directly records Surya Kant taking the CJI oath on 24 November 2025. His identity and oath date are authenticated; the ordinal should be cross-checked against the official CJI list.',
    'turn70search0','correction_required','Until the official predecessor list is checked, omit the incidental 53rd ordinal and retain the exact oath-date question.',topic='t-1-4')
add(196,'C','Johannesburg, South Africa',
    'The host’s programme and Leaders’ Declaration locate the G20 summit in Johannesburg on 22–23 November 2025.',
    'turn70search1 turn70search7',topic='t-1-9')
add(197,'C','Fatima Bosch Fernandez, Mexico',
    'The pageant organiser identifies Fatima Bosch as Miss Universe 2025. The official winner identity is distinct from rumours or contestant rankings before the final.',
    'turn70search2')
add(198,'B','Free annual health check-up for workers above 40, as described in the November implementation explainer',
    'The Labour Ministry’s 25 November 2025 table explicitly lists this preventive-healthcare measure. A ministry explainer is not a substitute for the applicable code, rules and establishment/age prescriptions in an individual case.',
    'turn74search4','correction_required','Ask what the 25 November 2025 official explainer lists; avoid an unqualified claim about every worker’s currently enforceable entitlement.',topic='t-1-8',locator='Labour Codes release: Preventive Healthcare table row')
add(199,'C','Tenth oath is the candidate answer; ordinal not yet independently authenticated',
    'The PMO confirms Nitish Kumar’s oath on 20 November 2025 but does not provide the count of earlier swearing-in ceremonies. Terms, elections won and oaths are not interchangeable counts.',
    'turn72search2','held','Check the Bihar Governor/CM official oath chronology and count the ceremonies before approving the tenth-time claim.',topic='t-1-5')
add(200,'C','357.73 million tonnes',
    'The Agriculture Ministry’s final estimates for crop year 2024–25 give foodgrain output of 357.73 million tonnes. Preserve the crop year and final-estimate vintage instead of replacing it with another year’s figure.',
    'turn72search0 turn72search3',topic='t-2-5')

part=rows[150:]
assert len(part)==50 and [r['position'] for r in part]==list(range(151,201))
assert len({r['id'] for r in rows})==200
counts=dict(collections.Counter(r['decision'] for r in part)); cumulative=dict(collections.Counter(r['decision'] for r in rows))
ledger={'batchId':'import-review-01','checkedAt':'2026-10-17','part':3,'positions':[151,200],
    'reviewedInPart':50,'counts':counts,'cumulativeReviewed':200,'cumulativeCounts':cumulative,
    'remainingInBatch':178,'unexaminedAcrossTenBatches':3576,'newScoredApprovals':0,
    'policy':'Review decisions only; confirmed answers have source support. Corrections/holds are not release-ready. None is automatically eligible for scoring.','items':part}
(ROOT/'docs/QUESTION-REVIEW-BATCH-01-PART03-2026-10-17.json').write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n')
used={e['sourceId'] for r in part for e in r['evidence']}; source_path.write_text(json.dumps({k:source_map[k] for k in sorted(used)},indent=2)+'\n')
lines=['# Batch 1 review, part 3: positions 151–200','',
    '**Partial checkpoint, 17 October 2026:** Batch 1 has 200/378 examined; 178 unexamined. '
    'Across all ten batches, 3,576 are unexamined. The earlier 21 prompts remain separate.','',
    '**This part:** '+', '.join(f'{v} {k.replace("_"," ")}' for k,v in counts.items())+'.','',
    '**Cumulative first 200:** '+', '.join(f'{v} {k.replace("_"," ")}' for k,v in cumulative.items())+'.','',
    'A confirmed substantive answer does not imply automatic scored eligibility. Corrections must be applied and validated first; '
    'held questions remain unresolved. No new scored questions have been enabled by these three review checkpoints.','']
for r in part:
    lines += [f'## {r["position"]}. {r["id"]}','', '**Decision:** '+r['decision'].replace('_',' ')+' · **Answer:** '+(r['solvedOption']+' — ' if r['solvedOption'] else '')+r['solution'],'',r['explanation'],'']
    if r['requiredCorrectionOrHoldReason']:lines += ['**Correction / hold:** '+r['requiredCorrectionOrHoldReason'],'']
    lines += ['**Topic:** '+(r['proposedTopicId'] or 'Taxonomy gap')+' · **Scope:** '+r['scope'],'',
        '**Evidence:** '+('; '.join(f'[{e["sourceId"]}]({e["url"]})' for e in r['evidence'])+'. '+r['evidence'][0]['locator']+'.' if r['evidence'] else 'No authoritative source authenticated; held.'),'']
lines += ['## Remaining work','',
    'Continue Batch 1 at position 201 (see the fixed batch manifest), and resolve earlier holds/corrections. '
    'No batch is claimed fully verified, no background verification is scheduled, and these records do not change the 50 previously approved imports.','']
(ROOT/'docs/QUESTION-REVIEW-BATCH-01-PART03-2026-10-17.md').write_text('\n'.join(lines))
print(json.dumps({k:v for k,v in ledger.items() if k!='items'}))
