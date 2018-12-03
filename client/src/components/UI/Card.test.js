import React from 'react';
import Card from './Card';
import { render } from 'react-testing-library';

test('card renders correctly', () => {
  const { container } = render(<Card />);
  expect(container.firstChild).toMatchSnapshot();
});
