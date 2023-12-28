import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Armory() {
  let navigate = useNavigate();

  const goToHQroom = () => {
    navigate("/HQroom");
  };
  return (
    <div className="Armory">
      <button className="backButton8" onClick={goToHQroom}>
      </button>
    </div>
  )
}

export default Armory
