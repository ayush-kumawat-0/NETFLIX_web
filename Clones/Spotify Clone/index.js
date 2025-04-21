const element = document.querySelectorAll(".elm");
const cards = document.querySelectorAll(".cards");
const cards2 = document.querySelectorAll(".cards2");
const cards3 = document.querySelectorAll(".cards3");
const recentCards = document.querySelectorAll(".recentCards")

// const buttons = document.querySelector(".cards");


const forwardArrow = document.querySelector(".forwardArrow");
const backwardArrow = document.querySelector(".backwardArrow");
const forwardArrow2 = document.querySelector(".forwardArrow2");
const backwardArrow2 = document.querySelector(".backwardArrow2");
const forwardArrow3 = document.querySelector(".forwardArrow3");
const backwardArrow3 = document.querySelector(".backwardArrow3");

element.forEach((elements, index) => {
    elements.addEventListener("mouseover", () => {
        setTimeout(() => {
            const extraElement = document.querySelector(`.extraElement${index + 1}`);
            extraElement.classList.add("active")
        }, 800)
    })
    elements.addEventListener("mouseout", () => {
        const extraElement = document.querySelector(`.extraElement${index + 1}`);
        extraElement.classList.remove("active");
    });
});

const handlePlayButtonHover = (cards,btnSelector,btnHover) => {
    cards.forEach((card) => {
        const playBtn = card.querySelector(btnSelector);
        card.addEventListener("mouseover", () => {
            playBtn.classList.add(btnHover);
        });
        card.addEventListener("mouseout", () => {
            playBtn.classList.remove(btnHover);
        });
    });
}

handlePlayButtonHover(cards,".playBtn","hover");
handlePlayButtonHover(cards2,".playBtn","hover");
handlePlayButtonHover(cards3,".playBtn","hover");
handlePlayButtonHover(recentCards,".playBtn1","hover1")
// const handlePlayButtonHover1 = (recentCards) => {
//     recentCards.forEach((card) => {
//         const playBtn1 = card.querySelector(".playBtn1");
//         card.addEventListener("mouseover", () => {
//             playBtn1.classList.add("hover1");
//         });
//         card.addEventListener("mouseout", () => {
//             playBtn1.classList.remove("hover1");
//         });
//     });
// }



forwardArrow.style.visibility = "visible";
backwardArrow.style.visibility = "hidden";
backwardArrow2.style.visibility = "hidden";
backwardArrow3.style.visibility = "hidden";

const manageSliding = (forwardArrow,backwardArrow,cards,slideRight,slideLeft) => {
    forwardArrow.addEventListener("click", () => {
        cards.forEach((btn) => {
            btn.classList.add(slideRight);
            btn.classList.remove(slideLeft);
        });
        setTimeout(() => {
            forwardArrow.style.visibility = "hidden";
            backwardArrow.style.visibility = "visible"
        }, 900)
    });

    backwardArrow.addEventListener("click", () => {
        cards.forEach((btn) => {
            btn.classList.add(slideLeft);
            btn.classList.remove(slideRight);
        });
        setTimeout(() => {
            forwardArrow.style.visibility = "visible"
            backwardArrow.style.visibility = "hidden";
        }, 900)
    });
}

manageSliding(forwardArrow,backwardArrow,cards,"slide-right1","slide-left1");
manageSliding(forwardArrow2,backwardArrow2,cards2,"slide-right","slide-left");
manageSliding(forwardArrow3,backwardArrow3,cards3,"slide-right2","slide-left2");
