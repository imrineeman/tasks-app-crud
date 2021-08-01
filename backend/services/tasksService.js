const Task = require('../models/task');

// Read All
const getTasks = async () => {
  const tasks = await Task.find({});
  return tasks;
};

// Read One
const getTaskById = async (id) => {
  const task = await Task.findOne({ _id: id });
  return task;
};

// Create
const saveTask = async (task) => {
  const taskData = {
    name: task.name,
    description: task.description,
    labels: task.labels,
  };
  const savedTask = new Task(taskData);
  const res = await savedTask.save();
  return res;
};

// Update
const updateTask = async (task, id) => {
  const taskData = {
    name: task.name,
    description: task.description,
    labels: task.labels,
  };
  const updatedTask = await Task
    .findOneAndUpdate({ _id: id },
      taskData, { new: true });
  return updatedTask;
};

// Delete
const deleteTask = async (id) => {
  const res = await Task.findOneAndDelete({ _id: id });
  return res;
};

module.exports = {
  getTasks,
  saveTask,
  getTaskById,
  updateTask,
  deleteTask,
};
