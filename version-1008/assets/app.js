(function () {
    const qs = (selector, root = document) => root.querySelector(selector);
    const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    function setupMobileMenu() {
        const button = qs('.mobile-menu-button');
        const panel = qs('.mobile-panel');
        if (!button || !panel) return;
        button.addEventListener('click', function () {
            panel.classList.toggle('is-open');
            button.textContent = panel.classList.contains('is-open') ? '×' : '☰';
        });
    }

    function setupHero() {
        const slider = qs('[data-hero-slider]');
        if (!slider) return;
        const slides = qsa('.hero-slide', slider);
        const dots = qsa('.hero-dot', slider);
        const prev = qs('[data-hero-prev]', slider);
        const next = qs('[data-hero-next]', slider);
        if (!slides.length) return;
        let index = 0;
        let timer = null;

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle('is-active', i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle('is-active', i === index);
            });
        }

        function restart() {
            if (timer) window.clearInterval(timer);
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5000);
        }

        if (prev) {
            prev.addEventListener('click', function () {
                show(index - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(index + 1);
                restart();
            });
        }

        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                show(i);
                restart();
            });
        });

        show(0);
        restart();
    }

    function setupPageFilter() {
        const input = qs('.page-filter-input');
        const select = qs('.page-filter-select');
        const cards = qsa('.filter-card');
        if (!cards.length || (!input && !select)) return;

        function apply() {
            const term = input ? input.value.trim().toLowerCase() : '';
            const type = select ? select.value.trim().toLowerCase() : '';
            cards.forEach(function (card) {
                const haystack = [
                    card.dataset.title,
                    card.dataset.region,
                    card.dataset.genre,
                    card.dataset.tags,
                    card.dataset.year
                ].join(' ').toLowerCase();
                const matchTerm = !term || haystack.indexOf(term) !== -1;
                const matchType = !type || haystack.indexOf(type) !== -1;
                card.classList.toggle('is-hidden', !(matchTerm && matchType));
            });
        }

        if (input) input.addEventListener('input', apply);
        if (select) select.addEventListener('change', apply);
    }

    function setupGlobalSearch() {
        const forms = qsa('.site-search-form');
        const panel = qs('.search-panel');
        if (!forms.length || !panel || typeof SITE_SEARCH_ITEMS === 'undefined') return;

        function render(term) {
            const q = term.trim().toLowerCase();
            if (!q) {
                panel.classList.remove('is-open');
                panel.innerHTML = '';
                return;
            }
            const results = SITE_SEARCH_ITEMS.filter(function (item) {
                return [item.title, item.region, item.category, item.tags, item.description, item.year]
                    .join(' ')
                    .toLowerCase()
                    .indexOf(q) !== -1;
            }).slice(0, 20);
            const list = results.map(function (item) {
                return '<a class="search-result" href="./' + item.file + '">' +
                    '<img src="./' + item.cover + '.jpg" alt="' + escapeHtml(item.title) + '">' +
                    '<span><h3>' + escapeHtml(item.title) + '</h3>' +
                    '<p>' + escapeHtml(item.description) + '</p></span>' +
                    '</a>';
            }).join('');
            panel.innerHTML = '<div class="search-panel-head"><h2>搜索结果</h2><button class="search-close" type="button">关闭</button></div>' +
                '<div class="search-result-list">' + (list || '<p>暂无匹配内容</p>') + '</div>';
            panel.classList.add('is-open');
            const close = qs('.search-close', panel);
            if (close) {
                close.addEventListener('click', function () {
                    panel.classList.remove('is-open');
                });
            }
        }

        forms.forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const input = qs('input[name="q"]', form);
                render(input ? input.value : '');
            });
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') panel.classList.remove('is-open');
        });
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function setupPlayers() {
        qsa('.player-shell').forEach(function (shell) {
            const video = qs('video', shell);
            const button = qs('.play-overlay', shell);
            const stream = shell.dataset.stream;
            let hls = null;
            let loaded = false;

            function load() {
                if (!video || !stream || loaded) return;
                loaded = true;
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = stream;
                } else if (window.Hls && window.Hls.isSupported()) {
                    hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
                    hls.loadSource(stream);
                    hls.attachMedia(video);
                } else {
                    video.src = stream;
                }
            }

            function play() {
                load();
                shell.classList.add('is-playing');
                const promise = video.play();
                if (promise && typeof promise.catch === 'function') {
                    promise.catch(function () {
                        shell.classList.remove('is-playing');
                    });
                }
            }

            if (button) {
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    play();
                });
            }

            if (video) {
                video.addEventListener('click', function () {
                    if (!loaded || video.paused) {
                        play();
                    } else {
                        video.pause();
                    }
                });
                video.addEventListener('play', function () {
                    shell.classList.add('is-playing');
                });
                video.addEventListener('pause', function () {
                    if (video.currentTime === 0 || video.ended) {
                        shell.classList.remove('is-playing');
                    }
                });
                window.addEventListener('beforeunload', function () {
                    if (hls) hls.destroy();
                });
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupMobileMenu();
        setupHero();
        setupPageFilter();
        setupGlobalSearch();
        setupPlayers();
    });
})();
