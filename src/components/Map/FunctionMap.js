import { useState } from 'react';

const FunctionMap = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'snowman' },
    { id: 2, text: 'ice' },
    { id: 3, text: 'snow' },
    { id: 4, text: 'wind' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const nameList = names.map((name, index) => <li key={name.id}>{name.text}</li>);

  const handleChange = (e) => setInputText(e.target.value);

  const handleButtonClick = () => {
    const addName = names.concat({ id: nextId, text: inputText });
    setNames(addName);
    setNextId(nextId + 1);
    setInputText('');
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleButtonClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default FunctionMap;
