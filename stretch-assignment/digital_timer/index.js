function startTimer () {
 mh++; 
 if(mh ===10){
     mh = 0; 
     mt++; 
 }
if (mt === 10){
    mt = 0; 
    so++;
}
if(so === 10){
    so = 0;
    st++;
     
}

msHundreds.innerHTML = mh;
msDigits.innerHTML = mt;
secondOnes.innerHTML = so; 
secondTens.innerHTML = st;
if (st === 1){
    digitsClass.style.color = "Red";
     stopTimer(); 
}
}


function stopTimer () {
 clearInterval(intervalID); 
 
}
function resetTimer () {
    so = 0;
    mh = 0;
    st = 0;
    mt = 0;
    msHundreds.innerHTML = mh;
    msDigits.innerHTML = mt;
    secondOnes.innerHTML = so; 
    secondTens.innerHTML = st;
}

let msDigits = document.querySelector("#msTens"); 
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens"); 

let so = 0;
let mh = 0;
let st = 0;
let mt = 0;
//^four variables for each digit. 

let digitsClass = document.querySelector(".digits"); 
 

let start = document.createElement("button"); 
let stop = document.createElement("button"); 
let reset = document.createElement("button");

let startText = document.createTextNode("Start");//Sets Place for text;
let stopText = document.createTextNode("Stop");//Sets Place for text;
let resetText = document.createTextNode("Reset");

start.appendChild(startText);
stop.appendChild(stopText); 
reset.appendChild(resetText); 

let body = document.querySelector("body");
body.appendChild(start);
body.appendChild(stop); 
body.appendChild(reset); 

let buttons = document.querySelectorAll("button");

let intervalID; 

function timerGo () {
    intervalID = window.setInterval(startTimer, 10);
}

buttons[0].addEventListener("click", timerGo, false); 
 
buttons[1].addEventListener("click", stopTimer, false); 
buttons[2].addEventListener("click", resetTimer, false); 

