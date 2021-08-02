import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import TaskCard from '../components/TaskCard';

describe('TaskCard tests', () => {
  let component;

  const task = {
    labels: [
      'today',
      'work',
    ],
    name: 'Do something',
    description: 'Do anything!',
  };

  beforeEach(() => {
    component = render(
      <TaskCard
        name={task.name}
        description={task.description}
      />,
    );
  });

  // Test for basic rendering
  test('Render header', () => {
    const header = component.getByText(task.name);
    expect(header).toBeDefined();
  });

  // Ensures description is hidden
  test('Description is hidden', () => {
    const description = component.queryByText(task.description);
    expect(description).toBeNull();
  });

  // Simulate card click
  test('Simulate card click & check for description', () => {
    const div = component.container.querySelector('.TaskCard');
    const description = component.queryByText(task.description);
    fireEvent.click(div);
    // Check again for description
    expect(description).toBeDefined();
  });
});
