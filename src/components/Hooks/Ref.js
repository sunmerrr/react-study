import { useRef } from 'react';

const Ref = () => {
  // Referencing a value with a ref
  // Ref는 초기값을 가진 current 속성만을 returen 함
  // 다음 렌더링에서도 같은 값을 return 함, ref는 state 처럼 변경하거나 읽어올 수 있지만 ref를 변경한다고 해서 리렌더링이 일어나지는 않음
  const intervalRef = useRef(0);
  const inputRef = useRef(null);

  const handleStartClick = () => {
    const intervalId = setInterval(() => {
      console.log('seted interval');
    }, 1000);
    intervalRef.current = intervalId;
  };

  const handleStopClick = () => {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
  };

  return (
    <div>
      <hr />
      <h3>useRef</h3>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
    </div>
  );
};

export default Ref;
