import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function NightBeach() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef(null);
  const overlayTimer = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!videoStarted) {
      setShowOverlay(false);
      setShowButton(false);
      setVideoStarted(true);

      if (videoRef.current) {
        videoRef.current.src += "&autoplay=1";
      }

      overlayTimer.current = setTimeout(() => {
        setShowOverlay(true);
      }, 1000); // 1 second
    }
  };

  const handleBackButton1Click = () => {
    navigate('/ZenBlossom'); // Navigate to ZenBlossom when this button is clicked
  };

  return (
    <div className="nightBeachBackground">
      <iframe 
        ref={videoRef}
        src="https://www.youtube.com/embed/L_sGOlCaH8U?si=l67n_cjK7KTqjOYa&t=25s&amp;controls=0"
        title="YouTube video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        className="youtubeVideoBackground">
      </iframe>

      {showOverlay && (
        <div className="contentOverlay">
          {showButton && (
            <button className="playButton1" onClick={handleButtonClick}></button>
          )}

          {!showButton && (
            <button className="backButton1" onClick={handleBackButton1Click}></button>
          )}
        </div>
      )}
    </div>
  );
}

export default NightBeach;
