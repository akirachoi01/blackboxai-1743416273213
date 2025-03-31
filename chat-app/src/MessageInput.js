import { useState } from 'react';

function MessageInput({ sendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-4 bg-white border-t border-gray-200"
    >
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
}

export default MessageInput;