/* nav.js – Burger Menu + Back-to-Top für dein Praxisauftritt */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById('burger');
    var mobileNav = document.getElementById('mobile-nav');
    if (!burger || !mobileNav) return;

    burger.addEventListener('click', function() {
      var isOpen = mobileNav.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        mobileNav.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // ── BACK TO TOP ──
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function() {
      btn.classList.toggle('visible', window.scrollY > 320);
    }, { passive: true });
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

})();
