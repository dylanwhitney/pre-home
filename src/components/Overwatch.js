import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function Overwatch() {
  let navigate = useNavigate();

  const goToHQroom = () => {
    navigate("/HQroom");
  };
  return (
    <div className="Overwatch">
      <RandomContentDisplay />      
      <button className="backButton1" onClick={goToHQroom}>
      </button>
    </div>
  )
}

export default Overwatch
