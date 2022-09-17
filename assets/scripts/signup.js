// Importando módulos
import { inputValidation } from './modules/inputValidation.js';
import { checkFormValidity } from './modules/checkFormValidity.js';
import { passwordConfirmValidation } from './modules/passwordConfirmValidation.js';

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
    console.log(firstNameValue);
    console.log(lastNameValue);
    form.reset();
    checkFormValidity();
    alert('Usuário Criado com Sucesso!');
});

    if (checkFormValidity()) {
        createUser();
    };

const createUser = () => {
    const url = "https://ctd-todo-api.herokuapp.com/#/users/registerUser";
    const userInfo = {
      firstName: inputFirstName.value.toString(),
      lastName: inputLastName.value.toString(),
      email: inputEmail.value.toString(),
      password: inputPassword[0].value.toString(),
    };
  
    console.log("Usuário Criado com Sucesso!", userInfo);

    fetch(url + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => {
          return res.json();
        })
        .then(({ jwt }) => {
          if (jwt) {
            sessionStorage.setItem("token", JSON.stringify(jwt));
            loginPage();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        
};

const loginPage = () => {
    window.location.href = './index.html';
    
};

