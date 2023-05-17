import { useState } from 'react';

const State = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    console.log('set 함수를 호출 시 함께 호출되는 콘솔 로그', number);
  };

  return (
    <div>
      <p>
        현재 숫자: <b>{number}</b>
      </p>
      {console.log('초기 렌더링과 리렌더링 시 함께 호출되는 콘솔 로그', number)}
      <button onClick={handleClick}>+ 3</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default State;
