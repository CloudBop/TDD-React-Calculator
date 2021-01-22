import React from 'react';
import { shallow, mount } from 'enzyme';
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
  
  it('should render 4 <div />', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });


  // start with shallow (shallow render)
  // Use mount, for lifecyle componentDidMount or componentDidUpdate
  // DOM rendering, component lifecycle, and the behavior of child components
  it('renders the values of numbers', () => {
    wrapper.setProps({numbers: ['0', '1', '2']});
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });
  it('renders the values of operators', () => {
    wrapper.setProps({operators: ['+', '-', '*', '/']});
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });


  it('should render an instance of the Key component', () => {
    expect(wrapper.find('Key').length).toEqual(1);
  });

  // 
  it('(*1) - should render an instance of the Key component for each index of numbers, operators, and the submit Key', () => {
    const numbers = ['0', '1'];
    const operators = ['+', '-'];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find('Key').length).toEqual(keyTotal);
  });
});