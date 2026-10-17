# Smart tracker release — 17 October 2026

## Released
- Repository: imranshaik-pro/group1-sprint.
- PR: https://github.com/imranshaik-pro/group1-sprint/pull/3 (merged).
- Squash merge: c07eaf81bad606063ac4e4fb3db77066594ba50c.
- Tested implementation head: 9faff2a89fe0d7f9e40e0395ff8c7ebe48de4aa2.
- GitHub Actions: Study workspace checks, run 36 / 38992835144, completed successfully.
- Hosted website: https://group1-sprint-studio.spryplume16.chatgpt.site
- Saved version: 16.
- Version ID: appgprj_6acb5ae49004819180c2a6d75b1e6d6a~appgver_f015b530e5dc8191a1b1530e752651e6.
- Deployment ID: appgdep_6ad2d5d30ed88191b6057331fc0265af.
- Deployment status: succeeded, 2026-10-17T01:57:04Z.
- Hosted source commit: c8b6a8c3003ef6735d25962c68a08e6214a08a66.
- Existing custom audience retained. Prior Batch 2, UPSC resources and study collections preserved.

## Behaviour
Website and offline app now derive subject/topic accuracy, correct/wrong/skipped totals, recent distinct-question evidence, trends and remedial actions from saved completed tests. Coached selection aims for 60% weak-topic work and 20% overdue recall when fresh eligible questions exist, then fills with broader practice. Three-day exact-repeat exclusions remain in force; shortages produce smaller sets.

APPSC, UPSC and Other PSC practice scopes reuse explicitly reviewed common questions. This release approves 50 imported model questions: 45 economics and five shared current-affairs/observance items. The scored bank contains 359 existing originals plus these 50 reviewed models. These are not asserted to be official PYQs or full UPSC mocks.

Previous imports are present in GitHub and the website collection reader. Verification remains partial: 3,776 unique prompts from the new imports plus 21 prior imported prompts are unapproved and excluded from scored practice. Five ambiguous banking items are held within that pending backlog. Archived external PDFs remain links, with original years and provenance; they are not claimed to have been extracted or verified.

## Recording limits
Submitted website test results use the existing local outbox, account sync and backup paths; offline app attempts use existing local persistence and backup. Cloud receipt for a particular user's results was not inspected. Unsynced results depend on device persistence and successful later sync. Website quiz drafts save on the same device for the same account, including the original timer deadline; drafts do not sync across devices or enter exported completed scores. Ungraded collection browsing and answer reveals are not mock scores. Older results lacking question-level history cannot reconstruct topic weaknesses.

## Validation
67 app tests and 48 hosted website tests passed; website TypeScript validation, offline app build and hosted production build passed. The final weakness-classification adjustment also passed targeted tracker tests before packaging. GitHub CI passed. Production deployment succeeded. Browser interaction/visual QA was unavailable in the supported environment.

See SMART-TRACKER-AND-VERIFICATION.md for implementation details and QUESTION-VERIFICATION-2026-10-17.json for item-level checked keys, primary evidence, hashes and held decisions. This release does not schedule automatic background verification of the remaining backlog.
