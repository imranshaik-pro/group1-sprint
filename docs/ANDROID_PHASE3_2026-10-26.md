# Android phase 3: native validation and release packaging

Scope: run the Android launcher on emulators and validate release packaging; do not call an unsigned bundle a production release. The Site remains version 30 with its existing audience and offline document packs.

## Changes

- Instrumented Android tests install and render the real HomeActivity, recreate it, inspect every study/account/backup handoff URL, open/close About, check rejected foreign Intent data, and confirm StudyActivity is not exported.
- CI runs these tests on API 26 (minimum Android 8) and API 35 at font scale 1.3. Browser launches are intercepted by Espresso Intents: passing these tests does not prove browser rendering, real login, fullscreen trust or live account sync.
- CI retains native screenshots and Android test XML. No real learner or credential is used.
- Release bundling runs with minification/resource shrinking. When no signing credentials are supplied, its artifact is explicitly named UNSIGNED and cannot be uploaded as a completed Play release.
- Gradle accepts release signing only when all four GROUP1_SIGNING_* variables are supplied; partial configuration fails. No release key is generated or substituted with the debug key.
- A signing preflight reports missing settings without displaying values. With an existing store, it checks a private-key alias using keytool's environment-password option. Four Python regression tests cover missing/partial settings, absent/symlink files, certificate-only aliases, and secret-safe subprocess arguments. The actual release build still validates the key password and signs the output.

## Verified evidence (26 October 2026, Asia/Kolkata)

The final code revision is 74663df0bf4acd2f2047c2e4fddf122da5712360, delivered through PR #7.

- Android workflow: https://github.com/imranshaik-pro/group1-sprint/actions/runs/40285387756
- Web integration workflow: https://github.com/imranshaik-pro/group1-sprint/actions/runs/40285387801

Native tests cover rendering/recreation, all seven explicit route handoffs, the About dialog, foreign Intent URL fallback, and the non-exported StudyActivity. Browser handoffs are intercepted. Live login, account synchronisation and fullscreen trust are not certified by these tests.

The initial emulator run exposed two test harness faults: Activity construction off the main thread, and the dialog check targeting the application root. Both were corrected. A further evidence-collection fault was corrected by keeping APKs installed until screenshot extraction; collection must succeed for a passing job. Native screenshots are CI artifacts; no manual visual review is claimed in this report.

All three Android jobs completed successfully: debug APK build, unit tests, lint, minified unsigned release bundling and ZIP verification; three instrumented tests on API 26; three on API 35 with font scale 1.3. The four signing preflight Python tests passed. The web workflow also passed build, unit checks, browser verification and actual website/app topic-click journeys.

Both native screenshots were pulled successfully before cleanup: API 26 PNG 202823 bytes and API 35 PNG 215314 bytes. CI artifact identifiers:
- group1-sprint-android-pilot: 12634230722
- group1-sprint-release-UNSIGNED: 12633712680
- group1-native-qa-api-26: 12633164779
- group1-native-qa-api-35: 12633264731

PR #7 merged as 8f96c78bcb471947db03ed9793225160353e37f6. No Android runtime behaviour changed in this phase; existing pilot users do not need a replacement APK. CI debug certificates are disposable, so a newly built debug APK must not be assumed compatible with the previously distributed pilot signature. The Site remains version 30; no deployment was needed.


## Remaining external gates

Production signing currently has no configured store, password, alias or key password in this environment. A signed production AAB, durable owner-controlled key custody, matching public domain association, Play listing/release and a physical-phone acceptance test remain external gates.

The last observed unauthenticated request for /.well-known/assetlinks.json returned 401 under custom Site access. No hosting access was widened and no user identity was forged. Android cannot verify that association until it is readable under an appropriate hosting configuration.

No AI provider credentials or API spend were created. Source/answer/Telugu review, the 150 weak OCR transcriptions, rights-held external PDFs and official syllabus mapping remain content work rather than Android build certification.
