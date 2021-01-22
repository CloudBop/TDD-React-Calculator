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

  // when ready... it('Should compare against snapshot <Display/>', () => expect(wrapper).toMatchSnapshot())
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});