document.write('<script src="canvas.js"></script>');
var waver = document.getElementById("waver");

// var grd = ctx.createLinearGradient(0, 0, 100, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// ctx.fillStyle = grd;
// ctx.fillRect(0, 0, 200, 100);

var mplayer = document.getElementById("musicPlayer");

function playMusic() {
    initWaver();
    mplayer.play();
}

function pauseMusic() {
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

function playerFast() {
    mplayer.playbackRate = 2.0;
}

function playSlow() {
    mplayer.playbackRate = 0.5;
}

function initWaver() {
    waver.width = mplayer.duration * 50;
    addWave();
}