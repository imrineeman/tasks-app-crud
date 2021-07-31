import React, { useState, useEffect } from 'react';
// Components
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import Filter from './Filter';
// Mock data
import mockData from '../utils/mockdb';
// Backend services
import taskService from '../services/taskService';

const ContainerCard = () => {
  const [data, setData] = useState(mockData);
  const [search, setSearch] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const tasks = search
    ? data.filter(
      (task) => (task.name.toLowerCase().includes(search.toLowerCase())),
    ) : data;

  const handleNewTaskClick = () => {
    formVisible ? setFormVisible(false) : setFormVisible(true);
  };

  const submitTask = async (taskData) => {
    const res = await taskService.create(taskData);
    setData(data.concat(res.data));
  };

  useEffect(() => {
    taskService.getAll()
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="ContainerCard">
      <input
        onChange={(({ target }) => setSearch(target.value))}
      />
      <button
        type="button"
        onClick={handleNewTaskClick}
      >
        New Task
      </button>
      {formVisible
        ? (
          <TaskForm
            handleSubmit={submitTask}
          />
        )
        : null}
      <div>
        {tasks.map((task) => (
          <TaskCard
            name={task.name}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerCard;
