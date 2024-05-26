const languageChoices = {
    "I speak English:usa.png:0":[
        "I want to practice Swahili:tanzania.png:1",
        "I want to practice Yoruba:nigeria.png:2",
        "I want to practice Igbo:nigeria.png:3",
        "I want to practice Hausa:niger.png:4"
    ],

    "Nazungumza Kiswahili:tanzania.png:1":[
        "Ninataka kufanya mazoezi ya Kiingereza:usa.png:0",
        "Ninataka kufanya mazoezi ya Kiyoruba:nigeria.png:2",
        "Ninataka kufanya mazoezi ya Kiigbo:nigeria.png:3",
        "Ninataka kufanya mazoezi ya Kihausa:niger.png:4"
    ],

    "Yoruba ni mo n so:nigeria.png:2":[
        "Mo fe ko ede Geesi:usa.png:0",
        "Mo fe ko ede Swahili:tanzania.png:1",
        "Mo fe ko ede Igbo:nigeria.png:3",
        "Mo fe sise Hausa:niger.png:4"
    ],

    "A na m asu Igbo:nigeria.png:3":[
        "Achoro m imu Bekee:usa.png:0",
        "Achoro m imu Swahili:tanzania.png:1",
        "Achoro m imu Yoruba:nigeria.png:2",
        "Achoro m imu Hausa:niger.png:4"
    ],

    "Ina jin Hausa:niger.png:4":[
        "Ina so in yi Turanci:usa.png:0",
        "Ina so in yi Swahili:tanzania.png:1",
        "Ina so in yi Yarbanci:nigeria.png:2",
        "Ina so in yi Igbo:nigeria.png:3",
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
        // hide navbar
        document.getElementById("navbar").style["display"] = "none";
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
