(function () {
  const input = document.querySelector('[data-search-panel] input[name="q"]');
  const results = document.getElementById('searchResults');
  const params = new URLSearchParams(window.location.search);
  const queryFromUrl = params.get('q') || '';
  const movies = Array.isArray(window.SEARCH_MOVIES) ? window.SEARCH_MOVIES : [];

  if (!input || !results) {
    return;
  }

  input.value = queryFromUrl;

  function createCard(movie) {
    const tags = (movie.tags || []).slice(0, 3).map(function (tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');

    return '<article class="movie-card">' +
      '<a class="poster" href="' + movie.url + '">' +
      '<img src="' + movie.image + '" alt="' + escapeHtml(movie.title) + '">' +
      '<span class="score-badge">' + escapeHtml(movie.score) + '</span>' +
      '</a>' +
      '<div class="card-body">' +
      '<div class="card-meta"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.category) + '</span></div>' +
      '<h3><a href="' + movie.url + '">' + escapeHtml(movie.title) + '</a></h3>' +
      '<p>' + escapeHtml(movie.desc) + '</p>' +
      '<div class="tag-row">' + tags + '</div>' +
      '</div>' +
      '</article>';
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function render() {
    const query = input.value.trim().toLowerCase();
    let list = movies;

    if (query) {
      list = movies.filter(function (movie) {
        return movie.text.toLowerCase().indexOf(query) !== -1;
      });
    } else {
      list = movies.slice().sort(function (a, b) {
        return Number(b.score) - Number(a.score);
      }).slice(0, 80);
    }

    results.innerHTML = list.slice(0, 180).map(createCard).join('');
  }

  input.addEventListener('input', render);
  render();
})();
