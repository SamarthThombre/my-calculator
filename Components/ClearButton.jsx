// ClearButton.js
import React from 'react';

const ClearButton = ({ handleClearClick }) => {
  return (
    <button onClick={handleClearClick}>Clear</button>
  );
};

export default ClearButton;