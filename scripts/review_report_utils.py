"""Render immutable review checkpoints without changing quiz approval registries."""
import collections
import json

def persist(root, rows, start, end, part, source_map, source_path):
    items=rows[start-1:end]
    assert len(items)==end-start+1
    assert [r['position'] for r in rows]==list(range(1,end+1))
    assert len({r['id'] for r in rows})==end
    manifest=json.loads((root/'docs/QUESTION-REVIEW-BATCHES-2026-10-17.json').read_text())
    assert [r['id'] for r in rows]==manifest['batches'][0]['questionIds'][:end]
    counts=dict(collections.Counter(r['decision'] for r in items)); cumulative=dict(collections.Counter(r['decision'] for r in rows))
    ledger={'batchId':'import-review-01','checkedAt':'2026-10-17','part':part,'positions':[start,end],
        'reviewedInPart':len(items),'counts':counts,'cumulativeReviewed':end,'cumulativeCounts':cumulative,
        'remainingInBatch':378-end,'unexaminedAcrossTenBatches':3776-end,'newScoredApprovals':0,
        'policy':'Independent review decisions only. Confirmed answers have source support; corrections and holds are not release-ready. No automatic scoring approval.','items':items}
    stem=f'QUESTION-REVIEW-BATCH-01-PART{part:02}-2026-10-17'
    (root/f'docs/{stem}.json').write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n')
    used={e['sourceId'] for r in items for e in r['evidence']}
    source_path.write_text(json.dumps({k:source_map[k] for k in sorted(used)},indent=2)+'\n')
    lines=[f'# Batch 1 review, part {part}: positions {start}–{end}','',
        f'**Checkpoint, 17 October 2026:** Batch 1 has {end}/378 examined; {378-end} unexamined. '
        f'Across all ten batches, {3776-end:,} are unexamined. The earlier 21 prompts remain separate.','',
        '**This part:** '+', '.join(f'{v} {k.replace("_"," ")}' for k,v in counts.items())+'.','',
        f'**Cumulative first {end}:** '+', '.join(f'{v} {k.replace("_"," ")}' for k,v in cumulative.items())+'.','',
        'Every examined question has one decision and a source-text hash. Confirmed means the substantive answer is supported; '
        'it does not auto-enable scoring. Correction-required items need repaired stems/options and release checks. '
        'Held items remain unresolved; where no authoritative source was retrieved, no unrelated citation is substituted. '
        'Dates refer to the named event or report edition. Prior approved imports remain unchanged.','']
    for r in items:
        lines += [f'## {r["position"]}. {r["id"]}','',
            '**Decision:** '+r['decision'].replace('_',' ')+' · **Answer:** '+(r['solvedOption']+' — ' if r['solvedOption'] else '')+r['solution'],'',r['explanation'],'']
        if r['requiredCorrectionOrHoldReason']:lines += ['**Correction / hold:** '+r['requiredCorrectionOrHoldReason'],'']
        lines += ['**Topic:** '+(r['proposedTopicId'] or 'Taxonomy gap: static culture/festivals')+' · **Scope:** '+r['scope'],'',
            '**Evidence:** '+('; '.join(f'[{e["sourceId"]}]({e["url"]})' for e in r['evidence'])+'. '+r['evidence'][0]['locator']+'.' if r['evidence'] else 'No authoritative source authenticated; held.'),'']
    lines += ['## Remaining work','',f'Continue at position {end+1} of the fixed Batch 1 manifest; revisit all earlier correction-required and held items before release. '
        'No background verification is scheduled. No new scored-bank questions are enabled by this review checkpoint.','']
    (root/f'docs/{stem}.md').write_text('\n'.join(lines))
    print(json.dumps({k:v for k,v in ledger.items() if k!='items'}))
    return ledger
