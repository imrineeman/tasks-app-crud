import axios from 'axios';

const BASE_URL = 'http://localhost:3005/api/tasks';

// Read
const getAll = () => axios.get(BASE_URL);

// Create
// Update
// Delete

export default { getAll };
