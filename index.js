var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1 = "images/dice" + randomNumber1 + ".png";
var dice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice1-img").setAttribute("src",dice1);
document.querySelector(".dice2-img").setAttribute("src",dice2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".heading").innerHTML = "🚩Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector(".heading").innerHTML = "Player 2 Wins🚩";
}else{
    document.querySelector(".heading").innerHTML = "Draw!";
}