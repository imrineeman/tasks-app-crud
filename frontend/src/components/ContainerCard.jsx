import React, { useState } from 'react';
// Components
import TaskCard from './TaskCard';
import Filter from './Filter';
// Mock data
import mockData from '../utils/mockdb';

const ContainerCard = () => {
  const [data, setData] = useState(mockData);
  const [search, setSearch] = useState('');
  const tasks = search
    ? data.filter((task) => (task.name.toLowerCase().includes(search.toLowerCase()))) : data;

  return (
    <div className="ContainerCard">
      <input
        onChange={(({ target }) => setSearch(target.value))}
      />
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
