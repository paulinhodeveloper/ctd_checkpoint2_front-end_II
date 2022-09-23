// Funções para selecionar elementos
const gi = e => document.getElementById(e);

// Objeto JSON Registro Usuário
let userDataJson = "";
const userName = gi('userLogin');

//Função para Salvar Dados Usuário no Session Storage
export const renderUserInfo = data => {
    userDataJson = JSON.stringify(data);
    sessionStorage.setItem('user', userDataJson);
    userName.innerText = ' ';
};

// Função para Esperar o DOM ser montado e mostrar Dados do Usuário
const observer = new MutationObserver(() => {
    if (document.contains(userName)) {
        const userData = sessionStorage.getItem('user');
        const userObj = JSON.parse(userData);
        userName.innerText = `${userObj.firstName} ${userObj.lastName}`;
        observer.disconnect();
    };
});

observer.observe(userName, { childList: true });