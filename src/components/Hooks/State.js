import { useState } from 'react';

const testFuntion = () => {
  console.log('initialize state');
  return 'state setting';
};
const State = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
    console.log('state를 스크린에 그려지기 전에 호출함 = 효과 적용 안됨', number);
  };

  return (
    <div>
      <p>
        현재 숫자: <b>{number}</b>
      </p>
      {console.log('state를 스크린에 그려진 이후에 호출함 = 원하는 효과가 적용됨', number)}
      <button onClick={handleClick}>+ 1</button>
      <button onClick={() => setNumber(number - 1)}>- 1</button>
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
