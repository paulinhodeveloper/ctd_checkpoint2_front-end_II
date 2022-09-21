// Importando módulos
import { inputValidation } from './modules/inputValidation.js';
import { checkFormValidity } from './modules/checkFormValidity.js';
import { passwordConfirmValidation } from './modules/passwordConfirmValidation.js';
import { signUpUser } from './api/signUpUser.js'

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variáveis do campo nome e sobrenome
const inputFirstName = gi('inputFirstName');
const inputLastName = gi('inputLastName');
const nameRegEx = /^\S$|^\S[ \S]*\S$/;
const nameValidation = 'Formato inválido.';

// Variáveis do campo e-mail
const inputEmail = gi('inputEmail');
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailValidation = 'Email inválido.';

// Variáveis do campo senha
const inputPassword = gi('inputPassword');
const passwordRegEx = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
const passwordValidation = 'Verifique o Campo (1 letra maiúscula, 1 caractere especial e no mínimo 10 dígitos).';

// Variáveis do elemento button e do form
const submitBtn = qs('button');
const form = qs('form');

// Objeto JS Registro Usuário
const userRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

// Objeto JSON Registro Usuário
let userRegisterJson = "";

// Invocando função para verificar validação do elemento e inserindo parâmetros
inputValidation(inputEmail, emailValidation, emailRegEx);
inputValidation(inputPassword, passwordValidation, passwordRegEx);
inputValidation(inputFirstName, nameValidation, nameRegEx);
inputValidation(inputLastName, nameValidation, nameRegEx);

// Invocando função para verificar se senhas são iguais
passwordConfirmValidation();

// Enviar formulário
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    
    // Retirar múltiplos espaços do input nome e sobrenome ao enviar o formulário
    let firstNameValue = inputFirstName.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    let lastNameValue = inputLastName.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    
    userRegister.firstName = firstNameValue;
    userRegister.lastName = lastNameValue;
    userRegister.email = inputEmail.value;
    userRegister.password = inputPassword.value;
    userRegisterJson = JSON.stringify(userRegister);
    signUpUser(userRegisterJson);
    // form.reset();
    checkFormValidity();
});
