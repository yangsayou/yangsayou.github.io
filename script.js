var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

console.log("YouTube API Loaded!");

var player;
var currentVideoIndex = 0;

function init() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: videos[currentVideoIndex],
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    playNextVideo();
  }
}

function playNextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0;
  }
  player.loadVideoById(videos[currentVideoIndex]);
}

window.addEventListener("load", function() {
  init();
});

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", function() {
  playNextVideo();
});

