# Android phase 2 — 25 October 2026

## Implemented

- Android CI no longer requests the retired SDK `tools` package. The repaired Android run 40218270657 and web run 40218270731 passed on commit `fe5f96f579992c0c09e0aaeab0487ecee073f820`; PR #5 was merged. The pilot APK is now reproducible in CI, not just from the prior local environment.
- Notes & Textbooks has explicit Save for offline, Check offline copy, Cancel download and Remove offline copy controls in the website and hosted PWA.
- A saved pack includes the hash-checked extracted document, every referenced source-page image and the original hash-checked textbook PDF when present. No unavailable or rights-held external source is added.
- Partial packs stay visibly incomplete. Retry reuses valid cached files. Quota failure and cancellation preserve partial files for resume. Redirected/sign-in HTML, invalid JSON, bad checksums and unexpected image paths cannot become a verified complete pack.
- Website saves use the same `/sprint/` storage paths as the Android app. Saving prepares that app's existing offline shell. The website's offline fallback links to the saved study reader. Shell upgrades retain the separate saved-document cache; personal notes/account API requests are not cached by the pack downloader.
- Each file is bounded to 20 MB and each document to 64 MB. Browser storage can still be evicted. Save one document at a time; keep full study backups. Removing a saved pack does not delete notes or progress, and browser caches for previously opened pages can remain.

## Verified fullscreen blocker

An unauthenticated GET to `https://group1-sprint-studio.spryplume16.chatgpt.site/.well-known/assetlinks.json` returned HTTP 401 from the Sites access gate. Android needs to read the association without a learner sign-in. Adding a file behind that gate alone cannot establish verification. The Site remains on its existing custom audience; no access was widened.

`android/verification/assetlinks-pilot.json` is the reviewed association candidate for the exact previously delivered APK (SHA-256 `95c418930d28d45bd055dc2caf7fd148238eca507ae6c2873497b66d0f02b652`) and its certificate. It is a source artifact, not a claim of publication. A future production package/key needs its own association. Arbitrary CI debug certificates are not automatically trusted.

## Validation and limits

Local checks: 126 app tests, 84 website module checks, 53 typed event-contract tests and TypeScript compilation passed. The browser gate additionally saves a complete document, removes incidental cached pages, reopens images and the next page while offline, verifies/removes a pack, and checks website-to-PWA pack sharing. Its terminal outcome and deployment receipt must be recorded before reporting release completion.

No Android device/emulator is connected. Real-device install/layout, live ChatGPT login and callback handling, PDF download UI, Back behavior and phone-to-laptop account sync remain acceptance gates. No durable production key, Play Store release, live API key or AI spending was created by this phase. OCR/content review and official syllabus mapping remain separate work.
