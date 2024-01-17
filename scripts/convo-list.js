//characters
const heads = {
    "A1":"assets/faces/ife.png",
    "A2":"assets/faces/dara.png",
    "B1":"assets/faces/simon.png",
    "B2":"assets/faces/mimi.png",
};

// english, swahili, yoruba, igbo

const conversations = {
    "A1":{
        "Greetings!":[

            // pair 1
            [
                ["Hi!", "Habari!","Bawo ni!","Ndewo!"],
                ["Hello!", "Habari!","Bawo ni!","Nnọọ!"],
                ["Hey!","Habari!","Bawo ni.","Bawo ni."],
                ["Good morning!", "Habari za asubuhi!","E kaaro!","Ụtụtụ ọma!"]
            ],
            [
                ["Hi!", "Habari!","Bawo ni!","Ndewo!"],
                ["Hello!", "Habari!","Bawo ni!","Nnọọ!"],
                ["Hey!","Habari!","Bawo ni.","Bawo ni."],
                ["Good morning!", "Habari za asubuhi!","E kaaro!","Ụtụtụ ọma!"]
            ],

            // pair 2
            [
                ["How are you?", "Habari gani?","Bawo ni o se wa?","Kedu ka ị mere"],
                ["How are you doing?", "Unafanyaje?","Bawo ni o se wa?","Kedu ka ị mere?"]
            ],
            [
                ["I'm good, thank you! How are you?", "Niko sawa, asante! Habari yako?","Mo dara, o ṣeun! Bawo ni o se wa?","Adị m mma, daalụ! Kedu ka ị mere?"],
                ["I'm great, thanks! And you?", "Niko vizuri, asante! Na wewe?","Mo wa nla, o ṣeun! Iwo na a?","Adị m mma, daalụ! ma gị?"],
                ["I am good. How are you?", "Niko sawa. Habari yako?","Emi dara. Bawo ni o se wa?","I am good. How are you?"]
            ],

            // pair 3
            [
                ["I'm good, thank you. Goodbye!", "Niko sawa, asante. Kwaheri!","Mo dara, o ṣeun. O dabọ!","Adị m mma, daalụ. Ka ọ dị!"],
                ["I'm good too! Bye!", "Niko vizuri pia! Kwaheri!","Emi naa dara! Bye!","Adịkwa m mma! Daalụ!"],
                ["I'm great, thanks! See you later!", "Niko vizuri, asante! Tutaonana baadaye!","Mo wa nla, o ṣeun! Wo o nigbamii!","Adị m mma, daalụ! Ka ahụ ma emechaa!"]
            ],
            [
                ["Bye!", "Kwaheri!","O dabọ!","Daalụ!"],
                ["See you later!", "Tutaonana baadaye!","Ma a ri e laipe!","Ka ahụ ma emechaa!"],
                ["Goodbye!","Kwaheri!","O dabọ!","Ka ọ dị!"]
            ]

        ],

        "How Many Siblings?":
        [
            [
                ["Hey! Do you have any siblings?", "Habari! Je, una ndugu au dada?","Hey! Ṣe o ni eyikeyi tegbotaburo?","Hey! Ị nwere ụmụnne ọ bụla?"],
                ["Hello! Do you have siblings?", "Habari! Je, una ndugu au dada?","Ẹ̀nlẹ̀ o! Ṣe o ni awọn tegbotaburo?","Nnọọ! Ị nwere ụmụnne?"]
            ],
            [
                ["Yes, I have two older sisters! How about you?", "Ndiyo, nina dada wawili wakubwa! Wewe je?","Bẹẹni, Mo ni awọn arabinrin agbalagba meji! Iwo na nko?","Ee, enwere m ụmụnne nwanyị abụọ tọrọ! Kedu maka gị?"],
                ["I don't have any siblings. Do you?", "Sina ndugu au dada. Wewe je?","Emi ko ni awọn tegbotaburo. Ṣe o?","Enweghị m ụmụnne ọ bụla. Ị nwere?"]
            ],
            [
                ["Yes, I have nine siblings!", "Ndiyo, nina ndugu tisa!","Bẹẹni, Mo ni awọn arakunrin mẹsan!","Ee, enwere m ụmụnne itoolu!"],
                ["Yes, I have nine!", "Ndiyo, nina tisa!","Bẹẹni, Mo ni mẹsan!","Ee, enwere m itoolu!"]
            ],
            [
                ["You have nine siblings!?", "Una ndugu tisa!?","O ni mẹsan tegbotaburo!?","Ị nwere ụmụnne itoolu!?"],
                ["You have nine!?", "Una tisa!?","O ni mẹsan!?","Ị nwere itoolu!?"]
            ],
            [
                ["Haha! Yes, I have nine siblings!","Haha! Ndiyo, nina ndugu tisa!","Haha! Bẹẹni, Mo ni awọn arakunrin mẹsan!","Haha! Ee, enwere m ụmụnne itoolu!"],
                ["Yes! I have nine!", "Ndiyo! Nina tisa!","Bẹẹni! Mo ni mẹsan!","Ee! Enwere m itoolu!"]
            ],
            [
                ["What are their names?", "Majina yao ni yapi?","Kini oruko won?","Gịnị bụ aha ha?"]
            ],
            [
                ["Teo, Temi, Tolu, Bari, Tiwa, Tope, Sara, Domi, and Daio!", "Teo, Temi, Tolu, Bari, Tiwa, Tope, Sara, Domi, na Daio!","Teo, Temi, Tolu, Bari, Tiwa, Tope, Sara, Domi, ati Daio!","Teo, Temi, Tolu, Bari, Tiwa, Tope, Sara, Domi, na Daio!"]
            ],
            [
                ["Wow, that's a lot!", "Lo, hiyo ni mingi!","Iro ohun, ti o ni opolopo!","Chei, nke ahụ dị ukwuu!"]
            ]
        ],

        "Basketball Time!":[
            //1
            [
                ["Hey, do you play sports?","Hujambo, unacheza michezo?","Hey, ṣe o ṣe ere idaraya?","Hey, ị na-egwu egwuregwu?"],
                ["Hello! do you like sports?","Habari! unapenda michezo?","Ẹ̀nlẹ̀ o! ṣe o fẹran awọn ere idaraya?","Nnọọ! egwuregwu na-amasị gị?"]
            ],
            [
                ["I really like basketball! How about you?","Napenda sana mpira wa vikapu! Je wewe?","Mo fẹran bọọlu inu agbọn gaan! Iwo na nko?","Basketball na-amasị m nke ukwuu! Kedu maka gị?"],
                ["Yes! I like to play basketball. Do you play a sport?","Ndiyo! Ninapenda kucheza mpira wa vikapu. Je, unacheza mchezo?","Bẹẹni! Mo nifẹ lati ṣe bọọlu inu agbọn. Ṣe o ṣe ere idaraya kan?","Ee! Ịgba basketball na-amasị m. Ị na-egwu egwuregwu?"]
            ],
            //2
            [
                ["Yes, I play basketball too!","Ndiyo, mimi hucheza mpira wa vikapu pia!","Bẹẹni, Mo tun ṣe bọọlu inu agbọn!","Ee, m na-agbakwa basketball!"],
                ["Wow, I also play basketball!","Lo, mimi pia hucheza mpira wa vikapu!","Iro ohun, Mo tun mu bọọlu inu agbọn!","Chei, m na-agbakwa basketball!"]
            ],
            [
                ["Wow, do you want to play with me?","Lo, unataka kucheza na mimi?","Iro ohun, ṣe o fẹ lati mu ṣiṣẹ pẹlu mi?","Chei, ị chọrọ ka mụ na ya gwurie egwu?"],
                ["Really? Do you want to play with me?","Kweli? Je, unataka kucheza na mimi?","Lootọ? Se o fe sere pelu mi?","N'ezie? Ị chọrọ ka m na gị gwukọrịta egwu?"]
            ],
            //3
            [
                ["Sure! Where do you want to play?","Hakika! Unataka kucheza wapi?","Daju! Nibo ni o fẹ lati mu ṣiṣẹ?","N'ezie! Ebee ka ị chọrọ igwu egwu?"],
                ["Yeah, but where can we play?","Ndio, lakini tunaweza kucheza wapi?","Bẹẹni, ṣugbọn nibo ni a le ṣere?","Ee, mana olee ebe anyị nwere ike igwu egwu?"]
            ],
            [
                ["I have a basketball hoop at my house. We can play there!","Nina pete ya mpira wa vikapu nyumbani kwangu. Tunaweza kucheza huko!","Mo ni hoop bọọlu inu agbọn ni ile mi. A le mu nibẹ!","Enwere m bọọlụ basketball n'ụlọ m. Anyị nwere ike igwu egwu ebe ahụ!"],
                ["We can play basketball at my house! I have a basketball hoop.","Tunaweza kucheza mpira wa vikapu nyumbani kwangu! Nina pete ya mpira wa vikapu.","A le ṣe bọọlu inu agbọn ni ile mi! Mo ni hoop bọọlu inu agbọn.","Anyị nwere ike ịgba bọọlụ n'ụlọ m! Enwere m egwuregwu bọọlụ."]
            ]
            
        ],
    },
    "A2":{
        "Math Homework":
        [
            //1
            [
                ["Hey, have you started the math homework?","Habari, umeanza kazi ya hesabu?","Hey, ṣe o ti bẹrẹ iṣẹ amurele math?","Hey, ị malitela ọrụ ụlọ mgbakọ na mwepụ?"],
                ["Have you done the math homework yet?","Je, umeshafanya kazi ya hesabu?","Njẹ o ti ṣe iṣẹ amurele mathimatiki sibẹsibẹ?","Ị emela ihe omume mgbakọ na mwepụ?"],
                ["Hi! Have started working on the math homework?","Habari! Umeanza kufanya kazi ya hesabu?","Hi! Njẹ o ti bẹrẹ ṣiṣẹ lori iṣẹ amurele mathematiki?","Ndewo! Amalitela ịrụ ọrụ na mgbakọ na mwepụ?"]
            ],
            [
                ["No, its too hard for me. How about you?","Hapana, ni ngumu sana kwangu. Vipi wewe?","Rara, o le pupọ fun mi. Iwo na nko?","Mba, o siri m ike. Kedu maka gị?"],
                ["The math is too hard for me. Have you finished it yet?","Hesabu ni ngumu sana kwangu. Umemaliza tayari?","Iṣiro le ju fun mi. Njẹ o ti pari rẹ sibẹsibẹ?","Mgbakọ na mgbakọ na mwepụ siri m ike. Ị mechaala ya?"]
            ],
            //2
            [
                ["Yes! I figured it out. Do you need some help?","Ndiyo! Nimetambua. Je, unahitaji msaada?","Bẹẹni! Mo ṣayẹwo. Ṣe o nilo iranlọwọ diẹ?","Ee! Achọpụtara m ya. Ị chọrọ enyemaka?"],
                ["It was hard for me too, but I figured it out. Do you want to work on it together?","Ilikuwa ngumu kwangu pia, lakini nilitambua. Je, ungependa kufanya kazi pamoja?","O tun le fun mi paapaa, ṣugbọn Mo rii daju. Ṣe o fẹ lati ṣiṣẹ lori rẹ papọ?","O siiri m ike, mana achọpụtara m ya. Ị chọrọ ịrụkọ ọrụ ọnụ na ya?"]
            ],

            [
                ["Sure! I really need help on it!","Hakika! Nahitaji sana msaada kuhusu hilo!","Bẹẹni! Mo nilo iranlọwọ lori rẹ gaan!","N'ezie! Achọrọ m enyemaka na ya!"],
                ["Yes! This homework is really hard!","Ndiyo! Kazi hii ni ngumu sana!","Bẹẹni! Iṣẹ amurele yii le gaan!","Ee! Ihe omume ụlọ akwụkwọ a siri ezigbo ike!"],
            ],

            //3
            [
                ["Great! Do you want to meet at the library?","Safi! Ungependa kukutana katika maktaba?","Nla! Ṣe o fẹ lati pade ni ile-ikawe?","Nnukwu! Ị chọrọ izute n'ụlọ akwụkwọ?"],
                ["No problem! Let's meet at the library!","Hakuna shida! Tuonane katika maktaba!","Kosi wahala! Jẹ ki a pade ni ìkàwé!","Nsogbu adịghị! Ka anyị zute n'ọbá akwụkwọ!"]
            ],
            [
                ["Ok, we'll go the library after school!","Sawa, tutakwenda maktaba baada ya shule!","O dara, a yoo lọ si ile-ikawe lẹhin ile-iwe!","Ọ dị mma, anyị ga-aga n'ọba akwụkwọ anyị gachara akwụkwọ!"],
                ["Sure, we'll go the library after school.","Hakika, tutakwenda maktaba baada ya shule.","Daju, a yoo lọ si ile-ikawe lẹhin ile-iwe.","N'ezie, anyị ga-aga n'ọbá akwụkwọ ma anyị gụchaa akwụkwọ."]
            ]
        ],

        "Guitar Lessons":
        [
            //1
            [
                ["Hey, what are your hobbies?","Habari, ni hobbi zako zipi?","Hey, kini awọn iṣẹ aṣenọju rẹ?","Hey, kedu ihe omume ntụrụndụ gị?"],
                ["Hi! What do you like to do for fun?","Habari! Unapenda kufanya nini kwa furaha?","Hi! Kini o nifẹ lati ṣe fun igbadun?","Hi! Kedu ihe na-amasị gị ime ihe ọchị?"]
            ],
            [
                ["I'm starting learn guitar. It's fun, but it's hard.","Ninaanza kujifunza gitaa. Ni furaha, lakini ni ngumu.","Mo bẹrẹ kọ gita. O jẹ igbadun, ṣugbọn o le.","M na-amalite ịmụta guitar. Ọ na-atọ ụtọ, ma ọ siri ike."],
                ["I'm trying to learn how to play guitar. It's a little hard.","Ninajaribu kujifunza jinsi ya kucheza gitaa. Kidogo ni ngumu.","Mo n gbiyanju lati ko bi lati mu gita. O le die.","M na-agbalị ịmụta otú e si akpọ ụbọ. O siri ike ntakịrị."]
            ],
            //2
            [
                ["Really? I love guitar! I've been playing for ten years!","Kweli? Napenda gitaa! Nimekuwa nikicheza kwa miaka kumi!","Lootọ? Mo ni ife gita! Mo ti sọ a ti ndun fun ọdun mẹwa!","N'ezie? Ahụrụ m guitar n'anya! A na m egwu egwu afọ iri!"],
                ["I like guitar too! I've actually been playing since I was a little kid!", "Mo tun fẹ gita! Mo ti n ṣere nitootọ lati igba ọmọde kekere kan!","guitar na-amasịkwa m! M na-egwuri egwu kemgbe m bụ nwata!"]
            ],
            [
                ["Wow! Could you please teach me?","Wah! Unaweza kunifundisha, tafadhali?","Iro ohun! Jọwọ ṣe o le kọ mi?","Chei! Biko ị nwere ike ịkụziri m?"],
                ["Cool! Could you please help me learn?","Safi! Unaweza kunisaidia kujifunza, tafadhali?","Itura! Jọwọ ṣe o le ran mi lọwọ lati kọ ẹkọ?","Ọ dị mma! Biko ị nwere ike inyere m aka ịmụta?"]
            ],
            //3
            [
                ["Of course! We can practice guitar at my house on Friday.", "Bila shaka! Tunaweza kujifunza gitaa nyumbani kwangu Ijumaa.","Dajudaju! A le ṣe gita ni ile mi ni ọjọ Jimọ.","N'ezie! Anyị nwere ike na-akụ ụbọ akwara n'ụlọ m na Fraịde."]
            ],
            [
                ["Ok! I'll see you on Friday!","Sawa! Nitakuona Ijumaa!","O dara! Emi yoo ri ọ ni ọjọ Jimọ!","Ọ dị mma! Aga m ahụ gị na Fraịde!"],
            ]
        ],
        "Where's the Passport!?":
        [
            //1
            [
                ["I'm going to go to the airport soon. Have you seen my passport?","Ninaenda uwanja wa ndege hivi karibuni. Umewahi kuona pasipoti yangu?","Emi yoo lọ si papa ọkọ ofurufu laipẹ. Nje o ti ri iwe irinna mi?","Aga m aga ọdụ ụgbọ elu ngwa ngwa. Ị hụla paspọtụ m?"],
                ["I'm going to the airport soon but I can't find my passport!","Ninaenda uwanja wa ndege hivi karibuni lakini siwezi kupata pasipoti yangu!","Mo n lọ si papa ọkọ ofurufu laipẹ ṣugbọn emi ko le rii iwe irinna mi!","M na-aga ọdụ ụgbọ elu n'oge na-adịghị anya mana ahụghị m paspọtụ m!"]
            ],
            [
                ["Have you checked in the bedroom?","Umekagua chumbani?","Njẹ o ti ṣayẹwo ni yara yara?","Ị leleela n'ime ime ụlọ?"],
                ["Have you looked in your bedroom?","Umeangalia chumbani kwako?","Ṣe o ti wo inu yara rẹ?","Ị lela anya n'ime ime ụlọ gị?"]
            ],
            //2
            [
                ["Yes but it's not there!","Ndiyo, lakini haipo!","Bẹẹni ṣugbọn ko si nibẹ!","Ị lela anya n'ime ime ụlọ gị?"],
                ["The passport isn't in there!","Passport haipo ndani!","Iwe irinna ko si nibe!","Paspọtụ ahụ anọghị ebe ahụ!"],
            ],
            [
                ["How about the kitchen?","Vipi kuhusu jikoni?","Bawo ni nipa idana?","Kedu maka kichin?"],
                ["Have you checked in the kitchen?","Umekagua jikoni?","Njẹ o ti ṣayẹwo ni ibi idana ounjẹ?","Ị lerela na kichin?"],
                ["Maybe it's in the kitchen!","Labda ipo jikoni!","Boya o wa ni ibi idana ounjẹ!","Ma eleghị anya, ọ dị na kichin!"]
            ],
            //3
            [
                ["It's not in there either!","Hapo pia haipo!","Ko si nibẹ boya!","Ọ bụghịkwa ebe ahụ!"],
                ["Oh no! It's not in the kitchen either?","La! Haipo jikoni pia?","Bẹẹkọ! Ko si ni ibi idana boya?","Ee e! Ọ dịghịkwa na kichin?"]
            ],
            [
                ["What does it look like?","Inaonekanaje?","Kini o dabi?","Kedu ka ọ dị?"],
                ["What does the passport look like?","Pasipoti inaonekanaje?","Kini iwe irinna naa dabi?","Kedu ka paspọtụ ahụ dị?"]
            ],
            //4
            [
                ["The passport is small and blue. Have you seen it?","Pasipoti ni ndogo na ya bluu. Umewahi kuiona?","Iwe irinna naa jẹ kekere ati buluu. Nje o ti ri?","Paspọtụ ahụ dị obere na-acha anụnụ anụnụ. Ị hụla ya?"]
            ],
            [
                ["Small and blue?","Ndogo na ya bluu?","Kekere ati buluu?","Obere na-acha anụnụ anụnụ?"]
            ],
            //5
            [
                ["Yes! Have you seen it?","Ndiyo! Umewahi kuiona?","Bẹẹni! Nje o ti ri?","Ee! Ị hụla ya?"],
                ["Yes, small and blue! Have you seen it?","Ndiyo, ndogo na ya bluu! Umewahi kuiona?","Bẹẹni, kekere ati buluu! Nje o ti ri?","Ee, obere na-acha anụnụ anụnụ! Ị hụla ya?"]
            ],
            [
                ["...It's in your pocket.","...Ipo mfukoni mwako.","...O wa ninu apo rẹ.","...Ọ dị n'akpa gị."]
            ],
            //6
            [
                ["...Oh.","...Oh.","...Oh.","...Oh."],
                ["Ah...","Ah...","Ah...","Ah..."]
            ],
            [
                ["Haha, enjoy your trip!","Haha, furahia safari yako!","Haha, gbadun irin ajo rẹ!","Haha, nwee mmasị na njem gị!"]
            ]
        ]
    },
    "B1":{
        
        "Time for Pizza!":
        [
            //1
            [
                ["I want some pizza for dinner! What do you think?","Nataka pizza kwa chakula cha jioni! Unadhani nini?","Mo fẹ pizza fun ale! Kini o le ro?","Achọrọ m Pizza maka nri abalị! Kedu ihe ị chere?"],
                ["I think we should eat pizza for dinner. How about you?","Nadhani tunapaswa kula pizza kwa chakula cha jioni. Je wewe?","Mo ro pe o yẹ ki a jẹ pizza fun ale. Iwo na nko?","Echere m na anyị kwesịrị iri pizza maka nri abalị. Kedu maka gị?"],
                ["I'm hungry! Do you want some pizza?","Nina njaa! Unataka pizza?","Ebi n pa mi! Ṣe o fẹ pizza diẹ?","Agụụ na-agụ m! Ị chọrọ pizza?"]
            ],
            [
                ["Sure! What toppings?","Hakika! Vipande gani?","Daju! Ohun toppings?","N'ezie! Kedu ihe toppings?"],
                ["I want pizza too! What toppings?","Nami nataka pizza! Vipande gani?","Mo fẹ pizza paapaa! Kini awọn toppings?","Achọrọ m pizza! Kedu ihe toppings?"],
                ["Yes, I'm so hungry! What toppings do you want?","Ndiyo, nina njaa sana! Vipande gani unavyotaka?","Bẹẹni, ebi npa mi! Ohun toppings ni o fẹ?","Ee, agụụ na-agụ m! Kedu ihe toppings ị chọrọ?"],
            ],

            //2
            [
                ["I like bacon on pizza. How about you?","Napenda bacon kwenye pizza. Vipi wewe?","Mo fẹran ẹran ara ẹlẹdẹ lori pizza. Bawo ni nipa rẹ?","Anụ ezi na pizza na-amasị m. Kedu maka gị?"],
                ["I want bacon. What do you want?","Nataka nyama ya nguruwe. Wewe unataka nini?","Mo fẹ ẹran ara ẹlẹdẹ. Kin o nfe?","Achọrọ m anụ ezi. Kedu ihe ị chọrọ?"],
            ],
            [
                ["I prefer pineapple.","Naipendelea mananasi.","Ope oyinbo ni mo feran.","Painiapulu masịrị m."],
                ["I like pizza with pineapple.","Napenda pizza yenye mananasi.","Mo fẹ pizza pẹlu ope oyinbo.","Pizza nwere painiapulu na-amasị m."]
            ],

            //3
            [
                ["Oh! The pizza can be half bacon and half pineapple!","Oh! Pizza inaweza kuwa nusu bacon na nusu mananasi!","Oh! Pizza le jẹ idaji ẹran ara ẹlẹdẹ ati idaji ope oyinbo!","Oh! Pizza nwere ike ịbụ ọkara anụ ezi na ọkara painiapulu!"],
                ["We can have a pizza with half bacon and half pineapple!","Tunaweza kuwa na pizza nusu bacon na nusu mananasi!","A le ni pizza kan pẹlu idaji ẹran ara ẹlẹdẹ ati idaji ope oyinbo!","Anyị nwere ike ịnweta pizza nwere ọkara anụ ezi na ọkara painiapulu!"]
            ],
            [
                ["Perfect! What size should we get?","Safi kabisa! Tununue saizi gani?","Pipe! Iwọn wo ni o yẹ ki a gba?","Zuru oke! Kedu nha anyị kwesịrị inweta?"],
                ["Great idea! What size pizza should we get?","Wazo zuri! Tununue pizza ya saizi gani?","Ero nla! Kini iwọn pizza yẹ ki a gba?","Ezigbo echiche! Kedu nha pizza anyị kwesịrị inweta?"]
            ],

            //4
            [
                ["I'm really hungry! Let's get a large!","Nina njaa sana! Tuchukue kubwa!","Ebi npa mi gaan! Jẹ ki a gba nla kan!","Agụụ na-agụ m nke ukwuu! Ka anyị nweta nnukwu!"]
            ],
            [
                ["Me too! Let's drive to the pizza shop!","Mimi pia! Hebu tuendeshe hadi duka la pizza!","Emi na! Jẹ ki a wakọ si ile itaja pizza!","M onwe m kwa! Ka anyị jiri ụgbọala gaa ụlọ ahịa Pizza!"],
                ["Good idea! I'll place the order.","Wazo zuri! Nitaweka agizo.","Imọran to dara! Emi yoo paṣẹ.","Ezigbo elo! Aga m etinye iwu."]
            ]
        ],
        "Let's Go Skydiving!":
        [
            //1
            [
                ["Do you have any plans for the weekend?","Je, una mipango yoyote kwa mwisho wa wiki?","Ṣe o ni awọn ero eyikeyi fun ipari ose?","Ị nwere atụmatụ ọ bụla maka izu ụka?"],
                ["Hey, are you busy this weekend?","Hujambo, je, uko busy mwisho wa wiki hii?","Hey, ṣe o n ṣiṣẹ lọwọ ni ipari ose yii?","Hey, ị na-arụsi ọrụ ike na ngwụcha izu ụka a?"],
            ],
            [
                ["Not really, I don't have any plans. How about you?","Hapana sana, sina mipango. Vipi kuhusu wewe?","Kii ṣe looto, Emi ko ni awọn ero eyikeyi. Iwo na nko?","Ọbụghị n'ezie, enweghị m atụmatụ ọ bụla. Kedu maka gị?"],
                ["Nope! I'll be home all weekend. What about you?","Hapana! Nitakuwa nyumbani mwisho wa wiki nzima. Vipi kuhusu wewe?","Bẹẹkọ! Emi yoo wa ni ile ni gbogbo ipari ose. Iwọ nkọ?","Mba! Aga m alaghachi na ngwụcha izu ụka niile. Kedu maka gị?"],
            ],

            //2
            [
                ["I'm going skydiving! Want to join?","Ninakwenda kuparaushuti! Ungependa kujiunga?","Mo n lọ skydiving! Ṣe o fẹ darapọ mọ?","M na-aga skydiving! Achọrọ isonye?"],
                ["I'm going skydiving on Saturday! Do you want to come?","Ninakwenda kuparaushuti Jumamosi! Unataka kuja?","Mo n lọ skydiving on Saturday! Ṣe o fẹ lati wa?","M na-aga skydiving na Satọde! Ị chọrọ ịbịa?"]
            ],
            [
                ["Skydiving!? Are you insane!","Kuparaushuti!? Je, wewe ni wa kupagawa!","Skydiving!? Ṣe o ya were!","Skydiving!? Ị na-agba ara!"],
                ["No! Skydiving is so scary!","Hapana! Kuparaushuti ni kitu cha kutisha sana!","Rara! Skydiving jẹ ki idẹruba!","Mba! Skydiving dị egwu!"]
            ],

            //3
            [
                ["Haha, its not scary at all once you've tried it. I promise!","Haha, si kitu cha kutisha kabisa mara tu unapojaribu. Nakuahidi!","Haha, kii ṣe idẹruba rara ni kete ti o ti gbiyanju rẹ. Mo ṣe adehun!","Haha, ọ bụghị egwu ma ọlị ozugbo ị nwara ya. Ekwere m gị nkwa!"],
                ["Don't worry! Skydiving is completely safe! Try it!","Usijali! Kuparaushuti ni salama kabisa! Jaribu!","Maṣe yọ ara rẹ lẹnu! Skydiving jẹ patapata ailewu! Danwo!","Echegbula onwe gị! Skydiving enweghị nchebe kpamkpam! Gbalịa ya!"]
            ],
            [
                ["Alright, I'll go skydiving!","Sawa, nitakwenda kuparaushuti!","O dara, Emi yoo lọ si inu ọrun!","Ọ dị mma, m ga-aga skydiving!"],
                ["Ahh...Ok! Let's go skydiving!","Ahh...Sawa! Twende kuparaushuti!","Ahh... oke! Ka anyị gaa skydiving!"]
            ]
        ],
        "New Dog!":
        [
            //1
            [
                ["Hey, do you want a dog?","Halo, unataka mbwa?","Hey, ṣe o fẹ aja kan?","Hey, ị chọrọ nkịta?"],
                ["Hey! Do you want to get a dog?","Habari! Je, unataka kupata mbwa?","Hey! Ṣe o fẹ lati gba aja kan?","Hey! Ị chọrọ inweta nkịta?"]
            ],
            [
                ["Yes! Why do you ask?","Ndiyo! Kwa nini unauliza?","Bẹẹni! Kilo de ti o bere?","Ee! Gịnị ka iji ajụrụ?"],
                ["Yes, I love dogs! Why do you ask?","Ndiyo, napenda mbwa! Kwa nini unauliza?","Bẹẹni, Mo nifẹ awọn aja! Kilo de ti o bere?","Ee, ahụrụ m nkịta n'anya! Gịnị ka iji ajụrụ?"]
            ],
            //2
            [
                ["I'm too busy for my dog. I want to give him to someone else.","Nina shughuli nyingi sana kwa mbwa wangu. Nataka kumpa mtu mwingine.","Mo nšišẹ pupọ fun aja mi. Mo fẹ lati fi fun elomiran.","Ana m arụ ọrụ nke ukwuu maka nkịta m. Achọrọ m inye ya onye ọzọ."],
                ["I don't have enough time to train my dog, so I want to give him away.","Sina muda wa kutosha kumfundisha mbwa wangu, kwa hiyo nataka kumpa mtu mwingine.","Emi ko ni akoko ti o to lati kọ aja mi, nitorina Mo fẹ lati fi fun ẹlomiran.","Enweghị m oge zuru oke iji zụọ nkịta m, yabụ achọrọ m inye ya onye ọzọ."]
            ],
            [
                ["Ah. What is he like?","Ah. Je, yukoje?","Ah. Báwo ló ṣe rí?","Ah. Olee otú ọ dị?"],
                ["Oh. What is he like?","Oh. Je, yukoje?","Oh. Báwo ló ṣe rí?","Oh. Olee otú ọ dị?"]
            ],
            //3
            [
                ["He is tiny, but he is very fast and energetic!","Yeye ni mdogo, lakini ana haraka sana na mwenye nguvu!","O jẹ kekere, ṣugbọn o yara pupọ ati agbara!","Ọ dị obere, mana ọ na-agba ọsọ na ume!"],
                ["He is a small dog, but he is also very fast energetic!","Yeye ni mbwa mdogo, lakini pia ana nguvu haraka sana!","O jẹ aja kekere, ṣugbọn o tun ni agbara iyara pupọ!","Ọ bụ obere nkịta, mana ọ na-agbakwa ọsọ ọsọ!"]
            ],
            [
                ["I'll take him! I love small and energetic dogs!","Nitamchukua! Ninapenda mbwa wadogo na wenye nguvu!","Emi yoo mu u! Mo nifẹ awọn aja kekere ati alagbara!","Aga m ewere ya! Ahụrụ m nkịta ngwa ngwa n'anya!"]
            ]
        ]
        
    },
    "B2":{
        "Do You Like to Read?":[
            //1
            [
                ["Hey! Do you like to read?","Halo! Je, unapenda kusoma?","Hey! Ṣe o nifẹ lati ka?","Hey! Ọ na-amasị gị ịgụ?"],
                ["Hi! Are you into reading?","Habari! Je, unavutiwa na kusoma?","Hi! Ṣe o wa ninu kika?","Ndewo! Ị na-agụ akwụkwọ?"]
            ],
            [
                ["Yes! I personally like fiction books with a lot of action and suspense. How about you?","Ndiyo! Mimi binafsi napenda vitabu vya kubuni na vitendo vingi na msisimko. Vipi kuhusu wewe?","Bẹẹni! Mo tikalararẹ fẹran awọn iwe itan-akọọlẹ pẹlu iṣe pupọ ati ifura. Iwo na nko?","Ee! Akwụkwọ akụkọ ifo na-amasị m nke ukwuu nke nwere ọtụtụ ihe na-enweghị atụ. Kedu maka gị?"],
                ["Yeah, I prefer fiction over non-fiction. I love stories with a lot of drama. What kind of books do you like?","Ndiyo, napendelea kubuni kuliko ukweli. Napenda hadithi zenye drama nyingi. Vitabu vipi unavyopenda?","Bẹẹni, Mo fẹran itan-akọọlẹ ju ti kii ṣe itan-akọọlẹ. Mo ni ife awọn itan pẹlu kan pupo ti eré. Iru awọn iwe wo ni o fẹran?","Ee, a na m amasị akụkọ ifo karịa akụkọ ifo. Akụkọ nwere ọtụtụ ihe nkiri na-amasị m. Kedu ụdị akwụkwọ na-amasị gị?"]
            ],
            //2
            [
                ["I actually prefer non-fiction books about biology and physics. I love to use books to learn more about science.","Kwa kweli, napendelea vitabu vya ukweli kuhusu biolojia na fizikia. Napenda kutumia vitabu kujifunza zaidi kuhusu sayansi.","Mo fẹran awọn iwe ti kii ṣe itan-akọọlẹ nipa isedale ati fisiksi. Mo nifẹ lati lo awọn iwe lati ni imọ siwaju sii nipa imọ-jinlẹ.","A na m amasị akwụkwọ ndị na-abụghị akụkọ ifo gbasara bayoloji na physics. Ọ na-amasị m iji akwụkwọ mụtakwuo gbasara sayensị."],
                ["Personally, I like non-fiction books, because I like learning more about science. My favorite topics are biology and physics.","Mimi binafsi, napenda vitabu vya ukweli kwa sababu napenda kujifunza zaidi kuhusu sayansi. Mada zangu pendwa ni biolojia na fizikia.","Tikalararẹ, Mo fẹran awọn iwe ti kii ṣe itan-akọọlẹ, nitori Mo fẹran kikọ diẹ sii nipa imọ-jinlẹ. Awọn koko-ọrọ ayanfẹ mi jẹ isedale ati fisiksi.","Onwe m, akwụkwọ ndị na-abụghị akụkọ ifo na-amasị m, n'ihi na ọ na-amasị m ịmụtakwu gbasara sayensị. Isiokwu ọkacha mmasị m bụ bayoloji na physics."]
            ],
            [
                ["Wow, that's really cool! I love physics too! Who is your favorite physicist?","Wah, hiyo ni nzuri sana! Napenda fizikia pia! Mwanafizikia wako pendwa ni nani?","Iro ohun, ti o ni gan dara! Mo tun nifẹ fisiksi! Tani physicist ayanfẹ rẹ?","Chei, nke ahụ dị mma n'ezie! Ahụrụ m physics n'anya! Kedu onye ọkacha mmasị physics?"],
                ["Really? I'm really into physics as well! Who's your favorite physicist?","Kweli? Mimi pia nafurahia fizikia! Mwanafizikia wako pendwa ni nani?","Lootọ? Mo wa gaan sinu fisiksi pẹlu! Tani physicist ayanfẹ rẹ?","N'ezie? Anọkwa m na physics! Kedu onye ọkacha mmasị physics?"]
            ],
            //3
            [
                ["I really look up to Albert Einstein! His Theory of Relativity was revolutionary for our modern understanding of gravity.","Ninamheshimu sana Albert Einstein! Nadharia yake ya Urelativiti ilikuwa mapinduzi kwa uelewa wetu wa kisasa wa mvuto.","Ana m ele Albert Einstein anya n'ezie! Theory of Relativity ya bụ mgbanwe maka nghọta anyị nke oge a maka ike ndọda."],
                ["Albert Einstein! He made a huge impact on our understanding of gravity with his Theory of Relativity.","Albert Einstein! Aliathiri sana uelewa wetu wa mvuto na Nadharia yake ya Urelativiti.","Albert Einstein! O ṣe ipa nla lori oye wa ti walẹ pẹlu Imọ-jinlẹ ti ibatan."]
            ],
            [
                ["Interesting! I haven't read a lot about Einstein. Do you have any books you could lend me?","Kuvutia! Sijasoma mengi kuhusu Einstein. Je, una vitabu vyovyote unavyoweza kunikopesha?","Awon! Emi ko ka pupọ nipa Einstein. Ṣe o ni eyikeyi iwe ti o le ya mi?","Na-akpali mmasị! Agụbeghị m ọtụtụ ihe gbasara Einstein. Ị nwere akwụkwọ ọ bụla ị nwere ike ibinye m?"],
                ["Very interesting! I'd love to read more about it. Could you lend me any books about the Theory of Relativity?","Kuvutia sana! Ningependa kusoma zaidi kuhusu hilo. Je, unaweza kunikopesha vitabu vyovyote kuhusu Nadharia ya Urelativiti?","O dun pupọ! Emi yoo fẹ lati ka diẹ sii nipa rẹ. Ṣe o le ya mi ni awọn iwe eyikeyi nipa Ilana ti Ibasepo?","Na-adọrọ mmasị nke ukwuu! Ọ ga-amasị m ịgụkwu gbasara ya. Ị nwere ike ibinye m akwụkwọ ọ bụla gbasara Theory of Relativity?"]
            ],
            //4
            [
                ["Sure! I could lend you my book this Saturday.","Hakika! Ningeweza kukuazima kitabu changu Jumamosi hii.","Daju! Mo le ya iwe mi fun ọ ni Satidee yii.","N'ezie! Enwere m ike ibinye gị akwụkwọ m na Satọde a."],
                ["Of course! I'll get you one of my books by Saturday.","Bila shaka! Nitakuletea moja ya vitabu vyangu kufikia Jumamosi.","Dajudaju! Emi yoo gba ọkan ninu awọn iwe mi ni ọjọ Satidee.","N'ezie! Aga m enweta gị otu akwụkwọ m na Satọde."],
            ],
            [
                ["Thank you! I'll return it by next week.","Asante! Nitairudisha ifikapo wiki ijayo.","E dupe! Emi yoo da pada ni ọsẹ to nbọ.","Daalụ! Aga m eweghachi ya n'izu na-abịa."]
            ]
        ],
        "Help the Planet!":[
            //1
            [
                ["Hey! Have you been doing your recycling?","Habari! Je, umekuwa ukifanya kuchakata tena?","Hey! Njẹ o ti n ṣe atunlo rẹ?","Hey! Ị na-emegharị ihe gị?"],
            ],
            [
                ["Not really. I'm hesitant to start because recycling seems so confusing. Could you explain it to me?","Si kweli. Ninasitasita kuanza kwa sababu kuchakata kunaonekana kutatanisha. Unaweza kunifafanulia?","Be ko. Mo ṣiyemeji lati bẹrẹ nitori atunlo dabi ohun iruju. Ṣe o le ṣe alaye rẹ fun mi?","Ọ bụchaghị. Ọ na-esiri m ike ịmalite n'ihi na imegharị ihe yiri ka ọ na-agbagwoju anya. Ị nwere ike ịkọwara m ya?"],
                ["Not really. I want to do my recycling but its too confusing. Could you explain how it works?","Si kweli. Ninataka kufanya usindikaji wangu lakini inachanganya sana. Unaweza kueleza jinsi inavyofanya kazi?","Be ko. Mo fẹ ṣe atunlo mi ṣugbọn o ni iruju pupọ. Ṣe o le ṣalaye bi o ṣe n ṣiṣẹ?","Ọ bụchaghị. Achọrọ m ịmegharịgharị m mana ọ na-agbagwoju anya. Ị nwere ike ịkọwa ka ọ si arụ ọrụ?"]
            ],
            //2
            [
                ["Of course! Recycling is important because certain materials can't be thrown in the trash because they hurt the environment.","Bila shaka! Urejelezaji ni muhimu kwa sababu nyenzo fulani haziwezi kutupwa kwenye takataka kwa sababu zinaharibu mazingira.","Dajudaju! Atunlo jẹ pataki nitori awọn ohun elo kan ko le sọ sinu idọti nitori wọn ṣe ipalara ayika.","N'ezie! Imegharị ihe dị mkpa n'ihi na enweghị ike ịtụba ụfọdụ ihe n'ime ahịhịa n'ihi na ha na-emerụ gburugburu."],
                ["Sure! We need to recycle because some materials harm the environment when put in junkyards or landfills.","Hakika! Tunahitaji kusaga tena kwa sababu nyenzo zingine hudhuru mazingira zinapowekwa kwenye viwanja vya taka au madampo.","Daju! A nilo lati tunlo nitori diẹ ninu awọn ohun elo ṣe ipalara ayika nigba ti a ba fi sinu awọn ọgba-iku tabi awọn ibi-ilẹ.","N'ezie! Anyị kwesịrị imegharị ihe n'ihi na ụfọdụ ihe na-emerụ gburugburu ebe obibi mgbe a na-etinye ya n'ebe a na-ekpofu ahịhịa ma ọ bụ n'ebe a na-ekpofu ahịhịa."]
            ],
            [
                ["Ah I see. How do I know what things need to be recycled and what things need to be thrown away?","Ah naona. Nitajuaje ni vitu gani vinahitaji kurejeshwa na ni vitu gani vinapaswa kutupwa?","Ah Mo ri. Bawo ni Mo ṣe mọ kini awọn nkan ti o nilo lati tunlo ati awọn nkan wo ni o nilo lati danu?","Ah ahụrụ m. Olee otú m ga-esi mara ihe ndị e kwesịrị imegharịgharị na ihe ndị a ga-atụfu?"],
                ["Ok, that makes sense. But how do I know what to recycle and what to throw away?","Sawa, hiyo ina maana. Lakini nitajuaje nini cha kuchakata tena na nini cha kutupa?","O dara, iyẹn jẹ oye. Ṣugbọn bawo ni Mo ṣe mọ kini lati tunlo ati kini lati jabọ?","Ọ dị mma, nke ahụ nwere ezi uche. Ma olee otu m ga-esi mara ihe m ga-ejigharị na ihe m ga-atụfu?"]
            ],
            //3
            [
                ["Good question! Things like paper, plastic, glass, and metal should be recycled. These materials can be reused to build new things!","Swali zuri! Vitu kama karatasi, plastiki, glasi na chuma vinapaswa kusindika tena. Nyenzo hizi zinaweza kutumika tena kujenga vitu vipya!","O dara, iyẹn jẹ oye. Ṣugbọn bawo ni Mo ṣe mọ kini lati tunlo ati kini lati jabọ?","Ajuju di mma! Ihe ndị dị ka akwụkwọ, rọba, iko, na ígwè kwesịrị imegharị ya. Enwere ike iji ihe ndị a rụgharịa ihe ọhụrụ!"],
                ["Materials such as paper, plastic, glass, and metal should be recycled so they can be used to build new things!","Nyenzo kama vile karatasi, plastiki, glasi, na chuma lazima zitumike tena ili zitumike kujenga vitu vipya!","Awọn ohun elo bii iwe, ṣiṣu, gilasi, ati irin yẹ ki o tunlo ki a le lo wọn lati kọ awọn ohun titun!","A ghaghị imegharị ihe ndị dị ka akwụkwọ, rọba, iko, na ígwè ka e wee jiri ya rụọ ihe ọhụrụ!"],
            ],
            [
                ["Cool! I'm going to make sure to recycle from now on!","Baridi! Nitahakikisha kuwa nimetumia kuchakata tena kuanzia sasa!","Itura! Emi yoo rii daju lati tunlo lati igba yii lọ!","Jụụ! M ga-agba mbọ hụ na m ga-emegharịgharị site ugbu a gaa n'ihu!"],
                ["Thanks for help! Now I know how to recycle!","Asante kwa msaada! Sasa najua jinsi ya kuchakata tena!","O ṣeun fun iranlọwọ! Bayi Mo mọ bi a ṣe le tunlo!","Daalụ maka enyemaka! Ugbu a amatala m ka esi recycle!"]
            ]
        ],
        "Where are You From?":[
            //1
            [
                ["Hey, I'm from Nigeria! Where are you from?","Halo, ninatoka Nigeria! Unatoka wapi?","Hey, Mo wa lati Nigeria! Nibo ni o ti wa?","Ndewo, esim Naijiria! Ebee ka i si?"]
            ],
            [
                ["I'm from Namibia! What's it like in Nigeria? I hear Lagos is very beautiful.","Ninatoka Namibia! Je, huko Nigeria kunakuwaje? Nasikia Lagos ni nzuri sana.","Mo wa lati Namibia! Kini o ri ni Nigeria? Mo gbo Eko lewa pupo.","Esi m Namibia! Kedu ka ọ dị na Nigeria? Anụ m na Lagos mara mma nke ukwuu."],
                ["Wow, I'm from Namibia! I hear Nigeria is very beautiful.","Lo, ninatoka Namibia! Nasikia Nigeria ni nzuri sana.","Wow, Mo wa lati Namibia! Mo gbo pe Naijiria lewa pupo.","Chei, esi m Namibia! Anụ m na Naijiria mara mma nke ukwuu."]
            ],
            //2
            [
                ["It is! The architecture is very unique. You should visit sometime! What's Namibia like?","Ni! Usanifu ni wa kipekee sana. Unapaswa kutembelea wakati fulani! Namibia ikoje?","Oun ni! Awọn faaji jẹ gidigidi oto. O yẹ ki o ṣabẹwo si akoko diẹ! Kini Namibia bi?","Ọ bụ! Ihe owuwu ụlọ bụ ihe pụrụ iche. Ị ga-aga mgbe ụfọdụ! Kedu ka Namibia dị?"],
                ["Oh it is! The beaches are very beautiful and peaceful. What is it like in Namibia?","Oh! Fukwe ni nzuri sana na zenye amani. Kuna hali gani huko Namibia?","Oh o jẹ! Awọn eti okun jẹ ẹwa pupọ ati alaafia. Bawo ni o ṣe ri ni Namibia?","Ọ bụ! Osimiri ndị ahụ mara mma nke ukwuu na udo. Kedu ka ọ dị na Namibia?"]
            ],
            [
                ["Namibia is incredible! There are beautiful sandy landscapes and wildlife. If you get a chance, you should check out Sossusvlei if you get a chance!","Namibia ni ya ajabu! Kuna mandhari nzuri ya mchanga na wanyamapori. Ukipata nafasi, unapaswa kuangalia Sossusvlei ukipata nafasi!","Namibia jẹ iyalẹnu! Nibẹ ni o wa lẹwa iyanrin ala-ilẹ ati eda abemi egan. Ti o ba ni aye, o yẹ ki o ṣayẹwo Sossusvlei ti o ba ni aye!","Namibia dị ịtụnanya! Enwere ala aja na anụ ọhịa mara mma. Ọ bụrụ na ị nweta ohere, ị kwesịrị ịlele Sossusvlei ma ọ bụrụ na ị nweta ohere!"],
                ["It's beautiful, you'll love it! There's so much beautiful landscapes and wildlife.","Ni nzuri, utaipenda! Kuna mandhari nzuri sana na wanyamapori.","O lẹwa, iwọ yoo nifẹ rẹ! Nibẹ ni ki Elo lẹwa apa ati eda abemi egan.","Ọ mara mma, ị ga-ahụ ya n'anya! Enwere ọmarịcha ala na anụ ọhịa."],
            ],
            //3
            [
                ["Wow, I'll definitely visit when I get a chance! If you're into wildlife, you should check out the Yankari National Park in Nigeria!","Lo, hakika nitatembelea nikipata nafasi! Ikiwa unajihusisha na wanyamapori, unapaswa kuangalia Hifadhi ya Kitaifa ya Yankari nchini Nigeria!","Iro ohun, Emi yoo pato be nigbati mo ni a anfani! Ti o ba wa sinu eda abemi egan, o yẹ ki o ṣayẹwo ni Yankari National Park ni Nigeria!","Chei, a ga m eleta mgbe m nwetara ohere! Ọ bụrụ na ị banye n'ime anụ ọhịa, ị ga-elele ogige ntụrụndụ Yankari na Nigeria!"],
                ["I'll definitely check it out! If you like wildlife and landscapes, you should visit the Yankari National Park in Nigeria!","Nitaiangalia bila shaka! Ikiwa unapenda wanyamapori na mandhari, unapaswa kutembelea Hifadhi ya Kitaifa ya Yankari nchini Nigeria!","Emi yoo dajudaju ṣayẹwo rẹ! Ti o ba fẹ awọn ẹranko ati awọn oju-ilẹ, o yẹ ki o ṣabẹwo si Egan orile-ede Yankari ni Nigeria!","Aga m elele ya nke ọma! Ọ bụrụ na-amasị gị anụ ọhịa na odida obodo, ị kwesịrị ịga na Yankari National Park na Nigeria!"]
            ],
            [
                ["Definitely! It's been great learning more about each other's homelands!","Hakika! Imekuwa nzuri kujifunza zaidi kuhusu nchi za kila mmoja!","Ni pato! O ti jẹ nla ni imọ siwaju sii nipa awọn ile-ile kọọkan miiran!","N'ezie! Ọ bụ ihe magburu onwe ya ịmụtakwu banyere obodo onye ọ bụla ọzọ!"]
            ]
        ]

    }
};

function randomChoice(arr){
    return arr[parseInt(Math.random() * arr.length)];
}

function shuffle(arr) {
    let array = [...arr];
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



