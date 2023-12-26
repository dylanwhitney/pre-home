import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import your HomePage component
import Lobby from './components/Lobby'; // Import other pages as needed
import Escalators from './components/Escalators';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Lobby" element={<Lobby />} />
        <Route path="/Escalators" element={<Escalators />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
