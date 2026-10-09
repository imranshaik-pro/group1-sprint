# Build record · 9 October 2026

## Repository access

The ChatGPT GitHub connection for `imranshaik-pro` can read and write both requested repositories. They were empty when inspected. Initialized READMEs in the public code repository and private data repository. No user progress, API token or vault passphrase was committed to the code repository.

## Implementation

Built multi-page responsive workspace, persistent event state, encrypted batch sync, local backup/merge, paper attachments, source-bearing question import, timed drills/mocks and study notes/recall workflows. App production dependencies: none. Local Node core checks: 8 passed initially, extended tests added for failure modes. Core test output is the source of truth for the current count.

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
