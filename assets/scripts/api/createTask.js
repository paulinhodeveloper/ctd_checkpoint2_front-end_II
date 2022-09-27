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
    .then(result => {
      if (result.status === 200 || result.status === 201) {
        return result.json();
      } else {
        throw result;
      };
    })
    .then(() => getTasks(token))
    .catch(err => {
      if (err.status === 400) {
        alert('Dados incompletos!');
      } else if (err.status === 401) {
        alert('Erro ao validar usuário. Por favor, logar novamente!');
        location.href = '../index.html';
      } else if (err.status === 500) {
        alert('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde!');
        location.href = '../index.html';
      };
    });
};