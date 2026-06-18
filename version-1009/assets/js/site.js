(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  ready(function () {
    var toggle = document.querySelector("[data-menu-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        mobileNav.classList.toggle("open");
      });
    }

    var hero = document.querySelector("[data-hero]");
    if (hero) {
      var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
      var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
      var prev = hero.querySelector("[data-hero-prev]");
      var next = hero.querySelector("[data-hero-next]");
      var current = 0;
      var timer = null;

      function show(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
          slide.classList.toggle("active", i === current);
        });
        dots.forEach(function (dot, i) {
          dot.classList.toggle("active", i === current);
        });
      }

      function restart() {
        if (timer) {
          window.clearInterval(timer);
        }
        timer = window.setInterval(function () {
          show(current + 1);
        }, 5000);
      }

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          show(Number(dot.getAttribute("data-hero-dot")) || 0);
          restart();
        });
      });

      if (prev) {
        prev.addEventListener("click", function () {
          show(current - 1);
          restart();
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          show(current + 1);
          restart();
        });
      }

      if (slides.length > 1) {
        restart();
      }
    }

    var scope = document.querySelector("[data-filter-scope]");
    if (scope) {
      var search = scope.querySelector("[data-card-search]");
      var year = scope.querySelector("[data-filter-year]");
      var region = scope.querySelector("[data-filter-region]");
      var list = document.querySelector("[data-card-list]");
      var cards = list ? Array.prototype.slice.call(list.children) : [];
      var params = new URLSearchParams(window.location.search);
      var q = params.get("q") || "";

      if (search && q) {
        search.value = q;
      }

      function apply() {
        var keyword = normalize(search ? search.value : "");
        var y = normalize(year ? year.value : "");
        var r = normalize(region ? region.value : "");

        cards.forEach(function (card) {
          var haystack = normalize([
            card.getAttribute("data-title"),
            card.getAttribute("data-year"),
            card.getAttribute("data-region"),
            card.getAttribute("data-genre"),
            card.getAttribute("data-category"),
            card.textContent
          ].join(" "));
          var cardYear = normalize(card.getAttribute("data-year"));
          var cardRegion = normalize(card.getAttribute("data-region"));
          var matched = (!keyword || haystack.indexOf(keyword) !== -1) && (!y || cardYear === y) && (!r || cardRegion === r);
          card.classList.toggle("is-hidden", !matched);
        });
      }

      if (search) {
        search.addEventListener("input", apply);
      }
      if (year) {
        year.addEventListener("change", apply);
      }
      if (region) {
        region.addEventListener("change", apply);
      }
      apply();
    }
  });
})();
