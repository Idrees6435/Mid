import React, { useState } from 'react';

const AdvancedCounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      return newCounter % 5 === 0 ? newCounter * 2 : newCounter;
    });
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default AdvancedCounter;