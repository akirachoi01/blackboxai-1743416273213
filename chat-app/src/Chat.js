import { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function Chat() {
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    // Connect to WebSocket server
    ws.current = new WebSocket('wss://chat-server.example.com');
    
    ws.current.onopen = () => {
      console.log('Connected to chat server');
    };

    ws.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages(prev => [...prev, newMessage]);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const sendMessage = (message) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      const username = localStorage.getItem('username') || 'Anonymous';
      const messageObj = {
        text: message,
        sender: username,
        timestamp: Date.now()
      };
      ws.current.send(JSON.stringify(messageObj));
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">Chat Room</h1>
      </header>
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;