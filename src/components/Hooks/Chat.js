import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:3000';

export function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = {
    serverUrl,
    roomId,
  };

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [options]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}

function createConnection({ serverUrl, roomId }) {
  return {
    connect() {
      console.log('Connecting to: "' + roomId + '" room at ' + serverUrl);
    },
    disconnect() {
      console.log('Disconnecting to: "' + roomId + '" room at ' + serverUrl);
    },
  };
}
