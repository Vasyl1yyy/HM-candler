const menuBtn = document.querySelector('.menu__btn');
const menuMobil = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuMobil.classList.toggle('menu--open')
})