import { useState, useEffect } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const invervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 500);
    return () => clearInterval(invervalId);
  }, []);

  return (
    <div>
      {count}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Effect;
