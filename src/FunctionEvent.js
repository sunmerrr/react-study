import { useState } from 'react';

const FunctionEvent = () => {
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <div>
      <h2>함수형 이벤트</h2>
      <input
        type="text"
        name="userName"
        placeholder="write down your name here"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <iNput
        type="text"
        name="message"
        placeholder="write something here"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert(userName + ': ' + message);
          setMessage('');
        }}
      >
        확인
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default FunctionEvent;
