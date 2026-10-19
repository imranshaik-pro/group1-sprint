# Ordered product delivery

Authorised order: README → reliability/navigation/coverage → content and question quality/tutor corrections → measured pilot/pricing → controlled AI.

## Acceptance ledger

1. README: replaced stale starter/personal-vault-only claims with actual website, PWA and limits.
2. Reliability: visible build ID, bounded private diagnostics, learner reports and recorded release checks. Read/next remains independent of save success. Today remains calendar-based with a separate backlog.
3. Navigation: Today, Learn, Practise, Revise, Progress are primary in both interfaces. Notes & Textbooks, Coverage and Help are supporting destinations; existing hashes remain compatible.
4. Coverage: derive chapter, bilingual section, teaching components, question family and embedded-document counts from actual bundled data for all 65 units. Independently reviewed content and official-syllabus mapping require explicit evidence. No numeric inventory is called official coverage.
5. Tutor quality: learners can report defects; authorised reviewers can triage and record evidence, dispositions and topic review status. Resolving a report is not automatically a published chapter correction. Existing content publication/source gates remain in effect.
6. Accounts: replace public PWA onboarding dependence on GitHub tokens with account-backed sync. Retain legacy exports; import device history only with explicit consent and do not mix accounts. Cross-interface semantic progress must use explicit mappings and keep original event IDs.
7. Pilot: prepare consented cohorts, feedback, activation and seven-day returning-use measurement from real events. No real learners are enrolled automatically. Manual cost inputs and pricing scenarios are clearly estimates, not validated willingness to pay.
8. AI: last gate. No provider/key activation or spend is authorised by a mock setting. Human content review, permissions and pilot decisions remain visible blockers before a commercial AI rollout.

## External evidence and unresolved decisions

Official APPSC syllabus index pages were located on portal-psc.ap.gov.in, but retrieval returned HTTP 502 during this audit. No new official line-by-line alignment is claimed from those failed reads. A dated official syllabus document and reviewed topic mappings remain required.

Bundled OpenStax excerpts include noncommercial licences; commercial permission/replacement must be decided before charging for access involving that material. Paid programme pricing and support staffing need actual pilot evidence. The user has authorised implementation, not unsolicited messages to recruit participants or invented outcome data.

This ledger will be updated with actual checks and release identifiers. Existing content is preserved; no bulk AI rewriting or newly verified answer keys are implied by structural audits.

## Implemented account bridge and quality tools

The app now offers same-origin account sync as its primary path. Existing device history needs explicit import consent. A stored account binding rejects a different signed-in account instead of merging or uploading another person's history. Supported native app events have validated private account packets; compatible notes, lesson flow, task completion, completion state, reading preferences and plans project into website events. Completed bundled practice projects into shared item-level results only when published IDs/answer keys match. Custom/imported question attempts are not promoted into shared scored evidence.

Native event packets are bounded to 60 KB UTF-8. Large attachments and large full-attempt snapshots remain in the full device backup; the sync status explicitly reports them. Compatible compact practice results may still sync. This is not a binary-PDF cloud storage migration. The optional legacy encrypted GitHub adapter remains under Advanced for existing personal vault recovery. Account migration uses ordinary private workspace storage rather than promising the legacy vault's encryption model.

Diagnostics retain at most 30 entries containing only build ID, route category, timestamp, error class and category. Feedback is explicitly submitted; the user controls diagnostic export. Guest/pending reports are not silently posted under a later account. Draft form text remains on screen after a failed submission.

The editorial workbench records topic/source/Telugu/answer/rights checks and separate official mapping evidence (official URL, locator and SHA-256). New practice can exclude a whole question family. Historical attempts retain their evidence. An admin decision never automatically rewrites a bundled explanation or pretends a correction has been published.

Pilot enrollment starts closed. It requires an admin opening plus each learner's explicit consent. SQLite's conditional enrollment write enforces a 50-person ceiling atomically and rechecks whether enrollment is open. Withdrawals remove participants from current measurement. Activation requires lesson advancement, recall progression and answered practice; day-7 return uses the elapsed 7–8 day window and only matured participants. Pilot activity is aggregated inside SQLite; note text and large practice payloads are not loaded into the metrics API heap. Pricing is a manual monthly estimate using contribution after per-learner costs and payment deductions, not a real payment/subscription feature.
