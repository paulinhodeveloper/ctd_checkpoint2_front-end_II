import { getUser } from './api/getUser.js';
import { getTasks } from './api/getTasks.js';
import { createTask } from './api/createTask.js';

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
};

// Função para adicionar tarefa
taskBtn.addEventListener('click', e => {
  e.preventDefault();
  task.description = inputTask.value.replace(/\n/g, " ");
  taskJson = JSON.stringify(task);
  createTask(token, taskJson);
  form.reset();
});

// Função para deslogar usuário
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  location = '/';
});