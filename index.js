const si = document.getElementsByClassName("container__button-btn");

for(let i=0;i < si.length;i++){
    
    console.log(si[i].innerHTML)
    
    if (si[i].innerHTML =="Set aside") {
        si[i].classList.add("button-btn-green");
        si[i].addAttribute("href")
    }else if (si[i].innerHTML =="Pulled apart") {
        si[i].classList.add("button-btn-red");
        si[i].removeAttribute("href")
    }else{
        console.log("wft")
    }

    
}