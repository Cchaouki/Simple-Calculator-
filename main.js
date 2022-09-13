let btn=document.querySelectorAll(".btn")
let show=document.querySelector(".show")
let his=document.querySelector(".histo")
let blocker=true
btn.forEach((e)=>{
    e.onclick=()=>{
        shadow(e)
        displaytext(e)

    }
})
function shadow(tt) {
    tt.style.boxShadow="1px 1px 8px black,-0.5px -0.5px 6px var(--secCol)"
    setTimeout(()=>{tt.style.boxShadow="4px 4px 10px black,-1.5px -1.5px 8px var(--secCol) "},100)   
}

function displaytext(e) {
    if (!e.classList.contains("calc")) {
  if(show.innerHTML=="0"&&e.firstChild.innerHTML!="."){ 
  show.innerHTML="";
  show.innerHTML +=e.firstChild.innerHTML }
  else{
    show.innerHTML +=e.firstChild.innerHTML
  }
}
    else if(e.classList.contains("calc")&& !e.classList.contains("Del") && e.firstChild.innerHTML!="C"&&!e.classList.contains("fin") ) {
        if (show.innerHTML.length>0) {
            his.innerHTML +=` ${show.innerHTML} ${e.firstChild.innerHTML} `;
            show.innerHTML="0"
            
        }
    }
    else{
        if(e.firstChild.innerHTML=="C")
 {
    show.innerHTML="0"
    his.innerHTML=""
    blocker=true;
 }
 else if (e.classList.contains("Del")) {
    
    if (show.innerHTML.length>1&&show.innerHTML!="0" )
    { 
    show.innerHTML=show.innerHTML.slice(0,show.innerHTML.length - 1)
    }
    else{
        show.innerHTML="0"
    }  
 }
 else {
    if(blocker && his.innerHTML!="") { 
          if(show.innerHTML!="0") { 
         his.innerHTML +=` ${show.innerHTML}`;
      }
        let cl=his.innerHTML.replaceAll(" ","").slice(0,his.innerHTML.length - 1)
        show.innerHTML=eval(cl)
      blocker=false;

    }  
   }
    }
}

/*dark mod*/

let ico=document.querySelector(".fa-moon");
let clicked=true
ico.onclick=()=>{
if (clicked){
    ico.classList.add("active")
    document.querySelector(".paren").classList.add("toggle")
    document.querySelector(".paren .text > p").classList.add("toggle")
    document.querySelectorAll(".calc").forEach((g)=>{
        g.classList.add("toggle")
        
    })
    document.querySelectorAll(".btn").forEach((g)=>{
        g.classList.add("toggle")
    })
    
  clicked=false;
}
else{
    ico.classList.remove("active")
    document.querySelector(".paren").classList.remove("toggle")
    document.querySelector(".paren .text > p").classList.remove("toggle")
    document.querySelectorAll(".calc").forEach((g)=>{
        g.classList.remove("toggle")
    })
    document.querySelectorAll(".btn").forEach((g)=>{
        g.classList.remove("toggle")
    })
    clicked=true;
}



}



