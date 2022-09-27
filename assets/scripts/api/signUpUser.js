import { baseUrl } from './baseUrl.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variável campo Validação Erro Cadastro
const errorValidation = qs('.error');

// Variável do campo e-mail
const inputEmail = gi('inputEmail');

const submitBtnTxt = qs('.submit-button span');
const submitLoadSpinner = qs('.submit-button .loader');

//Requisição API Cadastro Usuário
export const signUpUser = user => {
    submitBtnTxt.style.display = 'none';
    submitLoadSpinner.style.display = 'block';
    const request = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: user
    };

    fetch(`${baseUrl}/users`, request)
        .then(result => {
            if (result.status == 200 || result.status == 201) {
                return result.json();
            } else {
                throw result;
            };
        })
        .then(result => successSignup(result))
        .catch(err => errorSignup(err));
};

// Função Cadastro com Sucesso
const successSignup = result => {
    sessionStorage.setItem('token', result.jwt);
    location.href = '../index.html';
};

// Função Cadastro com Erro
const errorSignup = err => {
    if (err.status === 400 || err.status === 404) {
        errorValidation.innerText = 'Usuário já cadastrado!';
        submitLoadSpinner.style.display = 'none';
        submitBtnTxt.style.display = '';
        inputEmail.focus();
        setTimeout(() => {
            errorValidation.innerText = '';
        }, 3000);
    };
};