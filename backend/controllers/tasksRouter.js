const tasksRouter = require('express').Router();

tasksRouter.get('/', (req, res) => {
  res.send('GetAll!!!');
});

module.exports = tasksRouter;
