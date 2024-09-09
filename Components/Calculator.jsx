// Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import OperatorButton from './OperatorButton';
import NumberButton from './NumberButton';
import EqualsButton from './EqualsButton';
import ClearButton from './ClearButton';
import CalculatorLogic from './CalculatorLogic';
import ErrorHandling from './ErrorHandling';

const Calculator = () => {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (['+', '-', '*', '/'].includes(buttonValue)) {
      if (calculation === '') {
        setError('Cannot start with an operator');
      } else {
        setCalculation(calculation + buttonValue);
      }
    } else {
      setCalculation(calculation + buttonValue);
    }
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(calculation);
      setResult(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClearClick = () => {
    setCalculation('');
    setResult('');
    setError('');
  };

  return (
    <div>
      <Display calculation={calculation} result={result} error={error} />
      <div>
        <NumberButton handleButtonClick={handleButtonClick} number="7" />
        <NumberButton handleButtonClick={handleButtonClick} number="8" />
        <NumberButton handleButtonClick={handleButtonClick} number="9" />
        <OperatorButton handleButtonClick={handleButtonClick} operator="/" />
        <NumberButton handleButtonClick={handleButtonClick} number="4" />
        <NumberButton handleButtonClick={handleButtonClick} number="5" />
        <NumberButton handleButtonClick={handleButtonClick} number="6" />
        <OperatorButton handleButtonClick={handleButtonClick} operator="*" />
        <NumberButton handleButtonClick={handleButtonClick} number="1" />
        <NumberButton handleButtonClick={handleButtonClick} number="2" />
        <NumberButton handleButtonClick={handleButtonClick} number="3" />
        <OperatorButton handleButtonClick={handleButtonClick} operator="-" />
        <NumberButton handleButtonClick={handleButtonClick} number="0" />
        <OperatorButton handleButtonClick={handleButtonClick} operator="+" />
        <EqualsButton handleEqualsClick={handleEqualsClick} />
        <ClearButton handleClearClick={handleClearClick} />
      </div>
      <CalculatorLogic calculation={calculation} result={result} />
      <ErrorHandling error={error} />
    </div>
  );
};

export default Calculator;