import { checkUserTask } from './checkUserTask.js';
import { getTask } from '../api/getTask.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const qsa = e => document.querySelectorAll(e);
const gi = e => document.getElementById(e);

export const dragDropUserTask = (token) => {

    // Variável Elemento Quadro de Tarefas
    const taskBoard = gi('taskBoard');

    // Variável Elemento Quadro de Tarefas Feitas
    const taskBoardDone = qs('.right-sidebar #taskBoard');

    // Variável dos Elementos Tarefas
    const taskContainer = qsa('#taskContainer');

    // Funções de Arrastar para o Quadro Tarefas

    //Função quando começa arrastar tarefa
    const dragStart = e => {
        e.currentTarget.setAttribute('class', 'dragging');
        const id = e.currentTarget.getAttribute('task-id')
        getTask(token, id);
    };

    // Funçãoi quando termina de arrastar tarefa
    const dragEnd = e => {
        e.currentTarget.removeAttribute('class', 'dragging');
    };

    // Eventos Começa arrastar/Termina arrastar Tarefa
    taskContainer.forEach(e => {
        e.addEventListener('dragstart', dragStart);
        e.addEventListener('dragend', dragEnd);
    });

    // Funções Quadro de Tarefas

    // Função quando tarefa esta sobre o Quadro de Tarefas
    const dragOverTaskBoard = e => {
        e.preventDefault();
        e.currentTarget.setAttribute('class', 'dragHoverTaskBoard');
    };

    // Função quando tarefa sai do Quadro de Tarefas
    const dragLeaveTaskBoard = e => {
        e.currentTarget.removeAttribute('class', 'dragHoverTaskBoard');
    };

    // Função quando tarefa é solta no Quadro de Tarefas
    const dropToTaskBoard = e => {

        e.currentTarget.removeAttribute('class', 'dragHoverTaskBoard');

        const taskTo = e.target.parentElement.className;
        const taskDragging = qs('.dragging');
        const taskCheckBtn = taskDragging.children[0].children[4]
        const taskFrom = taskDragging.parentElement.parentElement.className;
        if (taskTo == 'container' && taskFrom == 'right-sidebar') {
            checkUserTask(taskCheckBtn, token);
        };
    };

    // Evento quando a tarefa esta sobre o Quadro de Tarefa
    taskBoard.addEventListener('dragover', dragOverTaskBoard);

    // Evento quando a tarefa sai do Quadro de Tarefa
    taskBoard.addEventListener('dragleave', dragLeaveTaskBoard);

    // Evento quando a tarefa é solta no Quadro de Tarefa
    taskBoard.addEventListener('drop', dropToTaskBoard);

    // Funções de Arrastar para o Quadro Tarefas Concluídas

    // Função quando tarefa esta sobre o Quadro de Tarefas Concluídas
    const dragOverTaskBoardDone = e => {
        e.preventDefault();
        e.currentTarget.setAttribute('class', 'dragHoverTaskBoardDone');
    };

    // Função quando tarefa sai do Quadro de Tarefas Concluídas
    const dragLeaveTaskBoardDone = e => {
        e.currentTarget.removeAttribute('class', 'dragHoverTaskBoardDone');
    };

    // Função quando tarefa é solta no Quadro de Tarefas Concluídas
    const dropToTaskBoardDone = e => {
        e.currentTarget.removeAttribute('class', 'dragHoverTaskBoardDone');
        const taskTo = e.target.parentElement.className;
        const taskDragging = qs('.dragging');
        const taskCheckBtn = taskDragging.children[0].children[4]
        const taskFrom = taskDragging.parentElement.parentElement.className;
        if (taskTo == 'right-sidebar' && taskFrom == 'container') {
            checkUserTask(taskCheckBtn, token);
        };
    };

    // Evento quando a tarefa esta sobre o Quadro de Tarefa Concluídas
    taskBoardDone.addEventListener('dragover', dragOverTaskBoardDone);

    // Evento quando a tarefa sai do Quadro de Tarefa Concluídas
    taskBoardDone.addEventListener('dragleave', dragLeaveTaskBoardDone);

    // Evento quando a tarefa é solta no Quadro de Tarefa Concluídas
    taskBoardDone.addEventListener('drop', dropToTaskBoardDone);
}