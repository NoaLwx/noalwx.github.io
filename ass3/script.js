let size = {x:0, y:0, width:500, height:500, rows:3, columns:3};
let pieces = [];

function main(){
const canvas = document.querySelector("#myCanvas");
canvas.width = 500;
canvas.height = 500;

const context = canvas.getContext(`2d`);
const img = new Image()
img.src = "/ass3/images/puzzle/puzzle1.PNG"

img.onload = () => {
    initializePieces(size.rows, size.columns);
    updateCanvas(context,img);
    // randomizePieces();
    }
}

function updateCanvas(context,img){
    context.clearRect(0, 0, size.width, size.height); // Clear the canvas
    context.drawImage(img, size.x, size.y, size.width, size.height);

    for(let i = 0; i<pieces.length; i++){
        pieces[i].draw(context,img);
    }
}

function initializePieces(rows, cols){
    size.rows = rows;
    size.columns = cols;
    pieces = [];
    for(let i=0; i<size.rows; i++){
        for(let j=0; j<size.columns;j++){
            pieces.push(new Piece (i,j));
        }
    }
}

// function randomizePieces(){
//     for(let i=0; i<pieces.length;i++){
//         let loc = {
//             x: Math.random()* canvas.width,
//             y: Math.random()* canvas.height
//         }
//         pieces[i].x=loc.x;
//         pieces[i].y=loc.y;
//     }
// }

class Piece{
    constructor(rowIndex, colIndex){
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.width = size.width/size.columns;
        this.height = size.height/size.rows;
        this.x = this.width * this.colIndex;
        this.y = this.height * this.rowIndex;
    }
    
draw(context, img){
    context.drawImage(
        img, 
        this.colIndex * img.width/size.columns,
        this.rowIndex * img.height/size.rows,
        img.width/size.columns,
        img.height/size.rows,
        this.x,
        this.y,
        this.width,
        this.height);

        context.beginPath();
        context.rect (this.x, this.y, this.width, this.height);
        context.stroke();
    }
}
