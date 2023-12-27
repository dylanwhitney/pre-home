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

  return (
    <div className="Lobby">
      {/* Other content */}

      <button className="sparkleButton2" onClick={goToEscalators}>
        <img src="/sparkles.gif" alt="Go to Escalators" />
      </button>

      {/* Second Sparkling GIF Button */}
      <button className="sparkleButton3" onClick={goToZenBlossom}>
        <img src="/sparkles.gif" alt="Go to ZenBlossom" />
      </button>
    </div>
  );
}

export default Lobby;
