import { useEffect } from 'react';
import './App.css';
import { socket } from './utils/socket.io';
import ChatRoom from './components/ChatRoom';

function App() {

  useEffect(() => {
    socket.connect();

    return () => {
      console.log('socket disconected')
      socket.disconnect();
    }
  }, [])

  return (
    <div className="chat-container">
      <ChatRoom />
    </div>
  );
}

export default App;
