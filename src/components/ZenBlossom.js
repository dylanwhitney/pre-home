import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function ZenBlossom() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Effect to autoplay the video and show the overlay immediately
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src += "&autoplay=1";
    }
  }, []);

  const handleBackButton1Click = () => {
    navigate('/Lobby'); // Navigate to Lobby when this button is clicked
  };

  const handleSparkleButton6Click = () => {
    navigate('/NightBeach'); // Navigate to NightBeach when this button is clicked
  };

  const handleSparkleButton16Click = () => {
    navigate('/Lodestone');
  };

  return (
    <div className="zenBlossomBackground">
      <RandomContentDisplay />
      <iframe 
        ref={videoRef}
        src="https://www.youtube.com/embed/3mR5e9HW-t0?si=izccVTxZsiHOFIhu&t=90s&amp;controls=0&loop=1&playlist=3mR5e9HW-t0" 
        title="YouTube video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        className="youtubeVideoBackground">
      </iframe>

      {/* Second Overlay with Buttons */}
      <div className="contentOverlay">
        <button className="backButton1" onClick={handleBackButton1Click}>
        </button>

        <button className="sparkleButton6" onClick={handleSparkleButton6Click}>
          <img src="/sparkles.gif" alt="Go to NightBeach" />
          </button>

        <button className="sparkleButton16" onClick={handleSparkleButton16Click}>
          <img src="/sparkles.gif" alt="Go to Lodestone" />
        </button>
      </div>
    </div>
  );
}

export default ZenBlossom;
