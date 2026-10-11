# Group1 Sprint — hosted study website

Live private website: https://group1-sprint-studio.spryplume16.chatgpt.site

Built on 11 October 2026. Website source and the dependency lock are recorded under `studio/`; the existing offline application and private GitHub vault remain separate.

The website has colour-themed study pages, starter plan approval, original GMA and Polity practice, notes, 1–4–7 recall, source-linked paper/headline references, progress, a context prompt builder, and account/recovery pages. Server-backed per-account study history and pending membership approvals use hosted D1 storage and ChatGPT identity.

## First owner visit
Sign in, then press **Set up my admin account** while the Site is owner-private. This permanently binds the super admin role to your authenticated identity. Configure Site sharing only after this step. New visitors register through a valid invitation from **Control room**, then remain pending until you approve them. Do not make the Site accessible to other people before the owner claim. The app's admin membership approval is separate from hosting sharing permissions.

Passwords and sign-in recovery are managed by the identity provider. No independent email/password authentication or custom recovery email service is configured.

## Sync
Foreground background sync runs on opening, reconnection, visibility resume and every 30 seconds. Local outbox writes retry; duplicate event writes do not create duplicate history. Manual **Sync now** is in Settings, and **Save & end session** is in Today. Wait for **Up to date** before changing devices. Full offline installation, push reminders, Node PDF/OCR, automatic news and direct provider API calls from the original app are not integrated into this edition.

## Validation
TypeScript, the framework production build, database migration generation and sixteen access/token/event validation tests plus SQLite registration checks passed. Publication succeeded. Browser visual QA, real owner sign-in, invitations and a two-device session were not verified in this environment because the supported browser skill was unavailable.

See `studio/WEBSITE_BUILD.md` for the limitations and owner setup contract. Full reviewed chapters, source-verified PYQs and third-party license clearance are the priority before learner rollout. The 105-day allocation is a starter blueprint; it is not a complete adaptive coaching engine. No exam countdown is based on an unverified date.

## Source / deployment
Website publication source commit: `15b01604d818b820c59584d501567c75ba285707` in the hosted Site source repository. The source snapshot here excludes unused starter UI components; it preserves the application, framework build support, database schema/migration, license attribution and dependency lock. To work on the existing hosted Site, use its authorized source checkout and preserve its Site identity rather than deploying it to GitHub Pages, which cannot run this server-backed application.

## Invitation links
Open **Control room → Invite learners**, choose a name and expiry (1, 7 or 30 days), create and copy the link. Full links are shown only at creation. A learner opens the link, signs in using their own account and selects **Register & request approval**. Their pending row shows which invitation they used. Approve, reject or suspend from the membership table.

Revoke a link to stop future registrations; existing membership decisions remain unchanged. New registration cannot bypass a suspension. The hosting Site remains owner-private: invited learners also need Site-sharing permission before the application link can open for them. This update does not make the Site public or send any invitations automatically.
