// let myName = prompt("what is your name");
// console.log ("hello, my name is", myName);

// let studentNames = ["ham","kia", "sra","supapa"]
// console.log (studentNames[1])

// let studentRecords = [
//     {name:"ham", id:12, mark:80},
//     {name:"kia", id:15, mark:90},
//     {name:"sra", id:56, mark:75},
//     {name:"supapa", id:60, mark:100},
// ]
// console.log ("The score of", studentRecords[1].name, "is", studentRecords[1].mark );

// let temperature = 16;
// let temperature = prompt("what's the temperature outside?");



// put them inside the function first
function checkWeather() {
    let body = document.querySelector("body");
    let outer = document.querySelector(".outer");
    console.log("I am just being clicked");
    let myInput = document.querySelector("#temperature");
    let temp = myInput.value;
    console.log("current temp is", temp);
    if (temp >= 20 && temp < 30) {
      body.style.backgroundImage = "url('/week5/img/warm.jpeg')";
      outer.style.backgroundColor = "purple";
      console.log("it feels sunny and warm");
    } else if (temp >= 10 && temp < 20) {
      body.style.backgroundImage = "url('/week5/img/cloud.jpeg')";
      outer.style.backgroundColor = "lime";
      console.log("it feels cold");
    } else if (temp >= 30) {
      outer.style.backgroundColor = "grey";
      body.style.backgroundImage = "url('/week5/img/ashbaby.png')";
      console.log("it is boiling hot");
    } else if (temp < 10) {
      outer.style.backgroundColor = "blue";
      body.style.backgroundImage = "url('/week5/img/ice.jpeg')";
      console.log("it is freezing");
    }
  }
// let shoppingCart = [
//     {name: "T-shirt", price:20},
//     {name: "Jeans", price:50},
//     {name:"Sneakers",price:80},
//     {name: "Backpack",price: 30}
// ];

// let total = 0;
// for (let i = 0; i<4; i++) {
//     total = total + shoppingCart [i].price;
//     console.log ("the sum so far", total);
// }

// console.log("total rpice", total);

// let discount = 0.1;
// let discountPrice = 0;
// if (total > 100){
//     discountPrice = total - total*discount;
// }

// console.log("the discount price", discountPrice)