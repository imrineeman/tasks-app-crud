const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');

// Routers
const tasksRouter = require('./controllers/tasksRouter');

const app = express();

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log(`Connected to DB at ${config.MONGODB_URI}`));

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});
app.use('/api/tasks', tasksRouter);

module.exports = app;
