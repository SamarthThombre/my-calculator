// OperatorButton.jsx
import React from 'react';

const OperatorButton = ({ handleButtonClick, operator }) => {
  return (
    <button onClick={() => handleButtonClick(operator)}>
      {operator}
    </button>
  );
};

export default OperatorButton;