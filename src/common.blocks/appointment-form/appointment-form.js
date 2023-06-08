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
