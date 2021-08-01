import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import TaskCard from '../components/TaskCard';

test('TaskCard renders data, toggles test', () => {
  const task = {
    labels: [
      'today',
      'work',
    ],
    name: 'Do something',
    description: 'Do anything!',
  };

  const component = render(
    <TaskCard
      name={task.name}
      description={task.description}
    />,
  );

  // Test for basic rendering
  const header = component.getByText(task.name);
  expect(header).toBeDefined();

  // Ensures description is hidden
  const description = component.queryByText(task.description);
  expect(description).toBeNull();

  // Simulate card click
  const div = component.container.querySelector('.TaskCard');
  fireEvent.click(div);

  // Check again for description
  expect(description).toBeDefined();
});
