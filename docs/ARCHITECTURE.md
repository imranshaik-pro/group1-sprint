# Architecture

## Device state

The app shell is static HTML/CSS/ES modules with a manifest and same-origin service worker. No external fonts, analytics or runtime libraries. IndexedDB holds immutable versioned learning events and a device ID; application state is a derived view. Saves complete locally before sync. Tokens and passphrases are kept only in live JavaScript memory and never included in exports, URLs, logs or the service-worker cache. No AI service is needed to load progress.

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

GitHub API rate limits, repository rules, token expiry and file size are real constraints. Failure leaves local records intact and visible. Rate-limit errors are surfaced rather than looped; unlock or manually retry once permitted. Offline devices cannot exchange progress until both relevant uploads/downloads occur. This does not provide instant multi-device collaboration.

## Privacy

App code may be public; personal data repo must be private. Encrypted remote batches still reveal upload timestamps and file sizes. Local records/JSON exports are not encrypted. Imported paper files can contain copyrighted/private material; store only files the user is entitled to keep. The app never uploads to the public code repository. CSP blocks third-party scripts and network calls except GitHub API; inline style attributes are allowed for progress graphs.

A public commercial product should replace user-entered tokens with a narrowly scoped OAuth/backend session and a transactional database; keep GitHub for source code and optional backups. Add conflict review, key rotation, recovery and storage compaction before scaling. Deletion of immutable remote history is not exposed in v1.

## Learning state

A topic completion anchors recall at +1/+4/+7 calendar days (India timezone). Recall entries are keyed by topic, completion day and interval. Marking a topic incomplete removes its currently scheduled recalls from the derived queue. Completing it again on another day creates a new schedule. The 65-unit map is provisional. Plan approval does not certify official syllabus coverage. The current plan is a scaffold with sequential topic rotation and final 12-day mock focus, not a verified PYQ-weighted timetable.
