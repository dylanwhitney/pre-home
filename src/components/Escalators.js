import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Escalators() {
  let navigate = useNavigate();

  const goToTallMall = () => {
    navigate("/TallMall");
  };

  const goToLobby = () => {
    navigate("/Lobby"); // Navigate to Lobby
  };

  return (
    <div className="Escalators">
      {/* Other content */}
      <button className="sparkleButton5" onClick={goToTallMall}>
        <img src="/sparkles.gif" alt="Go to TallMall" />
      </button>

      {/* Back Button */}
      <button className="backButton3" onClick={goToLobby}>
      </button>
    </div>
  );
}

export default Escalators;
