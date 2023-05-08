import { useState } from 'react';
import BuiltInHooks2 from './BuiltInHooks2';

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
      {visible && <BuiltInHooks2 />}
    </div>
  );
};

export default HookContainer;
