import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Red component', () => {
  it('renders Red', () => {
    const wrapper = shallow(<Red />);
    expect(wrapper).toMatchSnapshot();
  }); 
});
