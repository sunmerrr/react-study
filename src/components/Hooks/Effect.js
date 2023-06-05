import { useState, useEffect } from 'react';

const Effect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlemove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log('e.clientX: ', e.clientX, 'e.clientY: ', e.clientY);
    };

    window.addEventListener('pointermove', handlemove);
    return () => {
      window.removeEventListener('pointermove', handlemove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    ></div>
  );
};

export default Effect;
