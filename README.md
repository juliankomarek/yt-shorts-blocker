# YouTube Shorts Blocker & Redirector

A lightweight, privacy-focused Firefox extension that enhances your YouTube experience by removing Shorts and automatically redirecting the homepage to your Subscriptions feed.

## Features

* **Homepage Redirect:** Automatically reroutes you from `youtube.com` directly to `youtube.com/feed/subscriptions`.
* **Shorts Removal:** Actively hides Shorts carousels, shelves, and navigation links across the YouTube interface.
* **Direct Link Prevention:** Automatically redirects any direct `/shorts/` URLs to your subscriptions feed.
* **Privacy-First & Secure:** Operates entirely locally using safe DOM manipulation. No dynamic code execution, no external tracking, and strictly scoped permissions.

---

## Installation 

Since this extension is not currently published on the Firefox Add-ons store, you can install it locally as a temporary add-on for testing.

1. Download or clone this repository to a folder on your local machine.
2. Open Firefox and enter `about:debugging` in the address bar.
3. Click on **This Firefox** in the left-hand sidebar.
4. Click the **Load Temporary Add-on...** button.
5. Navigate to your downloaded folder and select the `manifest.json` file.

> **Note:** Temporary add-ons are removed when Firefox is completely closed. You will need to repeat these steps when you restart the browser, unless you sign and package the extension.

---

## Repository Structure

* `manifest.json`: The core configuration file detailing permissions and script routing.
* `background.js`: The background service worker that intercepts navigation to handle the immediate homepage redirect.
* `content.js`: The script injected into the page to observe the DOM, remove Shorts elements, and handle in-page Shorts URL redirects.

---

## Permissions Used

* `webNavigation`: Required to monitor web traffic specifically to intercept and redirect the YouTube homepage before it fully loads.
* `*://*.youtube.com/*`: Ensures the extension's scripts and permissions are strictly limited to YouTube domains.
