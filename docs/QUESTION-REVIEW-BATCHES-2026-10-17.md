# Pending imported questions: ten review batches

Snapshot: 17 October 2026. Exactly 3,776 pending unique questions, assigned once each. Batches 1–6 have 378 questions each; batches 7–10 have 377 each. Current affairs come first, followed by subject/topic/source groups. Related groups stay adjacent, but a large group may span consecutive batches to keep workloads balanced.

| Batch | Questions | Subject breakdown | Status |
|---|---:|---|---|
| 1 | 378 | Current Events: 378 | Pending |
| 2 | 378 | Current Events: 229; Economy & Planning: 149 | Pending |
| 3 | 378 | Economy & Planning: 202; Polity & Governance: 31; History & Culture: 22; Science & Technology: 19; General studies: 104 | Pending |
| 4 | 378 | General studies: 10; Geography: 368 | Pending |
| 5 | 378 | Geography: 378 | Pending |
| 6 | 378 | Geography: 378 | Pending |
| 7 | 377 | Geography: 377 | Pending |
| 8 | 377 | Geography: 377 | Pending |
| 9 | 377 | Geography: 377 | Pending |
| 10 | 377 | Geography: 377 | Pending |

## Review workflow

For each question: open its original source; repair extraction/options if needed; verify the key and explanation against primary evidence; check the date/year for current affairs; confirm subject, specific topic and shared-PSC versus state-specific applicability; record the checked answer, evidence URL/locator, source hash and decision. Use approved, corrected-and-approved, held, or rejected decisions. Only individually approved questions enter scored practice. Models must not be relabelled as official PYQs.

Batch completion requires a decision for every assigned ID, reconciled counts and eligibility/scoring checks. Held/rejected items remain excluded. Record failures and fixes in the review log. A pending batch is not a completed verification and no background review is scheduled.

## Scope and reproducibility

The JSON manifest records every exact question ID, original source paths and file hashes, subject counts, known held IDs and missing extracted answers. Source questions remain in app/imports; the manifest does not duplicate or modify their text. Topic labels in those sources remain provisional. The 50 approved imports and eight duplicate entries are excluded. The five already-held banking items remain within the 3,776. The 21 pending prompts from the earlier collection are a separate backlog.

Regenerate this dated snapshot with `python scripts/build-question-review-batches.py`. It validates total, uniqueness and complete coverage. Once review starts, keep this assignment stable and record decisions separately; do not silently reshuffle batches after approvals.
