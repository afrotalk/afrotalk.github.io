const offsets = [0,10,20,25,20,10,0,-10,-20,-25,-20,-10];
let curOffset = 0;

const diffs = {
    "A1":"Beginner",
    "A2":"Easy",
    "B1":"Medium",
    "B2":"Hard"
}

const colors = {
    "A1":"--pretty-blue",
    "A2":"--pretty-green",
    "B1":"--pretty-yellow",
    "B2":"--pretty-red"
}

let convoInd = 0;
for(let i of ["A1","A2","B1","B2"]){
    for(j of Object.keys(conversations[i])){

        //get score
        let starStr = ""
        const score = getScore(`${j}:${localStorage.getItem("knownLang")}:${localStorage.getItem("learnLang")}`);
        for(let k = 0; k < 3; k++){
            if(k >= score) starStr += "<img class='tinyStar' src='assets/other/tiny-star-emp.png'>";
            else starStr += "<img class='tinyStar' src='assets/other/tiny-star.png'>";
        }

        


        document.getElementById("selectHolder").innerHTML += `
        <button class='convoOption'onclick="startConvo(\`${i}\`,\`${j}\`,${localStorage.getItem('learnLang')},${localStorage.getItem('knownLang')})">
            <img class="characterHead" src="${heads[i]}">
            <div>
                <h2>${translations[j][parseInt(localStorage.getItem("knownLang"))]}</h2>
                <div class='starHolder'>
                    ${starStr}
                </div>
            </div>
        </button>
        `;

        if(i != 'B2' || i == 'B2'){
            let dotAmt = 2;
            if(convoInd % 4  == 0 && convoInd != 0)dotAmt = 3;
            for(let j = 0; j < dotAmt; j++){
                document.getElementById("selectHolder").innerHTML += `<div class='dotSeparator' style='transform:translate(${offsets[curOffset]}px,0)'></div>`
                curOffset++;
                curOffset %= offsets.length;
            }
            curOffset++;
            curOffset %= offsets.length;
            curOffset++;
            curOffset %= offsets.length;
            
            
        }
        convoInd++;
    }
}