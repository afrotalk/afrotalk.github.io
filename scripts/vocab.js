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

        missedQuestions[temp[i][parseInt(localStorage.getItem("knownLang"))] + "0"] = 0;
        missedQuestions[temp[i][parseInt(localStorage.getItem("knownLang"))] + "1"] = 0;
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

    // clear CSS on answer options
    for(let i = 1; i <= 4; i++) document.getElementById("vocabOpt" + i ).style.cssText = "";

    // disable the continue button
    document.getElementById("continueButtonVocab").style.cssText = "background:var(--light-transp-blue);pointer-events:none;color:var(--dark-transp-green)";

    let og = parseInt(localStorage.getItem("knownLang")); // language the user will translate from
    let tran = parseInt(localStorage.getItem("learnLang")); // language the user will translate to

    if(setOrder[0][1] == 1){
        og = parseInt(localStorage.getItem("learnLang")); // language the user will translate from
        tran = parseInt(localStorage.getItem("knownLang"));
    }


    const vocabWord = setOrder[0][0][og]; // word to be translated
    if(og == parseInt(localStorage.getItem("knownLang"))) document.getElementById("vocabWord").innerHTML = `How do you say "${vocabWord}"?`;
    else document.getElementById("vocabWord").innerHTML = `What this word mean: "${vocabWord}"`;

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

    // mark word as incorrect
    //curHistory[curOrder[0][parseInt(localStorage.getItem("knownLang"))]] = 1;
    //curWrong = 1;
}


function nextVocab(){

}




startVocab("Common Phrases");