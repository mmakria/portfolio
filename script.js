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




gsap.from(".card-container-1", {
  x: "-50%",
  duration: 1,
});


gsap.from("h1", {
  x: "50%",
  duration: 1,
})
gsap.from("#screen-laptop", {
  scrollTrigger:{
    trigger: "#screen-laptop",
    start: "top center",
    markers: true,

  }, 
  x: "50%",
  duration: 1,
  
  
})
gsap.from(".container-2-text", {
  scrollTrigger:{
    trigger: "#screen-laptop",
    start: "top 80%",
  }, 
  x: "-50%",
  duration: 1,
  
})