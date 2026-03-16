const message = "You make my world brighter, my heart warmer, and my life sweeter. Today is special… because you exist 💖";

let index = 0;
const typingText = document.getElementById("typingText");

function typeEffect(){
if(index < message.length){
typingText.innerHTML += message.charAt(index);
index++;
setTimeout(typeEffect,50);
}
}

typeEffect();


const btn = document.getElementById("surpriseBtn");
const text = document.getElementById("surpriseText");

btn.onclick = () => {
text.classList.add("show");
heartBurst();
}


function heartBurst(){
for(let i=0;i<20;i++){
const heart = document.createElement("div");
heart.innerHTML="❤️";
heart.style.position="fixed";
heart.style.left="50%";
heart.style.top="50%";
heart.style.fontSize="24px";
heart.style.transform=`translate(${Math.random()*400-200}px,${Math.random()*400-200}px)`;
heart.style.transition="1s";
document.body.appendChild(heart);

setTimeout(()=>{
heart.style.opacity="0";
},800);

setTimeout(()=>{
heart.remove();
},1500);
}
}


const heartsContainer = document.querySelector(".hearts");

function createHeart(){
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=Math.random()*20+10+"px";
heart.style.animationDuration=Math.random()*3+3+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);
}

setInterval(createHeart,300);



const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = ()=>{
music.play();
}
