# Topic navigation correction

A learner reported that some APPSC topics accepted clicks without advancing. Prior tests rendered all topic lessons and visited all topic URLs, but did not click every card and every chapter segment in the actual React website. The earlier completion statement was broader than that evidence.

## Confirmed code defect

The website LearningJourney.persist function only called setFlow after save returned true. Workspace.record returns false for unsigned visitors, pending/unchecked memberships and other denied saves. Therefore Next idea, Previous idea, chapter outline jumps and chapter restart left the displayed concept unchanged when saving was unavailable. The account access notification did not make that reading block clear.

Reading position now changes in the current component even when persistence is unavailable. An explicit message says progress was not saved and requires an approved account for saving. This does not bypass cloud/account permissions, store unauthorized scores, or mark an unsaved topic completed. Practice-start failure now also gives an inline explanation rather than a silent return.

The PWA topic-title text is now an actual in-app lesson link, in addition to its Open topic button. Hash-route changes scroll to the start of the lesson; they do not preserve a deep library scroll position and make a successful navigation look inactive. Existing notes and progress are retained; no study data is cleared.

## Expanded verification

Added browser tests against the actual bundled React Workspace component and actual PWA, not a mock navigation implementation. The test bundle is generated only in CI into .qa-website and is not part of the published site. The workspace account transport is mocked for guest/pending/active states, so these are UI/state tests rather than a live identity-provider test.

The tests click all 65 website topic cards for each of the three account states, read every chapter segment as a guest, check first advancement and saving for approved accounts, and verify pending/guest sessions send no cloud writes. They also click all 65 PWA topic-title links and traverse every chapter to recall. Existing study, PDF and daily-task browser checks continue to run. Counts, failures and passing release identifiers will be recorded after the run.

## Passing release evidence

Published Site version 28 successfully. Source commit: `0deee3f69c899cf1dacd7402ba3e1d42cfd89a88`. Deployment: `appgdep_6ad5bdedf78481919dcaeac46720add9`. GitHub implementation: `2ee7c18cf582363381eb3646868cd2e8496641f3`, browser-adapter correction `1499af592a8e189a16d1737672a0d319f75a14e0`.

CI https://github.com/imranshaik-pro/group1-sprint/actions/runs/39212056807 passed. App unit checks 112/112; website module checks 70/70; website TypeScript tests 49/49 and TypeScript compilation passed. Existing browser journeys also passed.

New browser results: 195 website card clicks (65 each for guest/pending/active), 341 subsequent website concept transitions, 65 PWA topic-title clicks, 211 PWA concept transitions. The guest website and PWA each traversed all 276 chapter segments to recall. Pending and approved website sessions advanced from the first to second idea for every topic. The approved session's saved position survived reload; pending and guest sessions made zero cloud writes. Account transport was mocked; this is not proof of a live login-provider or membership-backend audit. Mobile screenshot inspected. These results cover the listed navigation paths; they are not a claim that every feature of the application was tested.

CI initially exposed an incomplete unit browser adapter: it lacked window.scrollTo after route scroll reset was added. The adapter now implements it and asserts at least 65 route resets rather than removing that behavior or weakening browser tests.
