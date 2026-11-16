# Original question generation policy — JEE Main + NEET

## Decision
No source PDFs are available. Generate **original** questions aligned with the approved canonical blueprint, rather than extracting questions. Do not label generated questions as genuine past-year questions (PYQs). Existing segment complexity labels L1/L2/L3 remain execution-planning metadata; they are **not** student question difficulty labels.

## Two independent level fields
- `segment_complexity`: L1 simple to process (4–5 segments per batch), L2 moderate (2–3), L3 complex (1).
- `question_difficulty`: EASY / MEDIUM / HARD. Every segment should contain a calibrated mix, unless blueprint prescribes otherwise.
- `exam_tags`: JEE_MAIN, NEET, or both. A question's exam applicability must be validated independently of its difficulty.
- `question_type`: single-correct MCQ, numerical-value (where applicable), assertion-reason (only if supported), match, etc. Confirm current official exam format before marking exam-eligible.

## Generation pipeline per segment
1. Confirm canonical blueprint ID, chapter, topic, micro-topic, learning objectives, exam applicability and syllabus status.
2. Produce a question specification grid covering subskills, misconceptions, reasoning patterns and difficulty.
3. Generate original questions with plausible distractors, unique IDs and complete worked solutions.
4. Independently solve and check answers, numerical units, chemistry equations, biological terminology, diagram references, and question ambiguity.
5. Detect near-duplicates, parameter-only variants, incorrect answer keys and difficulty drift; quarantine failures.
6. Render-test in app; persist generation model/prompt version, QA status and coverage.
7. Commit only a reviewed slice with resumable checkpoint, count summary and Git commit SHA. Never bulk push all subjects.

## Required question record
`question_id, blueprint_id, segment_id, subject, chapter, topic, micro_topic, exam_tags, question_type, segment_complexity, question_difficulty, skill_tag, question_text, options, correct_answer, explanation, estimated_time_seconds, media_refs, originality_status, verification_status, generation_version`.

## Approved question-generation target (2026-11-16)
- **50 original questions per eligible micro-topic segment**: **15 EASY (30%), 25 MEDIUM (50%), 10 HARD (20%)**.
- This is a fixed per-segment student-difficulty allocation; **L1/L2/L3 remains execution complexity**, not student difficulty.
- Total proposed segments: **386**; **40 on syllabus hold**, leaving **346 provisionally eligible**. Planned eligible target: **17,300 questions** (5,190 easy; 8,650 medium; 3,460 hard). If all held segments are subsequently approved: **19,300 questions** (5,790 easy; 9,650 medium; 3,860 hard).
- Do **not** generate held segments before official syllabus and blueprint verification. Do not claim 346 segments are verified eligible; this is a provisional planning count.
- Generate in reviewable, resumable slices, not the full bank in one operation. **No questions are generated or integrated by this documentation change.**

- Difficulty describes **student effort**, not generation effort.

## Release rule
Generated != verified != integrated. No item is marked completed without answer/solution review, duplicate check, blueprint alignment, exam-format check and successful app retrieval.
