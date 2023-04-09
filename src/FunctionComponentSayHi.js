import React, { useState } from 'react';

export const FunctionComponentSayHi = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <hr />
      <h1>{message}</h1>

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
    </div>
  );
};
