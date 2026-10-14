# Uploaded design references and implementation — 14 October 2026

Request: inspect appsc-mains-handbook-main.zip, Boeing747-main.zip, appsc-group1-hub-main.zip and ExamPro-main.zip before implementing reading comfort, mistake/overdue-weighted selection and reviewed original question variations. Source review inspected relevant code and documents, not merely README claims. No uploaded project was installed or executed.

| Upload | Observed useful implementation | Adopted in Group1 Sprint | Kept separate |
| --- | --- | --- | --- |
| Mains handbook | Saved light/dark controls; collapsible navigation; source/date/transcription/answer-status schema | Persistent reading controls, focused layout, explicit source status | Mains content and its claimed verification require paper comparison; no conversion into Prelims MCQs |
| Boeing747 | 68-character reading-column guidance, contrast/motion tokens; per-user reading records; revision scheduler in learning service | Narrow reading columns, reduced-motion preference, per-user preference events, scored answer history | Its 3/7/14/30/60 schedule does not replace our existing 1/4/7 queue; Prisma/Postgres/RBAC are not transplanted into D1 |
| Group1 hub | Topic-oriented syllabus capsules, readable 18px content, subject navigation; practice/PYQ distinction | Larger study text and topic-specific selection; retained practice labels | Its 2026 syllabus and content claims have not been independently reverified in this task |
| ExamPro | Topic/language filtering, difficulty controls, one-question navigation and varied formats; live Gemini generation requests 10 questions | Personalised practice, explicit selection reason, parent-linked original variations | Live unreviewed AI generation, fallback questions/videos, Firebase authentication and score-only-without-negative-marking are not copied |

## Delivered behaviour
- Paper/sepia/dark HTML reading appearances; 16/18/20/22px text; 1.7/1.9/2.1 line spacing; focus and reduced motion; existing page accents retained. PDF page typography stays fixed.
- Approved website users store reading-preferences study events in their own history, sync and backups; guest/pending style changes remain local to that identity. Original app stores the same preference type through its event reducer, vault sync and backups. The live website's existing membership approval rules are unchanged.
- Shared adaptive selector uses weight 1 + 4 for a recorded mistake (including latest wrong answer in a parent family) + 3 for a due topic. Questions seen within three days are placed after alternatives; repetition is labelled when the eligible pool is too small. Skips are not treated as wrong answers. Selection samples only approved APPSC Group-I Prelims material and deduplicates IDs.
- Website: GMA exactly 5 questions/6 minutes, rights up to 5 (current reviewed pool is 4), personalised mixed up to 10, with actual count and per-question reason. Non-GMA duration is one minute per selected question. Existing guided lesson remains 2 foundation questions. Results record IDs, topics, selections and answer keys; manual submission adds wrong-answer corrections to the ledger. Timer-expired result history also informs selection.
- Original app: adaptive GMA, topic practice, personalised up-to-10 and weekly selection; full mocks retain exam-style random selection. Existing unfinished-test persistence remains in place. Original-app service-worker cache advances to v11 and includes selector/variant modules.
- Seven original variants: two constitutional concepts and five recalculated GMA exercises, with parent identity, format, explanation, review method and source portal. They are not PYQs and contain no invented exam years. Arithmetic and distractors are checked; constitutional statements reuse the existing foundation scope. This is a small reviewed starter pool, not automatic unlimited generation or a mastery classifier.

## Verification and limitations
TypeScript, production build and focused tests check selection eligibility, weighting, recency fallback, duplicate prevention, five GMA parent families, answer-family transfer, arithmetic, bounded preferences, preference backup/reducer compatibility and score/history consistency. Reading tokens are measured against a 4.5:1 text contrast target. Full visual/accessibility certification and real Android/two-device QA are not claimed; the supported browser QA skill is unavailable.

Corrected a removed Sites-helper version path by discovering the installed 1.0.2-remix-b.1 helper. Corrected JavaScript-array type inference for selection options and replaced a strict floating-point equality assertion with a numeric tolerance. These were build/test issues, not changes to score mathematics.

This work adopts design patterns through independent components. Uploaded archives are analysis sources, not an assertion that every feature or data item in them has been verified. No external AI keys, server integrations or user permissions were added.

## Publication
Website version 8 published successfully at https://group1-sprint-studio.spryplume16.chatgpt.site on 14 October 2026 from Site source commit fbf28e324ef865a3c90c80c47f0843563d7db84f. Forty website tests and 38 local original-app tests pass (the latter includes three tests for the previously prepared uploaded JSON collection). The production build passed. Native app changes are committed for its separate hosting pipeline; no separate native-app deployment or real-device result is asserted.

The earlier Bhimboy JSON transfer was interrupted before a branch commit. A tree-integrity check rejected a missing blob, confirming it was not complete; it must be resumed and verified separately. This is distinct from the four archives' design review and does not imply those archives' data have been imported.
