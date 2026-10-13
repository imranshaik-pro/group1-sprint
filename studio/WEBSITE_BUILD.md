# Group1 Sprint Studio

A separate hosted website edition of the existing Group1 Sprint application. The original application's deployment and private GitHub vault are not modified by this build.

## Implemented
- Responsive, colour-themed pages: Today, Topic Library, guided lessons and notes, revision queue, original practice with six-minute timer and −1/3 marking, mistake ledger, official paper references, source-linked headlines, progress, AI prompt builder, Settings, account/recovery and super admin Control Room.
- Hosted ChatGPT identity sign-in; provider-managed password recovery. This is not custom email/password authentication.
- Persistent D1 membership, private per-account study events and access-decision audit.
- Pending memberships can only be approved/rejected/suspended by the owner. All private study API operations enforce approved membership and derive identity server-side.
- Browser outbox keyed by user ID, idempotent cloud writes, background online/resume/30-second sync. Offline-in-open-tab edits require previously approved membership and are queued on the device. Page closure cannot guarantee a completed request. Explicit “Save & end session” and Settings “Sync now” are provided.
- 65 starter topics; Fundamental Rights original guide and two original questions; five original GMA questions. No imported third-party pack and no fabricated PYQ claims.

## Owner setup and sharing
The Site must remain OWNER-PRIVATE until its owner signs in and presses **Set up my admin account**. First-claim ownership is only safe because the hosting platform restricts this initial publication to its owner. The claim persists in a unique singleton row and cannot be claimed again. Do not share or make the Site public before claiming ownership. API bypass credentials are not user identities and cannot claim ownership.

After ownership is claimed, separately configure Site sharing for invited learners. That lets them reach sign-in and request membership, but it does not approve app access. They remain pending until the super admin approves them. Learner progress stays isolated. Email/provider recovery can restore the same identity; the app does not merge identities automatically.

## Corrections and next work
1. Original app PDF/OCR/news/push/provider-API integrations run in its separate optional Node service; they are not deployed in this Workers website.
2. Bring reviewed chapters and verified paper/answer-key provenance into the topic bank before claiming complete study coverage.
3. Review and resolve third-party licensing before redistribution. No unlicensed question pack is embedded here.
4. Verify exam date/notification/syllabus against APPSC; this build does not publish an unverified countdown or repeat notification claims.
5. Existing chat subscriptions cannot authorize direct AI API calls. This edition uses context prompts and provider links; no AI passwords/tokens are collected.
6. Full offline installation and push reminders remain original-app features pending integration into this edition. Do not cache authenticated HTML across accounts.
7. Cloud event reads currently support 5,000 records per learner. Add cursor pagination before high-volume use. Export backup contains current merged device history.
8. Topic completion is self-reported and does not imply mastery; no fabricated streaks or results are seeded.

## Verification
Run TypeScript, event-validation tests, Drizzle migration generation and the supported Sites build. Browser QA should use only the supported browser skill when available. Live authentication and invitation scenarios require owner and invited learner browser sessions; no delivery or multi-device result is claimed without those checks.

## Invitation registration (11 October 2026)
- Control room creates reusable group links with 1-, 7- or 30-day expiry. Full links are shown once on creation and can be copied manually; only SHA-256 token hashes are stored in the database.
- A 256-bit random invitation token is carried in a URL fragment (`/#invite=…`) and preserved through the hosted sign-in return path. It is not included in ordinary page HTTP requests or referrers. No invitation tokens are committed to GitHub or local progress backups.
- Signed-in new visitors remain `unregistered` until they explicitly redeem a valid link. Registration creates one pending membership and records its invitation ID. Existing approved members remain approved. Suspended/rejected members cannot use a new link to bypass the owner's decision.
- Only the super admin creates/revokes links or decides memberships. Revocation blocks new registrations; it does not revoke existing or pending memberships. Suspending a learner is a separate action.
- Conditional SQLite registration rechecks active status and expiry at write time, protecting against a revoke-between-lookup-and-write race. Repeated registration is idempotent.
- Existing pending memberships from the first release remain reviewable; new guest entries are hidden from the approval queue until registered. Account recovery cannot register an unregistered visitor without an invitation.
- Hosting permissions remain unchanged: this Site is owner-private. Invitees must first be allowed through Site sharing (external invitations are supported). Application invitation links cannot grant hosting access. Owner setup must precede sharing.
- Sixteen access/token/event tests and SQLite migration/conditional-write scenarios passed. Browser visual QA and a real invited-user sign-in round trip remain unverified because the supported browser skill is unavailable here.

## Reading room (12 October 2026)
- Added eight licensed publisher chapter PDFs, ten official source references, a checksum/provenance catalogue and attribution records. NCERT PDFs are not mirrored: conflicting hosting/reuse notices remain unresolved.
- Reading room saves chosen PDFs to account-scoped IndexedDB. It supports private user-file import (30 MB cap), page navigation/resume, local bookmarks/notes, PDF export and removal. PDF.js renders on Android without relying on a browser PDF plug-in.
- PDF bytes, bookmarks and notes remain device-local. Only reading-position events sync to the account's D1 history. Each device needs to download/import its own copy. An offline reading outbox is drained when the approved online workspace resumes; newer remote positions are restored into matching local files.
- Service worker caches only the standalone offline reader and required scripts/catalogue, never authenticated app HTML or API history. Navigating without a connection falls back to the prepared reader. Preparation requires an approved online session; offline account display uses that device's last prepared account and is cleared on app sign-out. This is device storage, not encryption or offline server authorisation.
- Browser storage may be evicted or cleared. Persistent-storage requests can be refused. Learners should keep original PDF backups. Full study-dashboard offline installation, OCR, chapter search/highlights and automatic NDLI search/download are not added by this change.
- Twenty access/content/reading validation tests and the existing SQLite registration checks pass. PDF covers and selected chapter pages were rendered and checked. Browser and real Android airplane-mode/multi-device tests remain unverified in this environment.
- Reproducible collection generation is in `scripts/build-study-materials.py`; full publisher source downloads stay untracked. Source SHA-256 values are recorded for regeneration; the generated permitted chapter PDFs are committed directly to the repo.

## Member feedback: navigation and recovery (12 October 2026)
Request: a member found the comparison revision site easier to reach; ours had no visible Back action and members wanted backup/restore to continue from saved progress.

Findings: the website used `history.replaceState` for every page, replacing the browser's study navigation history. It exposed JSON export in Settings but had no restore. The original offline app already had validated export/import and hash navigation, but its controls were less discoverable and import stayed on Settings.

Changes:
- Website uses pushed route history, an always-visible Back control, named lesson URLs, phone bottom navigation, Resume learning and Backup & restore shortcuts. Browser Back/Forward restores the page and named topic. It does not rely on opening the invitation/site link repeatedly.
- Same-account website backups include validated study events, topic notes, a saved study-page/topic cursor and device PDF reading notes/bookmarks. Export excludes PDF bytes, credentials and roles. Restore previews first, merges without erasing existing history, deduplicates events and rejects conflicting IDs. Invalid or cross-account files are rejected. Older unbound website exports require the learner to confirm ownership. The original app's format remains separate and is explicitly identified.
- Before import the website saves a device rollback history checkpoint. PDF reading metadata is reapplied when matching files exist or are downloaded again. If storage is insufficient for reading metadata, the UI reports that limitation; the learner retains the original backup. Reading files themselves must be downloaded or imported per device. Pending metadata not yet attached to a downloaded PDF may require retaining the backup file.
- Restore does not restore a running website quiz timer, unsubmitted answers or unsaved text; it restores saved topic/page and history. The original app already persists unfinished quiz attempts separately in its event backup.
- Cloud uploads are bounded by serialized batch size as well as event count so large restored note collections do not exceed the request limit.
- Original offline app adds a visible Back control and prominent Resume/Backup links, includes a resume destination in exports, and returns to a saved lesson after import. Service-worker cache advances to v8. Its existing backup content includes paper attachments and notes.

Comparison: the other site's served HTML/JavaScript exposes a revision hub, flashcard/notebook routes and progress JSON import/export. Browser visual comparison was not available, so no visual test of that page is claimed. No competitor code or material was copied into this repo.

Verification: 26 website tests pass, including backup identity, malformed input, immutable-ID conflicts, duplicate imports and named lesson URL parsing. The original offline app's 26 tests and syntax checks pass. Browser/Android Back gestures and real backup file-picker/device restore still need live verification because the supported browser skill is unavailable.

## Guided learning loop — 13 October 2026
Request: implement Learn → Recall → Practise → Revise in website, app and GitHub, with documentation.
- Prominent staged lesson panel with Telugu-first original Fundamental Rights teaching, English reference, a simple example and explicit acknowledgement before each next concept. Reference guidance is collapsed during the memory exercise.
- Three written active-recall prompts; a saved draft and explicit self-review before practice. Reference answers are shown only on request. Self-assessment is not automated factual grading or proof of mastery.
- Two original rights MCQs, explanations, negative marking and automatic correction entries for wrong answers. Completion schedules existing 1/4/7 revision once.
- Other website topics require saved trusted notes and externally sourced practice reflection; no complete chapter or reviewed question set is fabricated. Unrelated topics no longer open the GMA drill as topic practice.
- Learning stage, concept index, recall answers and reflection are validated study events included in account sync and backups. Unsaved typing and live answer selections are not carried between devices; save draft/submit before switching.
- Original offline app receives the same four-stage guide, topic-specific practice from reviewed bank or original rights questions, saved recall and cursor, and cache v9. Its existing vault sync and backup include the new event type.
- Existing manual completion controls remain self-reported; they do not establish mastery. No new PYQ years, unsupported article details, external AI account access or unlicensed materials are added.
Verification: TypeScript and 29 website tests pass; 28 original-app tests and syntax checks pass. Workflow tests cover validation, recall gates and saved-state round trips. Browser/real Android multi-device QA remains unavailable. The production build is required before publication.

## Bhimboy reference catalogue and editorial workflow — 13 October 2026
Request: add micro-topic structure, content review and 1,460 questions; user proposed bulk-copying components/notes because the repo is public. Correction: public visibility does not supply a reuse licence. No licence was found. We built the components independently and indexed factual metadata/source links, without copying question bodies, answers, notes or components. Full-text reuse remains pending permission or an applicable licence and factual source verification.
- Exact source snapshot: BhavishyaIAS/bhimboy d06cee211aa37f3820cd26f06ac9ff695f1f39ef. Catalogue: 469 micro-topic headings and 1,460 external question references, with claimed year, stage, paper, number and source file. Source syllabus is 2018, not asserted current.
- 799 references have provisional keyword placements; 661 remain Needs topic review. This is not an approved PYQ bank. Mains records stay labelled Mains; no reference enters timed Prelims tests. Every reference links to its source instead of redistributing full text.
- Topic Library exposes searchable metadata; each lesson has a collapsed related-reference section. Original offline app adds Source catalogue and caches metadata in service-worker v10. External source text still requires online access.
- Super admin Control Room adds source/placement review and an original lesson editor, draft/publish/reject decisions, separate editorial export and audit entries. Publishing requires source and reuse confirmations; reference publication requires official APPSC paper and key HTTPS links. Host validation is not proof of factual correctness; labels say Admin source-checked.
- Editorial records are stored separately from personal study events using owner-scoped content IDs in the existing events table. The new API requires approved membership to read published records, owner identity to mutate and same-origin requests. Drafts are owner-only. Personal study backups exclude editorial records; use editorial export separately. No database migration is needed.
- Corrected TypeScript errors from unknown fetch JSON results and an untyped test callback; rerun checks before packaging. Metadata-only index generation asserts record counts and omits copyrighted body fields. All original source text remains in its external repository.
- Browser/Android live editorial testing unavailable; database/API access logic inspected and validation/count tests run. Source catalogue is not a full imported question collection.
