import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad'

describe('Keypad Unit Tests', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(
    <Keypad
      // mock the expecting props
      callOperator={jest.fn()}
      numbers={[]}
      operators={[]}
      setOperator={jest.fn()}
      updateDisplay={jest.fn()}
    />
  ));

  it('Should compare against snapshot <Keypad/>', () => expect(wrapper).toMatchSnapshot())
  
  it('should render two <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('renders the values of numbers', () => {
    wrapper.setProps({numbers: ['0', '1', '2']});
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('renders the values of operators', () => {
    wrapper.setProps({numbers: ['+', '-', '*', '/']});
    expect(wrapper.find('.operators-container').text()).toEqual('012');
  });
});