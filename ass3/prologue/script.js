// the puzzle tutorial is from https://www.youtube.com/watch?v=S6GNtMGNcUE&t=768s
// thank you Kenny you saved my life



//--------------------------------------------------
//mute and unmute background audio

// const audio = document.querySelector("#audio")
// const muteUnmuteButton = document.querySelector("#mute-Btn");
// muteUnmuteButton.addEventListener("click",toggleSound);

const muteUnmuteImg = document.querySelector("#mute-img");

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

//------------------------------------------------------

const names = ["Detective", "Sheriff"]


//------------------------------------------------------
//textbox scrip from https://codepen.io/jaflo/pen/DgWWYw

document.querySelector(".namebox").textContent = names[0];

var texts = [
    ["Days of finding them really exhauted me. Mind lending me a hand? \n(click on the box to continue)"],
    ["You see the puzzle pieces on the right? Drag them in the box in the middle to complete the investigation. If you feel like something is missing, how about scrolling?"],
    ["That 'HINT' button up there, that is for when you want to seek for help. Don't use it too much, it will taint your skill."],
    ["See the volume button? If you prefer working in silence, go ahead and turn the music off."],
    ["And when you are fed up with all of this, resign and leave. But it's not guaranteed that you will keep the process."],
    ["Go find them now, they don't like to wait."]
];
var i = 0, speed = 30, pressed = false, keydowned = false, running = false;

type(texts[i] + "");

document.querySelector(".textbox").addEventListener("click", function(e) {
    document.querySelector("#detective").classList.toggle("bounce");

    if (i < texts.length) {
        type(texts[i] + "");
    } else {
        document.querySelector(".textbox").classList.add("hide");
        document.querySelector(".namebox").classList.add("hide");

    }

});



function type(txt) {
    if (!running) {
        running = true;
        i++;
        var timeOut,
            txtLen = txt.length,
            char = 0;


        document.querySelector(".textbox").textContent = ""; // Use textContent for plain text
        (function typeIt() {
            timeOut = setTimeout(function() {
                char++;
                var type = txt.substring(0, char);
                document.querySelector(".textbox").innerHTML = type.replace("\n", "<br />");
                typeIt();
                if (char === txtLen) {
                    clearTimeout(timeOut);
                    running = false;
                    if (i < texts.length) {
                        document.querySelector(".textbox").insertAdjacentHTML('beforebegin', '<i></i>'); // Insert before the.box element
                    }
                }
            }, speed);
        })();
    }
    
}

//--------------------------------------------------------------------------------------------
//the same thing with the text dialogue above, but I make it so this only appear when the game is completed

function victimAppear(){

var texts= [
    ["De-tect-ive, than-k yoo f-or-or fi-ndin-gg my he-ad. My f-am-i-ily is g-oing to be pl-eased. Thank-you."]
];
var i = 0, speed = 90, pressed = false, keydowned = false, running = false;

type(texts[i] + "");

document.querySelector(".textbox").addEventListener("click", function(e) {
    document.querySelector("#detective").classList.toggle("bounce");

    if (i < texts.length) {
        type(texts[i] + "");
    } else {
        document.querySelector(".textbox").classList.add("hide");
        const endingBtn = document.querySelector("#end");
        endingBtn.classList.add("show")
    }

});

    
function type(txt) {
    if (!running) {
        running = true;
        i++;
        var timeOut,
            txtLen = txt.length,
            char = 0;
        document.querySelector(".textbox").textContent = ""; // Use textContent for plain text
        (function typeIt() {
            timeOut = setTimeout(function() {
                char++;
                var type = txt.substring(0, char);
                document.querySelector(".textbox").innerHTML = type.replace("\n", "<br />");
                typeIt();
                if (char === txtLen) {
                    clearTimeout(timeOut);
                    running = false;
                    if (i < texts.length) {
                        document.querySelector(".textbox").insertAdjacentHTML('beforebegin', '<i></i>'); // Insert before the.box element
                    }
                }
            }, speed);
        })();
    }
}
    type(texts[i] + "", ".textbox");
}

//----------------------------------------------------------------------
// creating a function to trigger the jumpscare

function triggerBlink() {
    const element = document.querySelector(".jumpscare");
    element.classList.add("once");

    // Removing the class after the animation ends 
    element.addEventListener('animationend', () => {
        element.classList.remove("once");
    });
}