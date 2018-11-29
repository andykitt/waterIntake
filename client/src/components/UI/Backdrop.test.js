import React from 'react';
import { shallow, mount } from 'enzyme';

import Backdrop from './Backdrop';

const clickFn = jest.fn();

// describe('Backdrop', () => {
//   it('should render correctly', () => {
//     const component = shallow(<Backdrop />);

//     expect(component).toMatchSnapshot();
//   });
// });

describe('Backdrop', () => {
  it('button click should toggle component visibility', () => {
    const component = shallow(<Backdrop onClick={clickFn} />);

    component.find('#backdrop').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });
});
