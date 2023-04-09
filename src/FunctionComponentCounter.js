import React, { useState } from 'react';

export const FunctionComponentCouter = () => {
  const [number, setNumber] = useState(0);
  const [fixedNumber] = useState(2);
  const [plusPrevNumber, setPlusPrevNumber] = useState(0);

  return (
    <div>
      <h1>Function Component Example</h1>
      <h1>{number}</h1>
      <h2>바뀌지 않는 값: {fixedNumber}</h2>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <h1>{plusPrevNumber}</h1>
      <button
        onClick={() => {
          setPlusPrevNumber((prev) => prev + 1);
        }}
      >
        plus using previous number +1
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};
