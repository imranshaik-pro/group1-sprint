# Batch2 imported questions — first learner release

Published17 October2026 as website version22. Deployment succeeded.

- Website: https://group1-sprint-studio.spryplume16.chatgpt.site/#practice
- App/PWA: https://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html#practice
- Site source commit:68d5ce67703d7bed291cadb713b38436db652b5c.
- Saved version:appgprj_6acb5ae49004819180c2a6d75b1e6d6a~appgver_69eb1d1628d08191a621a372eaffbf3b.
- Deployment:appgdep_6ad39c1d3f34819183d4fea5630afe58.

## Scope and learner behaviour

The33 confirmed answers among Batch2’s first50 reviewed questions now enter the shared APPSC/UPSC/Other PSC scored bank. They appear in Practice → Newly reviewed questions, with the existing subject/topic filters, expandable solutions, verification dates, evidence links and topic-practice launch. Topic questions also enter guided chapter practice and adaptive selection through the shared practice bank. Completed attempts feed the existing topic and subject tracker; simply revealing an answer does not create a test score.

The release adds material across16 existing topics: international relations and events, national events, constitutional/judicial proposals, social welfare, industry/infrastructure, agriculture, development, modern history, urban geography, environment, space, information technology and energy. Stable topic IDs and paper assignments are preserved. Source provenance and original question hashes remain attached.

The total scored bank is1090 questions:707 original exercises and383 shared imported models. The Newly reviewed questions browser now contains230 entries:197 confirmed Batch1 questions plus33 confirmed Batch2 questions. Existing103 repaired models and50 earlier verified imports remain available separately in the full pool. All six curriculum batches are preserved.

## Exclusions and wording checks

Batch2 remains50/378 initially reviewed. Its13 correction-required and4 held items are excluded from this release;328 remain unreviewed. No candidate answer was silently promoted. The explicit release JSON supersedes the old review-recorded/scoredEligible:false state only for these33 IDs; original review snapshots and uploaded document bytes remain unchanged.

English presentation removes damaged Hindi OCR and duplicated bilingual prefixes. Dated questions keep their event/report period. The registration question explicitly concerns the introduced Bill’s proposed rule, not current operative law. The zoo question attributes the event report rather than asserting an independently audited universal first. The Commonwealth ranking question uses the official standings/IOA tally rather than a contradictory narrative paragraph. One duplicated wrong-person distractor in the Air Force appointment item is replaced; its independently reviewed correct key is unchanged.

Reproduce with `python scripts/release-batch2-imports.py`. It regenerates the original197-question module and the separate33-question module, then combines them through an explicit import. The original Batch1 release ledger remains historical and unchanged.

## Validation

- 92 app tests passed.
- 97 website tests passed.
- Python invitation/migration checks passed separately.
- Production build succeeded, and the native deployment returned succeeded.
- Hash/identity checks cover all230 confirmed released items, complete subject/topic mapping, paper assignment, four distinct options, source evidence and eligibility across the three practice scopes. App/site module bytes match.
- Initial checks caught stale total-count and offline-cache assertions. Expectations now match1090 total,383 shared,280 direct source IDs and cache version24. The complete suites then passed.
- PWA cache version24 includes batch2-released-imports.js and retains all curriculum modules. Existing installations receive the service-worker update; close/reopen or reload after the new version is available.

Fresh signed-in browser interaction testing remains blocked as recorded in BROWSER-QA-ATTEMPT-2026-10-17.md. This release does not claim those browser checks passed, initiate the previously rejected sign-in flow, or alter site audience/membership. No browser approval was needed to publish the already authorized content release.
