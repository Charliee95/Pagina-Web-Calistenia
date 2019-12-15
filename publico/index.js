var video = document.getElementById("video");

function playPause() {
    if (video.paused)
        video.play();
    else
        video.pause();
}

function reload() {
    video.load();
}

function makeLarge() {
    video.width = 1000;
}

function makeSmall() {
    video.width = 250;
}

function makeNormal() {
    video.width = 500;
}

var video = document.getElementById('video');
var boton = document.getElementById('boton');

function playVideo() {
    video.play();
    boton.style.display = 'none';
}
video.addEventListener('ended', function() {
    boton.style.display = 'block';
})