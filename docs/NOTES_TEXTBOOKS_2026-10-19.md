# Notes & Textbooks: subject library

The learner requested one subject-organised section where notes and textbooks open inside the website or app. The existing extracted-PDF reader is now called Notes & Textbooks, with a direct shortcut beside APPSC/UPSC and a sidebar entry. Existing #pdfs routes remain compatible.

The library contains 38 documents / 534 pages: the existing 30 notes/reference documents (291 pages) and eight already bundled OpenStax textbook excerpts (243 pages). Each excerpt was extracted page by page from the checked local PDF; SHA-256 matched the existing catalogue. This is mechanical extraction for display, not model training or generated lessons. Source attributions, licences and foundation-study scope are retained. These are excerpts, not complete books or complete APPSC chapters. No new answer keys or scored questions were generated.

Subject cards show all seven syllabus subjects plus optional collections and the exact number available for the selected material type. Notes/reference and textbook excerpts have separate filters. Material stays mapped to relevant topic IDs. A subject with no matching embedded content displays an explicit empty state; the shelf does not imply every subject already has a complete textbook.

Textbook reading uses extracted text plus an optional original-page layout rendered by local PDF.js inside a same-origin frame. This retains charts, equations and diagrams that text extraction alone cannot reproduce. Previous/next page controls, enlarge/fit and local attribution keep the learner inside the app. Checked document IDs and PDF paths are allowlisted; original PDF hashes are verified before rendering. No external PDF URL or publisher page is used for learner navigation.

The older Reading Room was audited too: external publisher/catalogue buttons were removed; unhosted discovery entries are excluded from readable books. Imported personal PDFs and existing offline reading/sync continue to use that reader. Publisher source names remain plain attribution. The PWA service worker is v29; textbook documents cache on demand rather than forcing a bulk download.

The 150 previously reported weak handwritten transcriptions remain pending. Their source page images are still readable. No unavailable or rights-held external PDF is counted as newly published.

Verification: module checks, catalogue hashes, subject/type filtering, same-origin textbook viewer, no external navigation in legacy reader, TypeScript compilation/tests, production packaging and CI browser journey. Exact release identifiers and CI outcome are recorded after publishing.

Release verification caught two app test files incorrectly copied from website tests; restored their app paths. Browser QA then caught mobile overflow on a textbook text page; contained text/iframe widths and retained overflow assertions for the corrected build.

## Published verification

Version 27 deployed successfully on 19 October 2026. Deployment: `appgdep_6ad5ae7dbbd881919b3522082b24d564`. Site source commit: `0013421fbd236b26995d043690423f994365feb9`. GitHub implementation: `b10ba0338e12ecd5eec98dea0f8a8fb7d4b7008c`.

CI: https://github.com/imranshaik-pro/group1-sprint/actions/runs/39205987239 — passed. App: 112/112 tests. Website: 70/70 module checks, 49/49 TypeScript tests and successful TypeScript compilation/production build. Browser journey passed subject shelves, textbook filtering, local PDF.js canvas rendering, enlarge/fit, next-page navigation, no external reading links and no mobile horizontal overflow. Mobile screenshot was visually inspected. Previous daily-task, study and offline journeys passed too.

Live website: https://group1-sprint-studio.spryplume16.chatgpt.site/#pdfs . Live PWA: https://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html#pdfs .
