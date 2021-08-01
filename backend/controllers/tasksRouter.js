const tasksRouter = require('express').Router();
const tasksService = require('../services/tasksService');

tasksRouter.get('/', async (req, res) => {
  const tasks = await tasksService.getTasks();
  res.status(200).json(tasks);
});

tasksRouter.get('/:id', async (req, res) => {
  try {
    const task = await tasksService.getTaskById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Invalid task Id' });
  }
});

tasksRouter.post('', async (req, res) => {
  try {
    const result = await tasksService.saveTask(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.name });
  }
});

tasksRouter.put('/:id', async (req, res) => {
  try {
    const updatedTask = await tasksService.updateTask(req.body, req.params.id);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.name });
  }
});

tasksRouter.delete('/:id', async (req, res) => {
  try {
    const result = await tasksService.deleteTask(req.params.id);
    res.status(204).json(result);
  } catch (err) {
    res.status(404).json({ error: err.name });
  }
});

module.exports = tasksRouter;
