# Embedded PDF release verification

## Release identifiers

- Website/PWA source: `9bca4a7febf111f763171e04cd1ce789a70cdc67`.
- GitHub implementation: `5f9b03fc73b42bd16e9a63cc8bc6e2823cd48e28` (initial ingestion `7bf586f8fd3b6a548e2feb2773fcfc2aaffa486c`).
- Site version: 25. Existing custom audience preserved.
- CI: https://github.com/imranshaik-pro/group1-sprint/actions/runs/39158783761 — successful.
- Live app reader: https://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html#pdfs .
- Archive SHA-256: `c1276f07e2199004884582fef31e6bedb3690e7f689a5f52f27605633d5eb1ca`. Package contains 426 scan images (213 mirrored in two readers) and 60 JSON document assets (30 mirrored).

## Checks

- Website module checks: 68/68 passed.
- Website TypeScript test cases: 49/49 passed; TypeScript compilation passed.
- App module checks: 111/111 passed locally and in GitHub Actions.
- App production asset build completed from pinned PDF sources in CI.
- Existing browser journey passed: desktop/mobile routes, lesson progression, practice scoring, notes, backup, source review, offline use and daily-task carryover.
- New browser journey passed: subject/topic filters, original scanned-page images, selectable text, previous/next navigation, enlarge/fit with internal horizontal scrolling, six source-recall prompts, offline cached reopening and attachments on related lessons.
- CI mobile screenshot inspected. No horizontal screen overflow. Its dense scanned page prompted the enlarge/fit control and accurate OCR labels before final release.

## Precise completion boundary

30 documents and 291 pages are available inside both readers; 27 source PDFs have their 213 pages embedded, with all pages processed for text/OCR. 150 poor handwritten transcriptions are withheld while the original source images remain readable. Six question headings are visually transcribed, unscored, with source discussion links inside the app. Existing 1,090 scored questions remain intact.

This does not mean every external PDF is extracted or published. External audit: 69 unique URLs, 45 downloaded (42 text-extracted, 3 needing OCR), 18 unavailable, 5 restricted mirrors, 1 size hold. Only 3 PIB documents from that set are released. Separate archive: 175 remote PDF signatures available but awaiting rights review; 2 restricted textbook mirrors excluded. A future scanned upload still requires extraction, quality review, mapping and publication, rather than automatic certification.

GitHub deliberately reproduces JPEG assets with `python3 scripts/materialize-pdf-pages.py app`; binary assets are retained in the Site source repository. For a separate studio-only checkout from GitHub, generate its assets with `python3 scripts/materialize-pdf-pages.py studio/public` and copy `studio/public/pdf-scans` into `studio/public/sprint/pdf-scans` before packaging. Downloaded originals are verified against the pinned manifest SHA-256.

Deployment of version 25 succeeded: `appgdep_6ad51de4c4b88191804e901b7ede533a`.
