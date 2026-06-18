window.MoviePlayer = (function () {
    var sessions = {};

    function start(video, shell, streamUrl) {
        if (!video || !streamUrl) {
            return;
        }
        if (!video.getAttribute('data-ready')) {
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = streamUrl;
            } else if (window.Hls && window.Hls.isSupported()) {
                var hls = new Hls({ enableWorker: true });
                hls.loadSource(streamUrl);
                hls.attachMedia(video);
                sessions[video.id] = hls;
            } else {
                video.src = streamUrl;
            }
            video.setAttribute('data-ready', '1');
        }
        video.controls = true;
        if (shell) {
            shell.classList.add('is-playing');
        }
        var attempt = video.play();
        if (attempt && attempt.catch) {
            attempt.catch(function () {});
        }
    }

    function init(videoId, buttonId, overlayId, streamUrl) {
        var video = document.getElementById(videoId);
        var button = document.getElementById(buttonId);
        var overlay = document.getElementById(overlayId);
        var shell = video ? video.closest('.player-shell') : null;
        var begin = function (event) {
            if (event) {
                event.preventDefault();
            }
            start(video, shell, streamUrl);
        };
        if (button) {
            button.addEventListener('click', begin);
        }
        if (overlay) {
            overlay.addEventListener('click', begin);
        }
        if (video) {
            video.addEventListener('click', function () {
                if (!video.getAttribute('data-ready')) {
                    start(video, shell, streamUrl);
                    return;
                }
                if (video.paused) {
                    video.play().catch(function () {});
                } else {
                    video.pause();
                }
            });
        }
    }

    return {
        init: init,
        sessions: sessions
    };
})();
