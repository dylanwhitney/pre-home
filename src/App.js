import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Lobby from './components/Lobby';
import ZenBlossom from './components/ZenBlossom';
import NightBeach from './components/NightBeach';
import Escalators from './components/Escalators';
import LuxuryMall from './components/LibraryMall';
import TallMall from './components/TallMall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Lobby" element={<Lobby />} />
        <Route path="/ZenBlossom" element={<ZenBlossom />} />
        <Route path="/NightBeach" element={<NightBeach />} />
        <Route path="/Escalators" element={<Escalators />} />
        <Route path="/LuxuryMall" element={<LuxuryMall />} />
        <Route path="/TallMall" element={<TallMall />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
