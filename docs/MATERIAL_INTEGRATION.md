# Material integration — 10 October 2026

## What was fixed

The ZIP is converted into a separate personal import bundle. The public app includes our conversion scripts and a review interface, not a redistributed third-party question collection.

- 3,145 practice MCQs retained; 2,472 have explicit bank-title topic suggestions, 673 are unassigned. Suggestions are not individual question verification.
- Governor-Generals/Viceroys now suggests colonial history; Constitutional Authorities suggests constitutional bodies; International Current Affairs suggests international events.
- Mixed banks and missing units (including geometry, mixed South Indian dynasties, governance and some ancient history) are kept unassigned. There is no first-topic fallback.
- Imported questions enter the content quality desk before timed tests. Edit question, options, answer, explanation and topic; record what you checked; approve or exclude. Reviews are saved as study events and travel with backups/encrypted sync.
- Legacy questions bearing upstream origin metadata are also excluded until reviewed. Reimporting an existing ID retains the existing review rather than overwriting it.
- PYQ approval requires APPSC-hosted paper and answer-key URLs in addition to the existing year/question metadata. The application does not validate document contents; it calls these user-reviewed PYQs.
- Manifest sizes use actual UTF-8 bytes and SHA-256 hashes of input and output. The supplied ZIP did not pin upstream revisions: that field remains explicitly unknown.
- 1,460 Bhimboy reference rows preserved separately: 134 explicitly TGPSC/TSPSC rows in separate files and 1,326 rows whose APPSC attribution remains unverified. None are imported as PYQs or counted in Prelims mocks.
- The truncated 2020 Paper-III Q1(a) is restored against supplied PDF physical page 5; original text and transcription note retained. Official provenance and all other transcriptions remain unverified.
- Mains-focused ethics/law/public-administration MCQ banks are marked Mains and cannot be approved for our Prelims tests.
- Service-worker cache updated to include the new review module so installed users receive the change.

## Are the repositories useful?

| Source | Content usefulness | Code usefulness for this app | Decision |
|---|---|---|---|
| Pavan | Strong candidate practice explanations, notes and diagrams; answer accuracy and recent events need review | Pure planner and spaced-repetition modules offer useful design ideas; their TypeScript types, taxonomy, interval choices and state model differ from ours | Use reviewed imports; consider adapting features independently later, not replacing our engine |
| Bhimboy | Useful syllabus decomposition and Mains prompts; archives mix exams and lack source URLs | Next.js/React/Supabase app has a different hosting and persistence model | Keep reference material separated; no direct code merge or new backend |
| Phanindra hub | Useful navigation, topic index and external reading references | Static HTML; main script inspected contains only a load log, so provides no study-state or sync engine | Link as reading reference; no technical dependency |
| Uploaded nine PDFs | Useful Mains/language reference and transcription checks | Not program source; cannot directly become an objective question bank | Attach as Mains reference; preserve source, year and paper numbering |

Representative files inspected on 10 October: Pavan `src/engine/spaced-repetition.ts` and planner interfaces; Bhimboy `package.json`; hub `js/script.js`. Source trees at inspection: Pavan `3c3946b1eaad3dfd6e7b1f421ce1f9f741ccff1b`, Bhimboy `d06cee211aa37f3820cd26f06ac9ff695f1f39ef`, hub `7fc40f80fdf5d5fc2bd0bf2e33d4ad93f109710c`. These are inspection revisions, not assertions of the ZIP's source revisions. This is an integration assessment, not a full security or accuracy audit of the upstream applications.

## Using the corrected bundle

Unzip `group1-sprint-corrected-material.zip` into a personal folder, not the public app repository. Open Practice → Your question bank; import one JSON from `packs/`. Use the content quality desk to check each question. Only approved, mapped APPSC Group-I Prelims questions appear in imported-bank drills, weekly tests and mocks. The original five GMA questions remain available independently.

The `reference/` files are research archives, not importable question packs. Do not import them through the bank form. Keep the nine PDF papers in the paper library for written-answer study; they are not Prelims mock data.

No author licences were found during review. Public availability and attribution do not establish reuse permission. The upstream content is not committed to this public repository. No upstream implementation is copied into production; new adapters/review logic are ours. Avoid public redistribution of the bundle pending permission/licence clarification. The ZIP's previous permission wording was not a grant from the upstream authors.

## Validation and limits

Core checks cover mapping regressions, review gating, duplicate IDs, official-host spoofing, manifest byte sizes/hashes, backup compatibility and existing encrypted sync/scoring. Browser checks cover import → corrected answer → approval → reload → exclusion, plus existing mobile/desktop and offline flows.

The pack conversion fixes classification, metadata and import safety. It does not certify every factual assertion or every answer in 3,145 MCQs. Current-affairs statements require date-specific official verification; approximate and historical figures need checking. The full 2018 syllabus is not approved as the 2026 notification syllabus. Remaining PYQ text needs a paper-by-paper transcription and key audit before promotion.
