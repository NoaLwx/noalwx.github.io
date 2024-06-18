    const bg = document.querySelector('.background');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    bg.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      
      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });

//------------------------------------------------------------
//mute and unmute background audio

const audio = document.querySelector("#audio")
const muteUnmuteButton = document.querySelector("#mute");
muteUnmuteButton.addEventListener("click",toggleSound);

const muteUnmuteImg = document.querySelector("#mute-img")

// if the video is muted, unmute it
function toggleSound(){
    if (audio.muted){
      muteUnmuteImg.src = "/ass2/img/unmute.png"
        audio.muted = false;
    }

    // if the video is unmuted, muted it and change the colour to red to indicate the change
    else{
    muteUnmuteImg.src = "/ass2/img/muted.png"
        audio.muted = true;
    }
}
