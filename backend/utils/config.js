require('dotenv').config();

const PORT = 3005;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/tasks';
const BASE_URL = `http://localhost:${PORT}`;

module.exports = {
  MONGODB_URI,
  PORT,
  BASE_URL,
};
