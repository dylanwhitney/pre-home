import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function ZenBlossom() {
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
      }, 11); // 1000 = 1 second, as they are milliseconds
    }
  };

  const handleBackButton1Click = () => {
    navigate('/Lobby');
  };

  const handleSparkleButton6Click = () => {
    navigate('/NightBeach'); // Navigate to NightBeach when this button is clicked
  };

  return (
    <div className="zenBlossomBackground">
      <iframe 
        ref={videoRef}
        src="https://www.youtube.com/embed/3mR5e9HW-t0?si=izccVTxZsiHOFIhu&t=90s&amp;controls=0" 
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
      <>
        <button className="backButton1" onClick={handleBackButton1Click}></button>
        <button className="sparkleButton6" onClick={handleSparkleButton6Click}>
          <img src="/sparkles.gif" alt="Go to NightBeach" />
        </button>
      </>
    )}
  </div>
)}
</div>
);
}

export default ZenBlossom;
