# Android pilot build — 25 October 2026

Version: 0.1.0-pilot. Package: `in.group1sprint.study.pilot`. Minimum Android 8/API 26; target API 36.

APK: `Group1-Sprint-0.1.0-pilot.apk` (5,191,113 bytes). SHA-256: `95c418930d28d45bd055dc2caf7fd148238eca507ae6c2873497b66d0f02b652`.

Local Android Gradle Plugin 8.13.2/Gradle 8.13/Java 17 build passed `assembleDebug`, `testDebugUnitTest` (2 tests, 0 failures) and `lintDebug` (no issues). `apksigner verify --verbose --print-certs` verified the APK v2 signature. The compiled manifest identifies HomeActivity as the launcher, minimum API 26 and target API 36. The compiled website-association string was inspected after correcting escaped JSON quotes.

This is a debug-signed, browser-backed Android pilot with a native home screen, not an independently native or fully bundled offline course. It opens the current Site version 29 PWA for study and the same Site account route for sign-in. No provider key was created or used. The web CI at repository baseline `54ab3f4dcb0018faed9f658b3139e4ab4286306b` is successful (run 39831795531). Web tests are not Android device tests.

No Android device or emulator was attached (`adb devices` had no devices), so installation, native layout, login, Back behavior, PDF downloads, offline reopening, backup and real phone-to-laptop sync remain unverified. Trusted fullscreen also remains pending: the hosted Site does not yet declare this pilot certificate in Digital Asset Links. The expected fallback is a browser Custom Tab with a toolbar. A durable production signing key and Play/AAB release process remain separate work. No website access policy was changed.

The first build's lint caught `windowLightNavigationBar` being used below API 27. It now lives in `values-v27` while Android 8 keeps the base theme. The first compiled asset-statements JSON lost quotation marks; escaped Android string resource quotes now preserve valid JSON. Final lint and build passed after both repairs. The API-31 data-extraction policy explicitly excludes native backup/transfer data; study backups remain the PWA's user-controlled export.

Existing pending content: 150 weak handwritten OCR transcriptions; broader source/answer/Telugu review; official dated syllabus alignment; unavailable/reuse-held external PDFs; live AI activation and budget verification. Large attachments remain device-only and require full backups. No content certification, new external ingestion or live identity-provider verification is implied by building the APK.

See `android/README.md` for build instructions and `.github/workflows/android.yml` for reproducible APK/test/lint artifacts. Signing keys, generated APKs and local SDK locations are excluded from source control.
