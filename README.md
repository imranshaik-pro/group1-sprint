# APPSC Group-I Sprint

A Telugu-first study workspace for learning concepts, practising reviewed questions and returning for revision. Website and installable app share the syllabus IDs, chapters, question bank and learning rules. They currently have separate UI and storage adapters; account sharing uses explicit adapters for supported study events; large binary attachments and custom question attempts retain the limits described below.

## Open the product

- Website: https://group1-sprint-studio.spryplume16.chatgpt.site/
- Installable app: https://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html
- Learner journey: **Today → Learn → Practise → Revise → Progress**. Notes & Textbooks supports Learn.

## Verified baseline

The shared content inventory contains 65 internal study units and 276 chapter segments, 1,090 bundled scored questions, and 38 embedded notes/reference/textbook documents spanning 534 pages. These counts describe inventory, not complete official-syllabus coverage or independent factual certification. 150 weak handwritten OCR transcriptions are withheld; their scanned pages remain readable inside the app. Eight textbook documents are excerpts, not complete textbooks. External documents held for rights, extraction or availability are not counted as published.

Version 28 fixed lesson navigation being blocked by a denied progress save. It tested actual topic-card clicks for all 65 topics in guest, pending and approved website account states (membership transport mocked), and all 65 app topics through every chapter segment. See docs/TOPIC_NAVIGATION_2026-10-19.md in the GitHub repository for precise verification limits.

## Accounts, progress and privacy

The website uses Sign in with ChatGPT, an approved membership and a Cloudflare D1-backed workspace API. Reading can continue without a successful save; the interface must label unsaved progress. Site sharing access and application membership are separate checks. Account approval never implies an exam/content endorsement.

The app stores events offline in IndexedDB and supports JSON backup. The legacy encrypted GitHub vault is a personal-use adapter, not the intended public learner onboarding path. A shared account-sync adapter is implemented with explicit first-device import consent and account isolation; do not assume website and app history have merged until the interface confirms it. Existing backups and personal vault records must remain recoverable during migration.

No source repository, external PDF or publisher catalogue is required for normal learner reading. Provenance stays in editorial records and source attribution. Account tokens and API keys must not be placed in the browser bundle, repository, exported diagnostics or chat.

## Product delivery order

| Order | Work | Completion evidence |
|---|---|---|
| 1 | Accurate README and delivery ledger | Current architecture, limits and release links documented |
| 2 | Reliability, diagnostics, navigation and coverage audit | Real click tests, release checklist, safe reports, all-unit coverage inventory |
| 3 | Teaching quality, practice controls and tutor corrections | Lesson quality gaps visible, question-family checks, reviewed correction workflow |
| 4 | Pilot and pricing preparation | Activation/returning-use measures, feedback and cost-based break-even tool; no invented results |
| 5 | Controlled AI | Begins after content/pilot gates; requires provider/key, budgets and approved content boundaries |

Implementation progress and blockers are recorded in docs/PRODUCT_DELIVERY_2026-10-19.md. A page existing does not establish that a live pilot, commercial permission or factual content review has been completed.

## Development

This checkout is the website project; in the GitHub repository it lives under `studio/`. The repository root contains the standalone app under `app/`.

- Standalone app from repository root: `npm ci`, `npm run build`, `npm test`, `npm start` (Node 22.13+ and Python 3; Poppler is required to reproduce scanned-page assets).
- Website from `studio/`: install using its declared package manager, then run `npm run build`. D1 binding and the hosting configuration are required for the deployed workspace API. The Sites source/build helpers manage hosted publication.
- Never point one interface's event backup at the other's parser. Use explicit validated migration/account sync paths.
- The PDF build verifies pinned source SHA-256 values before producing same-origin assets. Preserve source licences and attribution. Commercial use of noncommercial material requires permission/replacement.

## Quality and release policy

Run relevant unit/TypeScript checks, website production build and GitHub Actions browser journeys. All-topic click/reading tests are mandatory for navigation or lesson-flow changes. Include guest, pending, approved, saved/reloaded and offline cases. Publication must record exact code SHA, CI run, Site version, terminal deployment result and known limits. Never claim every feature was tested from a subset of journeys.

Report a problem using Help & feedback. Diagnostics should contain only release, interface, route category, timestamp and error class; no notes, question attempts, credentials or raw request URLs. A correction remains pending until an authorised reviewer records evidence and a disposition.

## Learning and business boundaries

The 65-unit map is provisional until matched against a dated official APPSC syllabus. Do not invent exam dates, notification details or PYQ years. Current-affairs examples carry a snapshot date. Completing a lesson or passing a small quiz does not certify mastery.

Pilot target: 30–50 consenting learners before wider scale. Track activation, seven-day return, delayed practice evidence and support burden. No users are enrolled or contacted automatically by repository work. Pricing is an experiment based on actual costs and willingness-to-pay evidence. No payment processing is enabled by this work.

AI adapters/source code may exist, but live AI is not a completed paid-product feature. Keys, provider availability, budget enforcement and reviewed-content restrictions must be configured and tested before activation.

The account bridge keeps large records device-only with a visible warning; keep full backups. It projects notes, guided learning, task completion, completion state, reading preferences, plans and compatible bundled practice. No user history is moved to a cloud account before the first-device consent step. The legacy vault remains available for recovery under Advanced.

## Integration repair

Question-review forms, admin family controls, coverage filtering and website-to-app practice transfer are repaired in the current source. See `docs/INTEGRATION_REPAIR_2026-10-22.md` for validation evidence and remaining content, live-account and AI gates. The full browser run passed and Site version 29 deployed successfully.

## Android pilot APK

The `android/` project builds a native launcher for the browser-backed study app, using Android Browser Helper and the existing account/offline web flows. See [Android build and limitations](android/README.md). The pilot is debug-signed for sideload testing; verified fullscreen, release signing and physical-device acceptance remain separate gates.
