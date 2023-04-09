import React, { useState } from 'react';

export const FunctionComponentCouter = () => {
  const [number, setNumber] = useState(0);
  const [fixedNumber, setFixedNumber] = useState(2);

  return (
    <div>
      <h1>{number}</h1>
      <h2>바뀌지 않는 값: {fixedNumber}</h2>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <br />
      <br />
      <br />
    </div>
  );
};
