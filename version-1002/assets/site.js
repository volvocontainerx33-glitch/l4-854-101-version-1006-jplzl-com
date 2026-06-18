(function () {
    var navToggle = document.querySelector('[data-nav-toggle]');
    var mobilePanel = document.querySelector('[data-mobile-panel]');

    if (navToggle && mobilePanel) {
        navToggle.addEventListener('click', function () {
            mobilePanel.classList.toggle('is-open');
        });
    }

    var hero = document.querySelector('[data-hero]');
    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var current = 0;

        function showHero(index) {
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
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                showHero(Number(dot.getAttribute('data-hero-dot')) || 0);
            });
        });

        if (slides.length > 1) {
            setInterval(function () {
                showHero(current + 1);
            }, 5200);
        }
    }

    var localFilter = document.querySelector('[data-local-filter]');
    var cardList = document.querySelector('[data-card-list]');
    if (localFilter && cardList) {
        var cards = Array.prototype.slice.call(cardList.querySelectorAll('[data-card]'));
        localFilter.addEventListener('input', function () {
            var keyword = localFilter.value.trim().toLowerCase();
            cards.forEach(function (card) {
                var haystack = [
                    card.getAttribute('data-title'),
                    card.getAttribute('data-tags'),
                    card.getAttribute('data-genre')
                ].join(' ').toLowerCase();
                card.classList.toggle('is-filtered-out', keyword && haystack.indexOf(keyword) === -1);
            });
        });
    }

    if (document.body && document.body.getAttribute('data-page') === 'search') {
        var params = new URLSearchParams(window.location.search);
        var q = params.get('q') || '';
        var input = document.querySelector('[data-search-input]');
        var title = document.querySelector('[data-search-title]');
        var results = document.querySelector('[data-search-results]');

        if (input) {
            input.value = q;
        }

        function movieCard(movie) {
            var tags = (movie.tags || []).slice(0, 3).map(function (tag) {
                return '<span>' + escapeHtml(tag) + '</span>';
            }).join('');

            return [
                '<article class="movie-card">',
                '<a class="movie-poster" href="' + escapeHtml(movie.url) + '" aria-label="' + escapeHtml(movie.title) + '">',
                '<img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
                '<span class="movie-badge">' + escapeHtml(movie.category) + '</span>',
                '</a>',
                '<div class="movie-info">',
                '<div class="movie-meta-line"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.type) + '</span></div>',
                '<h3><a href="' + escapeHtml(movie.url) + '">' + escapeHtml(movie.title) + '</a></h3>',
                '<p>' + escapeHtml(movie.desc) + '</p>',
                '<div class="tag-row">' + tags + '</div>',
                '<div class="movie-stats"><span>' + escapeHtml(movie.heat) + ' 热度</span><a href="' + escapeHtml(movie.url) + '">立即观看</a></div>',
                '</div>',
                '</article>'
            ].join('');
        }

        function escapeHtml(value) {
            return String(value || '').replace(/[&<>"]/g, function (char) {
                return {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;'
                }[char];
            });
        }

        var list = window.SITE_MOVIES || [];
        var keyword = q.trim().toLowerCase();
        var matched = keyword ? list.filter(function (movie) {
            return [movie.title, movie.desc, movie.category, movie.genre, movie.region, movie.year, (movie.tags || []).join(' ')].join(' ').toLowerCase().indexOf(keyword) !== -1;
        }) : list.slice(0, 24);

        if (title) {
            title.textContent = keyword ? '搜索结果：' + q : '热门推荐';
        }

        if (results) {
            results.innerHTML = matched.slice(0, 120).map(movieCard).join('');
        }
    }
})();
