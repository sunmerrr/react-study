import React, { useState } from 'react';

export const FunctionComponentSayHi = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  return (
    <div>
      <hr />
      <h1 style={{ color }}>{message}</h1>
      <button
        onClick={() => {
          setMessage('Hi there!');
        }}
      >
        입장
      </button>
      <button
        onClick={() => {
          setMessage('Bye Bye');
        }}
      >
        퇴장
      </button>
      <h2>인사 메세지 컬러를 바꿉니다.</h2>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        green
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        blue
      </button>
      <button style={{ color: 'black' }} onClick={() => setColor('black')}>
        black
      </button>
    </div>
  );
};
