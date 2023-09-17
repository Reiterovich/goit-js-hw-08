import throttle from 'lodash.throttle';
// --------------------------------------------
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const submitButton = document.querySelector('button');

submitButton.disabled = true;

const feedbackFormState = {
  email: '',
  message: '',
};

function funInput(event) {
  const emailIn = emailInput.value;
  const messageIn = messageInput.value;
  feedbackFormState.message = messageIn;
  feedbackFormState.email = emailIn;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
  console.log(feedbackFormState);
  submitButton.disabled = !(emailInput.value && messageInput.value);
}

feedbackForm.addEventListener('input', throttle(funInput, 500));

const savedSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(savedSettings);

if (parsedSettings) {
  emailInput.value = parsedSettings.email;
  messageInput.value = parsedSettings.message;
}

// відправка форми ---------------------
feedbackForm.addEventListener('submit', submitEve);

function submitEve(event) {
  event.preventDefault();
  console.log(feedbackFormState);
  feedbackForm.reset();
  localStorage.removeItem('feedback-form-state');
}

//---------------------------------
// const feedbackForm = document.querySelector('.feedback-form');

// const submitInput = event => {

//   const emailIn = feedbackForm.elements.email.value;
//   const messageIn = feedbackForm.elements.message.value;
//   const feedbackFormState = {
//     email: emailIn,
//     message: messageIn,
//   };

//   const inPutOb = localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify(feedbackFormState)
//   );
// };

// feedbackForm.addEventListener('input', throttle(submitInput, 500));

// // ---------------------------------------------------------------

// const savedSettings = localStorage.getItem('feedback-form-state');
// const parsedSettings = JSON.parse(savedSettings);
// // console.log(parsedSettings);

// // // console.log(feedbackForm.elements.email.value);

// if (parsedSettings) {
//   feedbackForm.elements.email.value = parsedSettings.email;
//   feedbackForm.elements.message.value = parsedSettings.message;
// }

// // // --------------------------------------------------------------

// const submitButton = event => {
//   event.preventDefault();

//   localStorage.removeItem('feedback-form-state');
//   console.log(parsedSettings);

//   feedbackForm.reset();
// };

// feedbackForm.addEventListener('submit', submitButton);
