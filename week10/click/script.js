const catButton = document.querySelector("#cat-button");
catButton.addEventListener("click", increaseLikes);

let likeCount = 0;
const likes = document.querySelector("#likes");
console.log(likes);

function increaseLikes(){
    console.log("im clicked");
    likeCount++;
    likes.innerHTML = `<h3>${likeCount}</h3>`;
}