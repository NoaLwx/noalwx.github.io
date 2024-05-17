// this is the function to switch between videos

const myVideo = document.querySelector("#my-video");

const videoList = [
  { name: "Zenscape", link: "/week7/videos/zenscape.mp4" },
  { name: "Stardust", link: "/week7/videos/stardust.mp4" },
];
myVideo.removeAttribute("controls");


const firstVideoButton = document.querySelector("#first-video-btn");
// Event listener to play the first video
firstVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(0);
});

const secondVideoButton = document.querySelector("#second-video-btn");
// Event listener to play the first video
secondVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(1);
});

const videoName = document.querySelector("#video-name");


function playVideo(no) {
  myVideo.src = videoList[no].link;
  videoName.textContent = videoList[no].name;
}

//-----------------------------------------------------------
const playPauseButton = document.querySelector("#play-pause-btn");

playPauseButton.addEventListener("click", playPauseVideo);

const playPauseImg = document.querySelector("#play-pause-img");

// the following code block allow you to play and pause the video

function playPauseVideo(){
    if (myVideo.paused || myVideo.ended){
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png"
        myVideo.play();
    }
    else{
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"
        myVideo.pause();
    }
}
// ------------------------------------------------------------------------------

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
muteUnmuteButton.addEventListener("click",toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img")

function toggleSound(){
    if (myVideo.muted){
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png"
        muteUnmuteButton.style.backgroundColor = "#d5cea3"
        myVideo.muted = false;
    }
    else{
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"
        muteUnmuteButton.style.backgroundColor = "#d55555"
        myVideo.muted = true;
    }
}

//-------------------------------------------------------------------------------

myVideo.addEventListener ("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector ("#progress-bar-fill")

function updateProgressBar(){
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    // console.log (progress);
    progressBarFill.style.width = progress + "%";
}
