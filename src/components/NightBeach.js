import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function NightBeach() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Effect to autoplay the video and show the overlay immediately
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src += "&autoplay=1";
    }
  }, []);

  const handleBackButton1Click = () => {
    navigate('/ZenBlossom'); // Navigate to ZenBlossom when this button is clicked
  };

  return (
    <div className="nightBeachBackground">
      <iframe 
        ref={videoRef}
        src="https://www.youtube.com/embed/L_sGOlCaH8U?si=l67n_cjK7KTqjOYa&t=25s&amp;controls=0&loop=1&playlist=L_sGOlCaH8U"
        title="YouTube video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        className="youtubeVideoBackground">
      </iframe>

      {/* Second Overlay with Back Button */}
      <div className="contentOverlay">
        <button className="backButton1" onClick={handleBackButton1Click}></button>
      </div>
    </div>
  );
}

export default NightBeach;
