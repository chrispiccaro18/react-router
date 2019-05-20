import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';

describe('Blue component', () => {
  it('renders Blue', () => {
    const wrapper = shallow(<Blue />);
    expect(wrapper).toMatchSnapshot();
  }); 
});
