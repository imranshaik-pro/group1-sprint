# Browser interaction testing — authentication blocker

## Attempt and observed result

The user requested live browser interaction testing after the confirmed197-question release. A cloud Chrome tab opened the published practice URL:

https://group1-sprint-studio.spryplume16.chatgpt.site/#practice

The rendered accessibility tree showed **Sign in required**, **Log in to access**, and **Continue with ChatGPT**. This establishes that the unauthenticated browser encountered the existing access gate. It does not establish that the authenticated practice UI works or fails.

After reading the secure browser-authentication guidance, the test attempted the visible Continue with ChatGPT link. Automatic approval review rejected opening the authentication origin. Its stated reason was that the task authorized testing with an existing session but did not explicitly authorize initiating a new ChatGPT sign-in flow. This was an automatic rejection, not a user rejection. No credentials were requested, inspected, entered or stored. No alternate browser, token, header or network path was used to circumvent the rejection.

## Test status

| Check | Result |
|---|---|
| Open published practice URL | Reached the rendered sign-in page |
| Existing unauthenticated access gate | Observed |
| ChatGPT sign-in continuation | Blocked by automatic approval review |
| Subject/topic filters | Not run in browser |
| Search and pagination | Not run in browser |
| Answer/solution disclosure | Not run in browser |
| Topic-practice launch | Not run in browser |
| Answer selection, skip and submission | Not run in browser |
| Draft restoration and recorded results | Not run in browser |
| Progress and adaptive follow-up | Not run in browser |
| Hosted PWA interaction pass | Not run in browser |

The earlier80 app and85 website automated checks are separate evidence and must not be described as completed browser interaction tests. This turn changed review documentation only and did not deploy code or change access settings. A separate curriculum delivery subsequently published version20; this attempt does not roll it back or claim to have tested its signed-in UI.

## Required continuation

Explicit user authorization to initiate ChatGPT sign-in is needed to resume this browser test. After authorization, use the existing target tab and the secure browserAuth workflow for any method choice or credential request; never ask for secrets in chat. Verify a positive signed-in signal on the target domain before testing practice. Test outcomes must be recorded individually, including failures. Any test attempts should be clearly identified as QA so they are not mistaken for the learner's genuine proficiency evidence.

## Unaffected work completed

Imported-question review batch2 now has50/378 initial review records:33 supported answers,13 requiring corrections and4 held. Positions13–50 add38 source-backed review decisions. No unresolved key or proposed-law claim was automatically enabled for scoring. Fixed batch assignment IDs and original source hashes were validated.
