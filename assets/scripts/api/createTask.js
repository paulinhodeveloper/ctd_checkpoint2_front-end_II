import { baseUrl } from './baseUrl.js';
import { getTasks } from './getTasks.js';

// Requisição da API para Criar Tarefa do Usuário
export const createTask = (token, task) => {
  const request = {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      'Authorization': token
    },
    body: task
  };

  fetch(`${baseUrl}/tasks`, request)
    .then(result => { return result.json(); })
    .then(() => getTasks(token))
    .catch(err => console.log(err));
};