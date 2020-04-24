// document.write('<script src="script.js"></script>');
function Line(x, y1, y2, color) {
    this.x = x;
    this.y1 = y1;
    this.y2 = y2;
    this.color = color;
}

var lines = [];
var mouseLine;
var timeLine;

var canvas;
var context;

window.onload = function () {
    canvas = document.getElementById("waver");
    context = canvas.getContext("2d");
    canvas.onmousedown = canvasClick;

    this.document.addEventListener("keydown", this.buttonEvent);
};

function buttonEvent(e) {
    if (e.keyCode == 39) {
        playForward();
    }
    if (e.keyCode == 37) {
        playBackward();
    }
    if (e.keyCode == 32) {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    }
    if (e.keyCode == 83) {
        stopMusic();
    }
    if (e.keyCode == 190) {
        playFast();
    }
    if (e.keyCode == 188) {
        playSlow();
    }
}


function addWave() {
    for (var i = 0; i < canvas.width / 5; i++) {
        context.beginPath();
        context.strokeStyle = "white";
        var x = i * 5;
        context.moveTo(x, i / canvas.height * 50);
        context.lineTo(x, 0);
        context.stroke();
        var wave = new Line(x, i / canvas.height * 50, 0, "white");
        lines.push(wave);
    }
}

function drawCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < lines.length - 1; i++) {
        var line = lines[i];

        context.beginPath();
        context.strokeStyle = line.color;
        context.lineWidth = 1;
        context.globalAlpha = 0.85;
        context.moveTo(line.x, line.y1);
        context.lineTo(line.x, line.y2);
        context.closePath();
        context.stroke();

    }
}



function canvasClick(e) {
    // var clickX = e.clientX - canvas.offsetLeft;
    var clickX = e.offsetX;
    drawCanvas();
    addMouseLine(clickX);
    getTimePoint();
}

function dragLine(e) {
    // 判断圆圈是否开始拖拽
    if (isDragging == true) {

        // 取得鼠标位置
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        // 将圆圈移动到鼠标位置
        timeLine.x = x;
        timeLine.y = y;

        // 更新画布
        drawCanvas();
    }
}

function addMouseLine(clickX) {

    // var test = document.getElementById("test");
    // test.innerHTML = " x: " + clickX + " y: " + my;

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.moveTo(clickX, 0);
    context.lineTo(clickX, canvas.height);
    context.closePath();

    context.stroke();
}

function timeLine() {

}