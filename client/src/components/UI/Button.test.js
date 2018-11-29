import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Button />);
});
