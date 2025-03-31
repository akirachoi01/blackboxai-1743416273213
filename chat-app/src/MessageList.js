import { useEffect, useRef } from 'react';
import moment from 'moment';

function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div 
          key={index}
          className={`flex ${message.sender === localStorage.getItem('username') ? 'justify-end' : 'justify-start'}`}
        >
          <div 
            className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.sender === localStorage.getItem('username') 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-800'}`}
          >
            {message.sender !== localStorage.getItem('username') && (
              <p className="font-bold text-sm mb-1">{message.sender}</p>
            )}
            <p className="text-sm">{message.text}</p>
            <p className="text-xs opacity-70 mt-1">
              {moment(message.timestamp).format('h:mm A')}
            </p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;