

function generateConvo(level, convo, lang1, lang2){

    
    
    let cur = conversations[level][convo];
    let ret = [];

    for(let i = 0; i < cur.length; i++){
        let pair = [];
        
        const botDialogue  = randomChoice(cur[i]);

        pair.push([
            botDialogue[lang1], // sentence in bot language
            botDialogue[lang2] // sentence in user language
        ]);

        const userDialogue = randomChoice(cur[i+1]);

        

        //generate wrong choices

        let wrongChoices = [];

        const allLevels = ["A1","A2","B1","B2"];
        const goodLevels = [];
        for(let j of allLevels){
            goodLevels.push(j);
            if(j == level)break;
        }

        while(wrongChoices.length < 3){
            const randLevel = randomChoice(goodLevels);
            const convos = Object.keys(conversations[randLevel]);

            const randomConvoKey = convos[parseInt(convos.length * Math.random())];
            if(randomConvoKey == convo)continue;

            const randomConvo = conversations[randLevel][randomConvoKey];
            const wrongDialogue = randomChoice(randomChoice(randomConvo));
            wrongChoices.push([wrongDialogue[lang1], wrongDialogue[lang2]]);
        }

       
        pair.push([
            userDialogue[lang1],//sentence in english
            userDialogue[lang2], // sentence in user language
            wrongChoices // other dialogue choices
            
        ]);
        ret.push(pair);
        i++;
    }

    return ret;
}



let curConvo = [];
let curInd = 0;
let curOptions = [];
let curName = "";

let wrongCnt = 0;
let lastWrong = -1;

function displayConvo(){

    // set progress bar
    let barWidth = Math.max(.05, curInd/curConvo.length) * 100;
    if(barWidth == 100) document.getElementById("progressBarPercent").style["width"] = "";
    else document.getElementById("progressBarPercent").style["width"] = barWidth + "%";


    // if reached the end of the convo
    if(curInd == curConvo.length){
        document.getElementById("dialogueHolder").style["opacity"] = "0";
        setTimeout(function(){
            openPage("convoPage");
            setTimeout(function(){

                document.getElementById("dialogueHolder").style["display"] = "none";
                document.getElementById("barHolder").style["display"] = "none";
                document.getElementById("convoComplete").style["display"] = "block";
                document.getElementById("convoPage").style["background"] = "transparent";
                document.getElementById("convoPage").style.cssText= `
                    background:transparent;
                    border:none;
                    position:fixed;
                    margin:0;
                    left:50vw;
                    top:50vh;
                    transform:translate(-50%,-50%);
                    box-shadow:none;
                `;

                //set stars
                let score = 2;
                const stars =  document.getElementById("completeStars");
                if(wrongCnt == curConvo.length){
                    stars.setAttribute("src","assets/other/1star.png");
                    score = 1;
                }
                else if(wrongCnt == 0){
                    stars.setAttribute("src","assets/other/3star.png");
                    score = 3;
                }

                //save score
                setScore(`${curName}:${localStorage.getItem("knownLang")}:${localStorage.getItem("learnLang")}`,score);


                setTimeout(function(){
                    document.getElementById("completeStars").style["opacity"] = "";
                    setTimeout(function(){
                        document.getElementById("completeHeader").style.opacity = "1";
                        setTimeout(function(){document.getElementById("endConvoButton").style.opacity = "1";},600);
                    },600);
                },600)
            },FADESPEED);
           
        },600)

        return;
    }


    

    // set the bot text and hint
    document.getElementById("botText").innerHTML = curConvo[curInd][0][0];

    // set translate button
    document.getElementById("hintButton").setAttribute("onclick","toggleTranslate(true)");
  

    //reset css
    document.getElementById("userDialogue").style["pointer-events"] = "";
    document.getElementById("continueButton").style.cssText = "background:var(--light-transp-blue);pointer-events:none;color:var(--dark-transp-green)";
    document.getElementById("hintButton").style["background"] = "";


    //shuffle the choices
    let options = shuffle([1,2,3,4]);
    curOptions = options;
    for(let i = 1; i <= 4; i++){
        
        //clear css from early convos
        document.getElementById("option" + i).style.cssText = "";


        if(options[i-1] == 1){
            document.getElementById("option" + i).innerHTML = curConvo[curInd][1][0];
            document.getElementById("option" + i).setAttribute("onclick",`pickChoice(${i},true)`);
            continue;
        }

        document.getElementById("option" + i).innerHTML = curConvo[curInd][1][2][ options[i-1]-2 ][0];
        document.getElementById("option" + i).setAttribute("onclick",`pickChoice(${i}, false)`);
    }

}

//picked the wrong sentence choice
function pickChoice(choice,correct){

    if(correct){

        //stop counting wrong
        lastWrong = curInd;

        //make continue button green
        document.getElementById("continueButton").style.cssText = "";

        
        for(let i = 1; i <= 4; i++){
            if(i == choice){
                
                // flash green
                document.getElementById("option" + choice).style.cssText = "border:3px solid var(--pretty-green);pointer-events:none; background:rgb(140 223 130 / 39%)";
                setTimeout(function(){
                    document.getElementById("option" + choice).style["transition"] = ".6s";
                    document.getElementById("option" + choice).style["border"] = "3px solid var(--light-transp-blue)";
                    document.getElementById("option" + choice).style["background"] = "var(--light-transp-blue)";
                    
                },300);
                continue;

            };
            // fade all over options
            document.getElementById("option" + i).style.cssText = "pointer-events:none; opacity:0.5;";
        }

        document.getElementById("userDialogue").style["pointer-events"] = "none";
        return;
    }


    // flash red
    document.getElementById("option" + choice).style.cssText = "pointer-events:none; border:3px solid var(--pretty-red);background:rgb(255 109 109 / 39%)";
    setTimeout(function(){
        document.getElementById("option" + choice).style["transition"] = ".6s";
        document.getElementById("option" + choice).style["border"] = "";
        document.getElementById("option" + choice).style["opacity"] = ".5";
        document.getElementById("option" + choice).style["background"] = "";

        if(lastWrong != curInd){
            lastWrong = curInd;
            wrongCnt++;
        }
        

    },300);
    //document.getElementById("option" + choice).innerHTML += ` (${meaning})`;
    

}


function nextDialogue(){



    const dialogueHolder = document.getElementById("dialogueHolder");
    dialogueHolder.style["transition"] = ".6s";
    dialogueHolder.style["transform"] = "translate(0,-130%)";
    dialogueHolder.style["opacity"] = "0";
    

    setTimeout(function(){
        dialogueHolder.style["transition"] = "0s";
        dialogueHolder.style["transform"] = "translate(0,130%)";
        setTimeout(function(){
            curInd++;
            displayConvo();
            dialogueHolder.style["transition"] = ".6s";
            dialogueHolder.style["transform"] = "";
            if(curInd != curConvo.length)dialogueHolder.style["opacity"] = "1";
            document.documentElement.scrollTop = 0;

        },50);
        
    }, 250);

}



function toggleTranslate(show){

    if(show){
        document.getElementById("hintButton").setAttribute("onclick","toggleTranslate(false)");
        document.getElementById("hintButton").style["background"] = "var(--pretty-yellow)";

        if(lastWrong != curInd){
            lastWrong = curInd;
            wrongCnt++;
        }
    }
    else{
        document.getElementById("hintButton").setAttribute("onclick","toggleTranslate(true)");
        document.getElementById("hintButton").style["background"] = "";
    }
    

    const oldOpacities = {};

    // hide all the dialogue
    for(let i of document.getElementsByClassName("textOption")){
        i.style["transition"] = ".25s";
        oldOpacities[i.id] = i.style["opacity"];//save opacity for later
        i.style["opacity"] = "0";
    }

    setTimeout(function(){

        if(show){//if we want to show the translations

            // translate bot text
            document.getElementById("botText").innerHTML = curConvo[curInd][0][1];

            for(let i = 1; i <= 4; i++){// translate all dialogue options
                if(curOptions[i-1] != 1){ // if not the correct dialogue option
                    document.getElementById("option" + i).innerHTML = curConvo[curInd][1][2][ curOptions[i-1] - 2 ][1];
                }
                else{
                    document.getElementById("option" + i).innerHTML = curConvo[curInd][1][1];
                }
            }
        }
        else{
            // de-translate bot text
            document.getElementById("botText").innerHTML = curConvo[curInd][0][0];

            for(let i = 1; i <= 4; i++){// translate all dialogue options
                if(curOptions[i-1] != 1){ // if not the correct dialogue option
                    document.getElementById("option" + i).innerHTML = curConvo[curInd][1][2][ curOptions[i-1] - 2 ][0];
                }
                else{
                    document.getElementById("option" + i).innerHTML = curConvo[curInd][1][0];
                }
            }
        }
    },250);

    setTimeout(function(){
        for(let i of document.getElementsByClassName("textOption")){
            i.style["transition"] = ".25s";
            i.style["opacity"] = oldOpacities[i.id];
        }
    },500);

}

//lang2 is language known by user
function startConvo(level, convo, lang1, lang2){
    openPage("convoPage");
    curConvo = generateConvo(level,convo,lang1,lang2);
    curInd = 0;
    curName = convo;

    // translations
    translate("choosePrompt","choose an option",lang2);
    translate("continueButton","continue",lang2);
    translate("endConvoButton","continue",lang2);
    translate("completeHeader","complete",lang2)


    document.getElementById("botAvatar").setAttribute("src",heads[level]);


    displayConvo();

    // hide the navbar
    setTimeout(function(){
        document.getElementById("navbar").style["display"] = "none";
        document.getElementById("closeButton").style["display"] = "";
    },FADESPEED);
}



//startConvo("A2", "Where's the Passport!?",3,0);