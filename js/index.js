import { gsap } from "gsap";


const topPic = document.querySelector('.top-pic')
console.log(topPic)

topPic.addEventListener('dblclick', () => gsap.to(".top-pic", {duration: 3, rotation: 360, scale: 1}))
