(function () {
    function qs(selector, root) {
        return (root || document).querySelector(selector);
    }

    function qsa(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function setupMenu() {
        var button = qs('.menu-toggle');
        var panel = qs('.mobile-panel');
        if (!button || !panel) {
            return;
        }
        button.addEventListener('click', function () {
            panel.classList.toggle('is-open');
        });
    }

    function setupSearchForms() {
        qsa('.site-search-form').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var input = qs('input[name="q"]', form);
                if (!input) {
                    return;
                }
                var value = input.value.trim();
                if (!value) {
                    event.preventDefault();
                    window.location.href = 'search.html';
                }
            });
        });
    }

    function setupHero() {
        var slides = qsa('.hero-slide');
        if (!slides.length) {
            return;
        }
        var dots = qsa('.hero-dot');
        var prev = qs('.hero-prev');
        var next = qs('.hero-next');
        var current = 0;
        var timer = null;

        function show(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, idx) {
                slide.classList.toggle('is-active', idx === current);
            });
            dots.forEach(function (dot, idx) {
                dot.classList.toggle('is-active', idx === current);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5000);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        if (prev) {
            prev.addEventListener('click', function () {
                show(current - 1);
                start();
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                show(current + 1);
                start();
            });
        }
        dots.forEach(function (dot, idx) {
            dot.addEventListener('click', function () {
                show(idx);
                start();
            });
        });
        start();
    }

    function setupFilters() {
        var input = qs('[data-filter-input]');
        var year = qs('[data-filter-year]');
        var cards = qsa('[data-card-list] .movie-card');
        var empty = qs('.empty-state');
        if (!cards.length) {
            return;
        }

        function apply() {
            var term = input ? input.value.trim().toLowerCase() : '';
            var selectedYear = year ? year.value : '';
            var visible = 0;
            cards.forEach(function (card) {
                var search = (card.getAttribute('data-search') || '').toLowerCase();
                var cardYear = card.getAttribute('data-year') || '';
                var matched = (!term || search.indexOf(term) !== -1) && (!selectedYear || cardYear === selectedYear);
                card.style.display = matched ? '' : 'none';
                if (matched) {
                    visible += 1;
                }
            });
            if (empty) {
                empty.classList.toggle('is-visible', visible === 0);
            }
        }

        if (input) {
            var params = new URLSearchParams(window.location.search);
            var q = params.get('q') || '';
            if (q && input.value === '') {
                input.value = q;
            }
            input.addEventListener('input', apply);
        }
        if (year) {
            year.addEventListener('change', apply);
        }
        apply();
    }

    function setupPlayers() {
        qsa('.player-box').forEach(function (box) {
            var video = qs('video', box);
            var button = qs('.player-overlay', box);
            var stream = box.getAttribute('data-stream');
            var hls = null;
            var ready = false;

            function attach() {
                if (!video || !stream || ready) {
                    return;
                }
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = stream;
                    ready = true;
                    return;
                }
                if (window.Hls && window.Hls.isSupported()) {
                    hls = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(stream);
                    hls.attachMedia(video);
                    ready = true;
                    return;
                }
                video.src = stream;
                ready = true;
            }

            function play() {
                attach();
                if (!video) {
                    return;
                }
                box.classList.add('is-playing');
                video.setAttribute('controls', 'controls');
                var result = video.play();
                if (result && typeof result.catch === 'function') {
                    result.catch(function () {});
                }
            }

            if (button) {
                button.addEventListener('click', play);
            }
            if (video) {
                video.addEventListener('click', function () {
                    if (!ready) {
                        play();
                    }
                });
                video.addEventListener('ended', function () {
                    box.classList.remove('is-playing');
                });
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupMenu();
        setupSearchForms();
        setupHero();
        setupFilters();
        setupPlayers();
    });
})();
