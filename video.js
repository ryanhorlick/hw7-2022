var video;


// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	console.log(video);
	video.loop = false;
	video.autoplay = false;

});

// Play Button 
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	console.log("It's working!");
});

// Pause Button
document.querySelector('#pause').addEventListener("click", function() {
	video.pause();
});

// Slow Down 
document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("Video Speed = " + video.playbackRate);

});

// Speed Up
document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("Video Speed = " + video.playbackRate);
});

// Skip Ahead -- ISSUE WITH PAUSING
document.querySelector('#skip').addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.play();
	}
	console.log("Time: " + video.currentTime);
})

// Mute
document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';

	} else {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
	}

});

// Volume Slider
document.querySelector('#slider').addEventListener("click", function() {
	video.volume = this.value/100
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'

});

// Styled 
document.querySelector('#vintage').addEventListener("click", function() {
	video.classList.add('oldSchool');
});

// Original
document.querySelector('#orig').addEventListener("click", function() {
	video.classList.remove('oldSchool');
});