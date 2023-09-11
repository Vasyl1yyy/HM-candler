const menuBtn = document.querySelector('.menu__btn');
const menuMobil = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuMobil.classList.toggle('menu--open')
})

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  }
});

const swiperTwo = new Swiper('.certificates__slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});