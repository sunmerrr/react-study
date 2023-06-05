import { useState } from 'react';
import ModalDialog from './ModalDialog';

const Effect = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Open dialog
      </button>
      <ModalDialog isOpen={show}>
        Hi There!
        <br />
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Close dialog
        </button>
      </ModalDialog>
    </div>
  );
};

export default Effect;
