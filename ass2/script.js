// this is the function to switch between videos

const myVideo = document.querySelector("#my-video");

const videoList = [
  { name: "Grass", link: "/ass2/video/Grass.mp4" },
  { name: "Water", link: "/ass2/video/Water.mp4" },
  { name: "Fire", link: "/ass2/video/Fire.mp4"},
];
myVideo.removeAttribute("controls");


const firstVideoButton = document.querySelector("#first-video-btn");
// Event listener to play the first video
firstVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(0);

  firstVideoButton.style.backgroundColor = "#53a352";
  secondVideoButton.style.backgroundColor = "#000000";
  thirdVideoButton.style.backgroundColor = "#000000";

});

const secondVideoButton = document.querySelector("#second-video-btn");
// Event listener to play the first video
secondVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(1);

  firstVideoButton.style.backgroundColor = "#000000";
  secondVideoButton.style.backgroundColor = "#3d82db";
  thirdVideoButton.style.backgroundColor = "#000000";

});

const thirdVideoButton = document.querySelector("#third-video-btn");
// Event listener to play the first video
thirdVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(2);
  
  firstVideoButton.style.backgroundColor = "#000000";
  secondVideoButton.style.backgroundColor = "#000000";
  thirdVideoButton.style.backgroundColor = "#fa3e00";


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
        playPauseImg.src = "/ass2/img/play.png"
        myVideo.play();
    }
    else{
        playPauseImg.src = "/ass2/img/pause.png"
        myVideo.pause();
    }
}
// ------------------------------------------------------------------------------

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
muteUnmuteButton.addEventListener("click",toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img")

function toggleSound(){
    if (myVideo.muted){
        muteUnmuteImg.src = "/ass2/img/unmute.png"
        muteUnmuteButton.style.backgroundColor = "#000000"
        myVideo.muted = false;
    }
    else{
        muteUnmuteImg.src = "/ass2/img/mute.png"
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

