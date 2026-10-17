"""Create an exhaustive, non-approving snapshot of the pending import queue."""
import collections
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
audit_path = ROOT / 'docs/QUESTION-VERIFICATION-2026-10-17.json'
audit = json.loads(audit_path.read_text())
approved = {q['id'] for q in audit['reviewed'] if q['status'] == 'approved'}
held = {q['id'] for q in audit['reviewed'] if q['status'] != 'approved'}
queue = []
sources = {}
for path in sorted((ROOT / 'app/imports').glob('*.json')):
    data = json.loads(path.read_text())
    doc = data['document']
    sources[doc['id']] = {'path': str(path.relative_to(ROOT)), 'title': doc['title'],
        'sha256': hashlib.sha256(path.read_bytes()).hexdigest()}
    for q in data['questions']:
        if q.get('duplicateOf') or q['id'] in approved:
            continue
        queue.append(q)
assert len(queue) == audit['pendingUnapproved'] == 3776
assert len({q['id'] for q in queue}) == len(queue)
# Keep related source/topic blocks adjacent, with time-sensitive affairs first.
order = {'Current Events': 0, 'Economy & Planning': 1, 'Polity & Governance': 2,
         'History & Culture': 3, 'Science & Technology': 4, 'General studies': 5, 'Geography': 6}
queue.sort(key=lambda q: (order.get(q['syllabusSubject'], 99),
    tuple(q.get('upscTopics', [])), q['sourceId'], int(q['number'])))
batches = []
start = 0
for i in range(10):
    size = 378 if i < 6 else 377
    rows = queue[start:start + size]
    batches.append({'id': f'import-review-{i+1:02}', 'status': 'pending',
        'count': len(rows), 'subjects': dict(collections.Counter(q['syllabusSubject'] for q in rows)),
        'heldQuestionIds': [q['id'] for q in rows if q['id'] in held],
        'missingAnswerIds': [q['id'] for q in rows if not q.get('answer')],
        'sourceIds': sorted({q['sourceId'] for q in rows}),
        'questionIds': [q['id'] for q in rows]})
    start += size
all_ids = [q for b in batches for q in b['questionIds']]
assert len(all_ids) == len(set(all_ids)) == 3776
assert set(all_ids) == {q['id'] for q in queue}
manifest = {'snapshotDate': '2026-10-17', 'totalPending': 3776, 'batchCount': 10,
    'approvedExcluded': 50, 'duplicatesExcluded': 8, 'previousCollectionOutsideThisPlan': 21,
    'policy': 'Planning only. All batch items remain unapproved. Existing topic mappings are provisional; verify per item.',
    'sourceFiles': sources, 'batches': batches}
(ROOT / 'docs/QUESTION-REVIEW-BATCHES-2026-10-17.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n')
lines = ['# Pending imported questions: ten review batches', '',
    'Snapshot: 17 October 2026. Exactly 3,776 pending unique questions, assigned once each. '
    'Batches 1–6 have 378 questions each; batches 7–10 have 377 each. '
    'Current affairs come first, followed by subject/topic/source groups. Related groups stay adjacent, '
    'but a large group may span consecutive batches to keep workloads balanced.', '',
    '| Batch | Questions | Subject breakdown | Status |', '|---|---:|---|---|']
for i,b in enumerate(batches,1):
    breakdown = '; '.join(f'{s}: {n}' for s,n in b['subjects'].items())
    lines.append(f'| {i} | {b["count"]} | {breakdown} | Pending |')
lines += ['', '## Review workflow', '',
    'For each question: open its original source; repair extraction/options if needed; '
    'verify the key and explanation against primary evidence; check the date/year for current affairs; '
    'confirm subject, specific topic and shared-PSC versus state-specific applicability; '
    'record the checked answer, evidence URL/locator, source hash and decision. '
    'Use approved, corrected-and-approved, held, or rejected decisions. '
    'Only individually approved questions enter scored practice. Models must not be relabelled as official PYQs.', '',
    'Batch completion requires a decision for every assigned ID, reconciled counts and eligibility/scoring checks. '
    'Held/rejected items remain excluded. Record failures and fixes in the review log. '
    'A pending batch is not a completed verification and no background review is scheduled.', '',
    '## Scope and reproducibility', '',
    'The JSON manifest records every exact question ID, original source paths and file hashes, '
    'subject counts, known held IDs and missing extracted answers. Source questions remain in app/imports; '
    'the manifest does not duplicate or modify their text. Topic labels in those sources remain provisional. '
    'The 50 approved imports and eight duplicate entries are excluded. The five already-held banking items '
    'remain within the 3,776. The 21 pending prompts from the earlier collection are a separate backlog.', '',
    'Regenerate this dated snapshot with `python scripts/build-question-review-batches.py`. '
    'It validates total, uniqueness and complete coverage. Once review starts, keep this assignment stable '
    'and record decisions separately; do not silently reshuffle batches after approvals.', '']
(ROOT / 'docs/QUESTION-REVIEW-BATCHES-2026-10-17.md').write_text('\n'.join(lines))
print('\n'.join(lines[:17]))
print('Validated complete coverage: 3,776 IDs; ten batches; no duplicate assignments.')
