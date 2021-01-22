import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display'

describe('Display Unit Tests', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Display displayValue={""} />));
  it('Should compare against snapshot <Display/>', () => expect(wrapper).toMatchSnapshot())
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders the value of displayValue', ()=>{
    wrapper.setProps({displayValue: 'test'});
    expect(wrapper.text()).toEqual('test');
  })
  
});