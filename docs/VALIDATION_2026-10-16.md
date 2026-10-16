# Curriculum Batch 1 validation — 16 October 2026

Request: split the 65 parent topics into six balanced batches and deliver chapters plus scored practice in one pass per topic. AI integration is deferred.

## Changes

- Six batches: 11, 11, 11, 11, 11 and 10 topics, preserving stable IDs and existing learner notes/history.
- Batch 1: ten History & Culture units plus Constitution & Preamble; 52 bilingual teaching sections, outlines, examples, distinctions, traps, three recall prompts and revision summaries per chapter.
- Eight original scored questions per topic: 88 added, 267 total; 17 topics with scored practice and 48 without it.
- Website and mobile share identical lesson and question modules. Mobile cache v14 includes all new modules. Website topic practice selects up to five fresh questions; mobile topic practice selects up to ten (eight for the new topics).
- Learner library shows all six batches and each topic’s chapter/question availability. Existing short guides remain available outside Batch 1; no learner source-JSON links were restored.
- 78 explicit microtopic links corrected and 219 reference records relinked. The imported 1,460-row index remains metadata-only and unverified; no rows promoted to verified PYQs and no absent keys/distractors fabricated.

## Completed local checks

- Standalone app build passed, including offline PDF assets; 47 Node tests passed. Startup checks render all 65 real topic routes and assert chapter/source/summary controls for every Batch 1 topic.
- Website: 15 content/render/batch tests passed, including the actual React lesson component across all 65 topics; 16 targeted TypeScript regressions passed; TypeScript compilation passed.
- Content parity, unique question IDs/stems, four distinct options, answer-key bounds, source/section links, three-day exact-question exclusion and persisted negative marking checked.
- Chapter and key review is editorial self-review against educational references. Structural tests cannot establish historical accuracy or prove complete syllabus coverage.

## Browser and production status

Browser workflow 38929497884 passed on code commit 9c155a2d99c292ca614229fea439eac55232e142: https://github.com/imranshaik-pro/group1-sprint/actions/runs/38929497884 . It verified the eight-question Indus chapter attempt (8.00/8), previous/next navigation, recall/reflection/revision persistence and offline Vedic chapter access, alongside the existing desktop/mobile regression suite. Sites version 11 published successfully on 16 October 2026 at 16:10:41 UTC: https://group1-sprint-studio.spryplume16.chatgpt.site . The hosted mobile web app is included at /sprint/index.html. Source commit: 8ae88566992764d6bafa7e11b2a00f63258b61ae. Native deployment: appgdep_6ad24c66b1448191a16af45c48c331ab, status succeeded, environment revision 0. Managed runtime has no supported control-browser capability; no improvised local browser was used. Existing GitHub CI runs the actual desktop/mobile browser flow and has new chapter navigation, scoring and offline checks.

## Failures and corrections during this session

- Initial Sites opening failed without a usable checkout; reopening with a non-login shell restored the existing project. No Site was recreated.
- First standalone checkout test run was incomplete because helper scripts, reference metadata and web-push dependencies had not been restored; after restoring dependencies/files, all 47 tests passed.
- TypeScript caught an optional topic ID in the batch view; explicit topic existence validation fixed it.
- Browser test authoring initially assumed a five-question mobile quiz and a non-existent submit label. Source inspection corrected it to the actual eight-question Batch 1 set and Submit test before running CI.
- Browser run 38929256342 passed build and Node checks but failed in the new test because it used a non-existent `.questioncard h2` selector. The app renders its question in a section containing the answer buttons; the test was corrected to that actual structure and now waits for each question number before answering. No learner code was changed for this test correction.
- No failed build or unverified archive has been deployed.

## Remaining scope

Batches 2–6 are not authored in this release. Full current official-syllabus and microtopic completeness remains under review; all fullChapterReviewed flags remain false rather than asserting comprehensive expert approval. No live provider calls, new API credentials, Vercel/GitHub Pages deployment or real Android hardware test is claimed.
