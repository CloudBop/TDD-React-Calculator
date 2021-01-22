import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  // add a snapshot tests as the first test in each spec file. This creates a pattern of placing the generic tests (snapshot, shallow render) that appear in each spec file above the component specific tests
  it('Should compare against snapshot <App/>', () => expect(wrapper).toMatchSnapshot())
  // similar to above but no shapshot
  // it('should render a <div />', () => {
  //   expect(wrapper.find('div').length).toEqual(1);
  // });
  
  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
  
});