import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3005/api/tasks';

// Read
const getAll = () => axios.get(BASE_URL);

// Create
const create = (taskData) => axios.post(BASE_URL, taskData);

// Update
const update = (taskData, taskId) => axios.put(`${BASE_URL}/${taskId}`, taskData);

// Delete
const remove = (taskId) => axios.delete(`${BASE_URL}/${taskId}`);

export default {
  getAll,
  create,
  update,
  remove,
};
