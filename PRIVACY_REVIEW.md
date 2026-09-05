# Privacy release review — 2026-09-05

Ready for review at the owner's request. This is NOT a legal compliance approval: unresolved provider/account questions and live browser checks remain explicitly listed below.

## Evidence and scope
Reviewed main tree 560e70a28d6aee8727654e7f4f1eed9a525a29f6, application TSX/CSS, package.json and DESIGN.md.
Repository audit only: no production network/cookie inspection or private hosting/email configuration inspection was performed. The user previously requested closing the cloud browser; it was not reopened.
No forms, visitor login, localStorage, sessionStorage or social embeds found in reviewed application code.
Portfolio currently imports Analytics/SpeedInsights in root layout, Google Fonts in CSS, and an automatically loaded PythonAnywhere image. This proposal removes the telemetry mounts and external font import, and makes the music image opt-in with revocation and no-referrer.
The privacy HTML is self-contained, has no scripts or remote resources, and retains the V// favicon.
The static HTML route intentionally bypasses the Next root layout.
No Vercel settings, historical data, subscription, email or DNS records were changed.

## Owner decisions / unresolved verification
- CONFIRMED by owner: Gilian Kranendonk may be named exclusively in the privacy notice; privacy contact is gilkranendonk@gmail.com. No residential address is included.
- Confirm Vercel contractual roles, processing terms and international safeguards for the actual Hobby subscription. The published DPA currently expressly covers Pro/Enterprise, not Hobby. Do not claim Hobby is automatically unlawful, or a DPA exists, based on this alone. Ask Vercel or qualified advice before concluding; no paid upgrade authorized.
- Establish actual hosting/security log retention and what past analytics data remains. Published runtime-log limits are not proof that all infrastructure data is deleted then.
- CONFIRMED by owner: once contact is answered and handled, received messages AND sent replies go to trash; trash is emptied once per month. This is owner-reported practice, not an independently verified mailbox setting. Provider-managed backups/copies and Google/Gmail roles/transfers remain to be assessed. No mailbox data or settings were changed.
- Confirm proposed loss of analytics/performance measurements and use of system-font fallbacks. Packages remain installed but unused; no lockfile change is necessary.
- Verify PythonAnywhere widget logging, retention, processing terms, redirects and any subresources. Opt-in does not resolve contractual obligations by itself.
- Inspect production network and browser storage with a clean unauthenticated browser (desktop/mobile), including Vercel-injected scripts, security challenges/cookies and headers. Disable dashboard-injected optional tracking if any. No blanket cookie-free certification from source alone.
- Public notice now states verified facts and explicitly discloses unknown retention/contract coverage instead of editing placeholders. noindex is retained for the owner's privacy preference. Publishing a notice does not remedy missing provider agreements.
- Test footer/privacy page at 320px, desktop and 200% zoom, keyboard focus, and back navigation.
- Confirm no Google font or PythonAnywhere request before opt-in; after opt-in verify image, error fallback, hide/unmount and reset on refresh.

## Sources checked
- https://vercel.com/legal/dpa
- https://vercel.com/legal/privacy-notice
- https://vercel.com/docs/analytics/privacy-policy
- https://vercel.com/docs/speed-insights/privacy-policy
- https://www.acm.nl/nl/verkoop-aan-consumenten/reclame-en-verleiden/online-beinvloeden/cookies-plaatsen
- https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/privacyrechten-avg/recht-op-informatie
- https://www.pythonanywhere.com/privacy_v2/

No promise of full GDPR compliance. A privacy notice alone does not establish lawful processing.

## Follow-up source research
- Vercel DPA section 4 distinguishes processor processing from controller processing of service-generated data. Pro/Enterprise scope does not by itself prove Hobby hosting is unlawful; Hobby processor coverage remains unresolved.
- https://vercel.com/docs/logs/runtime lists one hour for Hobby runtime logs, not all infrastructure retention. Vercel Privacy Notice gives purpose-based retention criteria.
- PythonAnywhere terms section 10 / Appendix 1 contains processor obligations: https://www.pythonanywhere.com/terms_v2/ . Whether all widget logs are covered still needs confirmation.
- PythonAnywhere staff describe size-dependent access-log rotation, not a guaranteed day-based maximum: https://www.pythonanywhere.com/forums/topic/14088/ . Account-specific logging was not inspected.
- Google deletion/retention documentation: https://policies.google.com/technologies/retention . No claim that provider backups disappear when owner empties trash.
- Production portfolio HEAD request returned HTTP 200, Vercel server and HSTS, with no Set-Cookie on that single response. This is NOT a full browser cookie/network audit. Cloud browser was not reopened.
- No subscriptions, hosting settings, historical data, mail settings or production branch changed. No provider contacted on the owner’s behalf.
