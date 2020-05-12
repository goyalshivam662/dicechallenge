
var randomnumber1 = Math.floor(Math.random()*6) +1;

var randomimagesource = "images/dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);


var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomimagesource2 = "images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);


if(randomnumber1>randomnumber2)
{
document.querySelector("h1").innerHTML="player 1 win ";

}
else if(randomnumber1<randomnumber2)
{
 document.querySelector("h1").innerHTML="player 2 win";
    
}
else{
    document.querySelector("h1").innerHTML="Draw !!!!!"
}
