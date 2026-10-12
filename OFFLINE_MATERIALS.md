# Offline study collection — 12 October 2026

Live Reading room: https://group1-sprint-studio.spryplume16.chatgpt.site/#reading

Eight licensed chapter PDFs are committed under `studio/public/materials/`: 243 PDF pages including source and attribution pages, about 5.1 MiB total. Topics: demand/supply, macroeconomics, inflation, banking, percentages, proportions, computing introduction and hardware. They are OpenStax foundation excerpts, not NCERT PDFs, APPSC PYQs or complete India/AP-specific chapters.

`catalog.json` records each exact checksum, author credit, source URL, original page range and licence. `ATTRIBUTION.md` explains reuse. Ten source references include seven NCERT catalogue entries, APPSC, UPSC and NDLI. No NCERT PDF is mirrored because conflicting official redistribution notices remain unresolved. No restricted coaching or login-protected NDLI material is copied.

## Learner flow
Sign in to an approved account, open Reading room, choose **Save for offline** and wait for confirmation. Resume a saved PDF without a connection. Each device downloads its own copy. The reader supports local PDF import (30 MB cap), page navigation, local bookmarks/notes, export and removal. Prepare online first and retain original file backups: browser storage can be cleared or evicted.

PDF files, notes and bookmarks remain on the device. Reading-position events sync to per-user cloud history when the online workspace resumes. Matching catalogue IDs or identical imported files match across devices. The service worker caches the standalone reader/catalogue, never authenticated app HTML or API history. This does not make the full study dashboard an offline application.

## Verification
Twenty tests, TypeScript, production build, syntax checks and existing SQLite registration checks passed. PDF covers and representative content pages were visually checked. All eight PDF blobs and two PDF.js source blobs match the exact native Git object hashes before commit. Browser, Android airplane-mode and real multi-device checks remain unverified because the supported browser skill is unavailable here.

## Reuse and limits
Economics/computing: CC BY-NC-SA 4.0, noncommercial study only. The downloaded 2017 Prealgebra PDF explicitly states CC BY 4.0. PDF optimisation includes 150 dpi illustration resampling; text is not rewritten. Source attribution and licence pages are retained. No publisher endorsement is implied. These files are not used for AI ingestion or training. Automatic NDLI search/download, OCR and automatic account approval are not added.

Regeneration: `studio/scripts/build-study-materials.py`; full source download URLs/checksums are in `source-books.json`. Full publisher books stay untracked. Hosted publication source commit: `fabc1dbdd1ee1322599ebb0a3110ebad2a41f8dc`. Site sharing permissions are unchanged.
