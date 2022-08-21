import Swiper, { Pagination } from 'swiper';

const streamerSwiper = new Swiper('.streamer__swiper', {
  modules: [Pagination],
  allowTouchMove: false,
  spaceBetween: 30,
  speed: 150,
  resistanceRatio: 0.5,
  pagination: {
    el: '.streamer__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});