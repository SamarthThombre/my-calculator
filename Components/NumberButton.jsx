// NumberButton.jsx
import React from 'react';

const NumberButton = ({ handleButtonClick, number }) => {
  return (
    <button onClick={() => handleButtonClick(number)}>
      {number}
    </button>
  );
};

export default NumberButton;