import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskCard = ({
  name, description, labels, taskId, handleDelete, handleUpdate,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleShowMore = () => {
    showMore ? setShowMore(false) : setShowMore(true);
  };

  const toggleEditMode = () => {
    editMode ? setEditMode(false) : setEditMode(true);
  };

  return (
    <div>
      {editMode ? (
        <TaskForm
          name={name}
          description={description}
          labels={labels}
          taskId={taskId}
          handleClick={toggleEditMode}
          handleSubmit={handleUpdate}
        />
      )
        : (
          <div
            className="TaskCard"
            onClick={toggleShowMore}
          >
            <header>
              {name}
            </header>
            <button
              onClick={toggleEditMode}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => handleDelete(taskId)}
            >
              Delete
            </button>
            {showMore
              ? (
                <div className="taskDescription">
                  {description}
                </div>
              ) : null}
          </div>
        ) }
    </div>
  );
};

export default TaskCard;
