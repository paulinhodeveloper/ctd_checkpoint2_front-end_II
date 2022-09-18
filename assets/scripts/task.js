// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);

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
        "completed": true,
        "userId": 6782,
        "createdAt": "2022-09-15T21:21:53.786Z"
    },
    {
        "id": 19896,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
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
        "completed": false,
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
        "completed": false,
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
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis acar.",
        "completed": true,
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
    ,
    {
        "id": 20533,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis.",
        "completed": false,
        "userId": 6782,
        "createdAt": "2022-09-15T21:45:24.575Z"
    },
    {
        "id": 21133,
        "description": "Nemo sapiente ipsam nihil ipsum beatae, explicabo quod, cupiditate in distinctio veritatis acar.",
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
let i = 0;
const color = () => {
    const randomColor = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];

    if (i > randomColor.length - 1) {
        i = 0;
    };
    return randomColor[i++];
    // return randomColor[Math.floor(Math.random() * randomColor.length)];
};

// Função para definir rotação aleatória
const rotate = () => {
    const randomRotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
};

// Função para definir margem aleatória
const margin = () => {
    const randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
};

const listUserTasks = userTasks => {
    userTasks.forEach(taskItem => {
        const date = new Date(taskItem.createdAt);
        const newDate = date.toLocaleDateString();
        const task = document.createElement('div');

        task.setAttribute('id', 'taskContainer');
        task.style.transform = rotate();
        task.style.margin = margin();
        task.style.background = color();

        if (taskItem.completed) {
            taskBoardDone.appendChild(task);
            task.style.backgroundImage = `url('data:image/svg+xml, %3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath fill="%230c4563" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/%3E%3C/svg%3E')`;
        } else {
            taskBoard.appendChild(task);
        };

        task.innerHTML = `
        <div class="header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
        fill="#bed3df"
        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
          />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
          fill="#bed3df"
          d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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
    });
};

listUserTasks(task);

userName.innerText = `${user.firstName} ${user.lastName}`;

// Função para deslogar usuário
logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    location = '/';
});