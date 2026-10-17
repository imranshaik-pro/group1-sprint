# Six-batch curriculum delivery

Request: expand all 65 study units in six balanced batches, delivering teaching and scored practice together. Defer AI integration and other feature work until curriculum delivery is complete.

The sequence uses existing stable topic IDs. Batches 1–5 contain 11 topics; Batch 6 contains 10. It does not create a second overlapping 59-topic track.

## Scope and completion labels

A published chapter edition contains an explicit outline, original English teaching and Telugu explanations, examples, distinctions, traps, three recall prompts, revision notes, source links, and eight scored original questions. Review is editorial self-review against sources, not independent subject-expert approval.

Publication of an edition is separate from complete official-syllabus coverage. The 65 parent topics are broad; their exact match to the latest official syllabus and every imported microtopic is still under review. `fullChapterReviewed` remains false rather than silently upgrading a condensed edition to a fully certified chapter. Imported question references are not counted as scored questions.

## Batch sequence

### Batch 1: History & constitutional foundations (11 topics)

- t-0-0: Indus civilisation
- t-0-1: Vedic society
- t-0-2: Buddhism & Jainism
- t-0-3: Mauryas & Guptas
- t-0-4: Satavahanas & Andhra dynasties
- t-0-5: Medieval India
- t-0-6: Bhakti & Sufi movements
- t-0-7: Colonial rule & resistance
- t-0-8: National movement
- t-0-9: Andhra culture & reform
- t-1-0: Constitution & Preamble

Status: Chapter edition authored and tested; production publication recorded in the validation document.

### Batch 2: Rights, government & economic foundations (11 topics)

- t-1-1: Fundamental Rights
- t-1-2: Directive Principles & Duties
- t-1-3: Union executive & Parliament
- t-1-4: Judiciary
- t-1-5: State executive & legislature
- t-1-6: Federalism & local government
- t-1-7: Constitutional bodies
- t-1-8: Social justice & welfare
- t-1-9: International relations
- t-2-0: National income
- t-2-1: Inflation & monetary policy

Status: Published as Site version 15 on 17 October 2026; browser workflow and release build passed.

### Batch 3: Economy & physical geography (11 topics)

- t-2-2: Public finance & taxation
- t-2-3: Banking & financial inclusion
- t-2-4: Planning & development
- t-2-5: Agriculture & rural economy
- t-2-6: Industry & infrastructure
- t-2-7: AP economy & state budget
- t-2-8: AP Socio-Economic Survey
- t-2-9: Poverty & employment
- t-3-0: Earth & geomorphology
- t-3-1: Climate & monsoons
- t-3-2: Indian physical geography

Status: 11 editions, 44 sections and 88 questions authored and tested; browser/release validation in progress.

### Batch 4: Geography & quantitative foundations (11 topics)

- t-3-3: Rivers & water resources
- t-3-4: Soils & agriculture
- t-3-5: Resources & industries
- t-3-6: AP physical geography
- t-3-7: Population & urbanisation
- t-3-8: Environment & ecology
- t-3-9: Disaster management
- t-4-0: Number systems
- t-4-1: Percentages & ratios
- t-4-2: Profit, loss & interest
- t-4-3: Time & work

Status: Not started.

### Batch 5: Reasoning & science foundations (11 topics)

- t-4-4: Time, speed & distance
- t-4-5: Series & coding
- t-4-6: Logical reasoning
- t-4-7: Data interpretation
- t-4-8: Administrative abilities
- t-4-9: Psychological abilities
- t-5-0: Everyday physics
- t-5-1: Everyday chemistry
- t-5-2: Biology & human health
- t-5-3: Biotechnology
- t-5-4: Space technology

Status: Not started.

### Batch 6: Technology & current affairs (10 topics)

- t-5-5: Information technology & AI
- t-5-6: Energy technology
- t-5-7: Agriculture technology
- t-5-8: Indian scientific institutions
- t-5-9: Science policy & applications
- t-6-0: Andhra Pradesh events
- t-6-1: National events
- t-6-2: International events
- t-6-3: Schemes & policy changes
- t-6-4: Reports & indices

Status: Not started.

## Source and question policy

Use original explanatory wording, not copied textbook chapters, illustrations or commercial portal notes. Free access is not itself a redistribution licence. NCERT and NIOS references are factual study references; no textbook PDFs are included in this release. Local PDF-vault functionality is unchanged.

The 1,460 imported records contain metadata and source links only. They provide no embedded stems or keys, mix Prelims and Mains references and retain unverified provenance. The upstream README also describes answer-only Prelims formats, so absent distractors must not be invented and presented as the original paper. They cannot be promoted automatically into scored PYQs. New questions are clearly marked original, with no claimed exam year.

## Batch 1 result (historical release)

11 expanded bilingual editions, 52 teaching sections, 88 new scored original questions. Total bank: 267. Topics with scored questions: 17; topics without: 48. Remaining chapter editions: 54. Of those, 52 remain short foundations and two retain the earlier rights/physics guided foundations.

78 microtopic links were corrected and 219 reference records relinked from explicit microtheme assignments. These are topic-link corrections only, not question or answer validation. Bifurcation metadata incorrectly placed under Indus was unassigned for review. Full details are in REFERENCE_AUDIT_2026-10-16.json.

## Batch 2 result

11 additional chapter editions: Fundamental Rights; Directive Principles & Duties; Union executive & Parliament; Judiciary; State executive & legislature; Federalism & local government; Constitutional bodies; Social justice & welfare; International relations; National income; Inflation & monetary policy.

50 bilingual sections and 92 original scored questions (12 for Fundamental Rights and eight for each other topic). Combined totals: 22 chapter editions, 102 bilingual sections in those editions, 359 bundled original questions and 27 topics with scored practice. 43 chapter editions and 38 topics without scored practice remain. Full official-syllabus completeness remains under review.

Added a chapter restart control for learners returning from the earlier short edition, preserving notebook/history records. The three-day-exhaustion message now explains that fresh questions are unavailable instead of incorrectly saying the topic has no reviewed questions.

## Next delivery

Batch 4: Rivers & water resources through Time & work. Batches 4–6 remain not started. AI integration remains deferred. No automatic background completion is implied.


## Batch 3 result

11 editions, 44 bilingual sections and 88 original scored questions. Combined: 33 editions, 146 expanded-edition sections, 447 original questions plus 50 previously checked imported questions (497 scored total), 41 scored topics. Remaining: 32 editions in Batches 4–6 and 24 scored-practice gaps. Full official-syllabus coverage remains under review. See VALIDATION_BATCH3_2026-10-17.md for sources, checks and failure records.

## Batch 4 — 17 October 2026

11 editions (t-3-3 through t-4-3), 44 bilingual sections and 88 original questions published in Site version18 after local and remote browser verification. Combined: 44 editions, 190 sections, 535 original questions plus 153 reviewed imported models (688 scored total), 58 scored topics. Batches 5–6: 21 remaining editions; seven scored-question gaps. The import repair delta contains 71 corrections and 32 held-item rewrites. Approval applies only to the revised versions; narrower dated premises replace unauthenticated original claims where necessary. See VALIDATION_BATCH4_2026-10-17.md and IMPORT-REPAIR-RESULTS-2026-10-17.json. Release provenance and passing remote browser result are recorded in RELEASE_BATCH4_2026-10-17.md.
