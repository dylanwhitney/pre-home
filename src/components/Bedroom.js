import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Bedroom() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Effect to autoplay the video and show the overlay immediately
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src += "&autoplay=1";
    }
  }, []);

  const handleBackButton1Click = () => {
    navigate('/Lodge'); 
  };

  return (
    <div className="bedroomBackground">
      <iframe 
        ref={videoRef}
        src="https://www.youtube.com/embed/BF5r45S8h-o?si=3_wrG2qUU24eLz9h&t=15s&amp;&controls=0&loop=1&playlist=BF5r45S8h-o"
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

export default Bedroom;
