

var texts = [
    ["You left. Without looking back. You realise whatever happen is not your problem to deal with."],
    // ["You are scared of facing the danger. You are scared of facing the truth."],
    // ["Is this really your choice? Is this what you are happy with?"]
 ];
var i = 0, speed = 30, pressed = false, keydowned = false, running = false;

type(texts[i] + "");

document.querySelector(".textbox").addEventListener("click", function(e) {

    if (i < texts.length) {
        type(texts[i] + "");
        console.log(texts[i]);

    } else {
         next();
    }});



function type(txt) {
    if (!running) {
        running = true;
        i++;
        var timeOut,
            txtLen = txt.length,
            char = 0;


        document.querySelector(".textbox").textContent = ""; // Use textContent for plain text
        (function typeIt() {
            timeOut = setTimeout(function() {
                char++;
                var type = txt.substring(0, char);
                document.querySelector(".textbox").innerHTML = type.replace("\n", "<br />");
                typeIt();
                if (char === txtLen) {
                    clearTimeout(timeOut);
                    running = false;
                }
            }, speed);
        })();
    }
    
};

//------------------------------------------------------------------------------------------------

function next(){

const cutscene = document.querySelector(".cutscene");
cutscene.style.backgroundImage = "url(/ass3/images/cutscenes/ed12.png;)";


var texts = [
    ["Ending 1: Early Quit."]
 ];
var i = 0, speed = 30, pressed = false, keydowned = false, running = false;

type(texts[i] + "");

document.querySelector(".textbox").addEventListener("click", function(e) {

    if (i < texts.length) {
        type(texts[i] + "");
        console.log(texts[i]);

    } else {
        
    }});



function type(txt) {
    if (!running) {
        running = true;
        i++;
        var timeOut,
            txtLen = txt.length,
            char = 0;


        document.querySelector(".textbox").textContent = ""; // Use textContent for plain text
        (function typeIt() {
            timeOut = setTimeout(function() {
                char++;
                var type = txt.substring(0, char);
                document.querySelector(".textbox").innerHTML = type.replace("\n", "<br />");
                typeIt();
                if (char === txtLen) {
                    clearTimeout(timeOut);
                    running = false;
                }
            }, speed);
        })();
    }
    
};
}