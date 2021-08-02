const testingRouter = require('express').Router();
const Task = require('../models/task');

testingRouter.get('/reset', async (request, response) => {
  await Task.deleteMany({});
  response.status(204).send('<h1>Database had been reset!</h1>');
});

module.exports = testingRouter;
