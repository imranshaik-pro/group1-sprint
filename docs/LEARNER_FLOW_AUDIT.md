# Learner flow audit — 15 October 2026

## Request and reproduced failures
Learners saw a raw GitHub JSON document from an “Open source file” card, repeated practice questions and a missing Everyday Physics lesson. The screenshots match the Sites version 9 source.

1. The catalogue was designed as reference metadata, not an in-app question reader. It displayed source paths and identifiers directly to learners. Those paths pointed to an external public repository; this observation does not establish exposure of private application data.
2. The website learning component hard-coded Fundamental Rights. Its other 64 topic IDs rendered a generic self-study fallback. The separate PWA had short foundations, but these were not connected to the website journey.
3. Practice only supplied seven base exercises and seven variations. Recent questions were merely deprioritised and then reused if the pool was small. The guided lesson always rendered the same two rights questions. The PWA ignored unfinished attempts when constructing selection history.
4. Prior GitHub browser verification was failing. Run 38508979080 failed while looking for a hard-coded original option “A 180” after random selection changed the displayed question. Unit-test success was not end-to-end acceptance.

## Changes
- Learner catalogue opens related study units. Raw source file cards remain an editorial concern; learners do not receive these links in the catalogue. Published lesson further-reading links reject GitHub/raw JSON/code/archive URLs.
- All 65 units render their existing original foundation inside the learning flow, with a new topic-specific example, distinction and three recall prompts. No notebook-length gate substitutes for teaching.
- Everyday Physics adds four English/Telugu segments: motion/force/pressure; work/energy/power/heat; light/sound; electricity/magnetism. It includes formulas, conditions, examples, traps and 27 original concept questions. NCERT sources are linked as optional further reading.
- The active original bank contains 179 distinct exercise texts: 120 bounded arithmetic template variants, 45 additional rights/physics exercises, and 14 existing exercises/variants. These are original teaching questions, not claimed PYQs or automatic live-AI rewrites.
- Exact questions seen within three days are excluded by default. Sessions use distinct concept families. Exhaustion returns a shorter/empty set and a clear message instead of quietly repeating.
- Website question exposures are saved immediately in validated, syncable history. PWA selection includes unfinished attempts. The inline guided quiz uses the same bank and history instead of fixed rights questions.
- Offline cache advances to v13 and caches all new lesson/question modules. Cache cleanup is scoped to Sprint caches.
- The browser test selects an answer from the actual displayed question rather than assuming a fixed question order. It additionally walks all 65 topic routes, checks absence of raw catalogue links and traverses physics learn/recall/practice/reflection/revision.

## Verification
- Original app: build succeeded and all 45 Node tests passed.
- Website: 8 new learner-content checks and 20 regression checks passed; TypeScript check passed.
- Twenty sequential GMA drills produced 100 unique IDs, with five distinct concept families per drill.
- Every generated arithmetic answer was independently recalculated from its parameters. IDs, displayed text, four-option uniqueness, eligibility and source fields were checked.
- The managed local environment has no supported browser-control plugin. No local browser or Android-device QA is claimed. The repository browser workflow is the further integration check; its actual result must be reported separately.

## Additional verification failure and correction
The first new remote browser run (38715967242) caught a PWA startup regression before Sites publication: replacing the catalogue block had also removed the adjacent Today, Plan and Library methods. Those methods were restored from the exact previous source. A module-startup regression check now renders all navigation routes and all 65 topic routes with minimal storage/document adapters. This check complements browser testing; it does not simulate clicks or claim device QA. The previous failed archive was not deployed.

## Remaining curriculum work
These fixes do not make a complete exam course. Of 65 units, 63 still have short foundations; Fundamental Rights has the existing guided foundation and Physics has an expanded foundation. Only 6 units currently have bundled scored questions. The coverage JSON lists every unit and question count. Imported third-party rows remain separate from reviewed practice; answer-only and Mains rows are not silently promoted to four-option Prelims tests. Detailed chapters, full Telugu translation and broader reviewed questions still need authoring/source checks. This is content work, not an API-key dependency.

The original app repository and the Sites website are separate deployment paths. A Sites publication updates the website and its hosted /sprint mobile web app; a GitHub source update alone does not prove a GitHub Pages or Vercel deployment.
