const loginButton = document.getElementById('login-form-button');
const inputEmail = document.getElementById('input-email-header');
const inputPassword = document.getElementById('input-password');

// Req 3
function loginResponse() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert ('Olá, Tryber!');
  } else {
    alert ('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', loginResponse);
