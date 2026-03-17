function removeYouTubeShorts() {
  const selectorsForShorts = [
    'ytd-rich-shelf-renderer[is-shorts]',
    'ytd-reel-shelf-renderer',
    '[title="Shorts"]',
    'a[href^="/shorts/"]'
  ];

  for (const selector of selectorsForShorts) {
    const matchingElements = document.querySelectorAll(selector);
    for (const element of matchingElements) {
      element.remove();
    }
  }
}

function redirectFromShortsUrl() {
  const isShortsVideo = window.location.pathname.startsWith('/shorts/');
  if (isShortsVideo) {
    window.location.replace('https://www.youtube.com/feed/subscriptions');
  }
}

const pageObserver = new MutationObserver(removeYouTubeShorts);

pageObserver.observe(document.documentElement, {
  childList: true,
  subtree: true
});

redirectFromShortsUrl();