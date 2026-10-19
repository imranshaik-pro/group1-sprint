# Notes & Textbooks: subject library

The learner requested one subject-organised section where notes and textbooks open inside the website or app. The existing extracted-PDF reader is now called Notes & Textbooks, with a direct shortcut beside APPSC/UPSC and a sidebar entry. Existing #pdfs routes remain compatible.

The library contains 38 documents / 534 pages: the existing 30 notes/reference documents (291 pages) and eight already bundled OpenStax textbook excerpts (243 pages). Each excerpt was extracted page by page from the checked local PDF; SHA-256 matched the existing catalogue. This is mechanical extraction for display, not model training or generated lessons. Source attributions, licences and foundation-study scope are retained. These are excerpts, not complete books or complete APPSC chapters. No new answer keys or scored questions were generated.

Subject cards show all seven syllabus subjects plus optional collections and the exact number available for the selected material type. Notes/reference and textbook excerpts have separate filters. Material stays mapped to relevant topic IDs. A subject with no matching embedded content displays an explicit empty state; the shelf does not imply every subject already has a complete textbook.

Textbook reading uses extracted text plus an optional original-page layout rendered by local PDF.js inside a same-origin frame. This retains charts, equations and diagrams that text extraction alone cannot reproduce. Previous/next page controls, enlarge/fit and local attribution keep the learner inside the app. Checked document IDs and PDF paths are allowlisted; original PDF hashes are verified before rendering. No external PDF URL or publisher page is used for learner navigation.

The older Reading Room was audited too: external publisher/catalogue buttons were removed; unhosted discovery entries are excluded from readable books. Imported personal PDFs and existing offline reading/sync continue to use that reader. Publisher source names remain plain attribution. The PWA service worker is v28; textbook documents cache on demand rather than forcing a bulk download.

The 150 previously reported weak handwritten transcriptions remain pending. Their source page images are still readable. No unavailable or rights-held external PDF is counted as newly published.

Verification: module checks, catalogue hashes, subject/type filtering, same-origin textbook viewer, no external navigation in legacy reader, TypeScript compilation/tests, production packaging and CI browser journey. Exact release identifiers and CI outcome are recorded after publishing.
