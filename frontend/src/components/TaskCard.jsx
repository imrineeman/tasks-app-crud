import React, { useState } from 'react';

const TaskCard = ({ name, description }) => {
  const [showDesc, setShowDesc] = useState(false);

  const toggleCard = () => {
    showDesc ? setShowDesc(false) : setShowDesc(true);
  };
  return (
    <div
      className="TaskCard"
      onClick={toggleCard}
    >
      <header>
        {name}
      </header>
      {showDesc
        ? (
          <div className="taskDescription">
            {description}
          </div>
        ) : null}
    </div>
  );
};

export default TaskCard;
