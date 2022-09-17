// Importando módulos
import { inputValidation } from './modules/inputValidation.js';
import { checkFormValidity } from './modules/checkFormValidity.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variáveis do campo e-mail
const inputEmail = gi('inputEmail');
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailValidation = 'Email inválido';

// Variáveis do campo senha
const inputPassword = gi('inputPassword');
const passwordRegEx = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
const passwordValidation = 'Verifique o Campo (1 letra maiúscula, 1 caractere especial e no mínimo 10 dígitos)';

// Variáveis do elemento button e do form
const submitBtn = qs('button');
const form = qs('form');

// Invocando função para verificar validação do elemento e inserindo parâmetros
inputValidation(inputEmail, emailValidation, emailRegEx);
inputValidation(inputPassword, passwordValidation, passwordRegEx);

// Enviar formulário
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    form.reset();
    checkFormValidity();
    userLogin;
    // alert('Sucesso!');
    
});

const userLogin = () => {
    const url = 'https://ctd-todo-api.herokuapp.com/v1';
  
    const userInfo = {
      email: inputEmail.value.toString(),
      password: inputPassword.value.toString()
    };
  
    fetch(`${url}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => {
        return res.json()
      })
      .then(({ jwt }) => {
        if (jwt) {
          sessionStorage.setItem('token', JSON.stringify(jwt));
          taskPage();
        }
      })
      .catch((error) => console.log(error));

}

 const taskPage = () => {window.location = './pages/tarefas.html';}