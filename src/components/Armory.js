import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Armory() {
  let navigate = useNavigate();
  const [showGreatswordPopup, setShowGreatswordPopup] = useState(false);
  const [showPlatelegsPopup, setShowPlatelegsPopup] = useState(false);
  const [showBootsPopup, setShowBootsPopup] = useState(false);

  const goToHQroom = () => {
    navigate("/HQroom");
  };

  return (
    <div className="Armory">
      {/* Round Holo Image */}
      <img src="/roundholo.png" alt="Round Holo" className="roundHoloImage" />
    
      {/* Back Button */}
      <button className="backButton2" onClick={goToHQroom}></button>

      {/* Greatsword Button */}
      <button className="greatswordButton" onClick={() => setShowGreatswordPopup(true)}>
        <img src="/greatsword.png" alt="Greatsword" />
      </button>

      {/* Platelegs Button */}
      <button className="platelegsButton" onClick={() => setShowPlatelegsPopup(true)}>
        <img src="/platelegs.png" alt="Platelegs" />
      </button>

      {/* Boots Button */}
      <button className="bootsButton" onClick={() => setShowBootsPopup(true)}>
        <img src="/boots.png" alt="Boots" />
      </button>

      {/* Greatsword Popup */}
      {showGreatswordPopup && (
        <div className="popup">
          <p className="popupText">Undaunted</p>
          <button className="closePopup" onClick={() => setShowGreatswordPopup(false)}>Close</button>
        </div>
      )}

      {/* Platelegs Popup */}
      {showPlatelegsPopup && (
        <div className="popup">
          <p className="popupText">Built Body, Optimum Health, Physical Ability</p>
          <button className="closePopup" onClick={() => setShowPlatelegsPopup(false)}>Close</button>
        </div>
      )}

      {/* Boots Popup */}
      {showBootsPopup && (
        <div className="popup">
          <p className="popupText">Proactive from consciousness rather than ever acting from unconsciousness (internally and externally)</p>
          <button className="closePopup" onClick={() => setShowBootsPopup(false)}>Close</button>
        </div>
      )}

      {/* Lens */}
      <a href="https://docs.google.com/document/d/1HQg1R1MU-bjC2vHUxDqarEkdL8WZbQvgeVLXoKDtgx4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="Lens">
        <img src="/lens.png" alt="Lens" />
      </a>

      {/* Chestplate */}
      <a href="https://docs.google.com/document/d/1oSVs2H7RvxYLg06bAdMCwOOVy82VT43RZZ-Z1xF8afg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="Chestplate">
        <img src="/chestplate.png" alt="Chestplate" />
      </a>
    </div>
  );
}

export default Armory;
