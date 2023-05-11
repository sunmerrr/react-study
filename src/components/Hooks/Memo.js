import { useState } from 'react';

const getAverage = (list) => {
  console.log('평균 계산 중');
  if (list.length === 0) return 0;
  const sum = list.reduce((a, b) => a + b);
  return sum / list.length;
};

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
      <div>
        <b>평균값: </b> {getAverage(list)}
      </div>
    </div>
  );
}

export default Memo;
