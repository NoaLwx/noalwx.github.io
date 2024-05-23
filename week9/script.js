const myButton = document.querySelector("#my-button");
const sideDrawer = document.querySelector("#side-drawer");

myButton.addEventListener("click",toggleSideDrawer);
let isOpened = false

function toggleSideDrawer(){
    if (!isOpened){
        sideDrawer.style.translate= "200px"; 
        isOpened = true;
    } 
    else {
        sideDrawer.style.translate= "0px"; 
        isOpened = false;
    }
}
    
