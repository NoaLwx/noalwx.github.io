// I initially want to go with a more complex puzzle system that add more rows and columns the more you play
// but i dont have enough time and mentality to do different level
// Really hope i would be able to develop this futher in the future

// i also went for the pixel theme because I really like those old DS game style and it also fit the theme of my website
// the story is of a ESPer detective who help finding missing body parts of victims of a serial murderer
// we, the player, help him do it by solving the puzzles, which corresponding to the missing body part of the victim
// for example, in this demo, is the head of the victim.

// the puzzle tutorial is from https://www.youtube.com/watch?v=S6GNtMGNcUE&t=768s
// thank you Kenny you saved my life

// divide the div into 3x3 tiles to make the puzzle pieces
//  i chose 3x3 because it is simple and easy to play
var rows = 3;
var columns = 3;

// the variables for swapping between the pieces
var currTile;
var otherTile;

// making it loads immediately when the page is opened
window.onload = function(){

    //function to toggle the hint using the button
    const hint = document.getElementById("hint")
    let img = null;
    hint.addEventListener("click", getHint);

    function getHint (){
        if (img) {
            // If it exists, remove it from the container
            document.getElementById("puzzlehint").removeChild(img);
            img = null; // Reset the variable
        } else {
            // If it doesn't exist, create a new image element (the hint)
            img = new Image();
            img.src = "/ass3/images/puzzle/puzzle1.PNG";
            document.getElementById("puzzlehint").appendChild(img);
        }
    }
    
    //function to divide the puzzle box into small tiles
    for (let r=0; r <rows; r++){
        for (let c=0; c<columns; c++){
            let tile = document.createElement("img");
            tile.id = `tile-${r}-${c}`; // Assign unique ID to each tile
            tile.src = "/ass3/images/puzzle/blanktile.png" //i used a very low opacity image to pretend that the boxes are empty

            //adding drag and drop function so that it swap with the tiles from the pieces div
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("puzzle").append(tile)
        }
    }

    //function to create the puzzle pieces for the puzzle
    let pieces = [];
    for (let i=1; i< rows*columns +1 ; i++){
        pieces.push(i.toString());
    }

    //randomise the pieces
    for (let i=0; i<pieces.length; i++){
        let j = Math.floor(Math.random ()* pieces.length)
    
        let tmp =  pieces[i];
        pieces [i] = pieces [j];
        pieces [j] = tmp;
    }

    for (let i =0; i<pieces.length; i++){
        let tile = document.createElement("img");
        tile.id = `piece-${i}`; // Assign unique ID to each piece
        tile.src = "/ass3/images/puzzle/" + pieces[i] + ".jpg"; // i named the already cut up png from 1 to 9 so it register the puzzle pieces into corresponding placement
        
    //DRAG FUNCTION 
    tile.addEventListener("dragstart", dragStart); //click on an image to drag
    tile.addEventListener("dragover", dragOver); // drag an image
    tile.addEventListener("dragenter", dragEnter); // dragging an image into other one
    tile.addEventListener("dragleave", dragLeave); // dragging an image away from other one
    tile.addEventListener("drop", dragDrop); //dropping an image
    tile.addEventListener("dragend", dragEnd); // after completing the drag

    document.getElementById("pieces").append(tile);
    }
}


function dragStart(event){
    currTile = this;
}

function dragOver(event){
    event.preventDefault();
}

function dragEnter(event){
    event.preventDefault();
}

function dragLeave(event){

}

function dragDrop(event){
    // event.preventDefault();
    otherTile = this;
}

function dragEnd(event) {
    // swapping the image to create an illusion of placing puzzle pieces
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    checkGameEnded();
}

//checking if the pieces are in the right place
function checkGameEnded() {
    let isComplete = true;

    //go through all the rows and column to check for their index
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(`tile-${r}-${c}`);
            let expectedSrc = `/ass3/images/puzzle/${(r * columns + c + 1)}.jpg`;

            // Extract only the filename from the src attribute for comparison
            let actualSrc = tile.src.substring(tile.src.lastIndexOf("/") + 1);
            let correctSrc = expectedSrc.substring(expectedSrc.lastIndexOf("/") + 1);

            //if it's not the right source, it's not triggering the completed puzzle function
            if (actualSrc !== correctSrc) {
                isComplete = false;
                break;
            }
        }
        if (!isComplete) break;
    }

    if (isComplete) {
        console.log("Puzzle completed!");

        //some functions are triggered after the game is completed
        //I hide the pieces box, add the sprite and the dialogue text box of the victim in
        //and show the jumpscare
        const piecesContainer = document.querySelector("#pieces");
        piecesContainer.classList.add("hide");

        victimAppear();
        const victimAva = document.querySelector("#avaright");
        victimAva.classList.add("show");
        document.querySelector(".textbox").classList.remove("hide");

        triggerBlink();
    }
}


//--------------------------------------------------
//mute and unmute background audio

const audio = document.querySelector("#audio")
const muteUnmuteButton = document.querySelector("#mute-Btn");
muteUnmuteButton.addEventListener("click",toggleSound);

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
//textbox scrip from https://codepen.io/jaflo/pen/DgWWYw

//the introduction text from the detective to help people with the gameplay.
//i want it to be in character rather than just a simple instruction so I created a script
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