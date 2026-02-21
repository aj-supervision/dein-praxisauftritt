/* slider.js – Testimonial Slider für dein Praxisauftritt */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.tb-slide');
    var dots   = document.querySelectorAll('.tb-dots span');
    var prev   = document.querySelector('.tb-prev');
    var next   = document.querySelector('.tb-next');
    if (!slides.length) return;

    var current = 0;

    function show(idx) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    if (prev) prev.addEventListener('click', function() { show(current - 1); });
    if (next) next.addEventListener('click', function() { show(current + 1); });

    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        show(parseInt(this.getAttribute('data-idx')));
      });
    });

    /* Touch/Swipe für Mobile */
    var track = document.querySelector('.tb-track');
    if (track) {
      var startX = 0;
      track.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
      }, { passive: true });
      track.addEventListener('touchend', function(e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) show(diff > 0 ? current + 1 : current - 1);
      }, { passive: true });
    }

    /* Auto-Play alle 6 Sekunden */
    setInterval(function() { show(current + 1); }, 6000);
  });
})();
