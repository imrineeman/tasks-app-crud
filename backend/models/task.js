const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  labels: Array,
});

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.taskId = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
