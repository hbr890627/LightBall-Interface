document.write('<script src="canvas.js"></script>');

var waver = document.getElementById("waver");
var timepointer = document.getElementById("time-point");

// window.onload = function () {
//     this.document.addEventListener("keydown", function (e) {
//         alert(e.keyCode);
//     });
// };

var mplayer = document.getElementById("musicPlayer");
var isPlaying = false;

function playMusic() {
    initWaver();
    isPlaying = true;
    mplayer.play();
}

function pauseMusic() {
    isPlaying = false;
    mplayer.pause();
}

function stopMusic() {
    mplayer.pause();
    mplayer.currentTime = 0;
}

function playForward() {
    mplayer.currentTime += 5;
}

function playBackward() {
    mplayer.currentTime -= 5;
}

function playFast() {
    mplayer.playbackRate += 0.5;
}

function playSlow() {
    mplayer.playbackRate -= 0.5;
}

function getTimePoint() {
    var timep = mplayer.currentTime;
    document.getElementById("keypoint").innerHTML = timep;
}

function initWaver() {
    waver.width = mplayer.duration * 50;
    timepointer.width = waver.width;
    addWave();
    initTimePointer();
}

function initTimePointer() {
    var context = timepointer.getContext("2d");
    context.beginPath();
    context.strokeStyle = "white";
    context.moveTo(-10, 0);
    context.lineTo(10, 0);
    context.lineTo(0, 10);
    context.lineTo(-10, 0);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.stroke();
}

function updateTimePointer(time) {
    var context = timepointer.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.strokeStyle = "white";

    var centerpos = time * 50;

    context.moveTo(centerpos - 10, 0);
    context.lineTo(centerpos + 10, 0);
    context.lineTo(centerpos, 10);
    context.lineTo(centerpos - 10, 0);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.stroke();
}

window.onload = setInterval("displayTime()", 1);

function displayTime() {
    var timer = document.getElementById("time");

    var second = mplayer.currentTime.toFixed(2);

    timer.innerHTML = second;

    updateTimePointer(second);

}