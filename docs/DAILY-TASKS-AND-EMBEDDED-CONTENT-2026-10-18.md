# Daily assignments and embedded content — discussion, decision and validation

## User request

Missing a login or study session must leave that date’s learning tasks pending. The approved calendar must continue to issue today’s work regardless of backlog. Learners may catch up later. Today’s assignments were not reliably visible. Users must not be redirected to GitHub or source PDFs to study. Document the reasoning and fixes, including student, tutor, architectural and business perspectives.

## Professional decisions

- Student: show today’s four dated assignments separately from pending learning tasks. Opening the app is not completion. Completing an older assignment affects that assignment only; show its original date and a deliberate completion control. Avoid guilt-based labels, misleading completion and an invisible daily workload.
- Tutor: assignment completion, lifetime topic coverage, quiz scores and spaced recall are separate evidence. A repeated science/revision block is a new dated assignment. Preserve the fixed syllabus timeline and final12-day practice/review phase; backlog does not replace today’s teaching.
- Architecture: one deterministic calendar module is shared byte-for-byte by website and PWA. Generate missed-day assignments from approved plan dates without requiring visits, cron or paid AI. Stable task IDs include plan start, assigned date and slot. Persist immutable task-complete events through each client’s existing storage/sync/backup validation. Date boundaries use Asia/Kolkata, not UTC or device timezone.
- Product/business: reuse existing infrastructure, prevent conflicting rules across channels, retain original source provenance internally and reduce broken external study journeys. Distinguish embedded content availability from verification and extraction status. No new paid provider dependency is introduced.
- Operations: preserve original imports, question IDs/keys, released verification work, accounts and audience. Keep a failure log, automated regressions and release provenance. Do not imply that removing a link completes document extraction or expert source verification.

## Findings and fixes

Website scheduled static material at1.5days/topic; PWA used a different daily rotation. Pending work was deduplicated by topic and filtered using lifetime completion. Daily GMA/current-affairs/revision assignments were not independently retained. UTC elapsed-time calculations could advance a day at the wrong local boundary. Open pages could retain yesterday’s display.

Both clients now use daily-schedule.js. Four dated tasks are generated for an approved plan’s date; before the start and after the end there is an explicit empty-state message, while past work remains. Absence for three days yields12 pending assignments plus today’s four. Daily completion has its own validated event type and does not claim mastery. Prior plan versions retain historical pending tasks up to replacement. Eligible historical completion records before this rollout are backfilled only against the exact original date/topic; new general topic completions cannot implicitly complete dated assignments. Old records are not rewritten. Website/PWA clocks refresh on date change. The science sequence now covers all ten topics across its alternate-day sessions; after day60 static revision cycles instead of remaining stuck on the final topic.

Learner source links were still present in UPSC resource cards, related-topic resources, question verification references, textbook attributions, current-event/paper cards and collection archive entries. Those outbound controls are removed from learner flows. Embedded notes, extracted questions, explanations, source-page text, in-app topic connections and licence/author attributions remain. Unextracted documents show an explicit awaiting-extraction state. Internal navigation, sign-in, local downloads and the admin-only evidence workbench are preserved. No invisible iframe or redirect is substituted for extraction.

## Verification

Local Node suites and backup validation, TypeScript, production build, repository browser workflow and publication status are recorded in the release section below. New tests cover absence, late completion, idempotency, midnight, future/expired plans, prior-plan backlog, exact historical completion, all-ten-science rotation, reader rendering with no external content links, unextracted-document labelling and backup event validation. Browser checks seed a real persisted plan in an isolated profile, complete old and current tasks, reload, advance the calendar and check dated backlog and no outbound source anchors on learner routes. Local results:61 website Node checks,104 standalone app checks,10 website backup checks, TypeScript noEmit and the managed production build passed. Existing question bank remains1090 (707 original,383 reviewed imported models); the concurrent33-question version22 release is preserved.

## Failure log

- Opening the old Site checkout was refused because it contained prior release documentation while the remote had advanced to version22. Those files were preserved; a fresh checkout of source68d5ce67703d7bed291cadb713b38436db652b5c was opened. An initial fresh-open attempt failed transiently; retry succeeded.
- First content run passed47/49; two cache-version expectations still named v24. Updated them to v25, which includes the new module. This changes the expected shipped cache, not the content assertions.
- First standalone-fixture run passed100/101; one new parity test retained a Site-relative path. Corrected its fixture path, then the full app suite passed. Production paths did not need a workaround.

- Browser run39153269444 passed existing desktop/mobile/offline regression, then checked the pending count immediately after an asynchronous task save (12 before save/render versus11 expected). The test now waits for the persisted completion UI and waits for initial render after reload, retaining the exact11/14 counts. The rerun result is recorded below. Application code was unchanged for this test synchronization fix.

## Remaining scope

This release fixes scheduling and learner redirects. Complete extraction/OCR and independent answer review of every outstanding PDF remains a separate ingestion track; removing external links does not make those documents processed. Source data and prior question-review records are preserved. Automatic live AI, notifications while closed, full official-syllabus reconciliation and1000-user load testing are not claimed. Existing website and PWA backups remain distinct supported formats, each preserving dated task events.

## Published release

Published successfully in Site version23 on18 October2026 at18:18:47 UTC (23:48 IST), preserving custom audience.

- Website: https://group1-sprint-studio.spryplume16.chatgpt.site
- App: https://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html
- Site source commit:0188f81cbeb398b91f8d6ca72272854d99528494
- Implementation commit:ff61e98a12cfddfae852f083402a7ecaf9db8be0
- Browser-validated commit:683b9af21a1f7f74563e60334db1092ecc42895f (test synchronization follow-up only)
- Saved version:appgprj_6acb5ae49004819180c2a6d75b1e6d6a~appgver_7f2faca6e4a48191969d12d0b89aa847
- Deployment:appgdep_6ad50d69bea88191be23b3f1a5f6a97b; native status:succeeded
- Archive content hash:sha256:7cc72ad3fc49e8ff4854f646eb625e75f5900a36cf8eedd1bb07e6d4b7ff3645
- Passing browser workflow: https://github.com/imranshaik-pro/group1-sprint/actions/runs/39153423655
- Screenshot artifact: https://github.com/imranshaik-pro/group1-sprint/actions/runs/39153423655/artifacts/12146460400

61 website Node checks,104 standalone app checks,10 website backup checks,TypeScript and production build passed. Browser regression passed complete existing study flows,PDF extraction/draft review,desktop/mobile/offline checks and the isolated new dated-task scenario:12 overdue+4 today;complete one overdue→11 pending with today unchanged;reload retains it;complete one today;advance to next date→14 pending+4 new tasks. External source anchors are absent on tested learner routes. The mobile carryover screenshot was downloaded and visually inspected:four dated task rows,completion controls and a distinct14-task catch-up queue render without horizontal overflow. Reader source tests cover the complete imported index and question renderers,not just the first visible page.

No live signed-in website browser session or multi-user load test was performed in this environment. Website behaviour is covered through shared calendar logic,actual component rendering,backup validation,TypeScript and production build; browser interaction evidence is from the standalone app. Native publication success verifies deployment,not those unperformed tests. Build retains its existing large-client-chunk advisory. No API keys,roles,access grants or question-bank contents were changed.
