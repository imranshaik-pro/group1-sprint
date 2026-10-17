# APPSC + UPSC source integration ledger

Updated: 17 October 2026. Repository: imranshaik-pro/group1-sprint. Hosted website: https://group1-sprint-studio.spryplume16.chatgpt.site

## Previous completed import

The uploaded UPSC-Notes-Resources-main.zip (Madhurima Rawat) supplied 183 resource entries, including 141 text files and 21 individual questions (10 source PYQ claims and 11 Mains/model prompts). The source revision was 3e9d46ce703ce18b9a161ca4b8819f789f31de46. Its MIT licence is retained in UPSC-SOURCE-LICENSE.txt. PR #1 was merged as 7e3c7e1d7164238e6ccd54439b570ef81d058d7e and Site version 12 was deployed successfully. See UPSC-EXPANSION.md and UPSC-DEPLOYMENT-2026-10-16.md for exact IDs, tests and limitations. Those resources remain unchanged and accessible under UPSC resources.

## New sources in this integration

| Source | Resource entries | Extracted question entries | Treatment |
| --- | ---: | ---: | --- |
| utsingh/upsc | 177 | 0 | Commit-pinned PDF references; no copies of unlicensed third-party PDFs |
| Uploaded upsc-main.zip | 57 | 3,080 | Markdown notes and model questions, converted to escaped plain text |
| Uploaded civils-india-main.zip | 2 | 0 | Two history notes; MIT licence retained; starter/demo content excluded |
| April–September 2026 current affairs PDF | 1 | 330 | Source pages and extracted model MCQs, pending review |
| September 2025–March 2026 current affairs PDF | 1 | 424 | Source pages and extracted model MCQs, pending review |
| **New integration total** | **238** | **3,834** | **Eight exact duplicate prompts retained in provenance but hidden from unique question lists; 3,826 unique new prompts** |

The second PDF spans seven calendar months despite its filename saying six. No source date has been silently corrected or promoted to a current official fact. Four extracted prompts have no reliably located answer; the UI identifies them and retains source pages for comparison. Question counts are extracted prompts, not reviewed questions or verified UPSC/APPSC PYQs. The 177 archived PDFs are not counted as extracted questions.

The uploaded upsc-main.zip is a different collection from utsingh/upsc. Its ZIP comment revision is 1d698887a44aa290b0c127623021db8fab02e6d5; the upload contains no source URL or licence. Do not attribute it to Utkarsh Singh. Full upload SHA-256 values and document data checksums are recorded in STUDY-IMPORT-INVENTORY.json. Uploaded text is handled as user-supplied source material; no claim of an upstream open-source licence is made.

The Civils India upload has a bundled MIT licence credited to Timothy Lin (2021), and its site metadata names Danish Manhas. Only data/blog/history/Bengal.md and murshid-quli-khan.md are imported. Bengal is a very short unfinished note and is not called a full chapter. Existing .next build/cache outputs, fonts, configuration, demo travel/blog posts, author profiles and executable MDX are excluded. The supplied licence remains in CIVILS-INDIA-LICENSE.txt.

## utsingh/upsc review

Source: https://github.com/utsingh/upsc. Selected commit: 279b329dc6addaf11053dfa81b0cdaf23132ba97 (5 November 2019). There are 178 files: README plus 177 PDFs. The PDF inventory includes 53 NCERT entries, 98 current-affairs/analysis entries, 18 notes, four practice-paper files, two commercial geography book files and two top-level guide/syllabus PDFs. The repository has no licence file. Third-party books and coaching materials are catalogued as links only, with original paths, Git blob SHA and size; no copies or question text are taken from those remote PDFs. They are marked archive references, including original 2016–2019 dates. They are not a current-affairs feed or a verified current syllabus. Full tree inventory is preserved in docs/sources/utsingh-upsc-tree.json.

## Delivered user experience

Imported collections is available from the top exam navigation and sidebar in both app editions. Users filter by collection, syllabus subject or chapter/year. Document payloads load only when opened, with SHA-256 checks. They can read notes and attempt questions by recall, then reveal the imported answer. Original PDF page numbers and source filenames are visible. Relevant APPSC lessons expose filtered imported collections; question-level matching uses the same stable APPSC topic IDs. Classification is provisional, and broad documents remain subject-only where an exact topic is unclear.

The new banks are separate from scored mocks, adaptive mastery and verified PYQs. No imported answer is automatically marked reviewed. The existing reviewed APPSC bank, user progress and membership controls remain intact. External archived PDFs require an internet connection. The offline app caches the catalogue shell and caches an individual imported document after a successful online read; it does not precache all banks. The hosted Site's offline-library service worker does not promise offline access to new collection JSON.

## Reproduction

Run `python3 scripts/import-study-collections.py /absolute/path/to/upload docs/sources/utsingh-upsc-tree.json` from the repository. The script reads the two uploaded ZIPs and PDFs, uses pdftotext for page-preserving extraction, and emits the index plus individual JSON payloads into app/ and studio/public/. It never extracts or executes uploaded application code or MDX. Run `npm ci`, `npm test` and `npm run build`. Website compiler/build checks must run in the actual Site checkout.

## Failures and corrections

- The first Git Trees API inventory save failed because the temporary destination folder did not exist. Created it and saved the complete 178-file inventory.
- Regression testing caught a mapping bug: a parent folder named introductory_macro_economics overrode the Money and Banking chapter. Mapping now uses each chapter basename and question stem rather than a generic parent-folder name. A regression test protects the banking topic placement.
- A documentation/test command was initially run from the studio subdirectory with root-relative paths. Moved the ledger to the intended root docs directory and reran the route test from the correct checkout.
- TypeScript rejected the initial delegated input handler's ChangeEvent type. Changed it to SyntheticEvent and retained focus/caret restoration during search updates.
- The older import's sync-event and URL-parenthesis fixes remain preserved. Earlier validation and deployment records are linked above, rather than overwritten.

## Verification limits

Source answers, contemporary claims and provisional topic mappings have not been individually checked against official publications. The PDFs mix English and Hindi; extracted Hindi glyphs can differ from the rendered PDF. Source page text is retained, but the original binary PDFs are not republished in this change. Supported browser-control tooling is unavailable in this managed environment, so real browser interaction/visual QA is not claimed. Automated dataset, checksum, escaping, loader, route/backup and regression tests are used alongside the framework build.

## Validation for this release

62 app tests, 47 hosted-site tests, nine route/backup tests in the GitHub website snapshot, the hosted TypeScript compiler check and offline-app build pass. Tests inspect every document checksum, mirrored payload, stable topic ID, source page range, duplicate count, missing-answer count, escaping, safe loader path, network failures and checksum failures. `git ls-remote` confirms utsingh/upsc HEAD remains 279b329dc6addaf11053dfa81b0cdaf23132ba97. Existing GitHub Batch 2 curriculum changes are preserved; this release applies only its own changes to the latest actual hosted Site checkout. Hosted production build and deployment IDs are recorded in the release record after publication.
