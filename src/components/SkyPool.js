import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function SkyPool() {
  let navigate = useNavigate();

  const goToMallLobby = () => {
    navigate("/MallLobby");
  };

  return (
    <div className="SkyPool"> 
      <button className="backButton1" onClick={goToMallLobby}>
      </button>
    </div>
  );
}

export default SkyPool;
