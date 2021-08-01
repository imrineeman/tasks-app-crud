import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TaskCard from '../components/TaskCard';

test('renders content', () => {
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
  const element = component.getByText(task.name);
  expect(element).toBeDefined();
});
