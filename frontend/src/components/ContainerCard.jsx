import React from 'react';
// Components
import TaskCard from './TaskCard';
import Filter from './Filter';

const ContainerCard = () => (
  <div className="ContainerCard">
    <Filter />
    <div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  </div>
);

export default ContainerCard;
