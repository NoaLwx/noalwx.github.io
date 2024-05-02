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


const myImg = document.querySelector("#face");

myImg.addEventListener("mouseover",makeItRound);
myImg.addEventListener("mouseout", makeItSquare);

function makeItRound(){
    myImg.classList.toggle("round");
}
function makeItSquare(){
    myImg.classList.remove("round");
}


// let myButton = document.querySelector("#my-button");
//     console.log(myButton);

// myButton.addEventListener("click", toggleMe);

// function toggleMe(){
//     let myImg = document.querySelector("#face");
//     console.log(myImg);
//     myImg.classList.toggle("round");
// }

// const myProject = document.querySelectorAll("p");
// console.log(myProject);
// myProject.forEach(checkTopic);
// function checkTopic(item){
//     if (item.dataset.topic === "image"){
//         item.classList.add("purple-box");
//     }
//     if (item.dataset.topic === "sound"){
//         item.classList.add("coral-box");
//     }
// }

// let myButton = document.querySelector("#my-button");
// myButton.addEventListener("click", toggleMe);
// let myImg = document.querySelector("#myImage");
// let helloMsg = document.querySelector("#hello");
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


