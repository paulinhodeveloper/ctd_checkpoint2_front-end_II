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
        .then(result => { return result.json(); })
        .catch(err => console.log(err));
};