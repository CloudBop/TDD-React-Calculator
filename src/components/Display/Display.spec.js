import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display'

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Display displayValue={""} />));
  // it('Should compare against snapshot <Calculator/>', () => expect(wrapper).toMatchSnapshot())
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  
});