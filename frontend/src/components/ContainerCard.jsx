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

  const showTaskForm = () => {
    formVisible
      ? setFormVisible(false) : setFormVisible(true);
  };

  const handleSerachbarChange = ({ target }) => {
    setSearch(target.value);
  };

  const submitTask = async (taskData) => {
    const res = await taskService.create(taskData);
    setData(data.concat(res.data));
    showTaskForm();
  };

  const updateTask = async (taskData, id) => {
    const res = await taskService.update(taskData, id);
    setData(data.map((task) => {
      if (task.taskId === res.data.taskId) {
        return res.data;
      } return task;
    }));
  };

  const deleteTask = async (taskId) => {
    const res = await taskService.remove(taskId);
    const newData = data.filter((task) => task.taskId !== taskId);
    setData(newData);
  };

  useEffect(() => {
    taskService.getAll()
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="ContainerCard">
      <Filter
        handleChange={handleSerachbarChange}
        handleClick={showTaskForm}
        toggleVisibility={showTaskForm}
      />
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
            taskId={task.taskId}
            handleDelete={deleteTask}
            handleUpdate={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerCard;
