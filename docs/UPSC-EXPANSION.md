# UPSC resource expansion

Requested: add the uploaded UPSC-Notes-Resources collection to imranshaik-pro/group1-sprint, as a separate UPSC navigation section alongside APPSC.

## Delivered

Both the offline app and the website source now have **APPSC topic library** and **UPSC resources** navigation entries. The UPSC catalogue has subject filtering, full text search, expandable plain text notes, original PDF/image links, external reference lists, pagination and empty states. Responsive cards become one column on narrow screens. Website route parsing and backup resume validation accept `#upsc`. The app service worker caches the catalogue and reader module after an online installation.

The ZIP contains 185 files: 183 resource entries plus README and LICENSE. Of those resources, 141 are text files rendered inside the app; the remaining 42 PDFs/images link to pinned source paths. There are 22 categories, including general guidance. Categories preserve the uploaded folder structure; they are not a claim of complete UPSC syllabus coverage. Text renders as escaped plain text rather than executing HTML or rendering imported Markdown.

## Provenance and rights

Source: https://github.com/madhurimarawat/UPSC-Notes-Resources

Archive revision: `3e9d46ce703ce18b9a161ca4b8819f789f31de46` (ZIP comment). SHA-256 of the original upload is stored in both generated catalogues. The supplied repository MIT licence is retained in `docs/UPSC-SOURCE-LICENSE.txt`. Copyright (c) 2026 Madhurima Rawat. Third-party linked publishers retain their own rights; their documents have not been downloaded or republished. Resource URLs preserve topic folders and pin to the archive revision. External link availability and content accuracy have not been verified.

To reproduce:

```sh
python3 scripts/import-upsc.py /path/to/UPSC-Notes-Resources-main.zip
npm ci
npm test
npm run build
```

The generator does not extract or execute the archive. Text and catalogue metadata are mirrored into `app/upsc-resources.js` and `studio/lib/upsc-resources.js`.

## Scope and review

This delivers a UPSC resource library, not a second adaptive exam engine. Existing APPSC topic IDs, progress events, tests, scoring and practice remain unchanged. All imported resources are visibly pending review. Imported question texts do not enter scored practice, and no question is promoted to a verified PYQ. Dated current affairs need official-source review before instructional reuse. Source PDFs require an internet connection; the offline app caches catalogue and text notes only. Website catalogue offline caching is not added by this change.

Website changes here are source changes in this repository. The existing hosted Site requires its own source synchronization and publication; opening or merging this PR alone does not prove that hosted Site was updated.

## Validation

- 49 Node tests pass, including import integrity, mirrored catalogue identity, HTTPS source URLs, review separation, filtering and escaping.
- Offline application build passes.
- Initial test attempt ran before dependency installation finished and failed on missing `web-push`; after installation all 49 tests passed.
- Website TypeScript check (`npx tsc --noEmit`) passes; website production build passes. The bundler reports a large client-chunk warning.
- Seven website backup/navigation tests pass, including UPSC route round-trip and restore with unchanged APPSC events.
- Browser visual/runtime QA was attempted but not completed: Playwright Chromium was absent, and browser download returned a truncated/non-ZIP payload. Mobile layout, click interactions and actual offline reload therefore remain unverified in a real browser.
