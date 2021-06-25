import { gsap } from "gsap";

const topPic = document.querySelector('.top-pic');
const busHeader = document.querySelector('.busHeader');

topPic.addEventListener('dblclick', () => gsap.to(".top-pic", {duration: 1, rotation: 360, scale: 1}));
busHeader.addEventListener('click', () => gsap.to('.busHeader', {duration: 2, x: 300}));
