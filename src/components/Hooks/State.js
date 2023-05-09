import { useState } from 'react';

const State = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>
        현재 숫자: <b>{number}</b>
      </p>
      <button onClick={() => setNumber(number + 1)}>+ 1</button>
      <button onClick={() => setNumber(number - 1)}>- 1</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default State;
