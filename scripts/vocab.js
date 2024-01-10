let setName =""; // name of the current vocab set
let setOrder = []; // order of the vocab terms
let setProgress = 0; // how many vocab terms we've gotten correct
let missedQuestions = {}; // tracks which vocab terms we messed up on
let curWrong = 0; // tracks if the current vocab term has been answered incorrectly


function startVocab(list){
    openPage("vocabPage");
    setName = list;
    let temp = vocab[list];

    for(let i = 0; i < temp.length; i++){
        setOrder.push([temp[i],0]); // the user will translate from their known language to their learning langauge
        setOrder.push([temp[i],1]); // the user will translate from their learning language to their known langauge

        missedQuestions[temp[i][parseInt(localStorage.getItem("knownLang"))]] = 0;
    }

    setOrder = shuffle(setOrder);

    // hide the navbar
    setTimeout(function(){
        document.getElementById("navbar").style["display"] = "none";
        document.getElementById("closeButton").style["display"] = "";
        displayVocab();
    },FADESPEED);
}

function displayVocab(){
    curWrong = 0;

    // set progress bar
    let barWidth = Math.max(.05, (2*vocab[setName].length - setOrder.length)/(2*vocab[setName].length)) * 100;
    document.getElementById("progressBarPercentVocab").style["width"] = barWidth + "%";

    
    if(barWidth == 100){ // we've done all the vocab words

        setTimeout(function(){
            openPage("vocabPage");
            setTimeout(function(){
                document.getElementById("progressBarPercentVocab").style["width"] = "";
                document.getElementById("vocabGameplay").style["display"] = "none";
                document.getElementById("vocabComplete").style["display"] = "";

                document.getElementById("vocabPage").style.cssText= `
                    background:transparent;
                    border:none;
                    position:fixed;
                    margin:0;
                    left:50vw;
                    top:50vh;
                    transform:translate(-50%,-50%);
                    box-shadow:none;
                `;

                setTimeout(function(){
                    document.getElementById("completeStarsVocab").style["opacity"] = "";
                    setTimeout(function(){
                        document.getElementById("completeHeaderVocab").style.opacity = "1";
                        setTimeout(function(){document.getElementById("endVocabButton").style.opacity = "1";},600);
                    },600);
                },600)

            },FADESPEED);
        },600)
        
        

        return;
    }

    // reset CSS on answer options
    for(let i = 1; i <= 4; i++) document.getElementById("vocabOpt" + i ).style.cssText = "";
    document.getElementById("vocabOptions").style.cssText = "";

    // reset background on progress bar
    document.getElementById("progressBarPercentVocab").style["background"] = "";

    // disable the continue button
    document.getElementById("continueButtonVocab").style.cssText = "background:var(--light-transp-blue);pointer-events:none;color:var(--dark-transp-green)";

    let og = parseInt(localStorage.getItem("knownLang")); // language the user will translate from
    let tran = parseInt(localStorage.getItem("learnLang")); // language the user will translate to

    if(setOrder[0][1] == 1){
        og = parseInt(localStorage.getItem("learnLang")); // language the user will translate from
        tran = parseInt(localStorage.getItem("knownLang"));
    }


    const vocabWord = setOrder[0][0][og]; // word to be translated
    document.getElementById("vocabWord").innerHTML = `Translate: "${vocabWord}"`;

    const correct = setOrder[0][0][tran]; // the correct translation
    let wrong = []; // list of wrong translations
    while(wrong.length < 3){
        const rand = randomChoice(vocab[setName])[tran];
        if(wrong.includes(rand) || rand == correct)continue;
        wrong.push(rand);
    }


    // populate a random answer choice with the correct answer
    const correctInd = randomChoice([1,2,3,4]);
    document.getElementById("vocabOpt" + correctInd).innerHTML = correct;
    document.getElementById("vocabOpt" + correctInd).setAttribute("onclick",`pickVocabChoice(${correctInd},true)`);

    // populate all other answer choices with wrong answers
    let wrongInd = 0;
    for(let i = 1; i <= 4; i++){
        if(i == correctInd)continue;
        document.getElementById("vocabOpt" + i).innerHTML = wrong[wrongInd];
        document.getElementById("vocabOpt" + i).setAttribute("onclick",`pickVocabChoice(${i},false)`);
        wrongInd++;
    }

}

function pickVocabChoice(choice, correct){
    
    if(correct){

        //make continue button green
        document.getElementById("continueButtonVocab").style.cssText = "";
        
        for(let i = 1; i <= 4; i++){
            if(i == choice){
                
                // flash green
                document.getElementById("vocabOpt" + choice).style.cssText = "border:3px solid var(--pretty-green);pointer-events:none; background:rgb(140 223 130 / 39%)";
                setTimeout(function(){
                    document.getElementById("vocabOpt" + choice).style["transition"] = ".6s";
                    document.getElementById("vocabOpt" + choice).style["border"] = "3px solid var(--light-transp-blue)";
                    document.getElementById("vocabOpt" + choice).style["background"] = "var(--light-transp-blue)";
                },300);
                continue;

            };
            // fade all over options
            document.getElementById("vocabOpt" + i).style.cssText = "pointer-events:none; opacity:0.5;";
        }

        document.getElementById("vocabOptions").style["pointer-events"] = "none";

        if(curWrong) setOrder.push(setOrder[0]);
        else setProgress++;
        setOrder.shift();
        curWrong = 0;

        return;
    }


    // flash red
    document.getElementById("vocabOpt" + choice).style.cssText = "pointer-events:none; border:3px solid var(--pretty-red);background:rgb(255 109 109 / 39%)";
    setTimeout(function(){
        document.getElementById("vocabOpt" + choice).style["transition"] = ".6s";
        document.getElementById("vocabOpt" + choice).style["border"] = "";
        document.getElementById("vocabOpt" + choice).style["opacity"] = ".5";
        document.getElementById("vocabOpt" + choice).style["background"] = "";
    },300);

    // change progress bar color
    document.getElementById("progressBarPercentVocab").style["background"] = "rgb(176 176 176)";

    // mark word as incorrect
    missedQuestions[setOrder[0][parseInt(localStorage.getItem("knownLang"))]] = 1;
    curWrong = 1;
}


function nextVocab(){
    document.getElementById("vocabWord").style["opacity"] = 0;
    document.getElementById("vocabOptions").style["opacity"] = 0;
    setTimeout(function(){
        displayVocab();
        document.getElementById("vocabWord").style["opacity"] = 1;
    },300);
    
}




startVocab("Common Phrases");