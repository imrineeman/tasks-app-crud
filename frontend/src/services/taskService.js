import axios from 'axios';

const BASE_URL = 'http://localhost:3005/api/tasks';

// Read
const getAll = () => axios.get(BASE_URL);

// Create
const create = (taskData) => axios.post(BASE_URL, taskData);

// Update
// Delete

export default {
  getAll,
  create,
};
