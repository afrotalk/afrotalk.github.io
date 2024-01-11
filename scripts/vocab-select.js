for(let j in vocab){

    //get score
    let starStr = ""
    const score = getScore(`${j}:${localStorage.getItem("knownLang")}:${localStorage.getItem("learnLang")}`);
    for(let k = 0; k < 3; k++){
        if(k >= score) starStr += "<img class='tinyStar' src='assets/other/tiny-star-emp.png'>";
        else starStr += "<img class='tinyStar' src='assets/other/tiny-star.png'>";
    }

    document.getElementById("vocabSelectHolder").innerHTML += `
        <div class="convoOption" onclick="startVocab('${j}')" style="max-width:200px">
            <div style='display:grid;width:100%;justify-items:center'>
                <h2 style='text-align:center'>${j}</h2>
                <div class='starHolder'>
                    ${starStr}
                </div>
            </div>
        </div>
    `;
}