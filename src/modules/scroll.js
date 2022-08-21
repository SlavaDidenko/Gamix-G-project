const header = document.querySelector('.header');
const heightHeader = header.offsetHeight;
const heigthAbout = document.querySelector('.about').offsetHeight;
const scrollUp = document.querySelector('.scroll-up');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  if (heightHeader < scrollDistance) {
    header.classList.add('header-fixed')
  } else {
    header.classList.remove('header-fixed')
  }
  lastScrollTop = scrollDistance;

  if (heigthAbout < scrollDistance) {
    scrollUp.classList.add('scroll-up-active');
  } else {
    scrollUp.classList.remove('scroll-up-active');
  }
})