import { useState } from 'react';

const State = () => {
  const [number, setNumber] = useState(0);

  const [form, setForm] = useState({ name: 'summer', phoneNumber: '010-어쩌구', birthDay: '2023.' });

  const handleClick = () => {
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    // console.log('set 함수를 호출 시 함께 호출되는 콘솔 로그', number);
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>
        현재 숫자: <b>{number}</b>
      </p>
      {/* {console.log('초기 렌더링과 리렌더링 시 함께 호출되는 콘솔 로그', number)} */}
      <button onClick={handleClick}>+ 3</button>
      <br />
      <br />
      <br />
      <label>
        name:
        <input type="text" placeholder="name" value={form.name} name="name" onChange={handleInput}></input>
      </label>
      <br />
      <label>
        phone number:
        <input
          type="text"
          placeholder="phoneNumber"
          value={form.phoneNumber}
          name="phoneNumber"
          onChange={handleInput}
        ></input>
      </label>
      <br />
      <label>
        birth day:
        <input type="text" placeholder="birthDay" value={form.birthDay} name="birthDay" onChange={handleInput}></input>
      </label>
      <p>
        {form.name} / {form.phoneNumber} / {form.birthDay}
      </p>
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
