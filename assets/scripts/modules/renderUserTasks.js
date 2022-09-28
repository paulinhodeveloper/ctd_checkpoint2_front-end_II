import { color, rotate, margin } from './randomTaskStyle.js';
import { dragDropUserTask } from './dragDropUserTask.js';
import { deleteUserTask } from './deleteUserTask.js';
import { checkUserTask } from './checkUserTask.js';
import { editUserTask } from './editUserTask.js';
import { taskHTML } from './taskHTML.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);

// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');

// Variável Elemento Quadro de Tarefas Feitas
const taskBoardDone = qs('.right-sidebar #taskBoard');

// Função para Renderizar Tarefas no Quadro de Tarefas/Tarefas Concluídas
export const renderUserTasks = token => {

  taskBoard.innerHTML = '';
  taskBoardDone.innerHTML = '';

  // Pegar as tarefas salvas no SessionStorage para renderizar
  const userTasks = sessionStorage.getItem('userTasks');
  const userTasksObj = JSON.parse(userTasks);

  // Iterar as tarefas
  userTasksObj.forEach(taskItem => {

    // Formatar a data
    const date = new Date(taskItem.createdAt);
    const newDate = date.toLocaleDateString();

    // Criar a div das tarefas
    const task = document.createElement('div');

    // Setar o ID das tarefas
    task.setAttribute('id', 'taskContainer');
    task.setAttribute('task-id', `${taskItem.id}`);
    task.setAttribute('draggable', true)

    if (task.getAttribute('draggable')) {
      task.style.cursor = 'grab';
    }

    // Invocar funções para estilos aleatórios
    task.style.transform = rotate();
    task.style.margin = margin();
    task.style.background = color();

    // Colocar tarefa no quadro de tarefas concluídas / não concluídas
    if (taskItem.completed) {
      taskBoardDone.appendChild(task);
      task.style.backgroundImage = `url('data:image/svg+xml, %3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath fill="%230c4563" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/%3E%3C/svg%3E')`;
    } else {
      taskBoard.appendChild(task);
    };

    // Montar a tarefa (Invocando a função)
    task.innerHTML = '';
    task.innerHTML = taskHTML(taskItem, newDate);

    // Variáveis do cabeçalho das tarefas
    const taskHeader = qsa('.right-sidebar #taskContainer .header');
    const taskHeaderSVG = qsa('.right-sidebar #taskContainer .header svg:first-child');

    // Estilizar cabeçalho da tarefa concluída/não concluída
    taskHeader.forEach(e => e.style.width = '28%');
    taskHeaderSVG.forEach(e => e.style.display = 'none');
  });

  // Invocando Função Drag and Drop
  dragDropUserTask(token);

  // Variável Botão Apagar Tarefas
  const deleteTaskBtn = qsa('#deleteTask');

  // Função de Clique para Apagar Tarefa
  deleteTaskBtn.forEach(e => {
    e.addEventListener('click', () => {

      // Invocando função para deletar tarefa
      deleteUserTask(e, token);
    });
  });

  // Variável Botão Marcar Tarefa como Concluída
  const checkTaskBtn = qsa('#checkTask');

  // Função de Clique para Marcar/Desmarcar Tarefa Feita
  checkTaskBtn.forEach(e => {
    e.addEventListener('click', () => {
      // console.log(e)
      // Invocando função para concluir tarefa
      checkUserTask(e, token);
    });
  });

  // Variável botão para editar tarefa
  const editTask = qsa('#editTask');

  // Evento de Clique na Janela
  window.addEventListener('click', event => {

    // Função de Clique para Editar Tarefa
    editTask.forEach(e => {

      // Invocando função para editar descrição da tarefa
      editUserTask(e, token, event);
    });
  });
};