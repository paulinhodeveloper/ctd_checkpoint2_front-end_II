import { color, rotate, margin } from './randomTaskStyle.js';
import { deleteTask } from '../api/deleteTask.js';
import { updateTask } from '../api/updateTask.js';
import { getTask } from '../api/getTask.js';

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

    // Montar a tarefa
    task.innerHTML = '';
    task.innerHTML = `
      <div class="header">
      <svg id="editTask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
      id="editTaskk"
      fill="#bed3df"
      d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
        />
        </svg>
        <svg id="deleteTask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
        fill="#bed3df"
        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
        />
        </svg>
        <svg id="checkTask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
        fill="#bed3df"
        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
        />
      </svg>
    </div>
    <div class="desc" id="descrip" contentEditable="false">${taskItem.description}</div>
    <div class="date">${newDate}</div>
    `
    // Variáveis do cabeçalho das tarefas
    const taskHeader = qsa('.right-sidebar #taskContainer .header');
    const taskHeaderSVG = qsa('.right-sidebar #taskContainer .header svg:first-child');

    // Estilizar cabeçalho da tarefa concluída/não concluída
    taskHeader.forEach(e => e.style.width = '28%');
    taskHeaderSVG.forEach(e => e.style.display = 'none');
  })

  // Variável Botão Apagar Tarefas
  const deleteTaskBtn = qsa('#deleteTask');

  // Função de Clique para Apagar Tarefa
  deleteTaskBtn.forEach(e => {
    e.addEventListener('click', () => {

      // Selectionar a tarefa
      const taskBoard = gi('taskBoard');
      let task = e.parentElement.parentElement;
      let id = task.getAttribute('task-id');

      // Remover a tarefa do quadro de tarefas
      taskBoardDone.contains(task) ? taskBoardDone.removeChild(task) : taskBoard.removeChild(task);

      // Remover a tarefa da API
      deleteTask(token, id)

      // Remover a tarefa da lista de tarefas no storage
      const userTasks = sessionStorage.getItem('userTasks')
      const userTasksObj = JSON.parse(userTasks)
      const newUserTasksObj = userTasksObj.filter(e => e.id != id)

      // Atualizar a lista de tarefas no storage
      let userTasksJson = JSON.stringify(newUserTasksObj)
      sessionStorage.setItem('userTasks', userTasksJson)
    });
  });

  // Variável Botão Apagar Tarefas
  const checkTaskBtn = qsa('#checkTask');

  // Função de Clique para Marcar/Desmarcar Tarefa Feita
  checkTaskBtn.forEach(e => {
    e.addEventListener('click', () => {

      // Selectionar a tarefa
      let task = e.parentElement.parentElement;
      let id = task.getAttribute('task-id');
      getTask(token, id);

      // Setar tempo para pegar a tarefa
      setTimeout(() => {

        // Pegar a tarefa no storage
        const userTask = sessionStorage.getItem('selectTask');
        const userTaskObj = JSON.parse(userTask);

        // Definir a tarefa como concluída/não concluída
        userTaskObj.completed ? userTaskObj.completed = false : userTaskObj.completed = true;

        // Atualizar a tarefa na API
        let userTaskJson = JSON.stringify(userTaskObj);
        sessionStorage.setItem('selectTask', userTaskJson);
        updateTask(token, id, userTaskJson);

        // Atualizar a lista de tarefas no storage
        let updatedTask = userTaskObj;
        const userTasks = sessionStorage.getItem('userTasks');
        const userTasksObj = JSON.parse(userTasks);
        const indexOfItemInArray = userTasksObj.findIndex(q => q.id == updatedTask.id);
        if (indexOfItemInArray > -1) {
          userTasksObj[indexOfItemInArray] = updatedTask;
        };
        let userTasksJson = JSON.stringify(userTasksObj);
        sessionStorage.setItem('userTasks', userTasksJson);

        // Reinderizar as tarefas
        renderUserTasks(token);
      }, 500);
    });
  });


  window.addEventListener('click', event => {

    const editTask = qsa('#editTask');

    editTask.forEach(e => {

      // Selectionar a tarefa
      let task = e.parentElement.parentElement;
      let id = task.getAttribute('task-id');
      let taskDesc = e.parentElement.parentElement.childNodes[3];
      let taskHeader = e.parentElement;
      getTask(token, id);
      taskDesc.setAttribute('contentEditable', true);

      if (e.contains(event.target) || (event.target.id == 'descrip' && document.activeElement == taskDesc)) {
        taskDesc.setAttribute('contentEditable', true);
        taskDesc.focus();
        taskHeader.childNodes[5].style.display = 'none';
        taskHeader.style.width = '28%';

      } else {
        console.log('999')
        taskDesc.setAttribute('contentEditable', false);

        if (taskHeader.parentElement.parentElement.parentElement.className == 'container') {
          taskHeader.style.width = '40%';
          taskHeader.childNodes[5].style.display = '';
        } else {
          taskHeader.style.width = '28%';
        }

      }
    })
  })
};