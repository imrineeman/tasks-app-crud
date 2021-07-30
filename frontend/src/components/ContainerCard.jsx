import React from 'react';
// Components
import TaskCard from './TaskCard';
import Filter from './Filter';
// Mock data
import mockData from '../utils/mockdb';

const ContainerCard = () => (
  <div className="ContainerCard">
    <Filter />
    <div>
      {mockData.map((data) => (
        <TaskCard
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  </div>
);

export default ContainerCard;
