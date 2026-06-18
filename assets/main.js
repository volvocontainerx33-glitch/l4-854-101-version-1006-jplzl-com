(function () {
    var toggle = document.querySelector('[data-menu-toggle]');
    var nav = document.querySelector('[data-site-nav]');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('is-open');
        });
    }

    var slider = document.querySelector('[data-hero-slider]');
    if (slider) {
        var slides = Array.prototype.slice.call(slider.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(slider.querySelectorAll('.hero-dot'));
        var current = 0;
        var timer = null;
        var show = function (index) {
            if (!slides.length) {
                return;
            }
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === current);
            });
        };
        var start = function () {
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5200);
        };
        var stop = function () {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };
        var previous = slider.querySelector('[data-hero-prev]');
        var next = slider.querySelector('[data-hero-next]');
        if (previous) {
            previous.addEventListener('click', function () {
                show(current - 1);
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                show(current + 1);
            });
        }
        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                show(index);
            });
        });
        slider.addEventListener('mouseenter', stop);
        slider.addEventListener('mouseleave', start);
        show(0);
        start();
    }

    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-movie-card]'));
    var searchInput = document.querySelector('[data-movie-search]');
    var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-filter-button]'));
    var empty = document.querySelector('[data-empty-state]');
    var activeGroup = 'all';

    function normalize(value) {
        return String(value || '').toLowerCase().trim();
    }

    function applyFilter() {
        if (!cards.length) {
            return;
        }
        var query = normalize(searchInput ? searchInput.value : '');
        var shown = 0;
        cards.forEach(function (card) {
            var text = normalize(card.getAttribute('data-filter'));
            var group = card.getAttribute('data-group') || 'all';
            var matchGroup = activeGroup === 'all' || activeGroup === group;
            var matchQuery = !query || text.indexOf(query) !== -1;
            var visible = matchGroup && matchQuery;
            card.style.display = visible ? '' : 'none';
            if (visible) {
                shown += 1;
            }
        });
        if (empty) {
            empty.classList.toggle('is-visible', shown === 0);
        }
    }

    if (searchInput) {
        var params = new URLSearchParams(window.location.search);
        var initialQuery = params.get('q');
        if (initialQuery) {
            searchInput.value = initialQuery;
        }
        searchInput.addEventListener('input', applyFilter);
        applyFilter();
    }

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            activeGroup = button.getAttribute('data-filter-button') || 'all';
            buttons.forEach(function (item) {
                item.classList.toggle('is-active', item === button);
            });
            applyFilter();
        });
    });
})();
