import { getTask } from '../api/getTask.js';
import { updateTask } from '../api/updateTask.js';
import { renderUserTasks } from './renderUserTasks.js';

export const checkUserTask = (e, token) => {

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
        setTimeout(() => {
            let userTaskJson = JSON.stringify(userTaskObj);
            sessionStorage.setItem('selectTask', userTaskJson);
            setTimeout(() => {
                updateTask(token, id, userTaskJson);
            }, 400);
        }, 400);

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
    }, 1000);
}