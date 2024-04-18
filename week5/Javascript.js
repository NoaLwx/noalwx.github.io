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

let tempInput = document.querySelector("#temperature");
let temperature = tempInput.value;
console.log(temperature);

function checkWeather() {
if (temperature>=20 && temperature<30){
    console.log ("it feels sunny and warm")
}
else if (temperature>=10 && temperature<20){
    console.log("it feels cold")
}
else if (temperature>30){
    console.log("it feels hot")
}
}