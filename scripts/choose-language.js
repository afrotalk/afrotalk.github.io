const languageChoices = {
    "I speak English:usa.png:0":[
        "I want to practice Swahili:tanzania.png:1",
        "I want to practice Yoruba:nigeria.png:2",
        "I want to practice Igbo:nigeria.png:3",
    ],

    "Nazungumza Kiswahili:tanzania.png:1":[
        "Ninataka kufanya mazoezi ya Kiingereza:usa.png:0",
        "Ninataka kufanya mazoezi ya Kiyoruba:nigeria.png:2",
        "Ninataka kufanya mazoezi ya Kiigbo:nigeria.png:3",
    ],

    "Yoruba ni mo n so:nigeria.png:2":[
        "Mo fe ko ede Geesi:usa.png:0",
        "Mo fe ko ede Swahili:tanzania.png:1",
        "Mo fe ko ede Igbo:nigeria.png:3",
    ],

    "A na m asu Igbo:nigeria.png:3":[
        "Achoro m imu Bekee:usa.png:0",
        "Achoro m imu Swahili:tanzania.png:2",
        "Achoro m imu Yoruba:nigeria.png:1",
    ]
}
function chooseLanguage(){
    openPage("languagePage");
    
    setTimeout(function(){
        document.getElementById("languageHolder").innerHTML = "";
        for(let i in languageChoices){
            const divData = i.split(":");
            document.getElementById("languageHolder").innerHTML += `
                <div class='languageChoice' onclick="localStorage.setItem('knownLang','${divData[2]}');chooseLearnLanguage('${i}')">
                    <img src='assets/flags/${divData[1]}'><div></div><h2>${divData[0]}</h2>
                </div>
            `
        }
    },FADESPEED)
}

function chooseLearnLanguage(knownLang){
    const knownLangId = knownLang.split(":")[2];
    openPage("languagePage");
    setTimeout(function(){
        document.getElementById("languageHolder").innerHTML = "";
        for(let i of languageChoices[knownLang]){
            const divData = i.split(":");
            document.getElementById("languageHolder").innerHTML += `
                <div class='languageChoice' onclick="localStorage.setItem('learnLang','${divData[2]}');fadeReload()">
                <img src='assets/flags/${divData[1]}'><div></div><h2>${divData[0]}</h2>
                </div>
            `;
        }
    },FADESPEED)

}
