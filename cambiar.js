let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
let b3=document.querySelector("#b3");
let b4=document.querySelector("#b4");
let img=document.querySelector("#img");

b1.onclick=()=>{
    img.innerHTML="<img src='200w.gif' width=300>";
  setTimeout(()=>{
    img.innerHTML="<img src='img1.jpg' width=300>";
  },500);
  
  img.style.transform="rotateY(-180deg)";
  img.style.transition="all 0.5s linear";
  img.style.transformStyle="preserve-3d";
  img.style.backfaceVisibility="hidden";

  setTimeout(()=>{
     img.style.transform="rotate(0deg)";
     img.style.transition="all 0.5s linear";
  }, 500);
}

b2.onclick=()=>{
    img.innerHTML="<img src='200w.gif' width=250>";
  setTimeout(()=>{
    img.innerHTML="<img src='img2.jpg' width=300>";
  },500);
  
  img.style.transform="rotateY(-180deg)";
  img.style.transition="all 0.5s linear";
  img.style.transformStyle="preserve-3d";
  img.style.backfaceVisibility="hidden";

  setTimeout(()=>{
     img.style.transform="rotate(0deg)";
     img.style.transition="all 0.5s linear";
  }, 500);
}

b3.onclick=()=>{
    img.innerHTML="<img src='200w.gif' width=300>";
  setTimeout(()=>{
    img.innerHTML="<img src='img3.jpg' width=300>";
  },500);
  
  img.style.transform="rotateY(-180deg)";
  img.style.transition="all 0.5s linear";
  img.style.transformStyle="preserve-3d";
  img.style.backfaceVisibility="hidden";

  setTimeout(()=>{
     img.style.transform="rotate(0deg)";
     img.style.transition="all 0.5s linear";
  }, 500);
}

b4.onclick=()=>{
    img.innerHTML="<img src='200w.gif' width=300>";
  setTimeout(()=>{
    img.innerHTML="<img src='img4.jpg' width=300>";
  },500);
  
  img.style.transform="rotateY(-180deg)";
  img.style.transition="all 0.5s linear";
  img.style.transformStyle="preserve-3d";
  img.style.backfaceVisibility="hidden";

  setTimeout(()=>{
     img.style.transform="rotate(0deg)";
     img.style.transition="all 0.5s linear";
  }, 500);
    }
