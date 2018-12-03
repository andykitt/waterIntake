import React from 'react';
import Button from './Button';
import { render } from 'react-testing-library';

test('renders success with color #23d160', () => {
  const { container } = render(<Button success />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders danger with color #f22613', () => {
  const { container } = render(<Button danger />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders primary with color #209cee', () => {
  const { container } = render(<Button primary />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders primary with color white', () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
});
