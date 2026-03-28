let birthDate = new Date("2008-05-10");

setTimeout(()=>nextPage(2),3000);

function nextPage(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

function start(){
  document.getElementById("music").play().catch(()=>{});
  nextPage(4);
}

window.onload=function(){
  let today=new Date();
  let age=today.getFullYear()-birthDate.getFullYear();

  document.getElementById("birth").innerText=birthDate.toDateString();
  document.getElementById("age").innerText="Age: "+age;
}

function lightCandle(){
  document.querySelector(".flame").style.display="block";
}

/* typing effect */
let words=["You","are","special ❤️"];
let i=0;

function typeEffect(text,el){
  let index=0;
  function typing(){
    if(index<text.length){
      el.innerText+=text.charAt(index);
      index++;
      setTimeout(typing,80);
    }
  }
  typing();
}

function createBalloons(){
  let box=document.getElementById("balloonBox");
  let msg=document.getElementById("message");

  box.innerHTML="";
  msg.innerText="";
  i=0;

  for(let j=0;j<3;j++){
    let b=document.createElement("div");
    b.className="balloon";
    b.style.background=["red","blue","green"][j];

    b.onclick=function(){
      if(i<words.length){
        typeEffect(words[i]+" ",msg);
        i++;
      }
      b.remove();
    };

    box.appendChild(b);
  }
}
