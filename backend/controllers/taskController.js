const Task = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  Task.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getTaskById = (req, res) => {
  const id = req.params.id;
  Task.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Task not found' });
    res.json(results[0]);
  });
};

exports.createTask = (req, res) => {
  const task = req.body;
  if (!task.title) return res.status(400).json({ message: 'Title is required' });

  Task.create(task, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Task created', taskId: result.insertId });
  });
};

exports.updateTask = (req, res) => {
  const id = req.params.id;
  const task = req.body;

  Task.update(id, task, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task updated' });
  });
};

exports.deleteTask = (req, res) => {
  const id = req.params.id;

  Task.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task deleted' });
  });
};
