import React, { useState } from 'react';

const TaskForm = ({
  name, description, taskId, handleSubmit, handleClick,
}) => {
  const [taskName, setTaskName] = useState(name || '');
  const [taskDescription, setTaskDescription] = useState(description || '');
  // const [taskLabels, setTaskLabels] = useState(props.taskLabels);

  const handleNameChange = ({ target }) => setTaskName(target.value);
  const handleDescriptionChange = ({ target }) => setTaskDescription(target.value);

  const omitClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="TaskCard"
      onClick={handleClick || null}
    >
      <form>
        <input
          id="taskName"
          value={taskName}
          onChange={handleNameChange}
          onClick={omitClick}
          style={{ display: 'block' }}
        />
        <input
          id="taskDescription"
          value={taskDescription}
          onChange={handleDescriptionChange}
          onClick={omitClick}
        />
        <button
          type="button"
          id="submitButton"
          onClick={() => handleSubmit({
            name: taskName,
            description: taskDescription,
            labels: '',
          }, taskId)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
