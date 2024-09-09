// Button.jsx
import React from 'react';

const Button = ({ handleButtonClick, buttonValue }) => {
  return (
    <button onClick={() => handleButtonClick(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default Button;