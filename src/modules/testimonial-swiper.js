import Swiper, { Pagination } from 'swiper';

const testimonialSwiper = new Swiper('.testimonial__swiper', {
  modules: [Pagination],
  allowTouchMove: false,
  slidesPerView: 1,
  parallax: true,
  speed: 500,
  resistanceRatio: 0.5,
  spaceBetween : (document.querySelector('.testimonial__slide').offsetWidth + window.innerWidth) / 2,
  pagination: {
    el: '.testimonial__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
