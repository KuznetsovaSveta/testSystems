import * as firstFunctions from "./modules/functions.js";
firstFunctions.isWebp();

//бургер меню
const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header__menu');
burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

//меню поддержки в шапке
const help = document.querySelector('.help');
const helpBtn = document.querySelector('.help .icon');
const helpMenu = document.querySelector('.help__wrapper');
helpBtn.addEventListener('click', function () {
    helpBtn.classList.toggle('active');
    helpMenu.classList.toggle('active');
});
document.addEventListener( 'click', (e) => {
    const withinMenu = e.composedPath().includes(burgerButton) || e.composedPath().includes(burgerMenu);
    const withinHelp = e.composedPath().includes(help);
    if ( ! withinMenu ) {
        burgerButton.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
    if ( ! withinHelp ) {
        helpBtn.classList.remove('active');
        helpMenu.classList.remove('active');
    }
})

//модальное окно авторизации
const loginBtn = document.querySelector('#loginBtn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const modalBg = document.querySelector('.modal__bg');
const body = document.querySelector('body');

function togglePopup() {
    modal.classList.toggle('active');
    body.classList.toggle('noScroll');
}

loginBtn.addEventListener('click', togglePopup);
closeModal.addEventListener('click', togglePopup);
modalBg.addEventListener('click', togglePopup);

//прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

//аккордеон
window.addEventListener('resize',(e) => {
    accordion();
});
function accordion() {
    if(window.innerWidth <= 799){
        let accordionBlocks = document.querySelectorAll('.info-block');
        accordionBlocks.forEach(accordionBlock => {
            accordionBlock.addEventListener('click', function(){
                this.classList.toggle('info-block_active');
                let accordionContent = this.lastElementChild;
                if (accordionContent.style.maxHeight){
                    accordionContent.style.maxHeight = null;
                } else {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 34 + "px";
                }
            })
        })
    }
}
accordion();
