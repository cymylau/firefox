/* app.shield.optoutstudies.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable “Shield Studies” (opt-out experiments) to reduce remote experimentation surface.
 */
user_pref("app.shield.optoutstudies.enabled", false);

/* app.normandy.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/normandy/normandy/index.html
 * Values: true | false
 * Why: Disable Normandy remote “recipe” system to reduce remote configuration/experimentation.
 */
user_pref("app.normandy.enabled", false);

/* app.normandy.api_url
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/normandy/normandy/index.html
 * Values: string URL (default points to Mozilla Normandy API) | "" (empty)
 * Why: Blank it so the Normandy client has nowhere to talk to if something re-enables it.
 */
user_pref("app.normandy.api_url", "");

/* datareporting.healthreport.uploadEnabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable uploading Health Report / telemetry-related data.
 */
user_pref("datareporting.healthreport.uploadEnabled", false);

/* datareporting.policy.dataSubmissionEnabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable submission of data to Mozilla endpoints.
 */
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/* toolkit.telemetry.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false (note: behavior can vary by channel/build per docs)
 * Why: Reduce Telemetry collection pathways where this pref is honored.
 */
user_pref("toolkit.telemetry.enabled", false);

/* toolkit.telemetry.unified
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Prefer unified telemetry behavior off where honored; aligns with disabling uploads.
 */
user_pref("toolkit.telemetry.unified", false);

/* toolkit.telemetry.server
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: URL string | "" (empty)
 * Why: Prevent telemetry submissions by removing configured endpoint.
 */
user_pref("toolkit.telemetry.server", "");

/* toolkit.telemetry.archive.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Avoid local archiving of telemetry pings.
 */
user_pref("toolkit.telemetry.archive.enabled", false);

/* toolkit.telemetry.newProfilePing.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable pings sent around new-profile creation.
 */
user_pref("toolkit.telemetry.newProfilePing.enabled", false);

/* toolkit.telemetry.shutdownPingSender.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable telemetry sending on shutdown.
 */
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);

/* toolkit.telemetry.updatePing.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable update-related telemetry ping.
 */
user_pref("toolkit.telemetry.updatePing.enabled", false);

/* toolkit.telemetry.bhrPing.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable background hang reporter ping.
 */
user_pref("toolkit.telemetry.bhrPing.enabled", false);

/* toolkit.telemetry.firstShutdownPing.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
 * Values: true | false
 * Why: Disable first-shutdown telemetry ping.
 */
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

/* browser.ping-centre.telemetry
 * Docs: https://searchfox.org/firefox-main/source/browser/components/newtab/lib/TelemetryFeed.sys.mjs
 * Values: true | false
 * Why: Reduce Activity Stream / new tab telemetry.
 */
user_pref("browser.ping-centre.telemetry", false);

/* browser.newtabpage.activity-stream.telemetry
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Reduce telemetry from Activity Stream surfaces.
 */
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/* browser.newtabpage.activity-stream.feeds.telemetry
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Reduce telemetry from Activity Stream feeds.
 */
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);

/* browser.safebrowsing.malware.enabled
 * Docs: https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
 * Values: true | false
 * Why: Keep on for real-world protection (malware warnings) with minimal privacy cost for most users.
 */
user_pref("browser.safebrowsing.malware.enabled", true);

/* browser.safebrowsing.phishing.enabled
 * Docs: https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
 * Values: true | false
 * Why: Keep on to reduce phishing risk.
 */
user_pref("browser.safebrowsing.phishing.enabled", true);

/* privacy.trackingprotection.enabled
 * Docs: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
 * Values: true | false
 * Why: Enable Enhanced Tracking Protection (baseline anti-tracking with low breakage).
 */
user_pref("privacy.trackingprotection.enabled", true);

/* privacy.trackingprotection.socialtracking.enabled
 * Docs: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
 * Values: true | false
 * Why: Block social trackers where possible.
 */
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

/* privacy.trackingprotection.cryptomining.enabled
 * Docs: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
 * Values: true | false
 * Why: Block cryptomining scripts.
 */
user_pref("privacy.trackingprotection.cryptomining.enabled", true);

/* privacy.trackingprotection.fingerprinting.enabled
 * Docs: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
 * Values: true | false
 * Why: Block known fingerprinters while keeping the browser broadly compatible.
 */
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

/* privacy.partition.network_state
 * Docs: https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/State_Partitioning
 * Values: true | false
 * Why: Enable network state partitioning (major cross-site tracking mitigation with low breakage).
 */
user_pref("privacy.partition.network_state", true);

/* privacy.partition.serviceWorkers
 * Docs: https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/State_Partitioning
 * Values: true | false
 * Why: Partition Service Worker state to reduce cross-site correlation.
 */
user_pref("privacy.partition.serviceWorkers", true);

/* privacy.partition.always_partition_third_party_non_cookie_storage
 * Docs: https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/State_Partitioning
 * Values: true | false
 * Why: Ensure third-party non-cookie storage is partitioned to reduce tracking.
 */
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);

/* network.cookie.cookieBehavior
 * Docs: https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/State_Partitioning
 * Values: 0=allow all | 1=block third-party | 2=block all | 3=block unvisited | 4=reject trackers (no partitioning) | 5=reject trackers + partition third-party storage
 * Why: Use 5 for strong anti-tracking + storage partitioning without nuking all cookies.
 */
user_pref("network.cookie.cookieBehavior", 5);

/* network.http.referer.XOriginPolicy
 * Docs: https://wiki.mozilla.org/Security/Referrer
 * Values: 0=always | 1=only if base domains match | 2=only if hosts match
 * Why: Use 2 to avoid sending Referer on cross-origin requests (reduces leakage).
 */
user_pref("network.http.referer.XOriginPolicy", 2);

/* network.http.referer.XOriginTrimmingPolicy
 * Docs: https://wiki.mozilla.org/Security/Referrer
 * Values: 0=send full URI | 1=scheme+host+port+path | 2=scheme+host+port
 * Why: Use 2 to send only origin info cross-site (less sensitive URL leakage).
 */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/* dom.security.https_only_mode
 * Docs: https://support.mozilla.org/en-US/kb/https-only-prefs
 * Values: true | false
 * Why: Prefer HTTPS by default to reduce downgrade/MITM risk with manageable exceptions UI.
 */
user_pref("dom.security.https_only_mode", true);

/* security.mixed_content.block_active_content
 * Docs: https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox
 * Values: true | false
 * Why: Block “mixed active” content (scripts/iframes) on HTTPS pages to prevent injection risk.
 */
user_pref("security.mixed_content.block_active_content", true);

/* security.mixed_content.block_display_content
 * Docs: https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox
 * Values: true | false
 * Why: Keep display-content blocking off to reduce site breakage/ugly pages; active content is the big risk.
 */
user_pref("security.mixed_content.block_display_content", false);

/* network.trr.mode
 * Docs: https://firefox-source-docs.mozilla.org/networking/dns/dns-over-https-trr.html
 * Values: 0=default | 1=TRR-first | 2=TRR-only | 3=TRR-disabled (legacy) | 5=TRR-disabled (per docs)
 * Why: Leave at 0 to respect system resolver/your OS-level DoH/DoT/DoQ decisions and avoid captive portal pain.
 */
user_pref("network.trr.mode", 0);

/* network.dns.disablePrefetch
 * Docs: https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
 * Values: true | false
 * Why: Disable DNS prefetching to reduce “pre-connection” leakage to third parties you never actually visit.
 */
user_pref("network.dns.disablePrefetch", true);

/* network.prefetch-next
 * Docs: https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
 * Values: true | false
 * Why: Disable link prefetching to reduce background requests and tracking surface.
 */
user_pref("network.prefetch-next", false);

/* network.http.speculative-parallel-limit
 * Docs: https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
 * Values: integer (0 disables speculative connections; higher allows more)
 * Why: Set to 0 to stop speculative (prediction) connections that can leak browsing intent.
 */
user_pref("network.http.speculative-parallel-limit", 0);

/* media.peerconnection.ice.default_address_only
 * Docs: https://wiki.mozilla.org/Media/WebRTC/Privacy
 * Values: true | false
 * Why: Reduce local network interface exposure via WebRTC ICE candidates while keeping WebRTC usable.
 */
user_pref("media.peerconnection.ice.default_address_only", true);

/* media.peerconnection.ice.no_host
 * Docs: https://wiki.mozilla.org/Media/WebRTC/Privacy
 * Values: true | false
 * Why: Avoid exposing host (LAN) candidates in WebRTC where possible (less local IP leakage).
 */
user_pref("media.peerconnection.ice.no_host", true);

/* geo.enabled
 * Docs: https://searchfox.org/firefox-main/source/dom/webidl/Navigator.webidl
 * Values: true | false
 * Why: Disable Geolocation API by default to reduce location access prompts/collection.
 */
user_pref("geo.enabled", false);

/* device.sensors.enabled
 * Docs: https://searchfox.org/firefox-main/source/modules/libpref/init/StaticPrefList.yaml
 * Values: true | false
 * Why: Disable sensor APIs (motion/orientation, etc.) to reduce fingerprinting and passive data exposure.
 */
user_pref("device.sensors.enabled", false);

/* privacy.donottrackheader.enabled
 * Docs: https://searchfox.org/firefox-main/source/toolkit/components/utils/ClientEnvironment.sys.mjs
 * Values: true | false
 * Why: Enable DNT as a low-cost preference signal (mostly symbolic, but harmless).
 */
user_pref("privacy.donottrackheader.enabled", true);

/* privacy.query_stripping.enabled
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/antitracking/anti-tracking/query-stripping/index.html
 * Values: true | false
 * Why: Strip known tracking query params in normal browsing to reduce “link decoration” tracking.
 */
user_pref("privacy.query_stripping.enabled", true);

/* privacy.query_stripping.enabled.pbmode
 * Docs: https://firefox-source-docs.mozilla.org/toolkit/components/antitracking/anti-tracking/query-stripping/index.html
 * Values: true | false
 * Why: Keep query stripping on in private windows as well.
 */
user_pref("privacy.query_stripping.enabled.pbmode", true);

/* extensions.pocket.enabled
 * Docs: https://support.mozilla.org/en-US/questions/1184863
 * Values: true | false
 * Why: Disable Pocket integration to reduce extra network/features you don’t use.
 */
user_pref("extensions.pocket.enabled", false);

/* browser.newtabpage.activity-stream.feeds.discoverystreamfeed
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Disable discovery stream content feed to reduce background content + telemetry exposure.
 */
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);

/* browser.newtabpage.activity-stream.feeds.section.topstories
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Disable top stories (often Pocket-backed) to reduce content fetching.
 */
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/* browser.newtabpage.activity-stream.feeds.snippets
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Disable snippets to reduce background network/content.
 */
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

/* browser.newtabpage.activity-stream.feeds.section.highlights
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Disable highlights feed to reduce local activity surfacing and related processing.
 */
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);

/* browser.newtabpage.activity-stream.section.highlights.includeBookmarks
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Reduce personal data surfaced in highlights.
 */
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);

/* browser.newtabpage.activity-stream.section.highlights.includeDownloads
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Reduce personal data surfaced in highlights.
 */
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);

/* browser.newtabpage.activity-stream.section.highlights.includeVisited
 * Docs: https://firefox-source-docs.mozilla.org/browser/extensions/newtab/docs/v2-system-addon/preferences.html
 * Values: true | false
 * Why: Reduce browsing history surfaced in highlights.
 */
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
