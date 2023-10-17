import React, { useState } from 'react';
import Button from './Buttons';
import Display from './Display';
import '../../src/App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+',
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display input={input} result={result} />
        <div className="buttons">
          {buttons.map((button, index) => (
            <Button key={index} onClick={handleButtonPress}>
              {button}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
