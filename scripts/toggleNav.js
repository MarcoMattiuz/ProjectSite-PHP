const hamburger = document.querySelector(".ham-big");
const blur = document.querySelector(".blur");

function toggleNav(){

    if(hamburger.style.visibility!="visible"){

        hamburger.style.visibility="visible";
        blur.style.visibility="visible";
    }else{
        hamburger.style.visibility="hidden";
        blur.style.visibility="hidden";
    }
  
}
