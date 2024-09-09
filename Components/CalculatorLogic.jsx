// CalculatorLogic.js
import React from 'react';

const CalculatorLogic = ({ calculation, result }) => {
  const handleCalculation = () => {
    const result = eval(calculation);
    return result;
  };

  return (
    <div>
      <p>Calculation: {calculation}</p>
      <p>Result: {handleCalculation()}</p>
    </div>
  );
};

export default CalculatorLogic;