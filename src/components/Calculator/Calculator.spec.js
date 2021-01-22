import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display'
describe('Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));
  it('Should compare against snapshot <Calculator/>', () => expect(wrapper).toMatchSnapshot())
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it("should render the Display Component", ()=> {
    // access the state variables and methods of Calculator by utilizing the instance method on the wrapper object.
    expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue}/>)).toEqual(true)
  })
});