import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function HQroom() {
  const navigate = useNavigate();

  const goToRoof = () => navigate('/Roof');
  const goToOverwatch = () => navigate('/Overwatch');
  const goToArmory = () => navigate('/Armory');
  const goToLodge = () => navigate('/Lodge');
  const goToTallMall = () => navigate('/TallMall');

  return (
    <div className="HQroom">
      <RandomContentDisplay />
      <button className="sparkleButton9" onClick={goToRoof}>
        <img src="/sparkles.gif" alt="Go to Roof" />
      </button>
      <button className="sparkleButton10" onClick={goToOverwatch}>
        <img src="/sparkles.gif" alt="Go to Overwatch" />
      </button>
      <button className="sparkleButton11" onClick={goToArmory}>
        <img src="/sparkles.gif" alt="Go to Armory" />
      </button>
      <button className="portalButton1" onClick={goToLodge}>
        <img src="/portal.gif" alt="Go to Lodge" />
      </button>
      <button className="backButton1" onClick={goToTallMall}>
      </button>
    </div>
  );
}

export default HQroom;
