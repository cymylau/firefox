# Managed Firefox Enterprise Policies (macOS)

## 1. Introduction

This repository contains a managed **Firefox Enterprise Policies**
configuration.\
Firefox supports a built‑in enterprise feature that reads a
`policies.json` file at startup and applies the configuration
automatically. This allows Firefox to be configured in a **declarative,
reproducible, and version‑controlled** way.

Official Mozilla documentation: -
https://support.mozilla.org/en-US/kb/customizing-firefox-using-policiesjson -
https://mozilla.github.io/policy-templates/

### Where to place the file (macOS)

Create the file at:

    /Applications/Firefox.app/Contents/Resources/distribution/policies.json

Notes: - The `distribution` folder may need to be created. - Firefox
must be fully restarted after changes. - The browser will show **"Your
browser is managed by your organisation"** when active.

------------------------------------------------------------------------

## 2. Policy Configuration and Rationale

This configuration is designed around the principle that **network‑layer
controls take priority over browser‑layer controls**, while ensuring
privacy, determinism, and reduced attack surface.

### Telemetry and Firefox Services

Policies: - DisableTelemetry - DisableFirefoxStudies - DisablePocket -
DisableFeedbackCommands - DisableFormHistory - DontCheckDefaultBrowser

Rationale: Disables non‑essential Mozilla services and background data
collection.\
The goal is to ensure the browser behaves as a tool rather than a
telemetry platform.

------------------------------------------------------------------------

### Bookmarks Toolbar

Policy: - DisplayBookmarksToolbar = always

Rationale: Provides a consistent baseline UI and allows future managed
bookmarks to be visible.

------------------------------------------------------------------------

### Homepage

Policy: - Homepage locked to https://kagi.com

Rationale: Prevents homepage hijacking and ensures a deterministic
startup experience.

------------------------------------------------------------------------

### Default Search Engine

Policy: - Default search engine set to Kagi

Rationale: Ensures all search traffic uses the chosen privacy‑focused
search provider.

------------------------------------------------------------------------

### DNS Behaviour

Policy: - DNSOverHTTPS disabled and locked

Rationale: DNS resolution is intentionally handled at the **network
layer**.\
Allowing browser DoH would bypass: - network filtering - logging and
monitoring - centralised DNS control

Firefox therefore uses the **system resolver only**.

------------------------------------------------------------------------

### Proxy Configuration

Policy: - Proxy Mode = none (locked)

Rationale: Prevents proxy abuse and attacks via: - WPAD - PAC files -
malicious extensions

Firefox is forced to use **direct connections** only.

------------------------------------------------------------------------

### HTTPS‑Only Mode

Policy: - HttpsOnlyMode enabled

Rationale: Reduces downgrade attacks and enforces encrypted transport
whenever available.

------------------------------------------------------------------------

### Built‑in Password Manager

Policies: - PasswordManagerEnabled = false - OfferToSaveLogins disabled

Rationale: Password management is centralised in Proton Pass.\
This prevents duplicate credential storage locations.

------------------------------------------------------------------------

## Extension Allow‑List

Default rule:

    "*": installation_mode = blocked

Only the following extensions are allowed and automatically installed:

  Extension           Purpose
  ------------------- -----------------------------------
  AdGuard AdBlocker   Network and cosmetic filtering
  Proton Pass         Password manager
  Kagi Search         Search integration
  Kagi Privacy Pass   Anonymous authentication for Kagi

Rationale: Browser extensions have extensive privileges including: -
page access - traffic modification - credential access

An allow‑list significantly reduces the browser attack surface.

------------------------------------------------------------------------

## 3. Validation

After placing the file and restarting Firefox:

Open:

    about:policies

Expected results: - All policies listed under **Active** - No entries
under **Errors** - Extensions automatically install within \~60 seconds

------------------------------------------------------------------------

## 4. Summary

This configuration ensures:

-   No browser DNS bypass
-   No proxy auto‑configuration
-   No telemetry or studies
-   HTTPS‑only browsing
-   Locked homepage and search provider
-   Strict extension allow‑list

The browser becomes a predictable and controlled component of the wider
network security model.
