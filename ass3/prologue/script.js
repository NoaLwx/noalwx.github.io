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
    ["'Dear detective Harts, \n We need your help with a serial mutilation case, given your unique abilities. Sheriff John is waiting at the crime scene in Gateway Park and will provide you with further details.'"],
    ["Mutilation? What kind of sick bastard is this?"] ];
var i = 0, speed = 30, pressed = false, keydowned = false, running = false;

type(texts[i] + "");

document.querySelector(".textbox").addEventListener("click", function(e) {
    document.querySelector("#detective").classList.toggle("bounce");

    if (i < texts.length) {
        type(texts[i] + "");
    } else {
         arriveScene();
        // document.querySelector(".textbox").classList.add("hide");
        document.querySelector(".namebox").classList.toggle("hide");
        // console.log(document.querySelector(".namebox"));
    }});



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
    
};

//--------------------------------------------------------------------------------------------
//the same thing with the text dialogue above, but I make it so this only appear when the game is completed

function arriveScene(){
    document.querySelector(".namebox").textContent = names[1];

    const sheriffAva = document.querySelector("#avaright");
    sheriffAva.classList.add("show");

var texts= [
    ["Ah, detective. Nice to see you."],
    ["Well, actually, its not that nice at all…"],
    ["That aside, the victim we found missing her head. No other damage is being done to the body other than her head is missing."]];
    var i = 0, speed = 30, pressed = false, keydowned = false, running = false;

type(texts[i] + "");

document.querySelector(".namebox").classList.toggle("hide");

document.querySelector(".textbox").addEventListener("click", function(e) {
    document.querySelector("#detective").classList.toggle("bounce");


    if (i < texts.length) {
        type(texts[i] + "");
        console.log(document.querySelector(".namebox"));

    } else {
        document.querySelector(".textbox").classList.add("hide");
        document.querySelector(".namebox").classList.add("hide");
        console.log(document.querySelector(".namebox"));
        document.querySelector(".proceed").classList.toggle("show");
    }});

    
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
}};

//----------------------------------------------------------------------
// creating a function to trigger the jumpscare

// function triggerBlink() {
//     const element = document.querySelector(".jumpscare");
//     element.classList.add("once");

//     // Removing the class after the animation ends 
//     element.addEventListener('animationend', () => {
//         element.classList.remove("once");
//     });
// }