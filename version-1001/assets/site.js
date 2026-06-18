(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function initMobileMenu() {
    var button = document.querySelector(".mobile-toggle");
    var panel = document.querySelector(".mobile-panel");
    if (!button || !panel) {
      return;
    }
    button.addEventListener("click", function () {
      panel.classList.toggle("is-open");
      button.setAttribute("aria-expanded", panel.classList.contains("is-open") ? "true" : "false");
    });
  }

  function initHeroSlider() {
    var slider = document.querySelector(".hero-slider");
    if (!slider) {
      return;
    }
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
    if (slides.length < 2) {
      return;
    }
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });
    }

    function start() {
      stop();
      timer = setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        show(index);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function normalizeText(value) {
    return (value || "").toString().toLowerCase().trim();
  }

  function initFilters() {
    var input = document.querySelector("[data-filter-input]");
    var year = document.querySelector("[data-filter-year]");
    var region = document.querySelector("[data-filter-region]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
    var empty = document.querySelector(".empty-state");
    if (!cards.length) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var query = params.get("q");
    if (input && query) {
      input.value = query;
    }

    function apply() {
      var q = normalizeText(input ? input.value : "");
      var y = year ? year.value : "";
      var r = region ? region.value : "";
      var visible = 0;

      cards.forEach(function (card) {
        var text = normalizeText(card.getAttribute("data-title") + " " + card.getAttribute("data-tags") + " " + card.getAttribute("data-genre"));
        var matchQuery = !q || text.indexOf(q) !== -1;
        var matchYear = !y || card.getAttribute("data-year") === y;
        var matchRegion = !r || card.getAttribute("data-region") === r;
        var matched = matchQuery && matchYear && matchRegion;
        card.style.display = matched ? "" : "none";
        if (matched) {
          visible += 1;
        }
      });

      if (empty) {
        empty.classList.toggle("is-visible", visible === 0);
      }
    }

    if (input) {
      input.addEventListener("input", apply);
    }
    if (year) {
      year.addEventListener("change", apply);
    }
    if (region) {
      region.addEventListener("change", apply);
    }
    apply();
  }

  window.SitePlayer = {
    mount: function (options) {
      var video = document.querySelector(options.videoSelector);
      var overlay = document.querySelector(options.overlaySelector);
      if (!video || !options.url) {
        return;
      }

      function activate() {
        if (!video.getAttribute("data-ready")) {
          if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = options.url;
          } else if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls({ enableWorker: true });
            hls.loadSource(options.url);
            hls.attachMedia(video);
          } else {
            video.src = options.url;
          }
          video.setAttribute("data-ready", "1");
        }
        if (overlay) {
          overlay.classList.add("is-hidden");
        }
        var result = video.play();
        if (result && result.catch) {
          result.catch(function () {});
        }
      }

      if (overlay) {
        overlay.addEventListener("click", activate);
      }
      video.addEventListener("click", function () {
        if (!video.getAttribute("data-ready")) {
          activate();
        }
      });
      video.addEventListener("play", function () {
        if (overlay) {
          overlay.classList.add("is-hidden");
        }
      });
    }
  };

  ready(function () {
    initMobileMenu();
    initHeroSlider();
    initFilters();
  });
})();
