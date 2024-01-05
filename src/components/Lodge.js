import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function Lodge() {
  let navigate = useNavigate();

  const goToBedroom = () => {
    navigate("/Bedroom");
  };

  const goToLodgeStudy = () => {
    navigate("/LodgeStudy");
  };

  const goToHQroom = () => {
    navigate("/HQroom");
  };
  return (
    <div className="Lodge"> 
    <RandomContentDisplay />
      <button className="sparkleButton13" onClick={goToBedroom}>
        <img src="/sparkles.gif" alt="Go to Bedroom" />
      </button>

      <button className="sparkleButton14" onClick={goToLodgeStudy}>
        <img src="/sparkles.gif" alt="Go to LodgeStudy" />
      </button>

      <button className="backButton1" onClick={goToHQroom}>
      </button>
    </div>
  )
}

export default Lodge
