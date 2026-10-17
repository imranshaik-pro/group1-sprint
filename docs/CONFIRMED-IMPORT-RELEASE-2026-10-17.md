# Confirmed imported questions — learner release

Published website version19, 17 October2026. Deployment succeeded.

- Website: https://group1-sprint-studio.spryplume16.chatgpt.site/#practice
- Hosted installed app/PWA: https://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html#practice
- Site source commit:65bd186fa6ea75798abfbc10c473ee6220e3da93.
- Site deployment:appgdep_6ad351346f008191812f6757734873f4.

## What learners receive

197 individually confirmed answers from imported-question review batch1 now enter scored practice. They were previously only documented in review ledgers. The newer existing release already included103 rewritten versions of the earlier71 correction-required and32 held items; those derivatives are preserved, and their original claims are not retroactively approved.

The total scored bank is885 questions:535 original exercises and350 shared PSC imported models (50 from the earlier release,103 repaired derivatives,197 newly enabled confirmed items). Shared models are eligible for APPSC Group-I, UPSC and Other PSC practice. These are learning scores, not claims to reproduce each exam's full pattern.

Practice now includes a learner-facing **Newly reviewed questions** section with subject and topic filters, keyword search, ten-at-a-time browsing, expandable answers/solutions, verification dates and primary evidence links. Each entry can launch scored practice in its topic. Topic and subject labels also accompany questions in practice; completed attempts continue to feed existing subject/topic analytics and adaptive selection. Reading an answer does not create a fabricated test attempt.

The raw uploaded source documents and fixed ten-batch assignments are unchanged. A separate release ledger explicitly supersedes the earlier not_integrated state for these197 IDs. Keys come from individually authored review decisions, not a bulk trust of imported answer text. The English presentation removes broken Hindi OCR and stray answer leaks; the original multilingual upload remains available for provenance. Festival questions use the existing National events category, and their cultural subjects are identified in the question, rather than pretending the syllabus has a new verified static-culture chapter.

PWA cache version21 includes both new modules. Existing installations receive the normal service-worker update; reload the app when the update is available. Website audience and membership settings are preserved.

## Verification and limitations

- 80 app JavaScript tests passed, including new lineage, taxonomy, exam scope, library filtering, solutions, source links and mirrored-module tests.
- 85 website JavaScript/TypeScript tests passed; Python invitation migration checks passed separately.
- The production Worker build and native deployment succeeded. No browser automation capability was available for this managed environment, so a fresh visual/interaction browser run was not performed.
- Source imports retain original SHA-256 checksums. Application and website question modules have identical bytes. No unresolved answer was promoted by this release generator.
- Early broad-suite failures were stale pool/topic counts and an HTML-escaping expectation after the new release. Counts were updated to885 total/350 shared/59 covered topics, escaping was asserted correctly, and the complete suites passed. A first app check also needed the repository's declared dependencies installed. A site check initially included a Python file in Node's wildcard; Python was then run with its proper interpreter. The generated PWA mirror was refreshed before the successful website checks and production build.

## Next batch started

The first12 questions in fixed import-review batch2 have recorded independent solutions and authoritative-source checks:7 supported answers,4 correction-required stems and1 held claim. See QUESTION-REVIEW-BATCH-02-PART01-2026-10-17.md/json. They are a review segment, not a claim that the whole batch is complete or released. A source merely announcing a planned event is not treated as proof the event happened.

Across the3,776-question review plan:312 have an initial review record;3,464 remain unexamined. Batch1 still has78 unexamined; batch2 has366; batches3–10 remain pending. The original separate21-question older collection is outside this plan. No background verification job is running after this turn.

Reproduce the confirmed release with `python scripts/release-confirmed-imports.py`; reproduce the new review segment with `python scripts/record-batch2-review.py`. The197 release entries and their stable topic IDs are recorded in CONFIRMED-IMPORT-RELEASE-2026-10-17.json.
