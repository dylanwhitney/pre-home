import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Lobby() {
  let navigate = useNavigate();

  const goToEscalators = () => {
    navigate("/Escalators");
  };

  const goToZenBlossom = () => {
    navigate("/ZenBlossom");
  };

  const goToHomePage = () => {
    navigate("/"); // Navigate to HomePage
  };

  return (
    <div className="Lobby">
      {/* Other content */}
      <button className="sparkleButton2" onClick={goToEscalators}>
        <img src="/sparkles.gif" alt="Go to Escalators" />
      </button>

      <button className="sparkleButton3" onClick={goToZenBlossom}>
        <img src="/sparkles.gif" alt="Go to ZenBlossom" />
      </button>

      {/* Back Button */}
      <button className="backButton4" onClick={goToHomePage}>
      </button>
    </div>
  );
}

export default Lobby;
