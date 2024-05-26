const translations = {
    "choose an option":["Choose an option:","Chagua chaguo:","Yan aṣayan kan:","Họrọ nhọrọ:","Zaɓi kuma zaɓi:"],
    "continue":["Continue","Endelea","Tesiwaju","Gaa n'ihu","Ci gaba"],
    "complete":["Complete!","Kamili!","Pari!","Zuru oke!","Kammala!"],
    "conversations":["Conversations","Maongezi","Itakuroso","Ikori","Tattaunawa"],
    "convoDesc":["Practice your speaking skills in real-life situations!","Fanya mazoezi ya ustadi wako wa kuzungumza katika hali halisi ya maisha!","Ṣe adaṣe awọn ọgbọn sisọ rẹ ni awọn ipo gidi-aye!","Zụlite nkà ikwu okwu gị n'ọnọdụ dị adị n'ezie!","Koyi dabarun magana a cikin yanayi na zahiri!"],
    "vocab":["Vocabulary","Msamiati","Fokabulari","Okwu","Kalmomi"],
    "vocabDesc":["Learn new words and phrases!","Jifunze maneno na misemo mpya!","Kọ ẹkọ awọn ọrọ titun ati awọn gbolohun ọrọ!","Mụta okwu na akpaokwu ọhụrụ!","Koyi sababbin kalmomi da jimloli!"],
    "translate":["Translate","Kutafsiri","Tumọ","Sụgharịa","Fassara"],
    //conversations
    "Greetings!":["Greetings!","Salamu!","E Ki!","Kwuo Ndewo!","Gaisuwa!"],
    "How Many Siblings?":["How Many Siblings?","Ndugu Wangapi?","Awon Arakunrin Melo Ni?","Umunne Ole?","Yan Uwa Nawa?"],
    "Basketball Time!":["Basketball Time!","Wakati Wa Mpira Wa Kikapu!","Aago Boolu Inu Agbon!","Oge Boolu Basketball!","Lokacin Kwando!"],
    "Math Homework":["Math Homework","Kazi ya Nyumbani","Isiro Amurele","Oru Ulo Akwukwo","Aikin Gida na Lissafi"],
    "Guitar Lessons":["Guitar Lessons","Mafunzo ya Gitaa","Gita Eko","Nkuzi Gita","Darussan Gita"],
    "Where's the Passport!?":["Where's the Passport!?","Pasipoti Iko Wapi!?","Nibo Ni O Wa!?","Ebee Ka Paspotu Ahu Di!?","Ina Fasfo din yake!?"],
    "Time for Pizza!":["Time for Pizza!","Wakati Wa Pizza!","Akoko Fun Pizza!","Oge Maka Pizza!","Lokaci don Pizza!"],
    "Let's Go Skydiving!":["Let's Go Skydiving!","Twende Kuruka Angani!","Je Ka Lo Skydiving!","Ka Anyi Gaa Skydiving!","Mu Tafi Skydiving!"],
    "New Dog!":["New Dog!","Mbwa Mpya!","Aja Tuntun!","Nkita Ohuru!","Sabon Kare!"],
    "Do You Like to Read?":["Do You Like to Read?","Je, Unapenda Kusoma?","Se O Nife Lati Ka?","Ọ Na-amasi Gi Igu?","Kuna Son Karatu?"],
    "Help the Planet!":["Help the Planet!","Saidia Sayari!","Gba Ile Aye!","Nyere Uwa!","Taimaka wa Duniya!"],
    "Where are You From?":["Where are You From?","Unatoka Wapi?","Nibo Ni O Ti Wa?","Ebee Ka I Si?","Taimaka wa Duniya!"],
    //vocab
    "Common Phrases":["Common Phrases","Maneno Ya Kawaida","Awon Gbolohun Ti O Wopo","Akpaokwu Nkiti","Kalmomin gama-gari"],
    "Places":["Places","Maeneo","Awon ibi","Ebe","Wurare"],
    "Family":["Family","Familia","Ebi","Ezinulo","Iyali"],
    "People":["People","Watu","Eniyan","Ndi mmadu","Mutane"],
    "Activities":["Activities","Shughuli","Awon Ise-sise","Ihe Omume","Ayyuka"],
    "Travel":["Travel","Shughuli","Ajo","Ihe Omume","Njem","Tafiya"],
    "Numbers and Time":["Numbers and Time","Nambari Na Wakati","Awon Nomba Ati Akoko","Nomba Na Oge","Lambobi da Lokaci"],
    "School":["School","Shule","Ile-iwe","Ulo Akwukwo","Makaranta"]

}

function translate(element, meaning, lang){
    document.getElementById(element).innerHTML = translations[meaning][lang];
}

if(localStorage.getItem("learnLang") != null){
    translate("convoHeader","conversations",parseInt(localStorage.getItem("knownLang")));
    translate("convoDesc","convoDesc",parseInt(localStorage.getItem("knownLang")));
    translate("vocabHeader","vocab",parseInt(localStorage.getItem("knownLang")));
    translate("vocabDesc","vocabDesc",parseInt(localStorage.getItem("knownLang")));
}
