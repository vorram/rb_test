// Selectors

const burgerMenuBtn = document.querySelector('.burgerMenu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// Functions

const openMenu = () => {
  burgerMenuBtn.classList.toggle('burgerMenu-btn_open');
  mobileMenu.classList.toggle('mobile-menu_open');
};

// Listeners

burgerMenuBtn.addEventListener('click', openMenu);

