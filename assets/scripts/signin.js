// Importando módulos
import { inputValidation } from './modules/inputValidation.js';
import { checkFormValidity } from './modules/checkFormValidity.js';
import { signInUser } from './api/signInUser.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variáveis do campo e-mail
const inputEmail = gi('inputEmail');
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailValidation = 'Email inválido';

// Variáveis do campo senha
const inputPassword = gi('inputPassword');
const passwordRegEx = inputPassword.value;
const passwordValidation = 'Campo Obrigatório';

// Variáveis do elemento button e do form
const submitBtn = qs('button');
const form = qs('form');

// Objeto JS Login Usuário
const userSignIn = {
    email: '',
    password: ''
};

// Objeto JSON Login Usuário
let userSignInJson = '';

// Invocando função para verificar validação do elemento e inserindo parâmetros
inputValidation(inputEmail, emailValidation, emailRegEx);
inputValidation(inputPassword, passwordValidation, passwordRegEx);

// Enviar formulário
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    userSignIn.email = inputEmail.value;
    userSignIn.password = inputPassword.value;
    userSignInJson = JSON.stringify(userSignIn);
    signInUser(userSignInJson);
    form.reset();
    checkFormValidity();
});
