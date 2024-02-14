//burger
const burgerIcon = document.querySelector(".header__nav-burger-icon");
const burgerMenu = document.querySelector(".header__nav-burger-content");
const overlay = document.querySelector(".overlay");
burgerIcon.addEventListener('click', () => {
   burgerMenu.classList.toggle('header__nav-burger-content_active');
   overlay.classList.toggle('overlay_active');
});
//scroll menu
let scrolltop = 20; // запомнить
window.addEventListener('scroll', function () {
   if (pageYOffset > scrolltop) { // сравнить

      burgerMenu.classList.remove('header__nav-burger-content_active');
      overlay.classList.remove('overlay_active');
   } else {

   }
   scrolltop = pageYOffset; // запомнить для последующих срабатываний
});


//js adaptive


const swiper = new Swiper('.swiper-container', {
   slidesPerView: 2,
   direction: 'horizontal',
   spaceBetween: 24,
   loop: true,
   navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
   },
   breakpoints: {
      1044: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      },
   }
});