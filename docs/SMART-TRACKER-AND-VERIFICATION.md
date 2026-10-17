# Smart topic tracker and verified imported practice

User request, 17 October 2026: reuse shared national/international current affairs across UPSC and PSCs; verify imported answers; arrange questions by topic; persist mock results; identify weak topics/subjects and direct extra practice towards them. The request refers to UPSC, not UPPSC.

## What existed before this change

Submitted website drills already saved per-question IDs, topic, choice, answer, counts, total time and negative-marked score as immutable practice events. Approved accounts retained a device outbox and synced to the hosted account; backups included those events. The offline app stored attempts and answers in IndexedDB and optionally synced an encrypted private vault. Mistakes and overdue topics received higher random selection weights. The website progress screen showed aggregate accuracy/completion but no complete topic/subject evidence table. Website in-progress quiz answers lived in React state and could be lost on refresh. Imported collection reading and answer reveal were ungraded and did not generate submitted test results.

Previous imports remain recorded in STUDY-COLLECTIONS-LEDGER.md, STUDY-COLLECTIONS-RELEASE-2026-10-17.md, UPSC-EXPANSION.md and UPSC-DEPLOYMENT-2026-10-16.md. PRs #1 and #2 were merged and their deployments succeeded. This release does not claim that all 3,826 new unique prompts or the previous 21 imported prompts are verified.

## Answer review completed in this release

50 imported model questions are individually approved: 45 Money and Banking questions checked against NCERT Introductory Macroeconomics chapter 3, plus five common current-affairs/observance questions checked against UN, WHO, UNEP and official Indian science sources. No question is relabelled as an official PYQ. The actual keys were individually inspected rather than automatically trusted from the upload. Arithmetic answers are independently recomputed in tests. SHA-256 of the original prompt and imported answer ties each review to the exact source version.

QUESTION-VERIFICATION-2026-10-17.json records each decision, exact source URL, source locator, checked key and date. Five other Money and Banking questions are held for wording/transaction-perspective/historical-context clarification. The current unique backlog is 3,776 new-import prompts (including the five held), plus 21 prompts from the older collection. This is not a background verification job, and no completion of that backlog is implied.

The approved pool includes 45 economics questions mapped to Banking & financial inclusion or Inflation & monetary policy, and five shared observance/current questions mapped to Environment & ecology, Biology & human health and Indian scientific institutions. The Azerbaijan host question explicitly remains about 2026. General observance facts are tagged evergreen-observance; other content has static-common or dated-2026 scope. State-related raw source questions are not automatically admitted to this shared pool. Applicability across exams means shared subject relevance, not a claim that every state syllabus or exam pattern is identical.

The reviewed-imports.js registry is separate from immutable original import payloads. The reader overlays approval labels and provides a direct scored-topic-practice action. Unreviewed source data remains ungraded. Approved models enter the normal topic-practice bank, retaining original source question IDs and verified evidence. The existing 359 original scored questions are preserved, giving 409 scored questions in the GitHub snapshot. The reviewed common pool is selectable under APPSC Group-I, UPSC and Other PSC. UPSC/Other PSC currently use only these approved shared imports; this is not a full UPSC mock engine. Marks use a clearly labelled learning scale of +1 correct, -1/3 wrong and zero skipped.

## Tracker and selection

The tracker derives subject and topic totals from saved item-level results. It shows correct, wrong, skipped, attempted accuracy, recent distinct answered-question evidence, learning score, number of sessions, recent trend and a next-topic practice action. Legacy results lacking item arrays remain in history but cannot create invented topic statistics. Replayed results sharing a stable attemptId are deduplicated in the tracker.

Fewer than five distinct answered questions yields More evidence needed. With at least five, recent accuracy below 70% is labelled Focus next. Currently stronger requires at least ten recent distinct answers, two sessions and at least 80% recent accuracy; this is not mastery or exam-readiness certification. The latest answer to a repeated question replaces its old outcome for recent weakness assessment, while historical wrong totals remain visible. Skips are distinct from wrong answers and never create a false correct answer. Improvement uses recent and prior five-answer windows only when both have at least three answers.

When evidence exists, coached mixed selection aims for 60% weak-topic questions and 20% overdue recall, filling shortages from the reviewed pool. Topic-specific practice stays inside that topic. Exact questions seen within three days are excluded, and family duplicates remain blocked within a session. If no fresh eligible questions remain, the UI reports the shortage rather than silently repeating or promoting unreviewed questions. This is an explicit coaching heuristic, not a validated prediction of exam results.

## Persistence contract

Completed, saved test results persist through existing account sync/backup mechanisms. The website now gives each new session a stable attempt identity and guards manual/timeout submission against duplicate clicks. Source question kind is retained in results; imported models are not falsely recorded as original questions. Both manual submission and timeout use the same save path.

An unfinished website quiz is autosaved on that device under an account-specific key, using question IDs, chosen answers, original deadline, duration, mode and practice scope. It restores after signing into the approved account on that device. Time spent with the page closed still counts against the original deadline. Drafts are validated against the current reviewed bank. Drafts do not sync across devices or enter exported score history; completed results do. Ungraded source browsing/answer reveal is not a scored attempt. Closing an unsaved or abandoned activity is not invented as a completed mock. Browser storage failure or pending sync means the app cannot promise a cross-device save; users should check the sync indicator.

## Implementation and tests

Pure learning-analytics.js and adaptive-coach.js are mirrored in both app editions. SmartTracker renders the website report; the offline app uses the same report data and renderer. Existing event formats remain compatible. Optional practice examScope and attemptId fields are bounded by server validation. scripts/build-reviewed-imports.py reproduces only the explicitly reviewed key list; it does not autoapprove future source changes. Source hash checks and held-question tests prevent silent promotion.

Regression checks cover review eligibility across scopes, rejection of unreviewed content, source hashes, independently recalculated answers, weakness recovery, skipped answers, duplicate result replay, legacy history, quota behaviour, exact-repeat exclusion, draft validation and route/score persistence.

Initial regression failures exposed old hard-coded bank sizes and the intended separation assertion (all imported questions excluded); these now distinguish the 359 originals from exactly 50 approved imported models. Testing also caught the Array.every callback passing its index as the new optional exam argument; eligible now normalises non-string second arguments and always returns a boolean. Earlier source, sync and import failure logs remain preserved in the linked ledgers.

Browser interaction/visual QA remains unavailable in the supported managed environment. Automated validation, source checks and a production build are reported separately from that limitation. Remaining imported factual verification is explicitly pending, not blocked by software deployment.

Validation completed for the final implementation: 67 app tests, 48 hosted-website TypeScript tests and the hosted compiler check pass. The offline build passes. The banking demand question is explicitly scoped to NCERT’s simplified two-component framework. Account changes reset the device-draft restoration state, while each account’s draft key remains separate. The reader labels reviewed and unreviewed answers individually. Production build and native deployment details follow in the release record.
