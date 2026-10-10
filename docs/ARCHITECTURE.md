# Architecture

## Device state

The app shell is static HTML/CSS/ES modules with a manifest and same-origin service worker. No external fonts, analytics or runtime CDN. PDF.js is a pinned dependency copied into the offline app shell at build time. IndexedDB holds immutable versioned learning events and a device ID; application state is a derived view. Saves complete locally before sync. Tokens and passphrases are kept only in live JavaScript memory and never included in exports, URLs, logs or the service-worker cache. No AI service is needed to load progress.

Each event has a UUID, a logical clock, device ID, timestamp, type, entity ID and validated payload. Merge deduplicates exact retransmissions and rejects conflicting copies of an event ID. Event ordering is logical-clock then device then UUID, independent of download ordering. For a single note edited on two offline devices, the deterministic later event wins in the visible notebook, while both remain in history. This is deterministic convergence, not semantic conflict resolution; a future UI should expose competing edits side by side.

## Vault sync

1. Check repository visibility; abort before writes if it is public.
2. Read default-branch tree, refusing truncated results.
3. Fetch unseen encrypted batch blobs; decrypt and validate all incoming events before local merge.
4. Batch queued events, up to 100 per file and around 6 MB plaintext. Encrypt each batch using AES-GCM and a random IV; derive the key using the shared passphrase and a random salt.
5. Create unique files under `vault/events/<uuid>.json`. Never rewrite another device's file.
6. Mark constituent events acknowledged only after a successful GitHub response. A response lost after a successful write is recovered on the next pull; deduplication prevents double-counting.
7. Report unsynced events and last successful sync. GitHub conflicts retry up to three times. Requests are sequential; uploads of multiple batches are spaced by 1.1 seconds.

No token is stored on disk. Sync must be unlocked again on reload. A remote passphrase mismatch aborts before uploads. Sync on close is not assumed; explicit Save & end session awaits it. The first empty vault has no passphrase verifier beyond the first encrypted batch: set up the first device before connecting a second one.

GitHub API rate limits, repository rules, token expiry and file size are real constraints. Failure leaves local records intact and visible. Failed requests use bounded exponential backoff (15 seconds up to 5 minutes). A 30-second foreground interval checks when retry is allowed; manual retry bypasses the delay. No popup or full editor re-render is caused by sync. Offline devices cannot exchange progress until both relevant uploads/downloads occur. This does not provide instant multi-device collaboration.

## Privacy

App code may be public; personal data repo must be private. Encrypted remote batches still reveal upload timestamps and file sizes. Local records/JSON exports are not encrypted. Imported paper files can contain copyrighted/private material; store only files the user is entitled to keep. The app never uploads to the public code repository. CSP blocks third-party scripts; HTTPS connections permit GitHub and the user-configured private service; inline style attributes are allowed for progress graphs.

A public commercial product should replace user-entered tokens with a narrowly scoped OAuth/backend session and a transactional database; keep GitHub for source code and optional backups. Add conflict review, key rotation, recovery and storage compaction before scaling. Deletion of immutable remote history is not exposed in v1.

## Learning state

A topic completion anchors recall at +1/+4/+7 calendar days (India timezone). Recall entries are keyed by topic, completion day and interval. Marking a topic incomplete removes its currently scheduled recalls from the derived queue. Completing it again on another day creates a new schedule. The 65-unit map is provisional. Plan approval does not certify official syllabus coverage. The current plan is a scaffold with sequential topic rotation and final 12-day mock focus, not a verified PYQ-weighted timetable.

## Connected learning features

Topic lessons, extracted paper text and collected releases are additional immutable event types. Existing v1 records remain valid; update the app on all devices before sharing these new event types. AI replies and extracted questions begin as drafts. Unknown extracted answers are held behind explicit selection and review; AI cannot approve questions.

An optional single-user Node service keeps provider API keys in its environment. The browser uses a separate memory-only bearer token, exact origin allowlisting and HTTPS outside localhost. API requests bypass the app-shell cache. Fixed provider adapters send only the displayed request plus explicitly opted-in topic context. There is no web-search tool, autonomous account login, purchase or question-approval tool attached to the tutor.

The service fetches a fixed official PIB RSS feed every 30 minutes, retains the last successful feed on error, and fetches supplied APPSC-hosted PDF URLs without redirects. Scanned OCR is explicitly requested, uses temporary files, and is deleted on process completion. Local text extraction requires no service. Web Push subscriptions and VAPID keys are private server data; push messages contain generic reminders, not study records. A scheduler prevents overlapping delivery jobs and records the last successful day per subscription.

This service is not a public multi-user product. Deploying it requires provider configuration, HTTPS, restricted origins, private environment/data files and a running process. GitHub Pages hosts the static app only. Consumer-provider sessions are handled on provider websites; OpenAI's client registration and plan-based Sign in with ChatGPT are not implemented here.
