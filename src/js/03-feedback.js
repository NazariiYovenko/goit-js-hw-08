import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

if (localStorage.getItem('feedback-form-state')) {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  feedbackForm.message.value = parsedData.message;
  feedbackForm.email.value = parsedData.email;
}

const input = {};

function onFormInput(event) {
  input[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(input));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (localStorage.getItem('feedback-form-state')) {
    const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(parsedData);
    localStorage.removeItem('feedback-form-state');
  }
  event.target.message.value = '';
  event.target.email.value = '';
}
