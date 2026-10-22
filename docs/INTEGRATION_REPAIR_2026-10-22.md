# Integration repair — 22 October 2026

## Fixed behavior

- Imported-question correction and exclusion submit correctly. A hidden control named `id` previously shadowed `HTMLFormElement.id` and crashed the new product-form dispatcher.
- Admin question-family decisions use the form attribute, and correction drafts use stable keys so separate reports do not overwrite one another's draft state.
- Coverage subject selection uses the bubbling input event from the HTML-generated select; it changes the displayed units rather than leaving all 65 visible.
- Website completed practice has the required native cursor index when imported into the app. Answers, timing and negative marking remain intact; projected events do not loop back as duplicate attempts.
- Shared app/website modules match. Offline cache v32 replaces the affected cached shell; diagnostic build is `integration-20261022-01`.

## Validation

Local checks passed: 121 app tests, 79 website module tests, 53 typed event-contract tests, TypeScript compilation, pinned PDF/hash inventory checks and the production website build.

Full browser gate for code commit `d18a116a53099b6e37c045cd9398cd3d5672edf4`: https://github.com/imranshaik-pro/group1-sprint/actions/runs/39830143990 . This run passed, including the complete product browser journey. Site version 29 deployed successfully to the existing website and hosted PWA.

Site source: `aec93aa280ea4f03d08f02244ff4688788d4f3d2`. Deployment: `appgdep_6ada54d7065881919fbd1f7d1b6e6ef7`. GitHub PR #4 merged as `a000ccc54dd0dab2f3f994274db2652bd7e94f12`. Archive SHA-256: `4481b602f5b5b1919fe1e2adc135012a490beccec1c9be631943c04de4d395c8`.

Live website: https://group1-sprint-studio.spryplume16.chatgpt.site/ . Hosted installable app: https://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html .

The earlier repair run passed the study/PDF/offline journeys and clicked all 65 website topics in guest, pending and active account states and all 65 PWA topics. Its product journey exposed the coverage-filter failure; that failed run was not published. The new run retains these checks plus feedback failure/retry, editorial triage, actual family quarantine, consented pilot choices, pricing arithmetic, device-import consent, shared-note transfer and wrong-account isolation. Account transport is mocked: these tests do not authenticate real users or operate real memberships.

## Content and remaining gates

Inventory remains 65 units, 276 chapter segments, 1,090 scored questions, 38 documents and 534 pages. These are inventory counts, not complete official-syllabus or independent editorial certification.

- Full PDF ingestion is not complete. Original page images remain readable for 150 weak handwritten transcriptions. Other external PDFs remain unavailable, restricted or held for reuse review; held material is excluded from the published inventory.
- Independent question/source and Telugu reviews remain separate editorial work. No answer keys were bulk-approved in this repair.
- The official APPSC Group-I syllabus page was retried on 22 October and returned HTTP 502. No dated official syllabus hash or newly authenticated mapping was invented.
- The live D1 database has two active registered memberships and one ownership record. This does not prove successful live login or phone-to-laptop synchronization. A recent log includes one platform `/callback` 404; the callback belongs to Sites authentication and was not replaced or bypassed.
- Large attachments/full snapshots remain device-only with backup warnings. No binary cloud migration is claimed.
- Live AI remains inactive pending secure credential authorization/configuration and provider/budget validation. This release creates no API key, spends no provider funds, opens no pilot enrollment and processes no payments.
- Publishing this Site updates the website and its hosted `/sprint/index.html` PWA. It does not update a separate Vercel or GitHub Pages installation.
