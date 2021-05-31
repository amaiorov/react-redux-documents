import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import Form from './Form';

test('renders form', () => {
  render(<Form />);
  const linkElement = screen.getByText(/Add a new article/i);
  expect(linkElement).toBeInTheDocument();
});
