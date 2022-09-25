import { getTask } from '../api/getTask.js';
import { updateTask } from '../api/updateTask.js';

export const editUserTask = (e, token, event) => {

    // Variáveis dos Elementos da Tarefa
    const task = e.parentElement.parentElement;
    const id = task.getAttribute('task-id');
    const taskDesc = e.parentElement.parentElement.childNodes[3];
    const taskHeader = e.parentElement;
    const cancelUpdateBtn = e.parentElement.parentElement.childNodes[5].children[0].childNodes[1];
    const saveUpdateBtn = e.parentElement.parentElement.childNodes[5].children[0].childNodes[5];

    // Pegar a tarefa no storage
    if (e.contains(event.target)) {
        getTask(token, id);
    };

    // Setar tempo para pegar a tarefa
    setTimeout(() => {

        // Pegar a tarefa no storage
        const userTask = sessionStorage.getItem('selectTask');
        const userTaskObj = JSON.parse(userTask);

        // Evento de Clique para editar a tarefa (ao clicar no botão / ao clicar na descrição da tarefa)
        if (e.contains(event.target) || (event.target.id == 'descrip' && document.activeElement == taskDesc)) {

            // Habilitar editar texto na própria descrição da tarefa
            taskDesc.setAttribute('contentEditable', true);

            // Focar o prompt na descrição da tarefa para editar
            taskDesc.focus();

            // Ocultar Botões do Header da tarefa
            taskHeader.style.display = 'none';

            // Aumentar a altura da descrição da tarefa
            taskDesc.style.height = '174px';

            // Mostrar botões para salvar/cancelar edição da tarefa
            cancelUpdateBtn.style.display = 'block';
            saveUpdateBtn.style.display = 'block';


            // Evento de key para registrar quando a tecla foi pressionada
            taskDesc.addEventListener('keydown', e => {
                // Não permitir dar Enter ao editar a descrição
                // Não permitir backspace e delete se a descrição tiver menos de 6 carácteres
                if (e.key === 'Enter' || (e.key === 'Delete' && taskDesc.innerText.length <= 6)) {
                    e.preventDefault();
                };
            });

            // Evento de key para registrar quando a tecla foi levantada
            taskDesc.addEventListener('keyup', () => {
                
                // Variável para texto da descrição atual na tarefa
                let currentTextDesc = taskDesc.innerText;

                // Salvar descrição atual da tarefa no storage
                sessionStorage.setItem('currentTextDesc', currentTextDesc);

                // Evento de key para registrar quando a tecla foi pressionada
                taskDesc.addEventListener('keydown', e => {

                    // Variável da tecla
                    const keycode = e.keyCode;

                    // Variáveis com o código das teclas que digitam
                    const printable =
                        (keycode > 47 && keycode < 58) || // teclas dos números
                        keycode == 32 || // barra de espaço
                        (keycode > 64 && keycode < 91) || // teclas de letras
                        (keycode > 95 && keycode < 112) || // teclas teclado númerico
                        (keycode > 185 && keycode < 193) || // ;=,-./` 
                        (keycode > 218 && keycode < 223);   // [\]' 

                    // Não permitir dar Enter ao editar a descrição / máximo 96 carácteres
                    if (taskDesc.innerText.length > 96 && printable) {
                        e.preventDefault();
                    };

                    // Não permitir backspace e delete se a descrição tiver menos de 6 carácteres
                    if (taskDesc.innerText.length <= 6 && (e.keyCode == 8 || e.keyCode == 46)) {
                        e.preventDefault();
                    };

                    // Salvar a descrição da tarefa ao digitar no storage
                    currentTextDesc = taskDesc.innerText;
                    sessionStorage.setItem('currentTextDesc', currentTextDesc);
                });
            });

            // Evento de clique no botão para salvar alteração na descrição da tarefa
            saveUpdateBtn.addEventListener('click', () => {
                
                //  Variável da descrição da tarefa selecionada no storage
                let currentStorageDesc = userTaskObj.description;
                
                // Pegar a descrição da tarefa salvo no storage
                let textDescStorage = sessionStorage.getItem('currentTextDesc');
                
                // Se a descrição da tarefa salva no storage for diferente da descrição da tarefa selecionada no storage
                if (currentStorageDesc != textDescStorage) {
                    
                    // Atualizar a descrição da tarefa selecionada no storage
                    userTaskObj.description = textDescStorage;

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
                };
            });
        }

        // Se o clique não for no botão para salvar alteração ou na descrição da tarefa editada
        else {

            // Desabilitar edição da tarefa
            taskDesc.setAttribute('contentEditable', false);

            // Esconder botões para salvar/cancelar edição da tarefa
            saveUpdateBtn.style.display = 'none';
            cancelUpdateBtn.style.display = 'none';

            // Mostrar Header da tarefa
            taskHeader.style.display = '';

            // Voltar altura da descrição da tarefa original
            taskDesc.style.height = '150px';

            // Pegar tarefa selecionada no storage
            const userTask = sessionStorage.getItem('selectTask');
            const userTaskObj = JSON.parse(userTask);

            // Se a tarefa sendo editada tiver alteração do texto, mas não for clicado no botão para salvar
            if (task.getAttribute('task-id') == userTaskObj.id) {

                // Descrição da tarefa igual quando foi selecionada(sem alteração)
                taskDesc.innerText = userTaskObj.description;
            };
        };
    }, 500);
};