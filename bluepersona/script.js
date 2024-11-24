var agreeEI_number = 0
var disagreeEI_number = 0

function eicounter(){
var selected_buttons_a = document.querySelectorAll('input[type="radio"]:checked[value="agree"]');
agreeEI_number= selected_buttons_a.length 


var selected_buttons_d =document.querySelectorAll('input[type="radio"]:checked[value="disagree"]');
disagreeEI_number= selected_buttons_d.length 

console.log(agreeEI_number)
console.log(disagreeEI_number)

localStorage.setItem("agreeEI",agreeEI_number)
localStorage.setItem("disagreeEI",disagreeEI_number)


}




var agreeSN_number = 0
var disagreeSN_number = 0
function SNcounter(){
var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="agreeSN"]');
agreeSN_number = selected_buttonsSN.length 

var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="disagreeSN"]');
disagreeSN_number = selected_buttonsSN.length 



localStorage.setItem("agreeSN",agreeSN_number)
localStorage.setItem("disagreeSN",disagreeSN_number)



}

var agreeTF_number = 0
var disagreeTF_number = 0
function TFcounter(){
var selected_buttonsTF = document.querySelectorAll('input[type="radio"]:checked[value="agreeTF"]');
agreeTF_number = selected_buttonsTF.length 

var selected_buttonsTF = document.querySelectorAll('input[type="radio"]:checked[value="disagreeTF"]');
disagreeSN_number = selected_buttonsTF.length 

localStorage.setItem("agreeTF",agreeTF_number)
localStorage.setItem("disagreeTF",disagreeTF_number)

}



var agreeJP_number = 0
var disagreeJP_number = 0
function JPcounter(){
var selected_buttonsJP = document.querySelectorAll('input[type="radio"]:checked[value="agreeJP"]');
agreeJP_number = selected_buttonsJP.length 

var selected_buttonsJP = document.querySelectorAll('input[type="radio"]:checked[value="disagreeJP"]');
disagreeSN_number = selected_buttonsJP.length 

localStorage.setItem("agreeJP",agreeJP_number)
localStorage.setItem("disagreeJP",disagreeJP_number)
}


function finalresults(){
var agreeEI = localStorage.getItem("agreeEI")
var disagreeEI = localStorage.getItem("disagreeEI")

var agreeSN = localStorage.getItem("agreeSN")
var disagreeSN = localStorage.getItem("disagreeSN")

var agreeTF = localStorage.getItem("agreeTF")
var disagreeTF = localStorage.getItem("disagreeTF")

var agreeJP = localStorage.getItem("agreeJP")
var disagreeJP = localStorage.getItem("disagreeJP")

console.log(agreeEI)
console.log(disagreeEI)

console.log(agreeSN)
console.log(disagreeSN)

console.log(agreeTF)
console.log(disagreeTF)

console.log(agreeJP)
console.log(disagreeJP)


var EI, SN, TF, JP


if(agreeEI > disagreeEI){
    EI = "e"
}
else {
    EI="i"
    console.log(EI)

}

if(agreeSN>disagreeSN){
    SN = "s"
}
else{
    SN = "n"
}


if(agreeTF>disagreeTF){
    TF = "t"
}
else{
    TF = "f"
}

if(agreeJP>disagreeJP){
    JP = "j"
}
else{
    JP = "p"
}


if((EI=="i") && (SN=="s") && (TF=="t") && (JP=="j")){
    //console.log("ISTJ")
    window.location.href="survey.html"
}

 if((EI=="i") && (SN=="s") && (TF=="f") && (JP=="j")){
     //console.log("ISFJ")
    window.location.href="survey.html"
 }

 if((EI=="i") && (SN=="n") && (TF=="f") && (JP=="j")){
    //console.log("INFJ")
    window.location.href="survey.html"
}
if((EI=="i") && (SN=="n") && (TF=="t") && (JP=="j")){
     //console.log("INTJ")
    window.location.href="survey.html"
}
if((EI=="i") && (SN=="s") && (TF=="t") && (JP=="p")){
    //console.log("ISTP")
     window.location.href="survey.html"
    } 
 if((EI=="i") && (SN=="s") && (TF=="f") && (JP=="p")){
    //console.log("ISFP")
    window.location.href="survey.html"
}
if((EI=="i") && (SN=="n") && (TF=="f") && (JP=="p")){
     //console.log("INFP")
    window.location.href="survey.html"
}
 if((EI=="i") && (SN=="n") && (TF=="t") && (JP=="p")){
     console.log("INTP")
    //   window.location.href="survey.html"
    }
if((EI=="e") && (SN=="s") && (TF=="t") && (JP=="p")){
     //console.log("ESTP")
    window.location.href="survey.html"
}

if((EI=="e") && (SN=="s") && (TF=="f") && (JP=="p")){
     //console.log("ESFP")
    window.location.href="survey.html"
   }

if((EI=="e") && (SN=="n") && (TF=="f") && (JP=="p")){
    //console.log("ENFP")
   window.location.href="survey.html"
}

if((EI=="e") && (SN=="n") && (TF=="t") && (JP=="p")){
    console.log("ENTP")
   window.location.href="entp/entp.html"
}

if((EI=="e") && (SN=="s") && (TF=="t") && (JP=="j")){
    //console.log("ESTJ")
   window.location.href="survey.html"
}

if((EI=="e") && (SN=="s") && (TF=="f") && (JP=="j")){
    //console.log("ESFJ")
   window.location.href="survey.html"
}
if((EI=="e") && (SN=="n") && (TF=="f") && (JP=="j")){
    //console.log("ENFJ")
   window.location.href="survey.html"
}

if((EI=="e") && (SN=="n") && (TF=="t") && (JP=="j")){
    //console.log("ENTJ")
   window.location.href="survey.html"
}


}





var imageId = ""
function selectimage(img,x){
imageId=img
console.log(imageId)
document.getElementById("outputimg").src= imageId+".png"
localStorage.setItem("output",imageId)
// document.getElementById("everything").style.cursor="url('https://cdn-icons-png.flaticon.com/28/7591/7591554.png'),pointer";
var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "url('"+ x +"'), auto";
 console.log(x)
localStorage.setItem("cursor", x)
}


function petname(){
    var name = document.getElementById("petname").value;
    document.getElementById("petnameplace").innerHTML= "Hello,  " +name;
    document.getElementById("homepage").style.display='none'
    document.getElementById("homeinfo").style.visibility='visible'
}


function petexp(){
    var outputpic =   localStorage.getItem("output") 
    document.getElementById("outputimg").src = outputpic+".png"
  var c= localStorage.getItem("cursor")
  var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "url('"+ c +"'), auto";
}

const jellyFish = document.querySelector(".jellyfish2");
const leftLeg = jellyFish.querySelector("#left-leg");
const rightLeg = jellyFish.querySelector("#right-leg");
const head = jellyFish.querySelector("#head");

const jellyFishSwim = () => {
  const tl = gsap
    .timeline({ repeat: -1, repeatDelay: 2 })
    .to(
      ".jellyfish",
      {
        duration: 2,
        transformOrigin: "0% 0%",
        xPercent: "-=10",
        yPercent: "-=20",
        ease: "Power2.easeOut",
        rotation: -3
      },
      0.5
    )
    .to(".jellyfish", {
      duration: 4,
      yPercent: 0,
      xPercent: 0,
      ease: "Power1.easeInOut",
      rotation: 0
    })
    .to(
      head,
      {
        duration: 1.5,
        transformOrigin: "50% 50%",
        scaleY: 1.2,
        scaleX: 0.9,
        yoyo: true,
        repeat: 1,
        yoyoEase: "Power1.easeInOut",
        ease: "Power2.easeOut"
      },
      0
    )
    .to(
      leftLeg,
      {
        transformOrigin: "100% 0",
        duration: 2,
        rotation: -25,
        yoyo: true,
        repeat: 1,
        ease: "Power3.easeOut"
      },
      0.5
    )
    .to(
      rightLeg,
      {
        transformOrigin: "0 0",
        duration: 2,
        rotation: 25,
        yoyo: true,
        repeat: 1,
        ease: "Power3.easeOut"
      },
      1
    );

  return tl;
};

const InitBubbles = function (canvasEl, durationInSec) {
  let canvas;
  let ctx;
  let durationLimit_ms;

  const particles = [];
  let count = 100;
  let complete = false;
  let loopTime = 0;

  const update = () => particles.forEach((el) => el.update());

  const resize = () => {
    ctx.canvas.width = canvas.offsetWidth;
    ctx.canvas.height = canvas.offsetHeight;
    update();
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    particles.forEach((el) => el.draw());
  };
  const loop = () => {
    //  if (loopTime >= durationLimit_ms) InitBubbles.complete = true;
    draw();
    update();
    loopTime++;
    if (!InitBubbles.complete) window.requestAnimationFrame(loop);
  };

  const addParticles = () => {
    [...Array(count)].forEach(() => {
      particles.push(Bubble(canvas));
    });
  };

  const events = () => {
    window.addEventListener("resize", resize);
  };

  canvas = document.querySelector(`${canvasEl}`);
  ctx = canvas.getContext("2d");
  durationLimit_ms = durationInSec * 100;
  addParticles();
  events();
  loop();
  resize();

  return { complete: complete };
};

const Bubble = (canvEl) => {
  const random = (min, max) => min + Math.random() * (max - min);

  const canvas = canvEl;
  const ctx = canvas.getContext("2d");
  const height = document.body.clientHeight;

  var x = random(0, canvas.offsetWidth);
  var y = random(0, height);
  var alpha = random(0, 1);

  let fillArray = [
    "rgba(138, 204, 197, ",
    "rgba(62, 173, 178, ",
    "rgba(0, 79, 88, ",
    "rgba(0, 107, 118, "
  ];
  let fill = fillArray[Math.floor(Math.random() * fillArray.length)];
  const radius = random(0.3, 7.0);

  var i = 0;
  var easeDuration_ms = 5 * 60;

  var gravity = 2;
  var angle = random(-1, 1);
  var density = random(0, 1000);
  var speed = 0;
  var wind = 0;

  function draw() {
    ctx.beginPath();
    ctx.strokeStyle = fill + "1)";
    ctx.lineWidth = 1;

    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = fill + alpha + ")";
    ctx.fill();
    ctx.closePath();
  }

  const animateBubbles = () => {
    const hitTop = y < 0;
    angle += 0.02;

    if (hitTop) {
      y = height;
      x = random(0, canvas.offsetWidth);
    } else {
      y -= speed;
      x += wind;
      speed = 0.02 * (Math.cos(angle + density) + 1 + radius * 3);
      wind = 0.1 * (Math.sin(angle) * 2);
    }
  };

  const update = () => {
    animateBubbles();
  };

  return {
    update,
    draw
  };
};

document.addEventListener("DOMContentLoaded", () => {
  InitBubbles("#bubbles-canvas");
  jellyFishSwim();
});
