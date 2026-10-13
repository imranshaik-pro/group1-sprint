# Learn → Recall → Practise → Revise

## Request and purpose — 13 October 2026
Implement the proposed simple study journey in the hosted website, original app and GitHub. Teach a concept before testing; do not treat a small good score as proof of mastery. Preserve saved state independently of chat memory.

## Learner cycle
1. Open a topic or Resume learning. Fundamental Rights has four original Telugu-first concept segments, English reference and examples. Acknowledging an idea saves the position before the next segment.
2. Close notes and write three explanations from memory. Save a draft, compare with the reference and explicitly self-review before continuing.
3. Practise the topic, inspect explanations and record a trap/correction. The website has two original rights questions, negative marking and automatic correction entries for wrong answers. The original app also draws from its reviewed topic bank.
4. Finish once to schedule existing +1/+4/+7 day revisions. Return through the revision queue and re-test. Completion and self-review are not a mastery rating.

## Coverage and accuracy limits
The website's other topics require source-backed saved notes and external practice reflection; they do not pretend to have complete reviewed chapters or automatically grade factual explanations. An unrelated topic no longer launches GMA as topic practice. The original app retains its foundation guides and question-review requirements. Telugu explanation text is original educational prose, not a claim of official APPSC translation. Exact article wording is linked for verification; no PYQ years were invented.

## Saved state
New validated learning-flow events contain topic, stage, segment, three bounded recall answers, self-review flag and reflection. They pass through existing account/cloud sync and JSON backup in the website, and encrypted vault sync/event backups in the original app. Save drafts before switching device: unsaved typing and live answer choices are not persisted. The website Resume shortcut reopens the last guided topic. Original-app cursor retains the flow position. The app service-worker cache moves to v9 and includes the new module.

## Verification and limits
29 website tests and 28 original-app tests pass. New checks cover invalid stage/topic rejection, bounded inputs, recall gating and event backup/sync round trips. Syntax and TypeScript checks pass. Production packaging runs before website publication. Supported browser control was unavailable, so actual Android interactions and live two-account/multi-device scenarios have not been verified.

## Implementation notes
The website uses app/learning-journey.tsx and lib/learning-flow.js. Its shared event validator accepts only bounded learning-flow data. The original app includes app/learning-flow.js, native staged forms and reducer support. Existing user history, approval rules, backup formats and manual self-reported completion remain compatible. Website mirror documentation is in studio/WEBSITE_BUILD.md.

## Publication
Website version 5 published successfully on 13 October 2026 at https://group1-sprint-studio.spryplume16.chatgpt.site from source commit d025554ad7c0f1e1b2de05313a7cd3f60f8b3cd6. Production build passed. Existing site audience was preserved. Original-app changes are committed for its separate hosting pipeline; no separate original-app deployment success is claimed.
