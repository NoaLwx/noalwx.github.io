


var rows = 3;
var columns = 3;

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
    

    // for (let r=0; r<rows; r++){
    //     for (let c=0; c<columns; c++){
    //         let tile = document.createElement("img");
    //         tile.src = "/ass3/images/puzzle/puzzle1.PNG"

    //         document.getElementById("puzzle").append(tile)
    //     }
    // }

    let pieces = [];
    for (let i=1; i< rows*columns +1 ; i++){
        pieces.push(i.toString());
    }

    for (let i =0; i<pieces.length; i++){
        let tile = document.createElement("img");
        tile.src = "/ass3/images/puzzle/" + pieces[i] + ".jpg";
        document.getElementById("puzzle").append(tile);
    }
}