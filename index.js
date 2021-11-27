// import {gsap} from "./node_modules/gsap/index.js";
// import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);



let sections = gsap.utils.toArray(".frame");

console.log("script connected.");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    start: 0,
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});


window.onscroll = function() {stickLogo()};

var header = document.getElementById("logoHeader");
var footer = document.getElementById("logoFooter")

var sticky = header.offsetTop;


function stickLogo(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
        footer.classList.add("stickyFooter");
    }
    else{
        header.classList.remove("sticky");
        footer.classList.remove("stickyFooter");
    }
}
