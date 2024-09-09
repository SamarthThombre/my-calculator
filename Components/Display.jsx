// Display.js
import React from 'react';

const Display = ({ calculation, result, error }) => {
  return (
    <div>
      <p>Calculation: {calculation}</p>
      <p>Result: {result}</p>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default Display;