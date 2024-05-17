const myVideo = document.querySelector("#my-video");
console.log(myVideo);

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

//--------------------------------------------------------------
// the following code block illustrates progress bar

myVideo.addEventListener ("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector ("#progress-bar-fill")

function updateProgressBar(){
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    // console.log (progress);
    progressBarFill.style.width = progress + "%";
}
//---------------------------------------------------------------
//the following code will make the video go fullscreen

const fullscreenButton = document.querySelector("#fullscreen-button");
fullscreenButton.addEventListener("click", goFullScreen);

function goFullScreen(){
    if (!document.fullscreenElement){
        myVideo.requestFullscreen();
    }
    else{
        document.exitFullscreen;
    }
}

//------------------------------------------------------------------
// introducing timestamp

const step1Button = document.querySelector("#step-1-btn");
step1Button.addEventListener("click", gotoStep1);

function gotoStep1(){
    myVideo.currentTime = 16.0;
}

const step2Button = document.querySelector("#step-2-btn");
step2Button.addEventListener("click", gotoStep2);

function gotoStep2(){
    myVideo.currentTime = 30.0;
}

//----------------------------------------------------------------------
//volume up n down

const volumeDownButton = document.querySelector("#decrease-volume-btn");
volumeDownButton.addEventListener("click", decreaseVolume);

function decreaseVolume(){
    if (myVideo.volume > 0.11){    
        myVideo.volume -= 0.1;
    }
}


const volumeUpButton = document.querySelector("#increase-volume-btn");
volumeUpButton.addEventListener("click", increaseVolume);

function increaseVolume(){
    if (myVideo.volume < 0.9){    
        myVideo.volume += 0.1;
    }
}

myVideo.addEventListener("volumechange", updateVolume);
function updateVolume(){
    console.log( "current volume is",myVideo.volume);
}

//---------------------------------------------------------------------------

//creating an array list for the videos

