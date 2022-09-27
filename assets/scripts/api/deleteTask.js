import { baseUrl } from './baseUrl.js';

//Requisição na API para Apagar Tarefa do Usuário
export const deleteTask = (token, taskId) => {
    const request = {
        method: "DELETE",
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
            }
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