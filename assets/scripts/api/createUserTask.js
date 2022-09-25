import { renderUserTasks } from '../modules/renderUserTasks.js';

// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

// Funções para selecionar elementos
const gi = e => document.getElementById(e);

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

let userTaskJson = "";

// Função para criar tarefa
export const createUserTask = task => {
  const request = {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      'Authorization': token
    },
    body: task
  };

  const taskBoard = gi('taskBoard')
  fetch(`${baseUrl}/tasks`, request)
    .then(result => { return result.json(); })
    .then(data => {
      userTaskJson = JSON.stringify(data);
      sessionStorage.setItem('userTask', userTaskJson);
      const userTask = sessionStorage.getItem('userTask');
      const userTaskObj = JSON.parse(userTask);
      const userTasks = sessionStorage.getItem('userTasks')
      const userTasksObj = JSON.parse(userTasks)
      userTasksObj.push(userTaskObj)
      taskBoard.innerHTML = ' ';
      let userTasksJson = JSON.stringify(userTasksObj)
      sessionStorage.setItem('userTasks', userTasksJson)
      renderUserTasks(userTasksObj)
    })
    .catch(err => console.log(err));
};
