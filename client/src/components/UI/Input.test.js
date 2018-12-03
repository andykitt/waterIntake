import React from 'react';
import Input from './Input';
import { render } from 'react-testing-library';

test('<Input /> renders correctly', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});
