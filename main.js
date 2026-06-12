// main.js — Red Diamond Services LLC
// Sticky nav, hamburger toggle, smooth anchor scrolling

(function () {
  'use strict';

  // ── Sticky nav: transparent → solid on scroll ──────────────────────
  const nav = document.getElementById('site-nav');

  if (nav) {
    const SCROLL_THRESHOLD = 80;

    function updateNavState() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        nav.classList.add('nav--solid');
      } else {
        nav.classList.remove('nav--solid');
      }
    }

    window.addEventListener('scroll', updateNavState, { passive: true });
    updateNavState(); // Run on load
  }

  // ── Hamburger toggle ───────────────────────────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('is-open', !isOpen);
    });

    // Close menu when a mobile nav link is clicked
    mobileMenu.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
      });
    });
  }

  // ── Smooth anchor scrolling ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
