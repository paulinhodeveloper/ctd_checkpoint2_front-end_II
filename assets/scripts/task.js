import { getUser } from './api/getUser.js';
import { getTasks } from './api/getTasks.js';
import { createTask } from './api/createTask.js';

import { checkFormValidity } from './modules/checkFormValidity.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variável Botão Logout
const logoutBtn = gi('logout');

// Variável Campo Descrição Tarefa
const inputTask = gi('newTask');

// Variáveis do elemento button e do form
const form = qs('form');
const taskBtn = gi('createTaskButton');

const addTaskValidation = qs('#addTaskValidation span');

// Objeto JS Tarefa Usuário
const task = {
  description: '',
  completed: false,
};

// Objeto JSON Tarefa Usuário
let taskJson = '';

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

onload = () => {
  getUser(token);
  getTasks(token);

  if (!token) {
    location.href = "../index.html";
  };
};

// Não permitir dar Enter ao adicionar tarefa
inputTask.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
  };
});

// Verificando Validação do Campo para adicionar tarefa
inputTask.addEventListener('keyup', () => {
  if (inputTask.value.length < 6) {
    addTaskValidation.style.display = 'block';
    addTaskValidation.innerText = 'Mínimo 6 carácteres';
    setTimeout(() => {
      addTaskValidation.style.display = 'none';
    }, 3000);

  } else if (inputTask.value.length == 96) {
    addTaskValidation.style.display = 'block'
    addTaskValidation.innerText = 'Máximo 96 carácteres';
    setTimeout(() => {
      addTaskValidation.style.display = 'none';
    }, 3000);
  } else {
    addTaskValidation.style.display = 'none';
  };
  checkFormValidity();
});

// Função para adicionar tarefa
taskBtn.addEventListener('click', e => {
  e.preventDefault();
  task.description = inputTask.value.replace(/\n/g, " ");
  taskJson = JSON.stringify(task);
  createTask(token, taskJson);
  form.reset();
  checkFormValidity();
});

// Função para deslogar usuário
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('selectTask');
  sessionStorage.removeItem('userTasks');
  sessionStorage.removeItem('currentTextDesc');
  location.href = '../index.html';
});
