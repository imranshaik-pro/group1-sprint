# Navigation and backup recovery — 13 October 2026

Member feedback identified missing visible Back navigation and difficult-to-find backup recovery. The hosted website replaced its route history and provided export without restore. The original offline app had import/export but lacked prominent navigation and resume controls.

## Changes

- Website: pushed route history, named lesson links, visible Back control, mobile bottom navigation, Resume learning and Backup & restore shortcuts.
- Website Settings: account-bound version 2 JSON backups, restore preview, validated merge, duplicate suppression, immutable-ID conflict rejection and a local pre-restore checkpoint. Legacy website exports require explicit ownership confirmation.
- Backups contain saved study events and notes, a study-page/topic resume destination and device PDF reading metadata. PDF bytes, passwords, invitation tokens and administrative permissions are excluded. Matching PDFs must exist or be downloaded/imported again. Keep the backup file until all reading metadata has been reapplied.
- Study sync continues in the background. Restored notes upload in bounded batches. Closure is not a guaranteed network flush.
- Original app: visible Back, Resume learning and Backup & restore links, resume destination on export/import, service worker cache v8. Existing validated event backup and attached-paper storage are retained.
- Website and original app backup formats remain separate. A running website quiz timer, unsubmitted answers and unsaved edits are not restored.

## Validation and publication

TypeScript and the supported website production build passed. All 26 website tests and all 26 original-app tests passed. Browser/Android Back gestures and actual file-picker/multi-device restoration were not tested because the supported browser skill was unavailable.

Hosted website version 4 was published successfully at https://group1-sprint-studio.spryplume16.chatgpt.site from source commit 863cd4755321740761b7e061f71a8c027619d447. Original-app source updates are included in this repository; publication through a separate GitHub Pages or other hosting pipeline needs that pipeline to succeed.

The comparison site's served code exposed revision, notebook and backup features. No competitor code or materials were copied. Detailed website implementation notes are in studio/WEBSITE_BUILD.md.
