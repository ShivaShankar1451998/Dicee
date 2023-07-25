var randomnumber1 = ( Math.floor( Math.random() * 6) + 1 )
var randomnumber2 = ( Math.floor( Math.random() * 6) + 1 )

var randomimagesource1 = "./images/dice" + randomnumber1 + ".png";
var randomimagesource2 = "./images/dice" + randomnumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource1);

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩Play 1 Wins"
}
else if(randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Play 2 Wins🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}