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
