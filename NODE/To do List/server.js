const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

let todos = [
  { id: 1, task: 'Learn Express', date: '24-Jul-2025', feedback: 'A' },
  { id: 2, task: 'Build CRUD API', date: '25-Jul-2025', feedback: 'A' }
];

app.post('/todos', (req, res) => {
  const { task, date, feedback } = req.body;
  const newTodo = {
    id: todos.length + 1,
    task,
    date,
    feedback
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task, date, feedback } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ message: 'Task not found' });

  todo.task = task || todo.task;
  todo.date = date || todo.date;
  todo.feedback = feedback || todo.feedback;

  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});