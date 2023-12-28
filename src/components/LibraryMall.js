import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function LibraryMall() {
  let navigate = useNavigate();

  const goToMallLobby = () => {
    navigate("/MallLobby");
  };

  const goToTallMall = () => {
    navigate("/TallMall");
  };

  return (
    <div className="LibraryMall">
      {/* Add more content here */}

      <button className="sparkleButton12" onClick={goToMallLobby}>
        <img src="/sparkles.gif" alt="Go to MallLobby" />
      </button>

      <button className="backButton6" onClick={goToTallMall}>
      </button>
    </div>
  );
}

export default LibraryMall;

