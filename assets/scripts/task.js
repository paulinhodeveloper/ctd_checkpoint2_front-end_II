import { getUser } from './api/getUser.js';
import { getUserTasks } from './api/getUserTasks.js';
import { createUserTask } from './api/createUserTask.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variável Botão Logout
const logoutBtn = gi('logout');

// Variável Campo Descrição Tarefa
const inputTask = gi('newTask');

// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');

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
  getUserTasks(token);
};

// Função para adicionar tarefa
taskBtn.addEventListener('click', e => {
  e.preventDefault();
  task.description = inputTask.value.replace(/\n/g, " ");
  taskJson = JSON.stringify(task);
  createUserTask(taskJson);
  form.reset();
});

// Função para deslogar usuário
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  location = '/';
});