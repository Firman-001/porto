let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
const sr = ScrollReveal ({
    distance: '40px',
    duration:2000,
    reset:true
});
sr.reveal('.logo', {delay:100, origin:'left'});
sr.reveal('.navbar', {delay:200, origin:'top'});
sr.reveal('.menu-btn', {delay:320, origin:'right'});


sr.reveal('.home-text span', {delay:400, origin:'top'});
sr.reveal('.home-text h1', {delay:480, origin:'left'});
sr.reveal('.home-text p', {delay:650, origin:'right'});
sr.reveal('.main-btn', {delay:760, origin:'left'});


sr.reveal('.share', {delay:850, origin:'bottom'});
sr.reveal('.home-img', {delay:900, origin:'right'});