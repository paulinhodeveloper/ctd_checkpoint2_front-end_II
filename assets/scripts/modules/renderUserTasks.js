import { color, rotate, margin } from './randomTaskStyle.js';
import { deleteUserTask } from '../api/deleteUserTask.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');

// Variável Elemento Quadro de Tarefas Feitas
const taskBoardDone = qs('.right-sidebar #taskBoard');

let userTasksJson = "";

export const renderUserTasks = (data) => {
  userTasksJson = JSON.stringify(data);
  sessionStorage.setItem('userTasks', userTasksJson);
  const userTasks = sessionStorage.getItem('userTasks');
  const userTasksObj = JSON.parse(userTasks);
  userTasksObj.forEach(taskItem => {
    const date = new Date(taskItem.createdAt);
    const newDate = date.toLocaleDateString();
    const task = document.createElement('div');

    task.setAttribute('id', 'taskContainer');
    task.setAttribute('task-id', `${taskItem.id}`);
    task.style.transform = rotate();
    task.style.margin = margin();
    task.style.background = color();

    if (taskItem.completed) {
      taskBoardDone.appendChild(task);
      task.style.backgroundImage = `url('data:image/svg+xml, %3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath fill="%230c4563" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/%3E%3C/svg%3E')`;
    } else {
      taskBoard.appendChild(task);
    };

    task.innerHTML = ' ';
    task.innerHTML = `
      <div class="header">
      <svg id="editTask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
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
    <div class="desc">${taskItem.description}</div>
    <div class="date">${newDate}</div>
    `
    const taskHeader = qsa('.right-sidebar #taskContainer .header');
    const taskHeaderSVG = qsa('.right-sidebar #taskContainer .header svg:first-child');

    taskHeader.forEach(e => e.style.width = '28%');
    taskHeaderSVG.forEach(e => e.style.display = 'none');
  })

  const deleteTaskBtn = qsa('#deleteTask')
  if (document.contains(taskBoard)) {
    deleteTaskBtn.forEach(e => {
      e.addEventListener('click', () => {
        const taskBoard = gi('taskBoard');
        let task = e.parentElement.parentElement;
        let id = task.getAttribute('task-id');
        taskBoard.removeChild(task)
        deleteUserTask(token, id)
        const userTasks = sessionStorage.getItem('userTasks')
        const userTasksObj = JSON.parse(userTasks)
        const newUserTasksObj = userTasksObj.filter(e => e.id != id)
        let userTasksJson = JSON.stringify(newUserTasksObj)
        sessionStorage.setItem('userTasks', userTasksJson)
      })
    })
  };
}