import React, { useState } from 'react';
import { Button } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
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
            <header className="TaskHeader">
              {name}
            </header>
            <Button
              id="editButton"
              onClick={toggleEditMode}
              icon={<EditTwoTone twoToneColor="#800000" />}
            />
            <Button
              type="danger"
              onClick={() => handleDelete(taskId)}
              icon={(
                <DeleteTwoTone twoToneColor="#800000" />
)}
            />
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
