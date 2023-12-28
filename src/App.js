import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Lobby from './components/Lobby';
import ZenBlossom from './components/ZenBlossom';
import NightBeach from './components/NightBeach';
import Escalators from './components/Escalators';
import TallMall from './components/TallMall';
import LibraryMall from './components/LibraryMall';
import MallLobby from './components/MallLobby';
import HQroom from './components/HQroom';
import Armory from './components/Armory';
import Overwatch from './components/Overwatch';
import Roof from './components/Roof';
import Lodge from './components/Lodge';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Lobby" element={<Lobby />} />
        <Route path="/ZenBlossom" element={<ZenBlossom />} />
        <Route path="/NightBeach" element={<NightBeach />} />
        <Route path="/Escalators" element={<Escalators />} />
        <Route path="/LibraryMall" element={<LibraryMall />} />
        <Route path="/TallMall" element={<TallMall />} />
        <Route path="/MallLobby" element={<MallLobby />} />
        <Route path="/HQroom" element={<HQroom />} />
        <Route path="/Armory" element={<Armory />} />
        <Route path="/Overwatch" element={<Overwatch />} />
        <Route path="/Roof" element={<Roof />} />
        <Route path="/Lodge" element={<Lodge />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
