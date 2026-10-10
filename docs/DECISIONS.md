# Product decisions

## Accepted changes to the original proposal

- **Group1 Sprint** is the product name; reuse `group1-sprint` and private `crack-group1-data` already created by the user.
- Use an installable web app on Android and desktop with a responsive forest-green workspace, light reading surfaces, lime emphasis, large targets and bottom mobile navigation.
- Teach first, then recall and test. The user is returning to material last studied many years ago.
- Show actual zero/empty states, not sample streaks or fake exam performance.
- Require explicit provisional plan approval. Never turn an unverified date into a factual countdown.
- Treat PYQ provenance as paper + question number + year + source + checked answer key, not an LLM's confident memory. Imported claims are visibly user-supplied.
- Do not label completion as mastery or certified syllabus percentage.
- Sync during the session and on resume; explicit Save & end session is the dependable device-handoff action.
- Encrypt private remote records. Do not permanently save a GitHub token or passphrase in browser storage.
- Import papers directly into the vault; keep backup/restore in v1, because it is foundational rather than a phase-three extra.
- Record the project architecture, limitations, decisions and validation in GitHub.

## Negative-marking adjustment

“Attempt only after eliminating two options” is a cautious heuristic, not a universally optimal mathematical rule. With +1/−1/3 marking, break-even expected score is at estimated correctness probability 25%, ignoring time opportunity costs. Elimination helps only when the eliminated options really are wrong. The app captures confidence and elimination decisions so the learner can calibrate them against results. Do not advertise a guaranteed safe score.

## Next priorities

1. Verify the exact current notification, date, syllabus and rules; attach official documents. Expand the micro-topic map and approve a workload suited to available hours.
2. Populate a reviewed lesson curriculum and official-paper question bank, with reviewed keys and explicit corrections. PDF OCR can assist, but must not automatically certify extracted options/answers.
3. Complete actual Android/laptop token setup and validate a real round-trip, offline edit and recovery backup.
4. Add full Telugu teaching/UI after reviewing terminology, adaptive planning and review rating beyond +7 days.
5. If shared publicly: OAuth/backend authentication, database sync, per-user isolation and conflict resolution. GitHub remains the code repository; it should not be positioned as an unlimited free production database.

## Connected features · 10 October 2026

All 65 units now include an original foundation guide and source portal. These are orientation aids, not independently verified complete textbook chapters. A saved lesson can be AI-assisted or pasted from trusted notes and must retain its draft/reviewed status.

PDF.js extracts text locally; a private optional service adds scanned-PDF OCR. Users can fetch an APPSC-hosted PDF URL without selecting a local file. No automated catalogue discovery or automatic approval is claimed. Four-option extraction creates pending practice drafts, never inferred answers or PYQ years.

The same optional service provides fixed provider API adapters, a PIB release inbox and a Web Push scheduler. Provider account signup and consumer chat remain on the providers' own websites. Registered Sign in with ChatGPT requires separate eligibility/client setup and is not activated. Calendar reminders are available without hosting the service.

Keep sync in the background after unlock. Display status in the header and manual recovery in Settings & sync. Preserve unsaved fields on remote history updates; close events are still not reliable upload triggers. API keys and vault credentials remain out of exports and GitHub source.

## Scope deliberately not claimed complete

A full reviewed curriculum, full Telugu interface, automatic official paper discovery, exhaustive AP/international current affairs, live provider credentials, registered ChatGPT sign-in and a deployed private service are still pending. Browser and provider notification delivery depend on actual devices/hosting. AI audits are suggestions, not factual certification. Real user-token sync needs an Android/laptop round-trip test after setup.
