const menu = document.querySelector('.header__menu-wrapper');
const burger = document.querySelector('.header__burger');
const body = document.getElementsByTagName('body')[0];
const closeBurger = document.querySelector('.header__close-btn');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
  body.classList.add('hidden');
  menu.classList.add('active-menu');
  header.classList.add('back');
});

closeBurger.addEventListener('click', () => {
  offMenuBurger();
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.active-menu') && menu.className.includes('active-menu') && !e.target.closest('.header__burger')) {
    offMenuBurger();
  };
});

function offMenuBurger() {
  menu.classList.remove('active-menu');
  body.classList.remove('hidden');
  header.classList.remove('back');
};