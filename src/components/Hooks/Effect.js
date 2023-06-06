import { useState, useEffect } from 'react';
import { useEventListener } from './useEventListener';

const Effect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEventListener('pointermove', (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    console.log('e.clientX: ', e.clientX, 'e.clientY: ', e.clientY);
  });

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
