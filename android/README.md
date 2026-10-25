# Group1 Sprint Android pilot

Installable Android launcher for the existing APPSC Group-I study workspace. This is a browser-backed Android app, not a rewrite of the course in native Android screens. It has a native home screen with Today, Learn, Practise, Notes & Textbooks, Progress, Account and Sync/backup shortcuts.

## Build

Requires Java 17, Android SDK platform 36 and build tools 35.0.0. Set `ANDROID_HOME` or an untracked `local.properties` with `sdk.dir`. The checked-in Gradle 8.13 wrapper pins the distribution checksum.

```sh
cd android
./gradlew --no-daemon :app:assembleDebug :app:testDebugUnitTest :app:lintDebug
```

Output: `app/build/outputs/apk/debug/app-debug.apk`. Pilot package: `in.group1sprint.study.pilot`; version `0.1.0-pilot`. Minimum Android 8 (API 26), target API 36. The debug build is signed with the build environment's debug key; it is for sideload testing, not a Play Store release. A different build environment can have a different debug key, so its APK may not update an existing pilot installation. Export study backups before changing installations or clearing browser data. No signing keys or local SDK paths are tracked.

## Accounts and storage

Android Browser Helper 2.7.4 opens only allowlisted routes on the existing HTTPS study origin. Sign-in, cookies, browser downloads and cached lessons remain with the selected browser. There is no WebView JavaScript bridge, native credential collector, new user database or embedded API key. Native app backup is disabled; use the study app's full export for study records. Internet and network-state are the only directly requested app permissions.

First sign in at Account using the same identity as the website. Then use Sync & full backup and the account-sync consent flow. Prior device history is not silently uploaded or guaranteed to merge. Browser changes can select a different storage profile. Keep full backups of attachments and large snapshots.

The app requests a Trusted Web Activity with Custom Tab fallback. **Full screen is not yet authenticated:** the hosted website has not been changed to publish this pilot's signing-certificate association at `/.well-known/assetlinks.json`. A visible browser toolbar is expected until the final application ID and durable signing key are associated with the site. App metadata alone does not prove domain verification.

## Offline behavior

The native launcher opens offline. Lessons and PDFs are fetched from the hosted PWA, whose browser-managed service worker caches the shell and previously opened material. This APK does not bundle all 534 pages, provide guaranteed cold-start offline study, or migrate browser data into native storage. Cloud sync and sign-in need internet. The selected browser's cache must be retained.

## Remaining acceptance

- Install/launch on a physical Android device, including large-font layout, Back, sign-in, PDF download/open, offline reopening, backup and sync against a second device.
- Check the observed Sites `/callback` login issue with a real account; the Android wrapper does not bypass or replace the platform-owned auth callback.
- Configure durable release signing and site Digital Asset Links before claiming verified fullscreen or preparing a Play release/AAB.
- Live AI remains inactive; the Android build does not configure provider credentials or spend money.
- Existing content/OCR review, official-syllabus mapping and rights-held external documents remain pending. See `../docs/INTEGRATION_REPAIR_2026-10-22.md`.

## Validation scope

Route-policy unit tests reject lookalike origins, user-info URLs, HTTP, unknown routes, arbitrary ports, query credentials and non-HTTPS intent schemes. Android compilation, lint and APK signature checks complement these tests. They do not establish real-device login, browser-origin verification, offline-cache availability or complete content accuracy.

CI: `.github/workflows/android.yml` builds the pilot APK and retains its test/lint results as workflow artifacts. API keys and production signing secrets are not used.
