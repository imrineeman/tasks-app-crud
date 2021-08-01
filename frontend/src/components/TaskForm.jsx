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
          value={taskName}
          onChange={handleNameChange}
          onClick={omitClick}
        />
        <input
          value={taskDescription}
          onChange={handleDescriptionChange}
          onClick={omitClick}
        />
        <button
          type="button"
          onClick={() => handleSubmit({
            name: taskName,
            description: taskDescription,
            labels: '',
          }, taskId || null)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
