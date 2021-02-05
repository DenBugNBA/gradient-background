var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var bodyTag = document.getElementsByTagName("body")[0];
var randomBtn = document.querySelector("#randomBtn");

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

function changeColor(){
    body.style.background = 
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}
changeColor();

randomBtn.addEventListener("click", randomizeGradient);

function randomizeGradient(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    changeColor()
}

function getRandomColor() {
    
    var r = getRandomHex();
    var g = getRandomHex();
    var b = getRandomHex();

    return `#`+r+g+b;
}

function getRandomHex() {
    return intToHex(randomizeNumber());
}

function intToHex(num) {
    if(num < 16) {
        return "0" + num.toString(16);
    } else {
        return num.toString(16);
    }
}

function randomizeNumber(){
    return Math.floor(Math.random() * 256);
}