import { useState } from 'react';
import Effect from './Effect';

const HookContainer = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Effect />}
    </div>
  );
};

export default HookContainer;
