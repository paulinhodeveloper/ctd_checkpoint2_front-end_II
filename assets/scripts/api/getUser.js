// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

// Funções para selecionar elementos
const gi = e => document.getElementById(e);

// Objeto JSON Registro Usuário
let userDataJson = "";
const userName = gi('userLogin');

// Função para pegar informações do usuário
export const getUser = token => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };
    fetch(`${baseUrl}/users/getMe`, request)
        .then(result => { return result.json(); })
        .then(data => userInfo(data))
        .catch(err => console.log(err));
};

const userInfo = data => {
    userDataJson = JSON.stringify(data);
    sessionStorage.setItem('user', userDataJson);
    userName.innerText = ' ';
};

const observer = new MutationObserver((e) => {
    // console.log(e)
    if (document.contains(userName)) {
        const userData = sessionStorage.getItem('user');
        const userObj = JSON.parse(userData);
        userName.innerText = `${userObj.firstName} ${userObj.lastName}`;
        observer.disconnect();
    };
});

observer.observe(userName, { childList: true });