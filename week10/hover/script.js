const catImage = document.querySelector("#cat-img");
console.log(catImage);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

catImage.addEventListener("mouseover", showInfo);
catImage.addEventListener("mouseout", hideInfo);

moreInfo.innerHTML = "<p> Meowwwwwwww </p>"

function showInfo(){
    moreInfo.classList.add("show");
}

function hideInfo(){
    moreInfo.classList.remove("show");
}