const burger = document.querySelector('.js-burger');
const headerMenu = document.querySelector('.js-header-menu');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger_active');
    headerMenu.classList.toggle('header__menu_active');
});