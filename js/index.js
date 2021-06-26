import { gsap } from "gsap";

// targets
const topPic = document.querySelector('.top-pic');
const busHeader = document.querySelector('.busHeader');
const topPara = document.querySelector('.top-para');
const nav = document.querySelector('.nav-container')
const all = document.querySelector('body')

// animation functions
const spin = (e) => gsap.to(e.target, {duration: 0.5, rotation: 720});
const slideRight = (e) => gsap.to(e.target, {duration: 1, x: 275});

// styling functions
// const colorChange = (e) => e.target.classList.toggle('')
const styleWhite = (e) => {if (e.key === 'a') all.classList = []
}
const styleBlack = (e) => {
    if (e.key === 's') {
        all.classList = []; 
        all.classList.add('styleBlack')
    }
}
const styleBlue = (e) => {
    if (e.key === 'd') {
        all.classList = []; 
        all.classList.add('styleBlue')
    }
}
const styleGreen = (e) => {
    if (e.key === 'e') {
        all.classList = []; 
        all.classList.add('styleGreen')
    }
}
const styleNavy = (e) => {
    if (e.key === 'f') {
        all.classList = []; 
        all.classList.add('styleNavy')
    }
}
const styleViolet = (e) => {
    if (e.key === 'g') {
        all.classList = []; 
        all.classList.add('styleViolet')
    }
}
const styleMaroon = (e) => {
    if (e.key === 'h') {
        all.classList = []; 
        all.classList.add('styleMaroon')
    }
}

// execution
topPic.addEventListener('dblclick', spin);   // double click top pic
busHeader.addEventListener('click', slideRight); //  single click First Header to slide to the right
// topPara.addEventListener('click', colorChange); // single click paragraph to turn blue
document.addEventListener('keydown', styleWhite); // keystroke a changes background white, font black
document.addEventListener('keydown', styleBlack); // keystroke s changes background black, font white
document.addEventListener('keydown', styleBlue); // keystroke d changes background blue, font orange
document.addEventListener('keydown', styleGreen); // keystroke e changes background green, font white
document.addEventListener('keydown', styleNavy); // keystroke f changes background midnight-blue, font white
document.addEventListener('keydown', styleViolet); // keystroke g changes background violet, font white
document.addEventListener('keydown', styleMaroon); // keystroke h changes background maroon, font white
