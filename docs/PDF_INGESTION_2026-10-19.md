# Embedded PDF ingestion release

Learners requested extracted material and questions within the app, classified by subject and topic, with no GitHub/PDF redirects. This release adds a shared same-origin reader to the website and PWA. It preserves the dated-task scheduling fix and all 1,090 scored questions.

## Published inventory

| Collection | Documents | Pages | Publication |
|---|---:|---:|---|
| User-uploaded MIT-licensed UPSC notes | 27 | 213 | Original page images embedded; OCR attempted on every page |
| PIB documents | 3 | 78 | Extracted text with source and publication date |
| Total | 30 | 291 | Subject filters and mapped topic attachments |

150 handwritten pages have inadequate machine transcription; their OCR text is withheld and original page images remain readable. Six archaeology question headings were visually transcribed and attached to their source/reference pages. They are unscored recall prompts, without invented options or answer keys. All remaining OCR is explicitly marked unverified. Document-level topic mapping indicates relevance, not a claim that every page covers every attached topic. Optional Anthropology, Essay and Preparation Guidance material is not forced into the APPSC syllabus.

## Remaining source work

69 unique external PDF URLs were audited from 71 references: 45 downloaded, including 42 with selectable text and 3 requiring OCR; 18 unavailable; 5 restricted commercial mirrors; 1 exceeding the 40 MiB acquisition limit. Only the 3 PIB text documents are released from that external set. Other fetched text is held for reuse review and is not shipped as full text.

177 PDF references in the second archive were checked: the uploaded ZIP contains no PDF binaries. 175 remote PDF headers are accessible but require rights review; 2 commercial textbook mirrors are excluded. Header availability is not extraction completion.

PIB reproduction policy: https://www.pib.gov.in/content/3604_2_CopyrightPolicy.aspx?lang=1&reg=3 . Text only is reproduced with attribution; third-party images are excluded. Budget document is dated 1 February 2026; Operation Sindoor backgrounder 14 May 2025; GRAM G backgrounder 18 December 2025 is explicitly bill-stage historical material, not a current-law assertion.

## Architecture and operation

- Source files remain editorial provenance. Learners fetch local JSON and extracted JPEG page assets, never external source URLs.
- Known document IDs, local paths, page count and SHA-256 are validated before rendering. Text is escaped. Reader filters by subject/topic and provides next/previous page navigation.
- Scanned pages and data are cached on demand by service worker v26; this does not download the whole collection to every device. Only opened pages are available offline.
- `scripts/materialize-pdf-pages.py` uses pinned SHA-256 manifests to reproduce the 213 JPEG assets at build time with Poppler. CI fails on missing or changed sources.
- `scripts/extract-pdf-drafts.py --pdf-dir ... --output-dir ... --inventory ...` extracts selectable text then OCRs sparse pages with Poppler/Tesseract, retaining page provenance and confidence. Draft extraction is separate from publication.
- A new arbitrary scanned upload is not automatically reviewed or published by this release. OCR drafts need quality review, topic curation and rights review before inclusion.

## Verification

Automated checks cover catalogue/data integrity, mirrored readers, all 213 JPEG assets, withheld poor OCR, topic mapping, unscored question gates, safe rendering and local loading. Browser checks exercise mobile filters, both page types, page navigation, source prompts, cached reading and lesson attachments. Release results are recorded separately after CI and deployment.
