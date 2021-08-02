import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

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
        <Input
          id="taskName"
          className="nameInput"
          value={taskName}
          onChange={handleNameChange}
          onClick={omitClick}
          width=""
          placeholder="Task Name"
          style={{
            width: '92%',
            marginBottom: '1%',
            marginRight: '1%',
          }}

        />
        <Button
          type="button"
          id="submitButton"
          type="ghost"
          shape="circle"
          style={{ }}
          onClick={() => handleSubmit({
            name: taskName,
            description: taskDescription,
            labels: '',
          }, taskId)}
          icon={<SendOutlined />}
        />
        <TextArea
          rows={2}
          id="taskDescription"
          placeholder="Task Description"
          value={taskDescription}
          onChange={handleDescriptionChange}
          onClick={omitClick}
        />
      </form>
    </div>
  );
};

export default TaskForm;
