
const card = document.querySelector(".cards");
const button = card.querySelectorAll("#btns");
const buttons = document.querySelectorAll("#btns");
const closebtns = document.querySelectorAll(".close");

const forwardArrow = document.querySelector(".forwardArrow");
const backwardArrow = document.querySelector(".backwardArrow");

const question = document.querySelectorAll(".question");


//to change content from english to hindi
const h1 = document.querySelector("h1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const languageSelect = document.querySelector(".languageSelect");

languageSelect.addEventListener("click", () => {
    const selectedLanguage = languageSelect.value;

    // Explain everything in this code in detail  
    if (selectedLanguage === "hi") {
        h1.innerText = "अनलिमिटेड फ़िल्में, टीवी शो, और बहुत कुछ";
        heading2.innerText = "₹149 से शुरू होता है. कभी भी कैंसल करें.";
        heading3.innerText = "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."
    }
});

document.body.classList.remove("stopScrolling");

const stopScrolling = () => {
    document.body.classList.toggle("stopScrolling");
};

const startScrolling = () => {
    document.body.classList.toggle("stopScrolling");
};

button.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const container = document.querySelector(`.clickContainer${index + 1}`);
        container.classList.toggle("active");
        stopScrolling();
        // document.body.style.opacity = "0.5";
        // container.style.opacity = "1"
    })
});

forwardArrow.style.visibility = "visible";
backwardArrow.style.visibility = "hidden";

forwardArrow.addEventListener("click", () => {
    buttons.forEach((btn) => {
        btn.classList.add("slideAnimation");
        btn.classList.remove("slideAnimation2")
    });
    setTimeout(() => {
        forwardArrow.style.visibility = "hidden";
        backwardArrow.style.visibility = "visible"
    }, 900)
});

backwardArrow.addEventListener("click", () => {
    buttons.forEach((btn) => {
        btn.classList.add("slideAnimation2");
        btn.classList.remove("slideAnimation");
    });
    setTimeout(() => {
        forwardArrow.style.visibility = "visible"
        backwardArrow.style.visibility = "hidden";
    }, 900)
});


question.forEach((question, index) => {
    question.addEventListener("click", () => {
        const answer = document.querySelector(`.answer${index + 1}`);
        const plus = document.querySelector(`.plus${index + 1}`);
        answer.classList.toggle("drop");
        plus.classList.toggle("drop");
    });
});


closebtns.forEach((closebtn, index) => {
    closebtn.addEventListener("click", () => {
        const container = document.querySelector(`.clickContainer${index + 1}`);
        container.classList.toggle("active");
        startScrolling();
        document.body.style.opacity = "1";
    });
});

// .cn{
//     box-sizing: border-box;
//     overflow-x: hidden;
//     position: relative;
//     height: 6.25rem;
//     z-index: 1;
// }

// .curve_container {
//     box-sizing: border-box;
//     position: absolute;
//     height: 100%;
//     top: 0;
//     /* margin: auto; */
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-align-items: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     border: solid .25rem transparent;
//     border-top-left-radius: 50% 100%;
//     border-top-right-radius: 50% 100%;
//     border-bottom: none;
//     background: radial-gradient(50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), black;
//     -webkit-background-clip: padding-box;
//     background-clip: padding-box;
// }

// .curve_container::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: -1;
//     margin-top: -.25rem;
//     /* border-radius: inherit; */
//     background: linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%);
// }




// hindi click card content 
// 1 = 2024 A फ़िल्म थ्रिलर
// एक रहस्यमयी लीडर जेल के ज़ालिम सिस्टम में अपना ही कानून लागू करता है, तो एक नया शख्स खाना बांटने के धांधली भरे तरीके के खिलाफ़ लड़ता है.

// 2 = 2023 A फ़िल्म हॉरर
// एक महिला जब अपनी बिछड़ी हुई बहन से मिलने आती है, तब भूकंप आता है जिससे लोगों को काबू करने वाला एक पुराना शैतान आज़ाद हो जाता है और उनकी यह मुलाकात खूनी जंग में तब्दील हो जाती है.

// // 3 = 2024 U/A 16+ फ़िल्म ऐक्शन ड्रामा
// // एक साधारण बीमा एजेंट, हर शनिवार अपने गुस्से को बेरहम हथियार बना कर न्याय करता है. इस बार उसके निशाने पर गांव में आतंक मचाने वाला एक पुलिसवाला है.

// 4 = 2024 U/A 13+ फ़िल्म कॉमेडी ड्रामा
// अपने नए पतियों के घर जा रही दो दुल्हनों की गलती से अदला-बदली हो जाती है. इसके बाद शुरू होता है नए माहौल में मज़ेदार तरीके से खुद को जानने का खूबसूरत सफ़र.
   
// 5 = 2024 U/A 16+ फ़िल्म कॉमेडी रोमांस

// 6 = 2017 U/A 13+ फ़िल्म ड्रामा
// एक प्रतिभाशाली बच्ची, पालन-पोषण करने वाले अपने नर्मदिल मामा और अपनी नानी के बीच की कस्टडी की लड़ाई में फंस जाती है जो उसकी प्रतिभा को निखारना चाहती है.

// 7 = 2024 A फ़िल्म थ्रिलर ड्रामा
// जब सेक्टर 36 में एक सीरियल किलर कई बच्चों को गायब कर देता है, तो एक भ्रष्ट पुलिसवाले को किसी भी कीमत पर, इस दिल दहलाने वाले मामले की जांच करनी पड़ती है.

// 8 = 2018 U/A 13+ फ़िल्म ऐक्शन फै़ंटसी अड्वेंचर ड्रामा
// एक अनाथ बच्चा जिसे जानवरों ने जंगल में पाला है, अपने नसीब को अपने हाथों में लेते हुए एक खतरनाक दुश्मन का सामना करता है - और खुद के इन्सान होने का भी.

// 9 = 2023 U/A 13+ फ़िल्म ऐक्शन थ्रिलर अड्वेंचर
// डॉम टोरेटो अपने परिवार को एक ज़ालिम दुश्मन और सड़क हादसे के गंभीर मामले से बचाने की कोशिश करते हुए, अब तक की सबसे खतरनाक चुनौती का सामना करता है.

// 10 = 2024 U/A 16+ फ़िल्म ड्रामा
// एक नाई की बहुमूल्य चीज़ चोरी हो जाती है. वह पुलिस से मदद मांगता है, जो पहले तो उसकी फ़रियाद का मज़ाक उड़ाते हैं, पर जल्द ही उन्हें यह समझ आ जाता है कि दरअसल उन्हें क्या ढूंढना है.
