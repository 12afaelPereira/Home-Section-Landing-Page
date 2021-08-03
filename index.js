const nav = document.querySelector('nav');
const linkMenu = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');

// add active class to nav
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// remove active class to nav when link is clicked
linkMenu.forEach((link) => {
    link.addEventListener('click', ()=>{
        nav.classList.remove('active');
    });
});
