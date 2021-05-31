import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import List from './List';

test('renders list component', () => {
  render(<List />);
  const linkElement = screen.getByText(/Articles/i);
  expect(linkElement).toBeInTheDocument();
});
