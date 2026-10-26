# Android phase 3: native validation and release packaging

Scope: run the Android launcher on emulators and validate release packaging; do not call an unsigned bundle a production release. The Site remains version 30 with its existing audience and offline document packs.

## Changes

- Instrumented Android tests install and render the real HomeActivity, recreate it, inspect every study/account/backup handoff URL, open/close About, check rejected foreign Intent data, and confirm StudyActivity is not exported.
- CI runs these tests on API 26 (minimum Android 8) and API 35 at font scale 1.3. Browser launches are intercepted by Espresso Intents: passing these tests does not prove browser rendering, real login, fullscreen trust or live account sync.
- CI retains native screenshots and Android test XML. No real learner or credential is used.
- Release bundling runs with minification/resource shrinking. When no signing credentials are supplied, its artifact is explicitly named UNSIGNED and cannot be uploaded as a completed Play release.
- Gradle accepts release signing only when all four GROUP1_SIGNING_* variables are supplied; partial configuration fails. No release key is generated or substituted with the debug key.
- A signing preflight reports missing settings without displaying values. With an existing store, it checks a private-key alias using keytool's environment-password option. Four Python regression tests cover missing/partial settings, absent/symlink files, certificate-only aliases, and secret-safe subprocess arguments. The actual release build still validates the key password and signs the output.

## Required evidence before completion

Record the Android build/lint/unit-test outcome, both terminal emulator results and the resulting artifact identifiers. A written workflow or test is not evidence that it ran successfully.

## Remaining external gates

Production signing currently has no configured store, password, alias or key password in this environment. A signed production AAB, durable owner-controlled key custody, matching public domain association, Play listing/release and a physical-phone acceptance test remain external gates.

The last observed unauthenticated request for /.well-known/assetlinks.json returned 401 under custom Site access. No hosting access was widened and no user identity was forged. Android cannot verify that association until it is readable under an appropriate hosting configuration.

No AI provider credentials or API spend were created. Source/answer/Telugu review, the 150 weak OCR transcriptions, rights-held external PDFs and official syllabus mapping remain content work rather than Android build certification.
