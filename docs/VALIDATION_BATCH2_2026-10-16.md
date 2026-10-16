# Batch 2 validation — 16 October 2026

## Request and result

Expand the next eleven topics and scored practice together; keep AI work deferred. Stable IDs: t-1-1 through t-1-9, t-2-0 and t-2-1.

- 50 English/Telugu teaching sections with examples, traps, recall prompts, revision summaries, outlines and source links.
- 92 original questions: 12 on Fundamental Rights and eight on each other topic. No imported reference is promoted to a verified PYQ.
- Total expanded editions 22/65; bundled original questions 359; scored topics 27/65; 43 editions and 38 question-coverage gaps remain.
- New chapter restart controls retain notebook and immutable history. Mobile offline cache v16 includes the new lesson/question modules. Both interfaces use identical content bytes.
- Source review covers the Legislative Department Constitution (English in the 2025 diglot edition), NCERT constitutional chapters, NFSA/DBT official material, MEA/UN references and MoSPI/RBI publications. Lessons are original wording; no textbook assets or third-party authored question texts were copied.
- National-accounts rebasing is explicitly dated to the 31 August 2026 official release; current repo rates, reserve ratios, benefit amounts and policy target periods are not presented as timeless facts.

## Checks

- Standalone app build and 57 Node tests (including the preserved UPSC regressions) passed locally.
- Website 23 content/render tests and TypeScript compilation passed. The actual React component still renders all 65 topics.
- Economy answers independently recalculated, source/section links checked, bank IDs/stems/options unique, question exposure exclusion and negative-mark totals verified.
- Production build, remote browser workflow and deployment results are recorded after they finish; pending results are not claimed as passed.

## Failure and correction record

- Duplicate-stem validation found three questions sharing the generic wording “Which pairing is correct?”. They were rewritten with distinct subject-specific stems before publication; the bank now has 359 unique question texts.
- The new arithmetic regression initially searched from the start of a longer question rather than within its text. The lookup was corrected; independent calculations then passed.
- A concurrent UPSC update advanced GitHub main and the Site to version 12. The guarded branch move did not succeed; the new main was inspected, overlapping UI/cache changes were merged, and UPSC navigation, notes, question references, styles and backup route support were retained.
- No failed archive has been deployed.

## Review limits

Editorial self-review and structural tests are not independent subject-expert certification. Full official-syllabus and every microtopic’s completeness remain under review; fullChapterReviewed flags remain false. Real Android hardware and the signed-in production Sites browser are not manually tested. Browser tests run through the repository’s existing GitHub workflow. No real AI-provider request, credential setup or Vercel/GitHub Pages publication is claimed.
