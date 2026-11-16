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

## Proposed default difficulty allocation (subject to user approval)
- EASY 30%; MEDIUM 50%; HARD 20%.
- Difficulty describes **student effort**, not generation effort.
- Start with 10 questions per micro-topic as a pilot volume; confirm total target per segment with user before generating all 386 segments.
- Keep the existing 40 syllabus-hold segments blocked until exam applicability is verified.

## Release rule
Generated != verified != integrated. No item is marked completed without answer/solution review, duplicate check, blueprint alignment, exam-format check and successful app retrieval.
