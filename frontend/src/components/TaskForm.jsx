import React, { useState } from 'react';

const TaskForm = (props) => {
  const [taskName, setTaskName] = useState(props.name);
  const [taskDescription, setTaskDescription] = useState(props.taskDescription);
  // const [taskLabels, setTaskLabels] = useState(props.taskLabels);

  const handleNameChange = ({ target }) => setTaskName(target.value);
  const handleDescriptionChange = ({ target }) => setTaskDescription(target.value);

  return (
    <div className="TaskCard">
      <form>
        <input onChange={handleNameChange} />
        <input onChange={handleDescriptionChange} />
        <button
          type="button"
          onClick={() => props.handleSubmit({
            name: taskName,
            description: taskDescription,
            labels: '',
          })}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
