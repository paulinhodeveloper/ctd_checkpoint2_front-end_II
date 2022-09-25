import { baseUrl } from './baseUrl.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variável campo Validação Erro Cadastro
const errorValidation = qs('.error');

// Variável do campo e-mail
const inputEmail = gi('inputEmail');

//Requisição API Cadastro Usuário
export const signUpUser = user => {
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
    location.href = '/index.html';
};

// Função Cadastro com Erro
const errorSignup = err => {
    if (err.status === 400) {
        errorValidation.innerText = 'Usuário já cadastrado!';
        inputEmail.focus();
        setTimeout(() => {
            errorValidation.innerText = '';
        }, 5000);
    };
};