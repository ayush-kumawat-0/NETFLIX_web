function locomotivejs() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}

function loadingAnimation() {
    let tl = gsap.timeline();

    tl.from("#page1 , #page2", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })

    tl.from(".lod", {
        transform: "scaleX(0.7) scaleY(0)",
        borderRadius: "100vw",
        // duration: 2,
        ease: "expo.out",
        opacity: 0,
        duration: 2.5,
        ease: "expo.out",
    });

    tl.from(".anim", {
        y: "10px",
        opacity: 0,
        delay:-0.4
    })

    gsap.from("nav", {
        opacity: 0,
        delay: 1.3,
        // y:"-20px"
    })


    // tl.from("#page1 h1, #page1 p ,#page1 div",{
    //     opacity:0,
    //     duration:0.3,
    //     stagger:0.2
    // })
}

function textAnimation(){
    let h1s = document.querySelectorAll(".textBreak");

h1s.forEach(h1 => {
    const icon = h1.querySelector(".iconWrapper");
    const rawHTML = h1.innerHTML;
    const textParts = rawHTML.split('<span class="iconWrapper">');

    const beforeIcon = textParts[0].replace(/<[^>]+>/g, "").trim();
    const afterIcon = textParts[1]
        ? textParts[1].split("</span>")[1]?.trim() ?? ""
        : "";

    const iconHTML = icon?.outerHTML ?? "";

    h1.innerHTML = "";

    beforeIcon.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        h1.appendChild(span);
    });

    if (iconHTML) h1.innerHTML += iconHTML;

    afterIcon.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        h1.appendChild(span);
    });
});



gsap.from("#page1 h1 span, .iconWrapper", {
    y: 120,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    stagger: {
        amount: 0.8,
        from: "start"
    }
});

gsap.from(".vdo1", {
    scale: 1.2,
    opacity: 0,
    duration: 2,
    ease: "expo.out"
});
}

// function navigation(){
    // var b1=document.querySelector(".button")

    // b1.addEventListener("mouseenter",function(){
        
    //     gsap.to(".button svg",{
    //         backgroundColor:"#0DA34E",
    //         paddingLeft:"1vw",
    //         left:"16.1%"
    //     })
    //     gsap.to(".button span",{
    //         left:"0%",
    //         color:"#0DA34E",
    //     })
    // })

function navAnimation() {
    let nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", () => {
        gsap.to(".navBottom", {
            height: "21vh"
        });
        gsap.to(".navElem h5", {
            display: "block",
            opacity: 1
        })
        gsap.to(".nav-part2 h5 span", {
            y: "0px",
            // duration:0.5,   
            stagger: {
                amount: 0.4
            }
        })
    })
    nav.addEventListener("mouseleave", () => {
        let tl = gsap.timeline()
        gsap.to(".nav-part2 h5 span", {
            y: "20px",
            duration: 0.3,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".navElem h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".navBottom", {
            height: "0vh",
            duration: 0.4
        });
    })
}

function page2Animation() {
    let nav = document.querySelector("nav");
    let page2Center = document.querySelector(".page2center");
    let video1 = document.querySelector("#page2 .vdo1");
    let video2 = document.querySelector("#page2 .vdo2");
    video1.play();

    video1.addEventListener("mousemove", (e) => {
        // page2Center.style.opacity=0
        // console.log(e)
        gsap.to(page2Center, {
            x: e.x - video1.getBoundingClientRect().x,
            y: e.y - video1.getBoundingClientRect().y
        })
    })

    page2Center.addEventListener("click", () => {
        video2.currentTime = 0
        video2.play();
        nav.style.opacity = 0;
        // document.body.style.overflow = "hidden";
        gsap.to(video2, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: "0px",
        })
    })

    video2.addEventListener("click", () => {
        video2.pause();
        nav.style.opacity = 1;
        // document.body.style.overflow = "auto";
        gsap.to(video2, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

function gridAnimation() {

    let gridItems = document.querySelectorAll(".gridItem");
    let videos = document.querySelectorAll(".gridItem video");

    gridItems.forEach((items, index) => {
        const vdo = items.querySelector(`.vdo${index + 1}`);

        items.addEventListener("mouseenter", () => {
            vdo.play();
            vdo.currentTime = 0;
            gsap.to(vdo, {
                opacity: 1
            })
        });

        items.addEventListener("mouseleave", () => {
            vdo.pause();
            gsap.to(vdo, {
                opacity: 0
            })
        });
    })
}

function page6Animation() {

    let page6Vdo1 = document.querySelector(".midMid .vdo1");
    let page6Vdo2 = document.querySelector(".midRight .vdo2");
    let midMid = document.querySelector(".midMid");
    let midRight = document.querySelector(".midRight");

    midMid.addEventListener("mouseenter", () => {
        page6Vdo1.play();
        page6Vdo1.style.height = "78%";
        midMid.style.borderTop = "1px solid grey"
    })
    midMid.addEventListener("mouseleave", () => {
        page6Vdo1.pause();
        page6Vdo1.currentTime = 0;
        page6Vdo1.style.height = "51%";
        midMid.style.borderTop = "0"
    })

    midRight.addEventListener("mouseenter", () => {
        page6Vdo2.play();
        page6Vdo2.style.height = "78%";
        midRight.style.borderTop = "1px solid grey"
    })
    midRight.addEventListener("mouseleave", () => {
        page6Vdo2.pause();
        page6Vdo2.currentTime = 0;
        page6Vdo2.style.height = "51%";
        midRight.style.borderTop = "0"
    })

}

function page8Animation() {
    gsap.from(".btm8Parts h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".btm8Parts",
            // markers:true,
            // stagger:-1,
            start: "top 80%",
            end: "top 0%",
            scrub: 1,
            scroller: "#main"
        }
    })
}



locomotivejs();
loadingAnimation();
// navAnimation();
textAnimation();
page2Animation();
gridAnimation();
page6Animation();
page8Animation();