
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
            tile.src = "/ass3/images/puzzle/blank.PNG"

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
    event.preventDefault();
//     const puzzleContainer = document.getElementById('puzzle');
//     const pieceDropped = event.target;
//     const correspondingPuzzleTileId = pieceDropped.id.replace('piece-', 'tile-'); // Find the corresponding puzzle tile ID based on the piece ID

//     // Remove the corresponding puzzle tile
//     const correspondingPuzzleTile = document.getElementById(correspondingPuzzleTileId);
//     if (correspondingPuzzleTile) {
//         puzzleContainer.removeChild(correspondingPuzzleTile);
//     }

//     // Add the dropped piece to the puzzle container
//     puzzleContainer.appendChild(pieceDropped);

otherTile = this;
}

function dragEnd(event) {
  
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
}