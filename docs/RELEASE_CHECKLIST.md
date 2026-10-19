# Product release checklist

- [ ] README describes the actual release and remaining limits.
- [ ] Shared-module release check passes; no website/app drift.
- [ ] Unit checks and website TypeScript compilation pass.
- [ ] Navigation changes pass all 65 topic-card and chapter click journeys in both UIs.
- [ ] Guest, pending and approved account UI paths pass. Identify mocked account transport explicitly.
- [ ] Feedback errors preserve drafts; role-gated editorial actions do not imply automatic content replacement.
- [ ] Account import requires consent, protects account binding, preserves local work and reports unsupported large records.
- [ ] Existing PDF, backup, scoring, offline and dated-task journeys pass.
- [ ] Pilot and pricing pages contain no seeded success metrics or supposedly validated price.
- [ ] No AI key, paid plan, enrolled cohort or commercial content permission is implied without evidence.
- [ ] Production build/archive matches the pushed Site source and deployment finishes successfully.
- [ ] Record code SHA, CI link, build ID, Site version, deployment result and exact test limits in release documentation.

Live identity-provider testing, full D1 production load testing and human source/Telugu verification are separate evidence. A mocked browser journey must never be represented as those checks.
