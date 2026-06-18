(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    var video = document.getElementById("video-player");
    var button = document.querySelector("[data-play-button]");

    if (!video || !button) {
      return;
    }

    var stream = video.getAttribute("data-stream");
    var loaded = false;

    function attachStream() {
      if (loaded || !stream) {
        return;
      }

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = stream;
        loaded = true;
        return;
      }

      if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(stream);
        hls.attachMedia(video);
        loaded = true;
        return;
      }

      video.src = stream;
      loaded = true;
    }

    function start() {
      attachStream();
      button.classList.add("hidden");
      var play = video.play();
      if (play && typeof play.catch === "function") {
        play.catch(function () {
          button.classList.remove("hidden");
        });
      }
    }

    button.addEventListener("click", start);

    video.addEventListener("click", function () {
      if (video.paused) {
        start();
      }
    });

    video.addEventListener("play", function () {
      button.classList.add("hidden");
    });

    video.addEventListener("pause", function () {
      if (!video.ended) {
        button.classList.remove("hidden");
      }
    });
  });
})();
