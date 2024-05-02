// const myPara = document.querySelectorAll("p");
// console.log(myPara);
// myPara.classList.add("purple-box");
// myPara[0].classList.add("purple-box");
// const myColors = ["purple-box", "coral-box"];

// for (let i = 0; i<3; i++){
//     myPara[i].classList.add(myColors[i]);
//     myPara[i].textContent = "new para" + i;
// }
// myPara.addColors(item){
//     item.classList.add("purple-box");
// }




let myButton = document.querySelector("#my-button");
    console.log(myButton);

myButton.addEventListener("click", toggleMe);

function toggleMe(){
    let myImg = document.querySelector("#face");
    console.log(myImg);
    myImg.classList.toggle("round");
}


// let myButton = document.querySelector("#my-button");
// myButton.addEventListener("click", toggleMe);
// let myImg = document.querySelector("#myImage");
// let helloMsg = document.querySelector("#hello");
// myImg.addEventListener("mouseover", addMe);
// myImg.addEventListener("mouseout", removeMe);
// function addMe() {
//   myImg.classList.add("round");
// }
// function removeMe() {
//   myImg.classList.remove("round");
// }
// function toggleMe() {
//   let myName = myImg.dataset.catname;
//   helloMsg.textContent = "Hi I am " + myName;
//   myImg.classList.toggle("round");
// }

// let allParagraphs = document.querySelectorAll("p");
// // allParagraphs.forEach(changeColor);

// function changeColor(item) {
//   //console.log(item);
//   item.style.backgroundColor = "limegreen";
//   // item.textContent = "New text content";
// }
// console.log(allParagraphs);


