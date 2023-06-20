var RandomNumber1=Math.floor(Math.random()*6)+1;

var randomimge1="dice"+RandomNumber1+".png";
var imagesource1="./images/"+randomimge1;

var p1image=document.querySelectorAll("img")[0];

p1image.setAttribute("src",imagesource1)


var RandomNumber2=Math.floor(Math.random()*6)+1;

var randomimge2="dice"+RandomNumber2+".png";
var imagesource2="./images/"+randomimge2;

var p2image=document.querySelectorAll("img")[1];

p2image.setAttribute("src",imagesource2)

if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 win!";

}else if(RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML="!Player 2 win🚩";
}else{
    document.querySelector("h1").innerHTML="draw!!";
}

