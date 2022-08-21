const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close-bth');
const watch = document.querySelector('.main-page__watch-btn');

document.addEventListener('click', e => {
  if (!e.target.closest('.popup__window') && popup.className.includes('popup-active') && !e.target.closest('.main-page__watch-btn')) {
    closePopup();
  }
});

closePopupBtn.addEventListener('click', closePopup);

watch.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup-active')
  document.getElementsByTagName('body')[0].classList.add('hidden')
  document.getElementById('video').src = 'https://www.youtube.com/embed/Y5KCDWi7h9o'
  popup.children[0].classList.remove('fadeOutDown')
  popup.classList.remove('fadeOutDown')
  popup.children[0].classList.add('fadeInDown')
  popup.classList.add('fadeInDown')
})

function closePopup () {
  popup.children[0].classList.add('fadeOutDown')
  popup.children[0].classList.remove('fadeInDown')
  popup.classList.add('fadeOutDown')
  popup.classList.remove('fadeInDown')
  document.getElementsByTagName('body')[0].classList.remove('hidden')
  setTimeout(() => {
    popup.classList.remove('popup-active');
    document.getElementById('video').src = '';
  }, 300);
}