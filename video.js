let pause = videojs.players.video.pause;
videojs.players.video.pause = (e) => console.log(e);
videojs.players.video.play();

videojs.players.video.off('seeked');
videojs.players.video.muted(true);
videojs.players.video.duration();
videojs.players.video.play();
videojs.players.video.currentTime(videojs.players.video.duration() * 0.999);
// videojs.players.video.playbackRate(5);

videojs.players.video.muted(true);
setInterval(function() {
	if (0 < videojs.players.video.remainingTime())
		videojs.players.video.play();
}, 1000);