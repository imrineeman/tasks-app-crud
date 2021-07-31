import React, { useState } from 'react';

const TaskCard = ({ name, description }) => {
  const [showMore, setShowMore] = useState(false);
  const [configMode, setConfigMode] = useState(false);

  const toggleCard = () => {
    showMore ? setShowMore(false) : setShowMore(true);
  };
  return (
    <div
      className="TaskCard"
      onClick={toggleCard}
    >
      <header>
        {name}
      </header>
      {showMore
        ? (
          <div className="taskDescription">
            {description}
          </div>
        ) : null}
    </div>
  );
};

export default TaskCard;
