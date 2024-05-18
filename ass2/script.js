
// this is the function to switch between videos

const myVideo = document.querySelector("#my-video");

// making an array for the video list
const videoList = [
  { name: "Beautiful Day - Purrple Cat", link: "/ass2/video/Grass.mp4" },
  { name: "Dark Forest - Purrple Cat", link: "/ass2/video/Water.mp4" },
  { name: "Double Johnie Blue", link: "/ass2/video/Fire.mp4"},
];

// removing the controls on the video so that it won't crash with the customed controls
myVideo.removeAttribute("controls");

//FIRST VIDEO
const firstVideoButton = document.querySelector("#first-video-btn");
// Event listener to play the first video
firstVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(0);

//changing the color of the button to indicate which video we are on
  firstVideoButton.style.backgroundColor = "#53a352";
  secondVideoButton.style.backgroundColor = "#000000";
  thirdVideoButton.style.backgroundColor = "#000000";
});

// SECOND VIDEO
const secondVideoButton = document.querySelector("#second-video-btn");
// Event listener to play the second video
secondVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(1);

  firstVideoButton.style.backgroundColor = "#000000";
  secondVideoButton.style.backgroundColor = "#3d82db";
  thirdVideoButton.style.backgroundColor = "#000000";
});

// THIRD VIDEO
const thirdVideoButton = document.querySelector("#third-video-btn");
// Event listener to play the third video
thirdVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(2);
  
  firstVideoButton.style.backgroundColor = "#000000";
  secondVideoButton.style.backgroundColor = "#000000";
  thirdVideoButton.style.backgroundColor = "#fa3e00";
});

const videoName = document.querySelector("#video-name");

// getting the video based on their number in the list
function playVideo(no) {
  myVideo.src = videoList[no].link;

  // getting the video name so that it can display in the title
  videoName.textContent = videoList[no].name;
}

//-----------------------------------------------------------
// this section is the event listener for playing and pausing the video

const playPauseButton = document.querySelector("#play-pause-btn");

playPauseButton.addEventListener("click", playPauseVideo);

const playPauseImg = document.querySelector("#play-pause-img");

// if the video is paused, continue playing it
function playPauseVideo(){
    if (myVideo.paused || myVideo.ended){
        playPauseImg.src = "/ass2/img/play.png"
        myVideo.play();
    }

    // if the video is playing, pause it
    else{
        playPauseImg.src = "/ass2/img/pause.png"
        myVideo.pause();
    }
}

//----------------------------------------------------------------------
// this section is the event listener for letting the video loop

const loopButton = document.querySelector("#loop-btn");

loopButton.addEventListener("click", loopVideo);

// if the loop is not enable, enable it and change the button to green
// to indicate the change
function loopVideo (){
  if (!myVideo.loop){
    myVideo.loop = true;
    loopButton.style.backgroundColor = "#53a352";
  }

  // if the loop is enable, unenable it
  else {
    myVideo.loop = false;
    loopButton.style.backgroundColor = "#000000";
  }
}
//----------------------------------------------------------------------
// this section is for muting and unmuting the audio

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
muteUnmuteButton.addEventListener("click",toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img")

// if the video is muted, unmute it
function toggleSound(){
    if (myVideo.muted){
        muteUnmuteButton.style.backgroundColor = "#000000"
        myVideo.muted = false;
    }

    // if the video is unmuted, muted it and change the colour to red to indicate the change
    else{
        muteUnmuteButton.style.backgroundColor = "#d55555"
        myVideo.muted = true;
    }
}

//-------------------------------------------------------------------------------
// this section is for increasing and decreasing the volume

const volumeDownButton = document.querySelector("#decrease-volume-btn");
volumeDownButton.addEventListener("click", decreaseVolume);

// the function decrease the volume but not letting it go lower than 0.1
function decreaseVolume(){
    if (myVideo.volume > 0.1){    
        myVideo.volume -= 0.1;
    }
}

const volumeUpButton = document.querySelector("#increase-volume-btn");

volumeUpButton.addEventListener("click", increaseVolume);

// the function increase the volume but not letting it go higher than 0.9
function increaseVolume(){
    if (myVideo.volume < 0.9){    
        myVideo.volume += 0.1;
    }
}

// changing the image of the volume indicating the change based on the volume of the video
myVideo.addEventListener("volumechange", updateVolume);

function updateVolume(){
  // var roundedVolume = Math.round(myVideo.volume * 100) / 100; // Round to two decimal places

  if (myVideo.volume < 0.1) {
    muteUnmuteImg.src = "/ass2/img/muted.png"
  }
  else if (myVideo.volume < 0.3 ){
    muteUnmuteImg.src = "/ass2/img/vol-low.png"
  }
  else if (myVideo.volume < 0.6 ){
    muteUnmuteImg.src = "/ass2/img/vol-mid.png"
  }
  else if (  myVideo.volume < 0.8 ){
    muteUnmuteImg.src = "/ass2/img/vol-high.png"
  }
  else if (myVideo.volume > 0.8 ){
    muteUnmuteImg.src = "/ass2/img/unmute.png"
  }

  console.log( "current volume is",myVideo.volume);
}

//-------------------------------------------------------------------------------
// add progress bar for the video to indicate the progress of the video

myVideo.addEventListener ("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector ("#progress-bar-fill")

function updateProgressBar(){
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    // console.log (progress);
    progressBarFill.style.width = progress + "%";
}