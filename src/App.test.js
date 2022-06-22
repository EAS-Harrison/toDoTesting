import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from "react";

import App from './App';

test('renders add button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button', { name: /add/i })
  expect(linkElement).toBeInTheDocument();
});


test('renders the same as the last Snapshot', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});