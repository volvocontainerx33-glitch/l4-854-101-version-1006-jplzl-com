(function () {
    var hero = document.querySelector('[data-hero]');
    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
        var index = 0;
        var timer = null;
        var show = function (next) {
            if (!slides.length) {
                return;
            }
            index = (next + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle('is-active', i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle('is-active', i === index);
            });
        };
        var start = function () {
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        };
        var reset = function () {
            window.clearInterval(timer);
            start();
        };
        var prev = hero.querySelector('[data-hero-prev]');
        var next = hero.querySelector('[data-hero-next]');
        if (prev) {
            prev.addEventListener('click', function () {
                show(index - 1);
                reset();
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                show(index + 1);
                reset();
            });
        }
        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                show(i);
                reset();
            });
        });
        show(0);
        start();
    }

    var navToggle = document.querySelector('[data-nav-toggle]');
    var mobilePanel = document.querySelector('[data-mobile-panel]');
    if (navToggle && mobilePanel) {
        navToggle.addEventListener('click', function () {
            mobilePanel.classList.toggle('is-open');
        });
    }

    var panel = document.getElementById('searchPanel');
    var resultsBox = document.getElementById('searchResults');
    var closeSearch = document.querySelector('[data-search-close]');
    var openPanel = function () {
        if (panel) {
            panel.hidden = false;
        }
    };
    var closePanel = function () {
        if (panel) {
            panel.hidden = true;
        }
    };
    var imagePrefix = document.body.getAttribute('data-image-prefix') || './';
    var renderResults = function (query) {
        if (!resultsBox) {
            return;
        }
        var q = String(query || '').trim().toLowerCase();
        var data = window.SITE_SEARCH_INDEX || [];
        var list = data.filter(function (item) {
            if (!q) {
                return false;
            }
            return item.search.indexOf(q) !== -1;
        }).slice(0, 48);
        if (!list.length) {
            resultsBox.innerHTML = '<p class="section-desc">没有找到匹配内容，可尝试更换关键词。</p>';
            return;
        }
        resultsBox.innerHTML = list.map(function (item) {
            return '<a class="search-result" href="' + item.href + '">' +
                '<img src="' + imagePrefix + item.image + '.jpg" alt="' + escapeHtml(item.title) + '">' +
                '<span>' +
                '<h3>' + escapeHtml(item.title) + '</h3>' +
                '<p>' + escapeHtml(item.year + ' · ' + item.region + ' · ' + item.genre) + '</p>' +
                '</span>' +
                '</a>';
        }).join('');
    };
    var escapeHtml = function (value) {
        return String(value || '').replace(/[&<>"']/g, function (ch) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[ch];
        });
    };
    Array.prototype.slice.call(document.querySelectorAll('[data-site-search]')).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var input = form.querySelector('input');
            var value = input ? input.value : '';
            renderResults(value);
            openPanel();
        });
    });
    if (closeSearch) {
        closeSearch.addEventListener('click', closePanel);
    }
    if (panel) {
        panel.addEventListener('click', function (event) {
            if (event.target === panel) {
                closePanel();
            }
        });
    }
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closePanel();
        }
    });

    Array.prototype.slice.call(document.querySelectorAll('[data-filter-scope]')).forEach(function (scope) {
        var keyword = scope.querySelector('[data-filter-keyword]');
        var year = scope.querySelector('[data-filter-year]');
        var region = scope.querySelector('[data-filter-region]');
        var genre = scope.querySelector('[data-filter-genre]');
        var cards = Array.prototype.slice.call(scope.querySelectorAll('.movie-card'));
        var apply = function () {
            var k = keyword ? keyword.value.trim().toLowerCase() : '';
            var y = year ? year.value : '';
            var r = region ? region.value : '';
            var g = genre ? genre.value : '';
            cards.forEach(function (card) {
                var ok = true;
                if (k) {
                    ok = ok && card.getAttribute('data-search').toLowerCase().indexOf(k) !== -1;
                }
                if (y) {
                    ok = ok && card.getAttribute('data-year') === y;
                }
                if (r) {
                    ok = ok && card.getAttribute('data-region') === r;
                }
                if (g) {
                    ok = ok && card.getAttribute('data-genre').indexOf(g) !== -1;
                }
                card.hidden = !ok;
            });
        };
        [keyword, year, region, genre].forEach(function (el) {
            if (el) {
                el.addEventListener('input', apply);
                el.addEventListener('change', apply);
            }
        });
    });

    Array.prototype.slice.call(document.querySelectorAll('[data-player]')).forEach(function (wrap) {
        var video = wrap.querySelector('video');
        var button = wrap.querySelector('[data-play-button]');
        var src = wrap.getAttribute('data-video-url');
        var loaded = false;
        var hls = null;
        var load = function () {
            if (loaded || !video || !src) {
                return;
            }
            loaded = true;
            if (window.Hls && window.Hls.isSupported()) {
                hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hls.loadSource(src);
                hls.attachMedia(video);
            } else {
                video.src = src;
            }
        };
        var play = function () {
            load();
            if (video) {
                var attempt = video.play();
                if (attempt && attempt.catch) {
                    attempt.catch(function () {});
                }
            }
        };
        if (button) {
            button.addEventListener('click', play);
        }
        if (video) {
            video.addEventListener('play', function () {
                wrap.classList.add('is-playing');
            });
            video.addEventListener('pause', function () {
                if (!video.ended) {
                    wrap.classList.remove('is-playing');
                }
            });
            video.addEventListener('ended', function () {
                wrap.classList.remove('is-playing');
            });
        }
        window.addEventListener('pagehide', function () {
            if (hls && hls.destroy) {
                hls.destroy();
            }
        });
    });
})();
