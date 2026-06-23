(function () {
  var IOS_STORE_URL = 'https://apps.apple.com/fr/app/logboard-tricks/id6762189506';
  var ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=com.marcosloim.logboard';
  var status = document.getElementById('status');
  var ua = navigator.userAgent || navigator.vendor || '';
  var isAndroid = /android/i.test(ua);
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isAndroid) {
    status.textContent = 'Redirecting to Play Store...';
    window.location.replace(ANDROID_STORE_URL);
    return;
  }

  if (isIOS) {
    status.textContent = 'Redirecting to App Store...';
    window.location.replace(IOS_STORE_URL);
    return;
  }

  status.textContent = 'Choose your store to install Logboard.';
})();
