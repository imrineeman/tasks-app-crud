const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./utils/config');
const testingRouter = require('./controllers/testingRouter');
// Routers
const tasksRouter = require('./controllers/tasksRouter');

const app = express();
app.use(cors());
app.use(express.json());

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

if (process.env.NODE_ENV === 'test') {
  app.use('/testing', testingRouter);
}

module.exports = app;
