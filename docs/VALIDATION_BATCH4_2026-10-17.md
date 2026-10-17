# Batch 4 and imported-question repairs — 17 October 2026

## Release scope

Batch 4 covers t-3-3 through t-4-3: rivers and water resources; soils and agriculture; resources and industries; AP physical geography; population and urbanisation; environment and ecology; disaster management; number systems; percentages and ratios; profit, loss and interest; time and work.

Each of the 11 stable topic IDs receives four English/Telugu teaching sections, worked examples, examiner traps, three recall prompts, a revision summary and eight original scored questions with explanations. These are original study editions based on linked educational sources, not copied portal chapters. Sources include NCERT geography and mathematics, Census of India, the AP socioeconomic survey and NIDM. Source links are recorded beside each lesson. This edition does not certify exhaustive coverage of the official syllabus or expert review; `fullChapterReviewed` remains false.

Combined Batches 1–4: 44 expanded editions and 190 sections. Batches 5–6 contain 21 remaining editions. Scored bank: 535 original questions plus 153 reviewed imported models = 688; 58 of 65 topics have scored questions, seven still lack them. Question coverage and chapter expansion are separate measures.

## Imported repair reconciliation

The request referred to 72 corrections, but the latest committed first-300 review ledger contains 71 `correction_required` and 32 held items. The 197 confirmed items in that review are not automatically promoted to scored practice.

All 103 selected items now have an individually rewritten derivative with a checked key, explanation, topic, dated evidence pointer and preserved original ID in `sourceQuestionId`. The original import documents, bytes, hashes and previous review rows are unchanged. The corrected reader displays the revised question first and places the superseded original wording/key in a labelled collapsed section. It searches corrected wording and uses corrected topic mappings. The same modules are used in the website, mobile app and offline cache.

**Approval applies to the rewritten derivative only.** A held question was sometimes resolved by replacing an unauthenticated premise with a narrower attributable fact, rather than asserting that the original premise was true. For example:

- Cyclone Montha: actual landfall near Narsapur, distinguished from the earlier Kakinada forecast.
- AP capital amendment: Presidential assent on 6 April 2026, distinguished from deemed commencement on 2 June 2024.
- BSF Director General: Praveen Kumar under the dated MHA appointment order.
- UGC: the January 2026 regulation as promulgated and the dated interim court order are separate items; neither claims later/current procedural status.
- Red Fort blast: the 14 May 2026 attributed chargesheet report lists UAPA; the original question about exact initial FIR provisions is not authenticated. Charges do not establish guilt.
- Rice, rail electrification, postal DDP duties and shrine closures: dates, metric and source attribution replace universal or stale premises.
- Leadership, sports and election items: test a specified official announcement/result instead of ambiguous ordinal, superlative or implied timing claims.

Three derivatives explicitly rely on attributed original news reports, not government records. Other access limitations, translated biography caveats and public-broadcaster corroboration are recorded per item. `evidenceSha256` hashes the evidence pointer and checked explanation, not a newly downloaded primary document. `priorReviewSourceTextSha256` is retained as historical metadata. Do not describe these as fresh primary-document hashes.

The reproducible inputs and complete old/new decisions are in `import-repair-input-2026-10-17.json`, the two specification JSONs, and `IMPORT-REPAIR-RESULTS-2026-10-17.json`.

## Verification and failure record

- Website content/rendering tests: 37 passed.
- Standalone app tests: 78 passed in the final local run and remote CI.
- TypeScript: `tsc --noEmit` passed.
- New checks cover all 11 outlines, bilingual teaching fields, section-question mapping, independent arithmetic calculations, original-document checksums, repair lineage, answer eligibility, corrected reader escaping/topic filtering and website/PWA byte parity.
- During verification three first-section examples were too short for the existing content check. They were expanded with worked reasoning. A test calculator initially parsed `2,300` as `2`; comma handling was corrected. Bank-size assertions and the old 50-model UPSC selection cap were updated for the new approved bank.
- Browser regression adds a complete Batch 4 time-and-work learn/recall/nine-question/reflection/revision cycle, the 44-of-65 catalogue count, and offline Batch 4 plus repaired-module loading. Remote CI passed on e61bbac7d90ff44e3a9b1e0061aac8e6ff734757: https://github.com/imranshaik-pro/group1-sprint/actions/runs/39019664060. Website build and TypeScript passed; Site version18 deployed successfully. See RELEASE_BATCH4_2026-10-17.md for provenance.

## Deferred work

21 expanded chapter editions remain in Batches 5–6; seven current topics still lack scored practice. The rest of the imported collection needs independent source review. Full expert syllabus review and AI integration remain pending. No API key is required for this bundled content release.

The first remote browser run failed an obsolete eight-question public-finance assertion after approved imports increased that topic set to nine. A second run corrected this and exposed a work-quiz assertion of ten: family deduplication correctly selected nine distinct families. Both test assumptions were corrected without changing the production selection logic. The final run passed all routes, study flows and offline reload. A new reader check searches Praveen Kumar, reveals the corrected explanation and confirms the original import is labelled superseded.
