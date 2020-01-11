import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};
export default class Calculator extends Component {
  state = { ...initialState };

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log('op', operation);
  }

  addDigit(digit) {
    if (digit === '.' && this.state.displayValue.includes('.')) return;

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + digit;
    this.setState({ displayValue, clearDisplay: false });

    if (digit !== '.') {
      const index = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[index] = newValue;
      this.setState({ values });
      console.log('values ', values);
    }
  }

  render() {
    const addDigit = digit => this.addDigit(digit);
    const setOperation = operation => this.setOperation(operation);

    return (
      <div className="calculator">
        <Display value={this.state.displayValue}></Display>
        <Button label="AC" click={() => this.clearMemory()} triple></Button>
        <Button
          label="/"
          click={() => this.setOperation('/')}
          operation
        ></Button>
        <Button label="7" click={() => addDigit(7)}></Button>
        <Button label="8" click={() => addDigit(8)}></Button>
        <Button label="9" click={() => addDigit(9)}></Button>
        <Button
          label="*"
          click={() => this.setOperation('*')}
          operation
        ></Button>
        <Button label="4" click={() => addDigit(4)}></Button>
        <Button label="5" click={() => addDigit(5)}></Button>
        <Button label="6" click={() => addDigit(6)}></Button>
        <Button
          label="-"
          click={() => this.setOperation('-')}
          operation
        ></Button>
        <Button label="1" click={() => addDigit(1)}></Button>
        <Button label="2" click={() => addDigit(2)}></Button>
        <Button label="3" click={() => addDigit(3)}></Button>
        <Button
          label="+"
          click={() => this.setOperation('+')}
          operation
        ></Button>
        <Button label="0" click={() => addDigit(0)} double></Button>
        <Button label="." click={() => addDigit('.')}></Button>
        <Button label="=" click={() => addDigit('=')} operation></Button>
      </div>
    );
  }
}
