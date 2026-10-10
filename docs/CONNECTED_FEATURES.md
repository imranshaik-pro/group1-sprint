# Connected features and daily use

The static app remains usable offline. Connected features are optional and need a private service; GitHub Pages cannot execute a server or keep provider secrets.

## Where each feature lives

| Page | Action | Offline behaviour |
| --- | --- | --- |
| Topic library → topic | Read the foundation guide; save notes or open Study Tutor | Guides and saved lessons remain available |
| Study Tutor | Copy prompt/open chat, paste lesson, or request a direct API reply | Saved lessons remain readable; direct replies need internet |
| Paper vault | Save a PDF, inspect extracted text, create drafts or save notes | Local text extraction works after app installation/build |
| Practice & mocks | Check drafts, choose answers, approve/exclude or ask tutor to audit | Review and approved question practice work locally |
| Current affairs | Collect PIB releases; use an item in the manual journal | Last collection and saved journal remain available |
| Settings & sync | Unlock vault, connect service, choose reminder time | Local changes queue; calendar reminders run independently |

The header indicator is present on every page. The manual **Sync now** button is in Settings & sync. After unlock, saves trigger sync after 2.5 seconds; resume/reconnect and a 30-second foreground interval pull and push. Failures back off up to five minutes. Sync updates do not replace unsaved form text. Remote history is reflected in the next view after leaving an editor.

Vault credentials remain in memory. Re-enter them after a full reload; the app cannot silently unlock itself. An app that is closed or killed cannot guarantee a final upload. Before switching devices, wait for **All changes synced** or use **Save & end session**. Offline records remain on their original device until it reconnects.

## Start the optional private service on a laptop

Use Node 22.13+ or current Node 24. From the repository root:

```sh
npm ci
npm run build
cp server/.env.example server/.env
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Set the printed random value as `STUDY_SERVICE_TOKEN` in your private `server/.env`. Set `VAPID_SUBJECT` to a contact email you control. Keep provider model/key fields empty for providers you do not use. Configure only enabled providers with a currently supported model ID and their official API credentials. Their usage/billing is separate from this app.

```sh
npm run service
```

Open `http://localhost:8787`, then Settings & sync → Your private study service. Enter that URL and your service token. The server also serves the built app. The token is held in browser memory and is not included in backups. Provider keys stay in the private service environment; do not paste them into a public form, chat, commit or Pages configuration.

For the separately served development app at port 8080, add its exact origin to `APP_ORIGINS` (for example `http://localhost:8080`). `localhost` and `127.0.0.1` are different origins.

## Use the service from Android and Pages

Android cannot reach a laptop using the phone's `localhost`. Run the same private service behind an HTTPS reverse proxy or an HTTPS host reachable by both devices. Restrict `APP_ORIGINS` to the exact app origin, e.g. `https://imranshaik-pro.github.io` (origin only, no repository path). Keep the service token private and the Node process running. Default binding is loopback; a reverse proxy on the same host can reach it. A container may need an explicitly configured `HOST`, network/firewall and persistent private volume.

Use a process manager or your host's restart policy. Persist `.service-data/` privately: losing VAPID keys invalidates existing push subscriptions. Do not expose a free public AI proxy. This implementation is for one private learner/service, not multiple independently authenticated users.

The code for this service is included. No service host, API credentials, client registration or live provider session has been configured on the user's behalf.

## Provider accounts and signup

- **Existing browser chat:** copy the request, open ChatGPT/Claude/DeepSeek/Grok, sign in there, and paste its answer back. The app records the lesson without relying on that chat's memory.
- **No account:** use the provider's Sign up link and its supported Google/email login. This app never receives the provider's password and cannot reuse GitHub credentials to create those accounts.
- **Direct answer inside this app:** connect the private service with a provider API key and model configured. Only the displayed request and opted-in notes/mistakes are sent. API calls have no autonomous web search; recent claims and citations still need verification.
- **Sign in with ChatGPT:** OpenAI documents eligible plan-based integration, including an open-source route. It requires client registration and supported flows. This build has no registered client ID or that authentication implementation, so it does not claim ChatGPT-plan access. Claude/DeepSeek/Grok consumer sessions are not scraped or reused as API credentials.

An AI answer stays a draft. The tutor has no tool to approve a question, access the GitHub vault directly, change accounts or perform purchases. “Ask tutor to audit” prepares the question/options/source as a request for your review before any provider call; it does not send or charge automatically.

## PDF extraction and review

1. Save a PDF, or enter a title and official APPSC PDF URL and choose **Fetch the official PDF URL entered above**. URL fetching requires the service, a PDF hosted at `https://psc.ap.gov.in`, and a size up to 4 MB. Redirects are refused.
2. Saving a PDF automatically extracts selectable text on the device. The built PDF.js worker is cached offline. Page markers retain provenance. Limit: 150 pages.
3. Inspect/edit reading order. Choose **APPSC Group-I Prelims** only after checking the paper stage. Four labelled options A–D can become pending practice drafts. Mains/reference text can be saved as a draft lesson.
4. Every extracted answer begins **Unknown**. Match wording/options to the PDF, choose the correct answer from a checked key, assign a topic and record the review before practice. Extraction does not infer years or certify PYQs. Unknown-answer drafts can be excluded without approving them.
5. For scans, choose an OCR language and **OCR scan**. The chosen paper is explicitly sent to your private service. Output still requires review. Images can be stored as references but image-only attachment OCR is not implemented.

Scanned OCR prerequisites on the service machine (Ubuntu example):

```sh
sudo apt-get install poppler-utils tesseract-ocr tesseract-ocr-eng tesseract-ocr-tel
python3 -m venv server/.venv
server/.venv/bin/pip install pypdf
```

Set `PYTHON=server/.venv/bin/python` in `server/.env`. OCR handles at most 40 PDF pages, 4 MB, and a bounded total request time. Large scans may need splitting. Temporary source/image files are removed after processing. Telugu font encoding, columns, diagrams, numerical options and OCR mistakes are reasons to check the original, not approve automatically.

## News and reminders

The service collects the official PIB RSS feed every 30 minutes; the connected app checks its cache every minute. Each item keeps its official URL, publication text and collection date. Failed fetches retain the last successful collection. The inbox is a starter source, not complete AP or international coverage. The learner selects relevant releases and links them to topics in the journal. No AI-generated headline is treated as an official release.

Reminders use India time:

- **Open-app:** save a reminder time and allow notifications. A foreground check runs once a minute and shows at most one reminder per day on that device while the app is alive.
- **Calendar:** download the daily `.ics` reminder, then import it into your calendar and allow alerts. It starts tomorrow and does not require the study service.
- **Closed-app Web Push:** connect the running service, allow notifications and select **Enable closed-app push** on each device. The server stores that subscription and sends a generic daily reminder even when the study page is closed. Internet, browser/OS permission and a running service are required; delivery is not exact-time guaranteed. After changing time, press Enable closed-app push again to update that device's server schedule.

Use **Turn off push** to unsubscribe the current device. Subscriptions are device-specific and are not transferred in the GitHub vault. Force-stop/battery restrictions, unsupported browsers and disabled permissions can prevent delivery; a calendar reminder is the independent fallback.

## Example day across devices

On the laptop, unlock sync and open Today. Read a foundation, request a deeper explanation if connected, save notes and complete the topic. Recall dates and progress save locally first, then sync. A useful AI explanation remains visibly a draft until reviewed.

On Android, open the installed app and unlock the same private vault. Pull completes and the same lesson, cursor, notes and pending tasks appear. Work offline if necessary. Reconnecting uploads queued events in the background while preserving the current editor; wait for synced status before returning to the laptop.

At evening review, open Practice, correct imported/extracted questions, review mistakes and use the recall queue. A newspaper or PIB release can be saved to a linked static topic. A configured calendar or server push reminds you the next day; reminders do not mark study as completed.

## Validation and remaining work

Automated tests simulate provider responses, feed failure retention, API authentication, allowed origins, sync convergence, draft/review gates and reminder scheduling. Browser verification covers real PDF.js text extraction, saving/reloading a tutor lesson, pending review and unsaved editor preservation. No real provider key, user vault credential or Android push subscription is available in development, so live provider billing, actual account sign-in and device notification delivery are not claimed tested.

Further work: complete reviewed chapters; full Telugu interface/terminology review; richer reviewed official question banks; AP/international feed coverage; paper-catalogue discovery; conflict review UI; registered ChatGPT sign-in; multi-user authentication if published beyond this personal service.

## Primary references

- OpenAI API: https://developers.openai.com/api/reference/overview
- Sign in with ChatGPT: https://developers.openai.com/siwc
- Anthropic API: https://platform.claude.com/docs/en/api/overview
- DeepSeek API: https://api-docs.deepseek.com/
- xAI API: https://docs.x.ai/developers/rest-api-reference/inference
- PDF.js: https://mozilla.github.io/pdf.js/examples/
- PIB RSS: https://pib.gov.in/ViewRss.aspx?lang=1&reg=1
- Web Push: https://developer.mozilla.org/en-US/docs/Web/API/Push_API
