// Selectors 

const headerBtn = document.querySelector('.header__btn');
const sliderBtn = document.querySelector('.slider__btn');
const mobileMenuBtn = document.querySelector('.mobile-menu__btn');

// Functions

const openForm = () => {
  form.classList.toggle('appointment-form_open');
  bgFilter.classList.toggle('bg-filter_active');
};

// Listeners

[headerBtn, sliderBtn, mobileMenuBtn].forEach(item => item.addEventListener('click', openForm));