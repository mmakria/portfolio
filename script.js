let mouseFollower = document.getElementById("mouseFollow");

document.addEventListener("mousemove", function (e) {
    // mouseX = e.screen

    let mouseX = e.pageX;
    let mouseY = e.pageY;
    mouseFollower.style.left = mouseX + "px";
    mouseFollower.style.top = mouseY + "px";
});

const title = document.querySelector("h1");


// Gsap test


const title1 = document.querySelector("h1")
const heroContent = document.querySelector(".hero-content")
const navigation = document.querySelector("nav")
const sayHi = document.getElementById("say-hi-nav")


const tl = gsap.timeline()

tl


    .to(title1, {autoAlpha: 1})
    .to(heroContent, {autoAlpha: 1})
    .to(navigation, {autoAlpha: 1})
    .to(sayHi, {autoAlpha: 1})


const bg = document.querySelector("body")

gsap.fromTo(bg, {
        backgroundSize: "100%",



    },

    {
        backgroundSize: "130%",
        backgroundPosition: "50% 100%",
        repeat: -1,
        duration: 30,
        ease: "none",
        filter: "blur(20) saturate(0.5) brightness(2)",
        yoyo: true,






    })



