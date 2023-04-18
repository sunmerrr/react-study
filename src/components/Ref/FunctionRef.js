import { useRef, useState } from 'react';
import './Ref.css';

const FunctionRef = () => {
  const inputRef = useRef();
  const [password, setPassword] = useState('');
  const [clickValidate, setClickValidate] = useState({
    clicked: false,
    validated: false,
  });

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    setClickValidate({
      clicked: true,
      validated: password === '0000',
    });
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => handleChange(e)}
        className={clickValidate.clicked ? (clickValidate.validated ? 'success' : 'failure') : ''}
        ref={inputRef}
      />
      <button onClick={handleButtonClick}>검증고고</button>
    </div>
  );
};

export default FunctionRef;
