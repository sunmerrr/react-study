import { useState, useMemo } from 'react';
import MemoAverage from './MemoAverage';

function Memo() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleInsert = () => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber('');
  };

  const avg = useMemo(() => <MemoAverage list={list} />, [list]);

  return (
    <div>
      <h3>useMemo</h3>
      <input value={number} onChange={handleChange} />
      <button onClick={handleInsert}>등록</button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      {avg}
    </div>
  );
}

export default Memo;
