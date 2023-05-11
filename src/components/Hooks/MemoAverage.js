function MemoAverage({ list }) {
  const getAverage = (list) => {
    console.log('평균 계산 하는 컴포넌트가 렌더링 된다');
    if (list.length === 0) return 0;
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
  };

  return (
    <div>
      <b>평균값: </b> {getAverage(list)}
    </div>
  );
}

export default MemoAverage;
