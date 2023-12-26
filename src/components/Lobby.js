import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Lobby() {
  let navigate = useNavigate(); // Hook for navigation

  // Function to handle navigation to Escalators
  const goToEscalators = () => {
    navigate("/Escalators");
  };

  return (
    <div className="Lobby"> {/* Assuming you have a 'Lobby' class for background */}
      {/* Other content */}
      
      {/* Sparkling GIF Button */}
      <button className="sparkleButton2" onClick={goToEscalators}>
        <img src="/sparkles.gif" alt="Go to Escalators" />
      </button>
    </div>
  );
}

export default Lobby;
