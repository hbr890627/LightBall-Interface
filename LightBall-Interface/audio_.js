function ShowVoice() {
	window.wavesurfer = WaveSurfer.create({
		container: '#waveform',
		waveColor: 'white',
		progressColor: 'purple',
		splitChannels: true,
		backend: 'MediaElement'
	});

	wavesurfer.load('sugar.mp3')
	wavesurfer.on('ready', function () {
		// wavesurfer.playPause();
	});
}

function btnPlay() {
	wavesurfer.playPause();
}
function btnStop() {
	wavesurfer.stop();
}
function skip_backward_10() {
	wavesurfer.skip(-10);
}
function skip_forward_10() {
	wavesurfer.skip(10);
}
function mute() {
	wavesurfer.toggleMute();
}

var zoom_value = 0;
function zoom_in() {
	if (zoom_value < 200) {
		zoom_value += 5;
	} else {
		zoom_value = 200;
	}
	wavesurfer.zoom(zoom_value);
}

function zoom_out() {
	if (zoom_value > 0) {
		zoom_value -= 5;
	} else {
		zoom_value = 0;
	}
	wavesurfer.zoom(zoom_value);
}

// setInterval(function () {
// 	document.getElementById("time").innerHTML = "Current Time: " + (wavesurfer.getCurrentTime()).toFixed(3) + " s / " + (wavesurfer.getDuration()).toFixed(3) + " s";
// }, 20);


