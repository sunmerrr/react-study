import { useState } from 'react';

const State = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState(Date());

  const handleNumber = () => {
    setNumber(1);
    console.log('number set 함수를 호출', number);
  };

  const handleName = () => {
    setName('여름');
    console.log('name set 함수를 호출', name);
  };

  const handleDate = () => {
    setDate(Date());
    console.log('date set 함수를 호출', date);
  };

  return (
    <div>
      <p>
        현재 숫자: <b>{number}</b>
        <br />
        이름: <b>{name}</b>
        <br />
        시간: <b>{date}</b>
      </p>
      {console.log('초기 렌더링과 리렌더링 시 함께 호출되는 콘솔 로그', number)}
      <button
        onClick={() => {
          handleNumber();
          handleName();
          handleDate();
        }}
      >
        적용
      </button>
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
