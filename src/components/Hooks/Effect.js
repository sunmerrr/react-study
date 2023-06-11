import { useState, useEffect } from 'react';
import { ChatRoom } from './Chat';

const Effect = () => {
  const [roomId, setRoomId] = useState('general');

  return (
    <div>
      <label>
        Choose the chat room: {'  '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
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
