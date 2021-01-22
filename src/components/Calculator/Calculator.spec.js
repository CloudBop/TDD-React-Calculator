import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));
  it('Should compare against snapshot <Calculator/>', () => expect(wrapper).toMatchSnapshot())
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it("should render the Display + Keypad Component", ()=> {
    // access the state variables and methods of Calculator by utilizing the instance method on the wrapper object.
    expect(wrapper.containsAllMatchingElements([ 
      // check for these two components in DOMtree
      <Display displayValue={wrapper.instance().state.displayValue}/>,
      <Keypad 
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    ])).toEqual(true)
  })
});