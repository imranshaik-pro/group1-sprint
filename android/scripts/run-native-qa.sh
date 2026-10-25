#!/usr/bin/env bash
set -uo pipefail
# Preserve the actual Gradle result while collecting synthetic native UI evidence.
qa_status=0
./android/gradlew -p android --no-daemon :app:connectedDebugAndroidTest || qa_status=$?
mkdir -p qa-screenshots
adb pull /sdcard/Android/data/in.group1sprint.study.pilot/files/. qa-screenshots/ || true
exit "$qa_status"
