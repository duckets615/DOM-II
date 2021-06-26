import { gsap } from "gsap";
// targets
const topPic = document.querySelector('.top-pic');
const busHeader = document.querySelector('.busHeader');
const topPara = document.querySelector('.top-para')

// animation functions
const spin = (e) => gsap.to(e.target, {duration: 0.5, rotation: 720}).restart(false,false);
const center = (e) => gsap.to(e.target, {duration: 1, x: 275});
const colorChange = (e) => e.target.classList.toggle('font-change')
// execution
topPic.addEventListener('dblclick', spin);
busHeader.addEventListener('click', center);
topPara.addEventListener('click', colorChange);

