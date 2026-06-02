(function () {
  var UTM_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'fbclid',
    'gclid'
  ];
  var STORAGE_KEY = 'laylo_utm_params';
  var TARGET_HOST = 'start.laylopets.com';

  function getUtmParamsFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var utms = {};

    UTM_KEYS.forEach(function (key) {
      var value = params.get(key);
      if (value) utms[key] = value;
    });

    return utms;
  }

  function loadStoredUtms() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  }

  function saveUtms(utms) {
    if (Object.keys(utms).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    }
  }

  function getActiveUtms() {
    var fromUrl = getUtmParamsFromUrl();
    var stored = loadStoredUtms();
    var merged = Object.assign({}, stored, fromUrl);

    saveUtms(merged);
    return merged;
  }

  function isTargetLink(href) {
    if (!href) return false;

    try {
      var url = new URL(href, window.location.origin);
      return url.hostname === TARGET_HOST;
    } catch (error) {
      return href.indexOf(TARGET_HOST) !== -1;
    }
  }

  function appendUtmsToUrl(href, utms) {
    if (!Object.keys(utms).length || !isTargetLink(href)) return href;

    try {
      var url = new URL(href, window.location.origin);

      UTM_KEYS.forEach(function (key) {
        if (utms[key] && !url.searchParams.has(key)) {
          url.searchParams.set(key, utms[key]);
        }
      });

      return url.toString();
    } catch (error) {
      return href;
    }
  }

  function updateLinks(utms) {
    if (!Object.keys(utms).length) return;

    document.querySelectorAll('a[href*="' + TARGET_HOST + '"]').forEach(function (link) {
      var updatedHref = appendUtmsToUrl(link.href, utms);

      if (updatedHref !== link.href) {
        link.href = updatedHref;
      }
    });
  }

  function init() {
    var utms = getActiveUtms();

    updateLinks(utms);

    document.addEventListener(
      'click',
      function (event) {
        var link = event.target.closest('a[href*="' + TARGET_HOST + '"]');
        if (!link) return;

        var activeUtms = getActiveUtms();
        var updatedHref = appendUtmsToUrl(link.href, activeUtms);

        if (updatedHref !== link.href) {
          link.href = updatedHref;
        }
      },
      true
    );

    if (typeof MutationObserver === 'undefined' || !document.body) return;

    var observerTimer;

    new MutationObserver(function () {
      clearTimeout(observerTimer);
      observerTimer = setTimeout(function () {
        updateLinks(getActiveUtms());
      }, 100);
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
