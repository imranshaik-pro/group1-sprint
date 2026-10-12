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
