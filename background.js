function handleYouTubeNavigation(navigationDetails) {
  const isHomepage = navigationDetails.url === "https://www.youtube.com/" || navigationDetails.url === "https://www.youtube.com";

  if (isHomepage) {
    browser.tabs.update(navigationDetails.tabId, { url: "https://www.youtube.com/feed/subscriptions" });
  }
}

browser.webNavigation.onBeforeNavigate.addListener(
  handleYouTubeNavigation,
  { url: [{ hostEquals: "www.youtube.com" }] }
);