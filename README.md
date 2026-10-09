# Group1 Sprint

An offline-first APPSC study workspace for Android and desktop. A responsive forest-green interface keeps the next learning action visible, without fabricated scores or progress. Personal study records live on the device and can sync, encrypted, into a separate **private** GitHub repository.

## What works in v1

- Today dashboard, provisional plan approval and unfinished-topic carryover.
- A 65-unit starter map with search and subject filters. This is **not** a certified complete official syllabus.
- Guided Fundamental Rights starter lesson; other units provide notes, references and context-complete tutor prompts.
- Saved lesson position; persistent 1/4/7 revision queue and mistake ledger.
- Five-question/six-minute original GMA drill; timed 30-question tests and 120-question paper mocks when enough imported questions exist.
- JSON/CSV question import with provenance requirements for user-supplied PYQs. No invented years or paper claims.
- Score = correct − wrong/3; skipped questions score zero. Track confidence and eliminated options.
- PDF/PNG/JPEG reference vault (4 MB per file), current-affairs journal and real progress views.
- Full JSON backup/merge including attachments. Credentials excluded.
- Offline app-shell cache, IndexedDB event persistence and encrypted cross-device event sync.

## Run locally

Requires Node 22+ for tests and Python 3 for serving. No app build or production npm dependency is required.

```sh
npm test
npm start
```

Open `http://localhost:8080`. Serve via HTTPS for a phone installation; the localhost exception only applies on the same machine. Opening `index.html` directly from disk is not the supported PWA path. Local URLs on a laptop are not automatically accessible from Android.

## Publish to GitHub Pages

1. Repository Settings → Pages → Source → **GitHub Actions**.
2. Actions → **Publish study workspace** → **Run workflow** on `main`.
3. Use the URL reported by the deployment; open it in Chrome on Android and install/add to home screen.

The Pages workflow publishes **only `app/`**, never personal vault files. The deployment requires the one-time Pages setting; this repo's connector cannot change that administration setting. Hosting is not claimed live until a deployment succeeds. Subsequent deployments are manually triggered so unreviewed changes do not silently replace an installed app.

## Connect Android and laptop

In Settings & sync, enter the same private data repo (`imranshaik-pro/crack-group1-data`), a fine-grained GitHub token restricted to that repo with Contents read/write, and the same vault passphrase (12+ characters) on each device. **Never send credentials in chat or commit them.** Token/passphrase are memory-only and must be re-entered after a page reload. This is deliberately a personal-use v1; OAuth through a backend is the recommended public-product upgrade.

Unlocking first pulls existing remote records, then uploads local pending events. It refuses public data repositories. Saves are debounced while unlocked; reconnect, focus and resume trigger sync. Use **Save & end session** and wait for **All changes synced** before switching. Closing a mobile app is not a reliable upload trigger. Offline changes remain pending on the original device until it reconnects and syncs.

GitHub is a small personal vault, not a real-time multi-user database. Concurrent offline edits to the same note resolve deterministically; both edits remain in the event history. Remote batches are immutable and deduplicated. See [architecture](docs/ARCHITECTURE.md).

## Question import

JSON: array of `{id,text,options:[A,B,C,D],answer,topic,kind,paper,explanation}`. Answer is zero-based 0–3. `kind` is `original` or `PYQ`. A PYQ additionally requires numeric `year`, HTTPS `source`, `paper`, and `questionNumber`. A source URL is a provenance record, not independent verification. Check against the actual official paper/key before trusting imported answers.

CSV header:

```csv
id,text,A,B,C,D,answer,topic,kind,year,source,paper,questionNumber,explanation
```

Quote cells containing commas, quotes or newlines. Use topic IDs from `app/content.js`; e.g. `t-1-1` = Fundamental Rights. Full mocks need at least 120 imported questions with the selected paper (`I` or `II`); weekly tests need 30. Bundled questions are original exercises, not previous-year questions.

## Accuracy and limits

Exam schedule, notification number, vacancy count, pattern and negative-marking rules need verification against the official APPSC notification. No unconfirmed exam date is seeded. The Telugu subject labels are descriptive; they are not represented as official APPSC translations. No automated PDF OCR, full lesson curriculum, AI API, background news ingestion, push reminders, or full Telugu interface is included yet.

Local storage and exported backups are readable personal data; remote vault batches use AES-256-GCM, random salts/IVs and PBKDF2-SHA256 (310,000 iterations). Losing the passphrase prevents remote decryption. Browser data can be cleared or evicted: export backups regularly. Private GitHub storage and encryption do not make a shared unlocked device private.

## Project record

- [Architecture & security](docs/ARCHITECTURE.md)
- [Product decisions & next priorities](docs/DECISIONS.md)
- [Build and validation record](docs/BUILD_LOG.md)

Browser QA runs in GitHub Actions and uploads desktop/mobile screenshots. Local core tests pass; the restricted build environment could not install or launch Chromium. No claim of live end-to-end GitHub-token sync is made without a real device setup.
