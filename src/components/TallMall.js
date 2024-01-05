import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function TallMall() {
  let navigate = useNavigate();

  const goToLibraryMall = () => {
    navigate("/LibraryMall");
  };

  const goToHQroom = () => {
    navigate("/HQroom");
  };

  const goToEscalators = () => {
    navigate("/Escalators");
  };

  return (
    <div className="TallMall">
      <RandomContentDisplay />
      
      <button className="sparkleButton7" onClick={goToLibraryMall}>
        <img src="/sparkles.gif" alt="Go to LibraryMall" />
      </button>

      <button className="sparkleButton8" onClick={goToHQroom}>
        <img src="/sparkles.gif" alt="Go to HQroom" />
      </button>

      <button className="backButton1" onClick={goToEscalators}>
      </button>
    </div>
  );
}

export default TallMall;
