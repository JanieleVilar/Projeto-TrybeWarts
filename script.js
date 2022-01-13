const loginButton = document.getElementById('login-form-button');
const inputEmail = document.getElementById('input-email-header');
const inputPassword = document.getElementById('input-password');
const textarea = document.getElementById('textarea');
const text = document.getElementById('counter');
const submitButton = document.getElementById('submit-btn');

// Req 3
function loginResponse() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert ('Olá, Tryber!');
  } else {
    alert ('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', loginResponse);

// Req 21
function returnCount() {
  text.innerHTML = `${500 - this.value.length}`;
}
textarea.addEventListener('input', returnCount);

function onload() {
  text.innerHTML = '500';
}
onload();
