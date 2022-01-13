const loginButton = document.getElementById('login-form-button');
const inputEmail = document.getElementById('input-email-header');
const inputPassword = document.getElementById('input-password');

// Req 3
function loginResponse() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', loginResponse);

const botao = document.getElementById('submit-btn');
const checkInput = document.getElementById('agreement');

function botao1() {
  if (checkInput.checked) {
    botao.disabled = false;
  }
}
checkInput.addEventListener('change', botao1);

function onload() {
  botao.disabled = true;
}

onload();
