import React, { Component } from 'react';
import './Calculator.css'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'
class Calculator extends Component {
  // see note*
  state = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0','ce'],
    // values to be displayed in operator <Keys />
    operators: ['/', 'x', '-', '+'],
    // operator selected for math operation
    selectedOperator: '',
    // stored value to use for math operation
    storedValue: '',
  }

  callOperator = () => {
    let { displayValue, selectedOperator, storedValue } = this.state;
    // temp variable for updating state storedValue
    const updateStoredValue = displayValue;

    // parse strings for operations
    displayValue = parseInt(displayValue, 10);
    storedValue = parseInt(storedValue, 10);

    // performs selected operation
    switch (selectedOperator) {
      case '+':
        displayValue = storedValue + displayValue;
        break;
      case '-':
        displayValue = storedValue - displayValue;
        break;
      case 'x':
        displayValue = storedValue * displayValue;
        break;
      case '/':
        displayValue = storedValue / displayValue;
        break;
      default:
        // set displayValue to zero if no case matches
        displayValue = '0';
    }

    // converts displayValue to a string
    displayValue = displayValue.toString();
    // reset selectedOperator
    selectedOperator = '';
    // check for 'NaN' or 'Infinity', if true set displayValue to '0'
    if (displayValue === 'NaN' || displayValue === 'Infinity') displayValue = '0';

    this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
  }

  setOperator = value => {
    let { displayValue, selectedOperator, storedValue } = this.state;
    // check if a value is already present for selectedOperator
    if (selectedOperator === '') {
      // update storedValue to the value of displayValue
      storedValue = displayValue;
      // reset the value of displayValue to '0'
      displayValue = '0';
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    } else {
      // if selectedOperator is not an empty string
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    }
    this.setState({ displayValue, selectedOperator, storedValue });
  }

  updateDisplay = value => {
    let { displayValue } = this.state;

    // prevent multiple occurences of '.'
    if (value === '.' && displayValue.includes('.')) value = '';

    if (value === 'ce') {
      // deletes last char in displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      // set displayValue to '0' if displayValue is empty string
      if (displayValue === '') displayValue = '0';
    } else {
      // replace displayValue with value if displayValue equal to '0'
      // else concatenate displayValue and value
      displayValue === '0' ? displayValue = value : displayValue += value;
    }

    this.setState({ displayValue });
  }

  render = () => {

    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;


/* note* 
using es5 object method syntax, the method is not bound to the class by default and binding must be declared explicitly in the constructor method,  if you forget to bind this.handleClick and pass it to an onClick handler, "this" will be undefined.

class CalculatorES5 extends Component {
  constructor(props) {
    this.state = {
      displayValue: '0',
    }
    // explicit binding
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(value) {
    this.setState({ displayValue: value });
  }
}

ES6 - no need
class Calculator extends Component {
  state = {
    displayValue: '0',
  }
  updateDisplay = value => this.setState({ displayValue: value });
}

https://reactjs.org/docs/handling-events.html
*/