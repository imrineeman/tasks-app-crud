import axios from 'axios';

const BASE_URL = 'http://localhost:3005/api/tasks';

// Read
const getAll = () => axios.get(BASE_URL);

// Create
const create = (taskData) => axios.post(BASE_URL, taskData);

// Update
const update = (taskData) => axios.put(`${BASE_URL}/${taskData.taskId}`, taskData);

// Delete
const remove = (taskId) => axios.delete(`${BASE_URL}/${taskId}`);

export default {
  getAll,
  create,
  update,
  remove,
};
