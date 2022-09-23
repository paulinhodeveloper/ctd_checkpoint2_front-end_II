import { baseUrl } from './baseUrl.js';

export const getTask = (token, taskId) => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => { return result.json(); })
        .then(data => getUserTask(data))
        .catch(err => console.log(err));
};

// Objeto JSON da Tarefa do Usuário
let userTaskJson = "";

const getUserTask = data => {
    userTaskJson = JSON.stringify(data);
    sessionStorage.setItem('selectTask', userTaskJson);
};