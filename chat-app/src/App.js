import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Chat from './Chat';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;