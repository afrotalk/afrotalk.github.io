let choosingLang = false;
// languages
if(localStorage.getItem("knownLang") == null || localStorage.getItem("learnLang") == null){
    chooseLanguage();
    choosingLang = true;
}

// scores for convos and cards
if(localStorage.getItem("scores") == null){
    const scores = {};
    localStorage.setItem("scores",JSON.stringify(scores));
}



function getScore(level){
    const scores = JSON.parse(localStorage.getItem("scores"));
    if(level in scores == false){
        scores[level] = 0;
    }
    return scores[level];
}

function setScore(level, score){
    const scores = JSON.parse(localStorage.getItem("scores"));
    if(level in scores == false){
        scores[level] = 0;
    }
    scores[level] = Math.max(scores[level],score);
    localStorage.setItem("scores",JSON.stringify(scores));
}