"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashvideots_1 = require("dashvideots");
const player = new dashvideots_1.videoPlayer();
const sources = [
    "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
    "https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd",
    "https://dash.akamaized.net/akamai/nba/running_timecode_1509kbps_dash.mpd"
];
function init() {
    player.setContainer("vid");
    player.open("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd");
    player.play();
}
document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    let play = document.createElement("button");
    let pause = document.createElement("button");
    let stop = document.createElement("button");
    let mute = document.createElement("button");
    let volumeUp = document.createElement("button");
    let volumeDown = document.createElement("button");
    let destroy = document.createElement("button");
    let seek = document.createElement("button");
    let newVideo = document.createElement("button");
    play.innerHTML = "play";
    pause.innerHTML = "pause";
    stop.innerHTML = "stop";
    mute.innerHTML = "mute";
    volumeUp.innerHTML = "vol+";
    volumeDown.innerHTML = "vol-";
    destroy.innerHTML = "destroy";
    seek.innerHTML = "seek";
    newVideo.innerHTML = "New source";
    play.addEventListener("click", function () {
        player.play();
    });
    pause.addEventListener("click", function () {
        player.pause();
    });
    stop.addEventListener("click", function () {
        player.stop();
    });
    mute.addEventListener("click", function () {
        player.toggleMute();
    });
    volumeUp.addEventListener("click", function () {
        player.turnVolume("up", 10);
    });
    volumeDown.addEventListener("click", function () {
        player.turnVolume("down", 10);
    });
    destroy.addEventListener("click", function () {
        player.destroy();
    });
    seek.addEventListener("click", function () {
        player.seek(630);
    });
    newVideo.addEventListener("click", function () {
        player.open(sources[Math.random() % 3]);
    });
    if (body) {
        body.appendChild(play);
        body.appendChild(pause);
        body.appendChild(stop);
        body.appendChild(mute);
        body.appendChild(volumeUp);
        body.appendChild(volumeDown);
        body.appendChild(destroy);
        body.appendChild(seek);
        body.appendChild(newVideo);
    }
    init();
});
