// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';


const gi = e => document.getElementById(e);

// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');
const userName = gi('userLogin');

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

export const getTask = (token, taskId) => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => { return result.json(); })
        .then(data => { userTask(data) })
        .catch(err => console.log(err));
};

// Objeto JSON Registro Usuário
let userTaskJson = "";
// const userName = gi('userLogin');

const userTask = data => {
    userTaskJson = JSON.stringify(data);
    userName.innerText = ' ';
};