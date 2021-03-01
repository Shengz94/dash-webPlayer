import {videoPlayer} from 'dashvideots';

const player = new videoPlayer();
/*
    https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd
    https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd
    https://dash.akamaized.net/akamai/nba/running_timecode_1509kbps_dash.mpd
*/
const sources =[
"https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
"https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd",
"https://dash.akamaized.net/akamai/nba/running_timecode_1509kbps_dash.mpd"
];

function init() {
    player.setContainer("vid");
    player.open("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd");
    player.play();

    document.querySelector("video")?.setAttribute("style", "width: 640px");
}


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("buttons");

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

    play.addEventListener("click", function (){
        player.play();
    });
    pause.addEventListener("click", function (){
        player.pause();
    });
    stop.addEventListener("click", function (){
        player.stop();
    });
    mute.addEventListener("click", function (){
        player.toggleMute();
    });
    volumeUp.addEventListener("click", function (){
        player.turnVolume("up", 0.1);
    });
    volumeDown.addEventListener("click", function (){
        player.turnVolume("down", 0.1);
    });
    destroy.addEventListener("click", function (){
        player.destroy();
    });
    seek.addEventListener("click", function (){
        player.seek(630);
    });
    newVideo.addEventListener("click", function (){
        let source = sources[Math.round((Math.random() * 100)) % 3];
        console.log(Math.round((Math.random() * 100)) % 3);
        console.log(sources);
        console.log(source);
        player.open(source);
    });

    if(container){
        container.appendChild(play);
        container.appendChild(pause);
        container.appendChild(stop);
        container.appendChild(mute);
        container.appendChild(volumeUp);
        container.appendChild(volumeDown);
        container.appendChild(destroy);
        container.appendChild(seek);
        container.appendChild(newVideo);
    }

    init();
});