import throttle from 'lodash.throttle';
// --------------------------------------------

const feedbackForm = document.querySelector('.feedback-form');

const submitInput = event => {
  const emailIn = event.currentTarget.email.value;
  const messageIn = event.currentTarget.message.value;
  const feedbackFormState = {
    email: emailIn,
    message: messageIn,
  };
  const inPutOb = localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
};

feedbackForm.addEventListener('input', throttle(submitInput, 500));

// ---------------------------------------------------------------

const savedSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);

// console.log(feedbackForm.elements.email.value);

if (parsedSettings) {
  feedbackForm.elements.email.value = parsedSettings.email;
  feedbackForm.elements.message.value = parsedSettings.message;
}

// --------------------------------------------------------------

const submitButton = event => {
  event.preventDefault();
  if (parsedSettings) {
    localStorage.removeItem('feedback-form-state');
    console.log(parsedSettings);
  }
  feedbackForm.reset();
};

feedbackForm.addEventListener('submit', submitButton);
