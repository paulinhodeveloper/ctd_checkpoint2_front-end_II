<div align="center">
    <h1>💻 Task Done 🖥️</h1>
    <h6>Checkpoint Front End II</h6>
</div>

---
<div  align="center">
<nav> <a href="#objetivos">Objetivos</a> | <a href="#estrutura">Estrutura</a> | <a href="#integrantes">Integrantes</a></nav>
</div>

---

<br>
<h2 id="objetivos">🚀 Objetivos 🚀</h2>
<p>


Este projeto consiste em um pequeno aplicativo de gerenciamento de tarefas, dentro do qual podemos realizar as seguintes atividades:
- Ver tarefas pendentes.
- Ver tarefas terminadas.
- Marcar uma tarefa como terminada.
- Criar tarefas novas.
- Visualizar a data de criação de uma tarefa.
- Remover tarefas.

Além do citado acima, implementaremos um sistema de autenticação de usuários, que inclui o processo de registro e login.


<h2 id="estrutura">🎯 Estrutura ⚒️</h2>

Iremos seguir parte do que está proposto e iremos utilizar Módulos no Javascript Com eles é possível criar blocos de código, que podem ser reutilizados em diversos lugares e contextos.

Assim, podemos criá-los com responsabilidades determinadas e utilizar em conjunto com outros módulos para realizar tarefas mais complexas.

A disposição das pastas e aquivos segue o padrão:

:open_file_folder: ctd_checkpoint2_front-end_II
:open_file_folder: assets
- - :open_file_folder: images
- - :open_file_folder: scripts
- - :page_facing_up: signin.js
- - :page_facing_up: signup.js
- - :page_facing_up: task.js
- - - :open_file_folder: api
- - - - :page_facing_up: baseUrl.js
- - - - :page_facing_up :createTask.js
- - - - :page_facing_up: deleteTask.js
- - - - :page_facing_up: getTask.js
- - - - :page_facing_up: getTasks.js
- - - - :page_facing_up: getUser.js
- - - - :page_facing_up: signInUser.js
- - - - :page_facing_up: signUpUser.js
- - - - :page_facing_up: updateTask.js
- - :open_file_folder: modules
- - - :page_facing_up: checkFormValidity.js
- - - :page_facing_up: checkUserTask.js
- - - :page_facing_up: deleteUserTask.js
- - - :page_facing_up: editUserTask.js
- - - :page_facing_up: inputValidation.js
- - - :page_facing_up: passwordConfirmValidation.js
- - - :page_facing_up: randomTaskStyle.js
- - - :page_facing_up: renderUserInfo.js
- - - :page_facing_up: taskHTML.js
- - :open_file_folder: styles
- - - :page_facing_up: sign.css
- - - :page_facing_up: tasks.css
:open_file_folder: pages
- :page_facing_up: signup.html
- :page_facing_up: tasks.html
- :page_facing_up: index.html


Como dito acima, módulos são recursos muito úteis, uma vez que proporcionam qualidade e eficiência maior do código produzido, além de proporcionar agilidade no desenvolvimento de novas funcionalidades. Tudo isto devido a não ser necessário duplicar ou triplicar o mesmo bloco para utilizar em diferentes lugares. O módulo é apenas importado e todas as suas funcionalidades são adicionadas ao código que o importou.


---


<h2>📑 Normalizações e validações esperadas 📑</h2>


**Pagina de Login:**

- [x] Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);

- [x] Nenhum dos campos pode ser vazio/nulo;

- [x] O email deve ser de um tipo válido (ex: aplicar expressões regulares);

- [x] O botão de acesso deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.


**Página de Cadastro:** 

- [x] Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);

- [x] Nenhum dos campos pode ser vazio/nulo;

- [x] O email deve ser de um tipo válido (ex: aplicar expressões regulares);

- [x] Os campos “senha” e “repetir senha” devem possuir a mesma informação para serem considerados válidos;

- [x] O botão de cadastro deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.


**Página de Tarefas**

- [x] Criar tarefas;

- [x] Vizualizar tarefas pendentes;

- [x] Deve-se marcar uma tarefa como concluída

- [x] Vizualizar tarefas concluídas;

- [x] As tarefas precisam estar com a data de criação no formato DD/MM/AAAA

- [x] Os valores/textos tarefas podem ser alteradas

- [x] Uma tarefa pode ser deletada

**Skeleton**
- [x] Uso de Skeleton nas páginas

**Load Spinner**
- [x] Load Spinner nas páginas

**Responsividade**

- [x] A aplicação deve ser responsiva.

- [x] Deve-se atender as telas mais comuns

---

<h2> Experiência </h2>

<a href="https://paulinhodeveloper.github.io/ctd_checkpoint2_front-end_II/pages/signup.html" target="_blank">Clique aqui</a> seu cadastro e comece hoje mesmo a organizar suas tarefas do cotidiano.



<h2 id="integrantes">✅ Integrantes do grupo ✅</h2>

<div style="display:flex; flex-direction: column">

<div class="row" style="display:flex; flex-direction: column">
    <div class="developer1">
    <img class="braulio" src="https://github.com/braulioportela79" height="50px" style="border-radius: 50px alt="braulio" />
    <p>Braulio Portela/p>
</div>
 
<div class="row" style="display:flex; flex-direction: column">
    <div class="developer2">
    <img class="paulinho" src="https://github.com/paulinhodeveloper.png" height="50px" style="border-radius: 50px alt="paulinho" />
    <p>Paulo Henrique Santos Borges</p>
</div>
 
<div class="row" style="display:flex; flex-direction: column">
    <div class="developer3">
    <img class="Joao" src="https://github.com/jfamigo.png" height="50px" style="border-radius: 50px alt="Joao" />
    <p>João Francisco Gimenes</p>
</div>

<div class="row" style="display:flex; flex-direction: column">
    <div class="developer4">
    <img class="anderson" src="https://github.com/Adersoncc.png" height="50px" style="border-radius: 50px alt="anderson" />
    <p>Áderson Costa</p>
</div>

<div class="row" style="display:flex; flex-direction: column">
    <div class="developer5">
    <img class="ivanaldo" src="https://github.com/jfamigo.png" height="50px" style="border-radius: 50px alt="ivanaldo" />
    <p>Ivanaldo da Silva Santos</p>
</div>

<div class="row" style="display:flex; flex-direction: column">
    <div class="developer6">
    <img class="jonathan" src="https://github.com/jfamigo.png" height="50px" style="border-radius: 50px alt="jonathan" />
    <p>Jonathan A. Possoli</p>
</div>

</div>
