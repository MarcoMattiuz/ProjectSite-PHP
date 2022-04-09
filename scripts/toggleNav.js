const hamburger = document.querySelector(".ham-big");
const blur = document.querySelector(".blur");

function toggleNav(){

    if(hamburger.style.visibility!="visible"){
        hamburger.classList.add("ham-show");
        hamburger.style.visibility="visible";
        blur.style.visibility="visible";
    }else{
        hamburger.style.visibility="hidden";
        hamburger.classList.remove("ham-show");
        blur.style.visibility="hidden";
    }
  
}
