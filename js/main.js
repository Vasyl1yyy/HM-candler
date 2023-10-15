const menuBtn = document.querySelector('.menu__btn');
const menuMobil = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuMobil.classList.toggle('menu--open')
})

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

const swiperTwo = new Swiper('.certificates__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {
    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

    accordeonTitle.classList.toggle('accordeon__title--active');
    currentText.classList.toggle('accordeon__text--visible');

    if (currentText.classList.contains('accordeon__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null;
    }
  })
})