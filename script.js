let burger = document.querySelector(".burger_menu");
let menu = document.querySelector('.intro_header_button');
let title = document.querySelector('.intro_title')

burger.addEventListener('click', function () {
    menu.classList.toggle('burger_position');
    title.classList.toggle('burger_margin');
})