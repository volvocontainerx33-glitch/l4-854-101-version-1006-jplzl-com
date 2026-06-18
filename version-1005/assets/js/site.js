(function () {
    const menuButton = document.querySelector('[data-menu-button]');
    const mobileNav = document.querySelector('[data-mobile-nav]');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });
    }

    const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(document.querySelectorAll('[data-hero-dot]'));
    let activeSlide = 0;

    function showSlide(index) {
        if (!slides.length) {
            return;
        }
        activeSlide = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle('active', slideIndex === activeSlide);
        });
        dots.forEach(function (dot, dotIndex) {
            dot.classList.toggle('active', dotIndex === activeSlide);
        });
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            showSlide(index);
        });
    });

    if (slides.length > 1) {
        setInterval(function () {
            showSlide(activeSlide + 1);
        }, 5600);
    }

    const filterForm = document.querySelector('[data-filter-form]');
    const cards = Array.from(document.querySelectorAll('[data-movie-card]'));
    const empty = document.querySelector('[data-empty]');

    function normal(value) {
        return String(value || '').toLowerCase().trim();
    }

    function applyFilters() {
        if (!filterForm || !cards.length) {
            return;
        }

        const input = filterForm.querySelector('[data-search-input]');
        const typeSelect = filterForm.querySelector('[data-type-filter]');
        const yearSelect = filterForm.querySelector('[data-year-filter]');
        const regionSelect = filterForm.querySelector('[data-region-filter]');
        const query = normal(input ? input.value : '');
        const typeValue = normal(typeSelect ? typeSelect.value : '');
        const yearValue = normal(yearSelect ? yearSelect.value : '');
        const regionValue = normal(regionSelect ? regionSelect.value : '');
        let visibleCount = 0;

        cards.forEach(function (card) {
            const text = normal([
                card.dataset.title,
                card.dataset.keywords,
                card.textContent
            ].join(' '));
            const matchedQuery = !query || text.indexOf(query) !== -1;
            const matchedType = !typeValue || normal(card.dataset.type) === typeValue;
            const matchedYear = !yearValue || normal(card.dataset.year) === yearValue;
            const matchedRegion = !regionValue || normal(card.dataset.region) === regionValue;
            const matched = matchedQuery && matchedType && matchedYear && matchedRegion;

            card.style.display = matched ? '' : 'none';
            if (matched) {
                visibleCount += 1;
            }
        });

        if (empty) {
            empty.classList.toggle('show', visibleCount === 0);
        }
    }

    if (filterForm) {
        filterForm.addEventListener('input', applyFilters);
        filterForm.addEventListener('change', applyFilters);
        applyFilters();
    }
}());
