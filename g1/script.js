// Array para simular o armazenamento de tarefas
let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const statusInput = document.getElementById('statusInput');
    const taskText = taskInput.value.trim();
    const taskStatus = statusInput.value;

    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Adiciona a tarefa ao array
    const task = {
        id: Date.now(), // ID único baseado no timestamp
        text: taskText,
        status: taskStatus
    };
    tasks.push(task);

    // Atualiza a lista na tela
    renderTasks();

    // Limpa o campo de entrada
    taskInput.value = '';
    statusInput.value = 'Aguardando'; // Reseta o status padrão
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function changeStatus(id, newStatus) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.status = newStatus;
        }
        return task;
    });
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpa a lista atual

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <span class="status ${task.status.replace(' ', '-')}">${task.status}</span>
                <select onchange="changeStatus(${task.id}, this.value)">
                    <option value="Aguardando" ${task.status === 'Aguardando' ? 'selected' : ''}>Aguardando</option>
                    <option value="Em andamento" ${task.status === 'Em andamento' ? 'selected' : ''}>Em andamento</option>
                    <option value="Feito" ${task.status === 'Feito' ? 'selected' : ''}>Feito</option>
                    <option value="Cancelado" ${task.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                </select>
                <button onclick="removeTask(${task.id})">Remover</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Inicializa a lista ao carregar a página
renderTasks();