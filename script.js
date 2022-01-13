const loginButton = document.getElementById('login-form-button');
const inputEmail = document.getElementById('input-email-header');
const inputPassword = document.getElementById('input-password');
const textarea = document.getElementById('textarea');
const text = document.getElementById('counter');

// Req 3
function loginResponse() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', loginResponse);

// Req 18
const botao = document.getElementById('submit-btn');
const checkInput = document.getElementById('agreement');

function botao1() {
  if (checkInput.checked) {
    botao.disabled = false;
  }
}
checkInput.addEventListener('change', botao1);

// Req 20
function returnCount() {
  text.innerHTML = `${500 - this.value.length}`;
}
textarea.addEventListener('input', returnCount);

function onload() {
  botao.disabled = true;
  text.innerHTML = '500';
}
onload();
