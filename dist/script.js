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


// Selectors 

const closeBtn = document.querySelector('.appointment-form__close-btn');
const submitBtn = document.querySelector('.appointment-form__submit-btn');
const form = document.querySelector('.appointment-form');
const formContainer = document.querySelector('.appointment-form__container');
const formMessage = document.querySelector('.appointment-form__message');
const formMessageBtn = document.querySelector('.appointment-form__message-btn');
const bgFilter = document.querySelector('.bg-filter');

// Functions 

const closeForm = (e) => {
  e.preventDefault();
  form.classList.toggle('appointment-form_open');
  bgFilter.classList.toggle('bg-filter_active');
  formContainer.style.display = 'block';
  formMessage.style.display = 'none';
};

const submitForm = (e) => {
  e.preventDefault();
  formContainer.style.display = 'none';
  formMessage.style.display = 'block';
};

// Listeners 

closeBtn.addEventListener('click', closeForm);
submitBtn.addEventListener('click', submitForm);
formMessageBtn.addEventListener('click', closeForm);

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
// Selectors

const currentSlideDisplay = document.querySelector('.slider__currentSlide');
const prevBtn = document.querySelector('.slider__control-btn_prev');
const nextBtn = document.querySelector('.slider__control-btn_next');

// Functions

const totalSlides = 4;
let currentSlide = 1;

const navigatePrev = () => {
  if (currentSlide > 1) {
    currentSlide--;
    const currentSlideElement = document.querySelector(`#slide-${currentSlide}`);
    currentSlideDisplay.textContent = currentSlide;
    currentSlideElement.scrollIntoView({ block: "nearest" });
    currentSlideDisplay.textContent = currentSlide;
  }
};

const navigateNext = () => {
  if (currentSlide < totalSlides) {
    currentSlide++;
    const currentSlideElement = document.querySelector(`#slide-${currentSlide}`);
    currentSlideDisplay.textContent = currentSlide;
    currentSlideElement.scrollIntoView({ block: "nearest" });
  }
};

// Listeners

prevBtn.addEventListener('click', navigatePrev);
nextBtn.addEventListener('click', navigateNext);
