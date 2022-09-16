// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');

// Variável Elementos Nome e Sobrenome Usuário
const userName = gi('userLogin');

// Variável Elemento Quadro de Tarefas Feitas
const taskBoardDone = qs('.right-sidebar #taskBoard');

// Variável Botão Logout
const logoutBtn = gi('logout');

// Objeto JS Dados Usuário
const user = {
    "id": 6782,
    "firstName": "Braulio",
    "lastName": "Portela",
    "email": "bportela@gmail.com.br"
};

// Objeto JS Tarefa Usuário
const task = [
    {
        "id": 20078,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T21:21:53.786Z"
    },
    {
        "id": 19896,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": true,
        "userId": 6782,
        "createdAt": "2022-09-15T14:46:28.050Z"
    },
    {
        "id": 20045,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T20:32:07.758Z"
    },
    {
        "id": 20048,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T20:36:34.777Z"
    },
    {
        "id": 20052,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": true,
        "userId": 6782,
        "createdAt": "2022-09-15T20:42:53.596Z"
    },
    {
        "id": 20133,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T21:45:24.575Z"
    },
    {
        "id": 20132,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": true,
        "userId": 6782,
        "createdAt": "2022-09-15T21:45:12.026Z"
    },
    {
        "id": 20233,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T21:45:24.575Z"
    },
    {
        "id": 20533,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T21:45:24.575Z"
    },
    {
        "id": 21133,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T21:45:24.575Z"
    },
    {
        "id": 20178,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": true,
        "userId": 6782,
        "createdAt": "2022-09-15T21:45:12.026Z"
    }
];

// // Função para definir cor aleatória
export const color = () => {
    const randomColor = ['#ff3de8', '#c2ff3d', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];
    return randomColor[Math.floor(Math.random() * randomColor.length)];
};

// Função para definir rotação aleatória
export const rotate = () => {
    const randomRotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
};

// Função para definir margem aleatória
export const margin = () => {
    const randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
};

const listUserTasks = userTasks => {
    userTasks.forEach(taskItem => {
        const task = document.createElement('div');

        if (taskItem.completed) {
            taskBoardDone.appendChild(task);
            task.style.background = color();
            task.style.backgroundImage = "url('../assets/images/check-solid.svg')";
            task.style.backgroundBlendMode = 'overlay';
        } else {
            taskBoard.appendChild(task);
            task.style.background = color();
        };

        task.setAttribute('id', 'taskContainer');
        task.style.transform = rotate();
        task.style.margin = margin();
        task.innerText = taskItem.description;
    });
};

listUserTasks(task);

userName.innerText = `${user.firstName} ${user.lastName}`;

// Função para deslogar usuário
logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    location = '/';
});