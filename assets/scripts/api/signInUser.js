import { baseUrl } from './baseUrl.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);

// Variável campo Validação Erro Login
const errorValidation = qs('.error');

const submitBtnTxt = qs('.submit-button span');
const submitLoadSpinner = qs('.submit-button .loader');

//Requisição API Login Usuário
export const signInUser = user => {
    submitBtnTxt.style.display = 'none';
    submitLoadSpinner.style.display = 'block';
    const request = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: user
    };

    fetch(`${baseUrl}/users/login`, request)
        .then(result => {
            if (result.status == 200 || result.status == 201) {
                return result.json();
            } else {
                throw result;
            };
        })
        .then(result => successSignin(result))
        .catch(err => errorSignin(err));
};

// Função Login com Sucesso
const successSignin = result => {
    sessionStorage.setItem('token', result.jwt);
    location.href = './pages/tasks.html';
};

// Função Login com Erro
const errorSignin = err => {
    if (err.status === 400 || err.status === 404) {
        errorValidation.innerText = 'Usuário/Senha Incorreto!';
        submitLoadSpinner.style.display = 'none';
        submitBtnTxt.style.display = '';
        setTimeout(() => {
            errorValidation.innerText = '';
        }, 3000);
    };
};