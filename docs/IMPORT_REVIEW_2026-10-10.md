# Review of the uploaded import package · 10 October 2026

Disposition: useful draft data conversion, **not approved as a verified question bank or a ready public content merge**. No imported third-party question packs or PDFs were committed by this review. The private vault was not accessed or modified.

## What was reproduced

Inspected the ZIP safely in a separate review directory, without overwriting the app. Ran its 12-test suite using the existing app core/content/sync modules: all 12 passed. Counted 3,145 questions, 3,145 unique IDs, no exact normalized-text duplicates, no repeated options within a question and no blank explanations. These are structural checks, not answer verification. GitHub access through the ChatGPT connector works for `imranshaik-pro/group1-sprint`; another chat's failed connection does not establish this session's access.

| Pack | Questions | First-unit fallback |
|---|---:|---:|
| History | 946 | 282 |
| Polity | 528 | 122 |
| Economy | 370 | 24 |
| Geography | 274 | 0 |
| Mental ability | 498 | 77 |
| Science & technology | 242 | 0 |
| Current affairs | 287 | 0 |
| Total | 3,145 | 505 |

## Findings requiring changes

### 1. Fallback is not a closest-topic match

In `pick`, a failed match returns `{i:0,hit:false}`. Thus 505 questions (16.1%) are assigned to the first unit in their subject, not the closest unit. Examples include Governor-Generals & Viceroys → Indus civilisation, Governance/Transparency → Constitution & Preamble, and Geometry → Number systems. Mark these unmapped pending review; do not use them for weak-topic analytics or targeted revision.

### 2. Keyword matches can also be wrong

The first matching substring wins. `international` contains `national`, so all 73 questions from the international bank are assigned to `t-6-1` (National events), rather than `t-6-2` (International events). The 28 Constitutional Authorities questions match the broad `constitution` rule first and go to `t-1-0` (Constitution & Preamble), rather than `t-1-7` (Constitutional bodies). The South Indian Dynasties bank is sent wholesale to Satavahanas/Andhra dynasties because Kakatiya appears in its title; individual questions include Shivaji. A valid topic ID cannot prove a meaningful mapping.

Use explicit source-subtopic mappings, specific rules before broad ones, whole-word matching, question-level review where banks span concepts, and an unmapped queue. Preserve original syllabus categories for Mains-specific ethics/law content rather than forcing everything into Prelims.

### 3. Reference data mixes exams and stages

The Bhimboy archive contains exactly 1,460 rows across the supplied JSON files. Of these, 134 explicitly include TGPSC in their paper labels (18 essay, 25 Paper II, 24 Paper III, 26 Paper IV and 41 Paper V rows). APPSC/TGPSC and Prelims/Mains must be explicit fields, not inferred from an archive filename. Files claiming years are unverified claims until matched to source papers. They remain reference-only.

### 4. Original question wording is not always complete

Compared the supplied 2020 Polity/Constitution/Governance/Law/Ethics PDF with Bhimboy's 2020 Mains row for Paper III, Q1(a). The PDF asks how the Constituent Assembly was formed, followed by critical evaluation of the Constitution. The JSON row includes only the critical-evaluation part. That row is incomplete as a verbatim PYQ. Q1(b) agrees with the PDF in the spot check. This does not verify the rest of the archive.

### 5. The attached PDFs are reference papers, not a Prelims MCQ bank

Extracted text from all nine supplied PDFs and inspected internal headings/instructions, including the 2020 Polity paper visually. The documents contain Mains written-answer/language papers. Examples: 2016 Data Appreciation is Paper V; 2016 Science & Technology is Paper IV; 2020 Science/Technology/Environment is Paper V. Preserve year-specific paper titles and numbers. They can inform Prelims concepts, but their questions and scoring belong in a separate Mains/reference mode. Several copies contain Adda247/TestPrime covers, ads and watermarks; a supplied copy is not proof of an official download URL. Record attachment hash, PDF page and printed question number as document evidence, with official verification still pending.

### 6. Passing tests do not certify factual answers

The added pack test asserts import validity, `kind:original`, topic-ID existence, unique IDs and total >3,000. It does not check correctness, source reliability, currentness, exam scope or semantic topic mapping. The regeneration script trusts the upstream `verified` flag. Source strings such as Wikipedia, a local GK PDF or a review label are not independent evidence. Some GMA questions cite Group-2 sources: do not present those as Group-I PYQs. A starter arithmetic/geometry spot check agreed with its stored answer; all 3,145 answers have not been checked.

The app's existing validator accepts an HTTPS source URL for a PYQ; it does **not** validate that the host is official or that the linked paper contains that question. Provenance review must go beyond syntax.

### 7. App integration is not provided by the ZIP

The ZIP does not modify app UI, service worker or publish workflow. It supplies manually importable files. Pages publishes only `app/`; root-level `packs/` and `data/reference/` will not be served by the current workflow or available in the offline cache. A reviewed-pack browser needs an explicit packaging/cache strategy, clear third-party/unreviewed labels and scoped practice selection. Do not silently feed unreviewed packs into exam simulations or weak-topic dashboards.

### 8. Manifest sizes are inaccurate

The generator uses JavaScript string length as `bytes`; this is not UTF-8 byte length. The archived JSON also differs in formatting from the generated compact representation. Example: history is listed as 1,338,256 bytes while the actual ZIP entry is 1,350,595 bytes. Generate manifest sizes from `Buffer.byteLength` of the exact written file, and include SHA-256 hashes and pinned source commit IDs.

### 9. Redistribution permission is not established in the ZIP

GitHub repository metadata returned `license:null` for all three upstream repositories. The archive's assertion of the receiving repository owner's reuse permission is not evidence of permission from those source authors. Keep data local/private pending a licence/author-permission review; attribution alone should not be treated as permission to republish their content. Do not add raw banks or supplied third-party PDF copies to the public app repository as part of this review.

## Recommended next implementation

1. Preserve the current app and merge by file/commit rather than blindly unzipping over README/tests.
2. Introduce exam/stage/source/review-status metadata and document attachment provenance.
3. Correct explicit mappings; quarantine fallback and ambiguous rows. Review answers separately from mappings.
4. Reconstruct exact Mains questions from supplied PDFs, including alternatives/subparts, page and question references. Keep them separate from Prelims MCQs.
5. Add semantic regression tests for international events, constitutional bodies, modern history and unmapped topics, plus manifest hashes/counts.
6. Add opt-in reviewed-pack import in the UI, with offline caching only after the content permissions and review status are settled.
7. Keep the learner flow foundational and Telugu-first where desired: explanation and example, contrast/trap, teach-back, then MCQs. Imported questions are practice material, not a replacement for teaching.

## Sources examined

- User attachment `group1-sprint-import.zip`; content inspected locally, not read through Library.
- All nine attached 2016/2020 PDFs; unchanged.
- Current public app tree: `b9095e9af3e9056eee6351c7c186def3a248e6b6`.
- GitHub metadata for `pavankumarbheesetti/appsc-group-1-prepration`, `BhavishyaIAS/bhimboy`, `phanindraboddu/appsc-group1-hub`.
- Hub `syllabus.html` read through the GitHub connector. Its claim to an official 2026 structure was not adopted as independent official evidence. Web retrieval of the supplied sites was unavailable.
