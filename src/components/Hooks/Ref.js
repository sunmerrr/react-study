import { useRef, useState } from 'react';

const Ref = () => {
  // Referencing a value with a ref
  // Ref는 초기값을 가진 current 속성만을 returen 함
  // 다음 렌더링에서도 같은 값을 return 함, ref는 state 처럼 변경하거나 읽어올 수 있지만 ref를 변경한다고 해서 리렌더링이 일어나지는 않음
  const intervalRef = useRef(null);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let secondsPassed = 0;

  const handleStartClick = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    console.log('start time', new Date());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStopClick = () => {
    console.log('end time', new Date());
    clearInterval(intervalRef.current);
  };

  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <hr />
      <h3>useRef</h3>
      <h4>Time passed: {secondsPassed.toFixed(2)}</h4>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
    </div>
  );
};

export default Ref;
