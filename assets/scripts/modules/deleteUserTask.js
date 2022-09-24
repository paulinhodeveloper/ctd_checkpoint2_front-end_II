import { deleteTask } from '../api/deleteTask.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variável Elemento Quadro de Tarefas Feitas
const taskBoardDone = qs('.right-sidebar #taskBoard');

export const deleteUserTask = (e, token) => {
    // Selectionar a tarefa
    const taskBoard = gi('taskBoard');
    let task = e.parentElement.parentElement;
    let id = task.getAttribute('task-id');

    // Remover a tarefa do quadro de tarefas
    taskBoardDone.contains(task) ? taskBoardDone.removeChild(task) : taskBoard.removeChild(task);

    // Remover a tarefa da API
    deleteTask(token, id);

    // Remover a tarefa da lista de tarefas no storage
    const userTasks = sessionStorage.getItem('userTasks');
    const userTasksObj = JSON.parse(userTasks);
    const newUserTasksObj = userTasksObj.filter(e => e.id != id);

    // Atualizar a lista de tarefas no storage
    let userTasksJson = JSON.stringify(newUserTasksObj);
    sessionStorage.setItem('userTasks', userTasksJson);
};