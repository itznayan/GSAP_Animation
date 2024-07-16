import gsap from "gsap";

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imgDiv = document.querySelector("#imgDiv");
main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    stagger: 0.06,
    duration: 0.5,
    delay: 0.1,
    ease: "elastic",
  });
});

imgDiv.addEventListener("mouseout", function () {
  gsap.to(cursor, {
    scale: 4,
  });
});

imgDiv.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  });
});
