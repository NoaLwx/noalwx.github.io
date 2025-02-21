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

const names = ["Detective", "Sheriff"];


//------------------------------------------------------
//textbox scrip from https://codepen.io/jaflo/pen/DgWWYw

// document.querySelector(".namebox").textContent = names[0];
const namebox = document.querySelector(".namebox");


var texts = [
    {name: "Detective", text: "'Dear Detective Harts, \nWe need your help with a serial mutilation case, given your unique abilities. Sheriff John is waiting at the crime scene in Gateway Park and will provide you with further details.'"},
    {name: "Detective", text:"Mutilation? Is this the same killer who has been on the run for years?"},
    {name: "Detective", text:"If we can't catch them this time, I believe there is no other time."},
];
var i = 0, speed = 30, running = false, currentText = "", char = 0;

type(texts[i]);

document.querySelector(".textbox").addEventListener("click", function () {
    const textbox = document.querySelector(".textbox");

    if (running) {
        // If typing is running, complete the current text immediately
        textbox.innerHTML = currentText.replace(/\n/g, "<br />");
        char = currentText.length;
        running = false; // Mark as complete
    } else {
        // If not running, move to the next line
        if (i < texts.length) {
            type(texts[i]);
            document.querySelector("#detective").classList.toggle("bounce");
            console.log(texts[i]);
        } else {
            arriveScene();
            document.querySelector(".namebox").classList.toggle("hide");

        }
    }
});

function type(line) {
    currentText = line.text; // Store the current text being typed
    char = 0;
    running = true;

    namebox.textContent = line.name;

    const textbox = document.querySelector(".textbox");
    textbox.textContent = ""; // Clear the textbox

    (function typeIt() {
        if (char < currentText.length) {
            textbox.innerHTML = currentText.substring(0, char + 1).replace(/\n/g, "<br />");
            char++;
            setTimeout(typeIt, speed);
        } else {
            running = false; 
            i++; 
        }
    })();
};


//--------------------------------------------------------------------------------------------


function arriveScene(){
    const namebox = document.querySelector(".namebox");
    const textbox = document.querySelector(".textbox");
    // namebox.textContent = names[1];

    namebox.classList.toggle("hide");

    const sheriffAva = document.querySelector("#avaright");
    sheriffAva.classList.add("show");


var texts= [
    {name: "Sheriff", text: "Ah, detective. Nice to see you."},
    {name: "Detective", text: "Ok."},
    {name: "Sheriff", text:"Well, actually, its not that nice at all…"},
    {name: "Sheriff", text:"The victim we found missing her head. No other damage is being done to the body other than her head is missing.\n Please head this way, we need your help on this."},
];
var i = 0, speed = 40, currentText = "", running = false;

type(texts[i]);

document.querySelector(".textbox").addEventListener("click", function () {
    const textbox = document.querySelector(".textbox");

    if (running) {
        textbox.innerHTML = currentText.replace(/\n/g, "<br />");
        char = currentText.length;
        running = false; // Mark as complete
        i++;

        if (i < texts.length) {
            namebox.textContent = texts[i].name; 
        }


    } else {
        if (i < texts.length) {
            type(texts[i]);
            // console.log(texts[i]);
        } else {
            textbox.classList.add("hide");
            namebox.classList.add("hide");
            document.querySelector(".choices").classList.add("show");
        
        }
    }
});


    
    function type(line) {
        currentText = line.text; 
        char = 0;
        running = true;
    
        namebox.textContent = line.name;

        const textbox = document.querySelector(".textbox");
        textbox.textContent = ""; // Clear the textbox
    
        (function typeIt() {
            if (char < currentText.length) {
                textbox.innerHTML = currentText.substring(0, char + 1).replace(/\n/g, "<br />");
                char++;
                setTimeout(typeIt, speed);
            } else {
                running = false; 
                i++; 
            }
        })();
    };
}
//---------------------------------------------------------------------
const goingToScene = document.querySelector("#proceed");
goingToScene.addEventListener("click", function(e){
    seeScene();
});

const goingHome = document.querySelector("#leave");
goingHome.addEventListener("click", function(e){
    goHome();
});

//----------------------------------------------------------------------


function goHome() {
    const namebox = document.querySelector(".namebox");
    const textbox1 = document.querySelector(".textbox1");
    const choices = document.querySelector(".choices");

    choices.classList.remove("show");
    namebox.classList.remove("hide");
    textbox1.classList.add("show");


    var texts = [
        "Wait what? Are you serious?",
    ];

    let i = 0;
    let speed = 10;
    let running = false;

    namebox.textContent = names[1]; // Set the name
    type(texts[i] + "");       // Start typing


    document.querySelector(".textbox1").addEventListener("click", function () {
        const textbox1 = document.querySelector(".textbox1");
    
        if (running) {
            // If typing is running, complete the current text immediately
            textbox1.innerHTML = currentText.replace(/\n/g, "<br />");
            char = currentText.length;
            running = false; // Mark as complete
        } else {
            // If not running, move to the next line
            if (i < texts.length) {
                type(texts[i]);
                // document.querySelector("#detective").classList.toggle("bounce");
                console.log(texts[i]);
            } else {
                window.location.href = "/ass3/endings/ed1/index.html";
                textbox1.removeEventListener("click", handleClick1);
            }
        }
    });
    
    
        
        function type(txt) {
            currentText = txt; // Store the current text being typed
            char = 0;
            running = true;
        
            const textbox1 = document.querySelector(".textbox1");
            textbox1.textContent = ""; // Clear the textbox
        
            (function typeIt() {
                if (char < txt.length) {
                    textbox1.innerHTML = txt.substring(0, char + 1).replace(/\n/g, "<br />");
                    char++;
                    setTimeout(typeIt, speed);
                } else {
                    running = false; // Mark typing as complete
                    i++; // Move to the next text index
                }
            })();
        };
    }
  


//----------------------------------------------------------------------

function seeScene() {
    const namebox = document.querySelector(".namebox");
    const textbox1 = document.querySelector(".textbox1");
    const choices = document.querySelector(".choices");

    choices.classList.remove("show");
    namebox.classList.remove("hide");
    textbox1.classList.add("show");


    var texts = [
        "follow me?",
    ];

    let i = 0;
    let speed = 10;
    let running = false;

    namebox.textContent = names[1]; // Set the name
    type(texts[i] + "");       // Start typing


    document.querySelector(".textbox1").addEventListener("click", function () {
        const textbox1 = document.querySelector(".textbox1");
    
        if (running) {
            // If typing is running, complete the current text immediately
            textbox1.innerHTML = currentText.replace(/\n/g, "<br />");
            char = currentText.length;
            running = false; // Mark as complete
        } else {
            // If not running, move to the next line
            if (i < texts.length) {
                type(texts[i]);
                // document.querySelector("#detective").classList.toggle("bounce");
                console.log(texts[i]);
            } else {
                window.location.href = "/ass3/day1/index.html";
                textbox1.removeEventListener("click", handleClick1);
            }
        }
    });
    
    
        
        function type(txt) {
            currentText = txt; // Store the current text being typed
            char = 0;
            running = true;
        
            const textbox1 = document.querySelector(".textbox1");
            textbox1.textContent = ""; // Clear the textbox
        
            (function typeIt() {
                if (char < txt.length) {
                    textbox1.innerHTML = txt.substring(0, char + 1).replace(/\n/g, "<br />");
                    char++;
                    setTimeout(typeIt, speed);
                } else {
                    running = false; // Mark typing as complete
                    i++; // Move to the next text index
                }
            })();
        };
    }

//---------------------------------------------------------------------
// creating a function to trigger the jumpscare

// function triggerBlink() {
//     const element = document.querySelector(".jumpscare");
//     element.classList.add("once");

//     // Removing the class after the animation ends 
//     element.addEventListener('animationend', () => {
//         element.classList.remove("once");
//     });
// }