const translations = {
    "choose an option":["Choose an option:","Chagua chaguo:","Yan aṣayan kan:","Họrọ nhọrọ:"],
    "continue":["Continue","Endelea","Tesiwaju","Gaa n'ihu"],
    "complete":["Complete!","Kamili!","Pari!","Zuru oke!"],
    "conversations":["Conversations","Maongezi","Itakuroso","Ikori"],
    "convoDesc":["Practice your speaking skills in real-life situations!","Fanya mazoezi ya ustadi wako wa kuzungumza katika hali halisi ya maisha!","Ṣe adaṣe awọn ọgbọn sisọ rẹ ni awọn ipo gidi-aye!","Zụlite nkà ikwu okwu gị n'ọnọdụ dị adị n'ezie!"],
    "translate":["Translate","Kutafsiri","Tumọ","Sụgharịa"],
    //conversations
    "Greetings!":["Greetings!","Salamu!","E Ki!","Kwuo Ndewo!"],
    "How Many Siblings?":["How Many Siblings?","Ndugu Wangapi?","Awon Arakunrin Melo Ni?","Umunne Ole?"],
    "Basketball Time!":["Basketball Time!","Wakati Wa Mpira Wa Kikapu!","Aago Boolu Inu Agbon!","Oge Boolu Basketball!"],
    "Math Homework":["Math Homework","Kazi ya Nyumbani","Isiro Amurele","Oru Ulo Akwukwo"],
    "Guitar Lessons":["Guitar Lessons","Mafunzo ya Gitaa","Gita Eko","Nkuzi Gita"],
    "Where's the Passport!?":["Where's the Passport!?","Pasipoti Iko Wapi!?","Nibo Ni O Wa!?","Ebee Ka Paspotu Ahu Di!?"],
    "Time for Pizza!":["Time for Pizza!","Wakati Wa Pizza!","Akoko Fun Pizza!","Oge Maka Pizza!"],
    "Let's Go Skydiving!":["Let's Go Skydiving!","Twende Kuruka Angani!","Je Ka Lo Skydiving!","Ka Anyi Gaa Skydiving!"],
    "New Dog!":["New Dog!","Mbwa Mpya!","Aja Tuntun!","Nkita Ohuru!"],
    "Do You Like to Read?":["Do You Like to Read?","Je, Unapenda Kusoma?","Se O Nife Lati Ka?","Ọ Na-amasi Gi Igu?"],
    "Help the Planet!":["Help the Planet!","Saidia Sayari!","Gba Ile Aye!","Nyere Uwa!"],
    "Where are You From?":["Where are You From?","Unatoka Wapi?","Nibo Ni O Ti Wa?","Ebee Ka I Si?"],
    //vocab
    "Common Phrases":["Common Phrases","Maneno Ya Kawaida","Awon Gbolohun Ti O Wopo","Akpaokwu Nkiti"],
    "Places":["Places","Maeneo","Awon ibi","Ebe"],
    "Family":["Family","Familia","Ebi","Ezinulo"],
    "People":["People","Watu","Eniyan","Ndi mmadu"],
    "Activities":["Activities","Shughuli","Awon Ise-sise","Ihe Omume"],
    "Travel":["Travel","Shughuli","Ajo","Ihe Omume","Njem"],
    "Numbers and Time":["Numbers and Time","Nambari Na Wakati","Awon Nomba Ati Akoko","Nomba Na Oge"],
    "School":["School","Shule","Ile-iwe","Ulo Akwukwo"]

}

function translate(element, meaning, lang){
    document.getElementById(element).innerHTML = translations[meaning][lang];
}

if(localStorage.getItem("learnLang") != null){
    translate("convoHeader","conversations",parseInt(localStorage.getItem("knownLang")));
    translate("convoDesc","convoDesc",parseInt(localStorage.getItem("knownLang")));
}
