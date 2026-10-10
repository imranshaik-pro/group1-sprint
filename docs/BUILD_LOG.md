# Build record · 9 October 2026

## Repository access

The ChatGPT GitHub connection for `imranshaik-pro` can read and write both requested repositories. They were empty when inspected. Initialized READMEs in the public code repository and private data repository. No user progress, API token or vault passphrase was committed to the code repository.

## Implementation

Built multi-page responsive workspace, persistent event state, encrypted batch sync, local backup/merge, paper attachments, source-bearing question import, timed drills/mocks and study notes/recall workflows. App production dependencies: none. Local Node core checks: all 11 passed, including offline retention, malformed payload rejection and wrong-vault-key rejection before uploads.

## Validation

Core tests cover deterministic two-device merges, deduplication/rejection, recall over month boundaries, +1/−1/3 scoring, original/PYQ import constraints, encryption round-trip and bad-key/tampering failure, simulated private-vault synchronization and refusal to write to public repositories.

Local browser verification was blocked: there is no Chromium installed; the Playwright browser download returned invalid/truncated archives; the cloud browser could not access localhost. A desktop/mobile browser test is included in CI with screenshot artifacts. Record the actual workflow result separately; do not present the written test as a passed browser test. Real GitHub-token sync on the user's devices has not been performed.

## Accuracy sources consulted

- Official APPSC portal search results show Group-I Notification 07/2026 and publication/application entries on 6 October 2026. Portal fetch failed, so detailed schedule, deadline, vacancy count and exact pattern were **not** independently verified.
- Constitution of India (official Legislative Department), used as the linked Fundamental Rights reference: https://www.legislative.gov.in/static/uploads/2025/07/359f70a69695affb9d72f8393102bd2e.pdf
- GitHub Pages configuration: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Contents API and API best practices: https://docs.github.com/en/rest/repos/contents and https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api
- MDN `beforeunload` mobile unreliability: https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event

## Hosting handoff

GitHub Pages was disabled when the repository was first read (`has_pages: false`). The connector has file/workflow access but no operation to change Pages administration. The publish workflow is ready; user must select GitHub Actions in Settings → Pages, then run Publish study workspace. No live URL is claimed before a successful deployment.

## GitHub runner validation

The second CI run succeeded: https://github.com/imranshaik-pro/group1-sprint/actions/runs/37896978937 . All 11 core tests passed. Browser checks verified plan approval, notes and lesson resume, quiz answer persistence/scoring, backup merge, search, desktop/mobile route widths, and offline reload. The initial browser test reloaded before asynchronous saving completed; it was corrected to wait for the visible saved confirmation, with no assertion weakened. Screenshots were uploaded as workflow artifacts. A final capture run covers every route at desktop and phone widths. Live user-token sync remains untested; two-device sync is simulated in the core suite.

The final all-page capture run also succeeded: https://github.com/imranshaik-pro/group1-sprint/actions/runs/37897129769 . The `dashboard-qa` artifact contains 22 desktop/mobile screenshots plus a disposable test backup. Tested screenshots show QA activity, not the user’s actual progress. The clean initial dashboard preview is checked into `docs/screenshots/dashboard-desktop.png`.

### 2026-10-10 — content integration corrections

Added conservative conversion adapters and Practice content quality desk; removed fallback topic assignments; excluded unreviewed imports from timed tests; separated Mains/TGPSC references; fixed supplied 2020 Polity Q1(a) transcription in personal reference output. Added semantic mapping, review gating, source URL and UTF-8 hash tests, plus browser import/review/rejection checks. Public source contains adapters and documentation; third-party banks remain personal import files.

### 2026-10-10 — connected learning and background sync

Added original orientation guides for all 65 starter units, saved draft/reviewed topic lessons, Study Tutor external chat/signup paths and four fixed provider API adapters through an optional private Node service. Added local PDF.js extraction, page-bearing pending question drafts with unknown answers, manual OCR through a temporary-file worker, authenticated official APPSC PDF URL fetching, official PIB feed collection and calendar/open-app/Web Push reminder paths. Question audits remain suggestions; no automatic factual approval.

Sync now checks periodically while unlocked, backs off after failures and preserves unsaved editors during cross-tab/remote updates. Manual retry stays in Settings & sync and the header shows status. Provider and vault credentials are excluded from exports/source. The optional service is not deployed and no live provider/user token is available.

Local build and all 25 Node checks pass, including API authentication/origin rejection, adapter mock replies, failed-feed retention, unknown-answer gating, daily push scheduling with overlapping checks, and sync retry backoff. The OCR worker was run against the original selectable-text PDF fixture successfully; a second original image-only PDF was tested through English Tesseract OCR and recovered the arithmetic phrase. Telugu OCR quality is not claimed tested. The browser suite now exercises actual PDF.js text extraction, draft review, tutor lesson reload and editor preservation in addition to existing desktop/mobile/offline checks. Browser result is recorded separately after CI runs.

Browser extraction exposed a PDF.js compatibility/cleanup issue. Switched to the compatible legacy bundle with local font/character-map assets and loading-task cleanup. Local real-PDF extraction now succeeds; the browser workflow is being rerun. Updated XML parser to the fixed release; npm audit reports zero production dependency vulnerabilities.
