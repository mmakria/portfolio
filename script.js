let mouseFollower = document.getElementById("mouseFollow");

document.addEventListener("mousemove", function (e) {
  // mouseX = e.screen

  let mouseX = e.pageX;
  let mouseY = e.pageY;
  mouseFollower.style.left = mouseX + "px";
  mouseFollower.style.top = mouseY + "px";
});

const title = document.querySelector("h1");

setTimeout(() => {
  title.classList.add("active");
}, 300);

window.onscroll = () => {};

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);

//   if (window.scrollY >= 200) {
//     document.querySelector(".container-2").classList.add("active");
//   } else {
//     document.querySelector(".container-2").classList.remove("active");
//   }
// });

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 50) {
//     // Vérifie si scrollY est supérieur ou égal à 50
//     document.querySelector(".container-2").classList.add("active");
//   }else
//   document.querySelector(".container-2").classList.remove("active");
// });

const sections = document.querySelectorAll(".container");
const appearRight = document.querySelectorAll(".appear-right");
const appearLeft = document.querySelectorAll(".appear-left");

const fadeInOptions = {
  rootMargin: "-35%",
};


const fadeInOnscroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fader", entry.isIntersecting);
    if (entry.isIntersecting) {
      fadeInOnscroll.unobserve(entry.target);
    }
  });
}, fadeInOptions);

sections.forEach((section) => {
  fadeInOnscroll.observe(section);
});









// Gsap test
