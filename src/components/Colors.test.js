import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('renders Colors', () => {
    const match = {
      params: {
        color: 'blue'
      }
    };
    const wrapper = shallow(<Colors match={match} />);
    expect(wrapper).toMatchSnapshot();
  }); 
});
