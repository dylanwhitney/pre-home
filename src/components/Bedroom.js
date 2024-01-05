import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

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
      <RandomContentDisplay />
      <iframe 
        ref={videoRef}
        src="https://www.youtube.com/embed/BF5r45S8h-o?autoplay=1&controls=0&loop=1&playlist=BF5r45S8h-o"
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

      <a href="https://www.icloud.com/calendar/" target="_blank" rel="noopener noreferrer" className="calendar">
        <img src="/calendar.gif" alt="Calendar" />
      </a>

      <a href="https://docs.google.com/document/d/1cyUejhPPLLPbRRC_ZzYTFCkfKiKy3UnytQbuODV5HQo/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="todos">
        <img src="/todos.gif" alt="ToDos" />
      </a>
    </div>
  );
}

export default Bedroom;
