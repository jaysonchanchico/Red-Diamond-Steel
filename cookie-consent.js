// cookie-consent.js — Red Diamond Services LLC
// Standards §7 opt-in model: non-essential scripts do NOT load until Accept.
// Persist choice in localStorage. Never re-show after a choice.

(function () {
  'use strict';

  const STORAGE_KEY = 'rd_cookie_consent';
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  if (!banner || !acceptBtn || !declineBtn) return;

  const stored = localStorage.getItem(STORAGE_KEY);

  // Already made a choice — don't show banner again
  if (stored === 'accepted' || stored === 'declined') {
    if (stored === 'accepted') loadAnalytics();
    return;
  }

  // Show banner on first visit
  banner.classList.add('is-visible');

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    banner.classList.remove('is-visible');
    loadAnalytics();
  });

  declineBtn.addEventListener('click', function () {
    localStorage.setItem(STORAGE_KEY, 'declined');
    banner.classList.remove('is-visible');
  });

  // Keyboard: Escape closes as a decline
  banner.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      localStorage.setItem(STORAGE_KEY, 'declined');
      banner.classList.remove('is-visible');
    }
  });

  function loadAnalytics() {
    // TODO-FORM: Replace GA_MEASUREMENT_ID with actual ID before launch.
    // Non-essential analytics script — only injected after explicit Accept.
    // Example (Google Analytics 4):
    //
    // var script = document.createElement('script');
    // script.async = true;
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    // document.head.appendChild(script);
    //
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'GA_MEASUREMENT_ID');
    console.log('Analytics consent granted — wire GA_MEASUREMENT_ID before launch.');
  }

})();
