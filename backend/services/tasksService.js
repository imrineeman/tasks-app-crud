const Task = require('../models/task');

const getTasks = async () => {
  const tasks = await Task.find({});
  return tasks;
};

const getTaskById = async (id) => {
  const task = await Task.findOne({ _id: id });
  return task;
};

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

module.exports = {
  getTasks,
  saveTask,
  getTaskById,
  updateTask,
};
