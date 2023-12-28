import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Overwatch() {
  let navigate = useNavigate();

  const goToHQroom = () => {
    navigate("/HQroom");
  };
  return (
    <div className="Overwatch">      
      <button className="backButton9" onClick={goToHQroom}>
      </button>
    </div>
  )
}

export default Overwatch
