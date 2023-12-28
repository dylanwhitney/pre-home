import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Lodge() {
  let navigate = useNavigate();

  const goToHQroom = () => {
    navigate("/HQroom");
  };
  return (
    <div className="Lodge"> 
      <button className="backButton11" onClick={goToHQroom}>
      </button>
    </div>
  )
}

export default Lodge
