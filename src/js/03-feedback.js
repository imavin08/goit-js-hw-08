import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const formValue = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  formValue.email = form.email.value;
  formValue.message = form.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
}

function inputLocalStorage() {
  const storageValue = localStorage.getItem(STORAGE_KEY);
  const parce = JSON.parse(storageValue);
  if (parce) {
    form.email.value = parce.email;
    form.message.value = parce.message;
  }
}
inputLocalStorage();

function onFormSubmit(e) {
  e.preventDefault();
  if (e.currentTarget.email.value === '' || e.currentTarget.message.value === '') {
    alert('Все поля должны быть заполнены.');
  } else {
    localStorage.removeItem(STORAGE_KEY);
    const formValue = {
      email: e.currentTarget.email.value,
      message: e.currentTarget.message.value,
    };
    console.log(formValue);
    form.reset();
  }
}
