import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return alert('Please enter a username');
    localStorage.setItem('username', username);
    navigate('/chat');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 bg-opacity-75">
      <form 
        onSubmit={handleSubmit} 
        className="p-8 bg-gray-800 rounded-lg shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Welcome to Chat App</h2>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="Enter your username"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
        >
          Join Chat
        </button>
      </form>
    </div>
  );
}

export default Login;