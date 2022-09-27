import { baseUrl } from './baseUrl.js';

export const getTask = (token, taskId) => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => {
            if (result.status === 200 || result.status === 201) {
                return result.json();
            } else {
                throw result;
            };
        })
        .then(data => getUserTask(data))
        .catch(err => {
            if (err.status === 400) {
                alert('Tarefa inválida!');
            } else if (err.status === 401) {
                alert('Erro ao validar usuário. Por favor, logar novamente!');
                location.href = '../index.html';
            }
            else if (err.status === 404) {
                alert('Tarefa inválida!');
            }
            else if (err.status === 500) {
                alert('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde!');
                location.href = '../index.html';
            };
        });
};

// Objeto JSON da Tarefa do Usuário
let userTaskJson = "";

const getUserTask = data => {
    userTaskJson = JSON.stringify(data);
    sessionStorage.setItem('selectTask', userTaskJson);
};