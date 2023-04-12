import { useState } from 'react';

const FunctionEvent = () => {
  // const [message, setMessage] = useState('');
  // const [userName, setUserName] = useState('');

  const [form, setForm] = useState({
    message: '',
    userName: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    alert(form.userName + ': ' + form.message);
    setForm({ message: '', userName: '' });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <h2>함수형 이벤트</h2>
      <input
        type="text"
        name="userName"
        placeholder="write down your name here"
        value={form.userName}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <input
        type="text"
        name="message"
        placeholder="write something here"
        value={form.message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default FunctionEvent;
