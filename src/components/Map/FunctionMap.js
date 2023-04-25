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

  const nameList = names.map((name, index) => (
    <>
      <li key={name.id}>{name.text}</li>
      <button onClick={() => hanldeDelete(name.id)}>삭제</button>
    </>
  ));

  const handleChange = (e) => setInputText(e.target.value);

  const handleAdd = () => {
    const newNames = names.concat({ id: nextId, text: inputText });
    setNames(newNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  const hanldeDelete = (id) => {
    const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleAdd}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default FunctionMap;
