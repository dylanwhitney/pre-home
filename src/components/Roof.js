import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Roof() {
  let navigate = useNavigate();

  const goToHQroom = () => {
    navigate("/HQroom");
  };
  return (
    <div className="Roof">      
      <button className="backButton10" onClick={goToHQroom}>
      </button>
    </div>
  )
}

export default Roof
