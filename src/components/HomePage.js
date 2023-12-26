import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function HomePage() {
  let navigate = useNavigate();

  const goToLobby = () => {
    navigate("/Lobby");
  };

  return (
    <div className="homePageBackground">
      {/* Other content */}
      
      {/* Sparkling GIF as a clickable div */}
      <div className="sparkleButton1" onClick={goToLobby}>
        <img src="/sparkles.gif" alt="Go to Lobby" />
      </div>
    </div>
  );
}

export default HomePage;
