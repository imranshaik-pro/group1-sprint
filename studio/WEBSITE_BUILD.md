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
