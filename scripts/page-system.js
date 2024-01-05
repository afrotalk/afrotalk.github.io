const FADESPEED = 600;
const fadeCover = document.getElementById("fadeCover");
fadeCover.style["transition"] = (FADESPEED/1000) + "s";

function openPage(page){
    
    fadeCover.style["opacity"] = 1;
    fadeCover.style["pointer-events"] = "all";
    setTimeout(function(){
        for(let i of document.getElementsByClassName("page")) i.style["display"] = "none";
        document.getElementById(page).style["display"] = "";
        fadeCover.style["opacity"] = 0;
        fadeCover.style["pointer-events"] = "none";

    }, FADESPEED);
    
}

function fadeReload(){
    fadeCover.style["opacity"] = 1;
    fadeCover.style["pointer-events"] = "all";
    setTimeout(function(){location.reload()},FADESPEED)
}