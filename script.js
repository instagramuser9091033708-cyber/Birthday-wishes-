let birthDate = new Date("2008-05-10"); // CHANGE DATE

// Loading
setTimeout(()=>nextPage(2),3000);

function nextPage(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

// Start
function start(){
  document.getElementById("music").play();
  nextPage(4);
}

// DOB + AGE
let today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

document.getElementById("birth").innerText = birthDate.toDateString();
document.getElementById("age").innerText = "Age: " + age;

// Decorate
function decorate(){
  document.getElementById("flags").style.display="block";
}

// Candle
function lightCandle(){
  document.getElementById("flame").style.display="block";

  for(let i=0;i<30;i++){
    let c=document.createElement("div");
    c.style.position="fixed";
    c.style.width="10px";
    c.style.height="10px";
    c.style.background=["red","yellow","blue","green"][Math.floor(Math.random()*4)];
    c.style.left=Math.random()*100+"%";
    c.style.top="0";
    c.style.animation="fall 3s linear";
    document.body.appendChild(c);
  }
}

// Balloons
function showBalloons(){
  let words=["You","are","a","cutie"];
  let colors=["red","blue","green","purple"];
  let box=document.getElementById("balloons");
  box.innerHTML="";

  words.forEach((w,i)=>{
    let b=document.createElement("div");
    b.className="balloon";
    b.style.background=colors[i];
    b.innerText=w;

    b.onclick=()=>{
      b.innerText="💥";
      setTimeout(()=>b.remove(),300);
    };

    box.appendChild(b);
  });
}
