const loginButton = document.getElementById('login-form-button');
const inputHeaderEmail = document.getElementById('input-email-header');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const textarea = document.getElementById('textarea');
const text = document.getElementById('counter');
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-lastname');
const botao = document.getElementById('submit-btn');
const checkInput = document.getElementById('agreement');
const inputHouse = document.getElementById('house');
const families = document.querySelectorAll('.family');
const subjects = document.querySelectorAll('.subject');
const scores = document.querySelectorAll('.score');
const inputObservation = document.getElementById('textarea');
const mainForm = document.getElementById('evaluation-form');

// Req 3
function loginResponse() {
  if (inputHeaderEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', loginResponse);

// Req 18

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

// Req 21
function createNameDiv() {
  const nameDiv = document.createElement('p');
  nameDiv.innerText = `Nome: ${inputName.value} ${inputSurname.value}`;
  mainForm.appendChild(nameDiv);
}

function createEmailDiv() {
  const emailDiv = document.createElement('p');
  emailDiv.innerText = `Email: ${inputEmail.value}`;
  mainForm.appendChild(emailDiv);
}

function createHouseDiv() {
  const houseDiv = document.createElement('p');
  houseDiv.innerText = `Casa: ${inputHouse.value}`;
  mainForm.appendChild(houseDiv);
}

function createFamilyDiv() {
  const radioDiv = document.createElement('p');
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked) {
      radioDiv.innerText = `Família: ${families[index].value}`;
      mainForm.appendChild(radioDiv);
    }
  }
}

function createSkillsDiv() {
  const skillsArray = [];
  const skillsDiv = document.createElement('p');
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      skillsArray.push(` ${subjects[index].value}`);
      skillsDiv.innerText = `Matérias: ${skillsArray}`;
      mainForm.appendChild(skillsDiv);
    }
  }
}

function createScoreDiv() {
  const scoreDiv = document.createElement('p');
  for (let index = 0; index < scores.length; index += 1) {
    if (scores[index].checked) {
      scoreDiv.innerText = `Avaliação: ${scores[index].value}`;
      mainForm.appendChild(scoreDiv);
    }
  }
}

function createObsDiv() {
  const obsDiv = document.createElement('p');
  obsDiv.innerText = `Observações: ${inputObservation.value}`;
  mainForm.appendChild(obsDiv);
}

function giveFormData(event) {
  event.preventDefault();
  const checkedSubjects = document.querySelectorAll('.subject:checked');
  const checkForm = mainForm.checkValidity();
  mainForm.reportValidity();

  if (checkForm && checkedSubjects.length > 0) {
    mainForm.innerHTML = '';
    mainForm.className += 'div-after-submit';
    createNameDiv(); createEmailDiv(); createHouseDiv(); createFamilyDiv();
    createSkillsDiv(); createScoreDiv(); createObsDiv();
  } else {
    alert('Select at least one subject');
  }
}
botao.addEventListener('click', giveFormData);

window.onload = function load() {
  botao.disabled = true;
  text.innerHTML = '500';
};
