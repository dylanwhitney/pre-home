import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function MallLobby() {
  let navigate = useNavigate();

  const goToSkyPool = () => {
    navigate("/SkyPool");
  };

  const goToLibraryMall = () => {
    navigate("/LibraryMall");
  };

  return (
    <div className="MallLobby">
      <RandomContentDisplay />
      {/* Add more content here */}
      <button className="sparkleButton15" onClick={goToSkyPool}>
        <img src="/sparkles.gif" alt="Go to SkyPool" />
      </button>

      <button className="backButton1" onClick={goToLibraryMall}>
      </button>
    </div>
  );
}

export default MallLobby;

