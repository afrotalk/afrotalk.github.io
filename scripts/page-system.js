const FADESPEED = 600;
const fadeCover = document.getElementById("fadeCover");
fadeCover.style["transition"] = (FADESPEED/1000) + "s";


const pageIcons = {
    "vocabSelectPage":"navbarVocab",
    "convoSelectPage":"navbarConvo"
}

function openPage(page){
    
    fadeCover.style["opacity"] = 1;
    fadeCover.style["pointer-events"] = "all";
   
    setTimeout(function(){
        document.documentElement.scrollTop = 0;
        for(let i of document.getElementsByClassName("page")) i.style["display"] = "none";
        document.getElementById(page).style["display"] = "";
        fadeCover.style["opacity"] = 0;
        fadeCover.style["pointer-events"] = "none";

        if(page in pageIcons){
            for(j in pageIcons) document.getElementById(pageIcons[j]).style["opacity"] = "";
            document.getElementById(pageIcons[page]).style["opacity"] = "1";
            document.getElementById(pageIcons[page]).style["pointer-events"] = "none";
        }

    }, FADESPEED);
    
}

function fadeReload(){
    fadeCover.style["opacity"] = 1;
    fadeCover.style["pointer-events"] = "all";
    setTimeout(function(){location.reload()},FADESPEED)
}