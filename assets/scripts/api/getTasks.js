import { renderUserTasks } from '../modules/renderUserTasks.js';
import { skeleton } from '../modules/skeleton.js';

import { baseUrl } from './baseUrl.js';

// Objeto JSON das Tarefas do Usuário
let userTasksJson = "";

// Função para mostrar as tarefas do usuário
export const getTasks = token => {

    skeleton();

    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks`, request)
        .then(result => {
            if (result.status === 200 || result.status === 201) {
                return result.json();
            } else {
                throw result;
            };
        })
        .then(data => {
            userTasksJson = JSON.stringify(data);
            sessionStorage.setItem('userTasks', userTasksJson);
            renderUserTasks(token);
        })
        .catch(err => {
            if (err.status === 401) {
                alert('Erro ao validar usuário. Por favor, logar novamente!');
                location.href = '../index.html';
            } else if (err.status === 500) {
                alert('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde!');
                location.href = '../index.html';
            };
        });
};