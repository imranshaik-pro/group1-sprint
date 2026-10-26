#!/usr/bin/env bash
set -uo pipefail
qa_status=0
./android/gradlew -p android --no-daemon -Pandroid.injected.androidTest.leaveApksInstalledAfterRun=true :app:connectedDebugAndroidTest || qa_status=$?
mkdir -p qa-screenshots
api_level="$(adb shell getprop ro.build.version.sdk | tr -d '\r')"
adb pull "/sdcard/Android/data/in.group1sprint.study.pilot/files/native-home-api-${api_level}.png" qa-screenshots/ || { if [ "$qa_status" -eq 0 ]; then qa_status=1; fi; }
exit "$qa_status"
