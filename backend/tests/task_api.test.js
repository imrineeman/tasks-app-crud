// Integration test of API and DB
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Task = require('../models/task');
const mockData = require('../utils/mockData');

const api = supertest(app);

// Load testing db with mock data for testing
beforeEach(async () => {
  await Task.deleteMany({});
  const promiseArray = mockData.map((mockTask) => new Task(mockTask).save());
  Promise.all(promiseArray);
});

test('Get all tasks', async () => {
  const res = await api
    .get('/api/tasks');
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(4);
});

test('Post task & Get it by id', async () => {
  const mockTask = {
    labels: [
      'mock',
      'mock',
    ],
    name: 'Mock Task',
    description: 'Test me!',
  };

  const res = await api.post('/api/tasks')
    .send(mockTask);
  expect(res.status).toBe(201);

  const getRes = await api.get(`/api/tasks/${res.body.taskId}`);
  expect(getRes.status).toBe(200);
  expect(getRes.body).toEqual(res.body);
});

test('Update task', async () => {
  const getAll = await api.get('/api/tasks');
  expect(getAll.status).toBe(200);
  expect(getAll.body).toHaveLength(4);

  const mockTask = {
    labels: [
      'mock',
      'mock',
    ],
    name: 'Mock Task',
    description: 'Test me!',
  };

  const updatedTask = await api
    .put(`/api/tasks/${getAll.body[0].taskId}`)
    .send(mockTask);
  expect(updatedTask.status).toBe(200);
  expect(updatedTask.body.name).toEqual(mockTask.name);
});

afterAll(() => {
  mongoose.connection.close();
});
