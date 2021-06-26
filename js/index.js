import { gsap } from "gsap";
// targets
const topPic = document.querySelector('.top-pic');
const busHeader = document.querySelector('.busHeader');

// animation functions
const spin = (e) => gsap.to(e.target, {duration: 0.5, rotation: 720}).restart(false,false);
const center = (e) => gsap.to(e.target, {duration: 1, x: 275});

// execution
topPic.addEventListener('dblclick', spin);
busHeader.addEventListener('click', center);