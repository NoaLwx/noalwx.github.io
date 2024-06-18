
var rows = 3;
var columns = 3;

var currTile;
var otherTile;

// Mapping object to associate pieces with their corresponding tile indices
// var pieceToTileMap = {};

// Populate the mapping object before shuffling



window.onload = function(){
    const hint = document.getElementById("hint")
    let img = null;
    hint.addEventListener("click", getHint);

    function getHint (){
        if (img) {
            // If it exists, remove it from the container
            document.getElementById("puzzlehint").removeChild(img);
            img = null; // Reset the variable
        } else {
            // If it doesn't exist, create a new image element
            img = new Image();
            img.src = "/ass3/images/puzzle/puzzle1.PNG";
            // Append the image element to the container

            document.getElementById("puzzlehint").appendChild(img);
        }
    }
    
    for (let r=0; r <rows; r++){
        for (let c=0; c<columns; c++){
            let tile = document.createElement("img");
            tile.id = `tile-${r}-${c}`; // Assign unique ID to each tile
            tile.src = "/ass3/images/puzzle/blanktile.png"

            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("puzzle").append(tile)
        }
    }

   
    let pieces = [];
    for (let i=1; i< rows*columns +1 ; i++){
        pieces.push(i.toString());
    }
    for (let i=0; i<pieces.length; i++){
        let j = Math.floor(Math.random ()* pieces.length)
    
        //swap
        let tmp =  pieces[i];
        pieces [i] = pieces [j];
        pieces [j] = tmp;
    }


    for (let i =0; i<pieces.length; i++){
        let tile = document.createElement("img");
        tile.id = `piece-${i}`; // Assign unique ID to each piece
        tile.src = "/ass3/images/puzzle/" + pieces[i] + ".jpg";
        
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
  
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
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


var texts = [
    ["Days of finding them really exhauted me. Mind lending me a hand? \n(click on the box to continue)"],
    ["You see the puzzle pieces on the right? Drag them in the box in the middle to complete the investigation."],
    ["That 'HINT' button up there, that is for when you want to seek for help. Don't use it too much, it stains your skill."],
    ["See the volumn button? If you prefer working in silence, go ahead and turn the music off."],
    ["And when you are fed up with all of this, resign and leave. But it's not guaranteed that you will keep the process."],
    ["Go find them now, they don't like to wait."]
];
var i = 0, speed = 60, pressed = false, keydowned = false, running = false;

type(texts[i] + "");

// document.querySelector("#restart").addEventListener("click", function() {
//     i = 0;
//     speed = 60;
//     pressed = false;
//     keydowned = false;
//     type(texts[i] + "");
//     document.querySelector(".textbox").classList.remove("hide");
// });



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

