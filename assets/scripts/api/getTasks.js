import { renderUserTasks } from '../modules/renderUserTasks.js';

import { baseUrl } from './baseUrl.js';

// Objeto JSON das Tarefas do Usuário
let userTasksJson = "";

// Função para mostrar as tarefas do usuário
export const getTasks = token => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks`, request)
        .then(result => { return result.json(); })
        .then(data => {
            userTasksJson = JSON.stringify(data);
            sessionStorage.setItem('userTasks', userTasksJson);
            renderUserTasks(token);
        })
        .catch(err => console.log(err));
};