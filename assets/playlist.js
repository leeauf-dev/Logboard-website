(function () {
  var status = document.getElementById('playlist-status');
  var openButton = document.getElementById('open-app');
  var match = window.location.pathname.match(/^\/playlist\/([^/?#]+)/);
  var slug = match ? decodeURIComponent(match[1]) : '';
  var appUrl = slug ? 'logboard://playlist/' + encodeURIComponent(slug) : 'logboard://';
  var ua = navigator.userAgent || navigator.vendor || '';
  var isMobile = /android|iPad|iPhone|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  openButton.href = appUrl;

  if (!slug) {
    status.textContent = 'This playlist link is missing its identifier.';
    return;
  }

  function openApp() {
    window.location.href = appUrl;
  }

  openButton.addEventListener('click', function (event) {
    event.preventDefault();
    openApp();
  });

  if (isMobile) {
    openApp();
    window.setTimeout(function () {
      status.textContent = 'If Logboard did not open, install the app or try again.';
    }, 1400);
    return;
  }

  status.textContent = 'Open this link on your phone, or install Logboard first.';
})();
