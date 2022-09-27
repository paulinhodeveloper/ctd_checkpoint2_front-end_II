import { baseUrl } from './baseUrl.js';

export const updateTask = (token, taskId, task) => {
    const request = {
        method: "PUT",
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: task
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => {
            if (result.status == 200 || result.status == 201) {
                return result.json();
            } else {
                throw result;
            };
        })
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