import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function LodgeStudy() {
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
    <div className="lodgeStudyBackground">
      <RandomContentDisplay />

        <iframe 
        ref={videoRef}
        src="https://www.youtube.com/embed/https://www.youtube.com/embed/nmNqz74EOPE?autoplay=1&controls=0&loop=1&playlist=nmNqz74EOPE"
        title="YouTube video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        className="youtubeVideoBackground">
        </iframe>

      {/* Second Overlay with Back Button */}
      <div className="contentOverlay">
        <button className="backButton1" onClick={handleBackButton1Click}></button>

        <a href="https://drive.google.com/drive/folders/13qVoirdGOBQ4kV7tbg59ATgZreD7lnhX?usp=drive_link" target="_blank" rel="noopener noreferrer" className="book2">
        <img src="/book.webp" alt="Library" />
      </a>
      </div>
    </div>
  );
}

export default LodgeStudy;
