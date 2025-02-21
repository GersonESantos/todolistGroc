-- Criando a tabela de tarefas com status
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('Aguardando', 'Em andamento', 'Feito', 'Cancelado')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserindo uma tarefa de exemplo
INSERT INTO tasks (text, status) VALUES ('Fazer compras', 'Aguardando');

-- Consultando todas as tarefas
SELECT * FROM tasks;

-- Atualizando o status de uma tarefa
UPDATE tasks SET status = 'Feito' WHERE id = 1;

-- Deletando uma tarefa
DELETE FROM tasks WHERE id = 1;