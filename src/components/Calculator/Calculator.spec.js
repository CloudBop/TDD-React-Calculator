import React from 'react';
import { shallow, mount } from 'enzyme';
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

  // deep rendering
  describe('mounted Calculator', () => {
    let wrapper;
  
    beforeEach(() => wrapper = mount(<Calculator />));
  
    it('calls updateDisplay when a number key is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.find('.number-key').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('calls setOperator when an operator key is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'setOperator');
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.find('.operator-key').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('calls callOperator when the submit key is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'callOperator');
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.find('.submit-key').simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});