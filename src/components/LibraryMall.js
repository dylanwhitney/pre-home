import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function LibraryMall() {
  let navigate = useNavigate();

  const goToMallLobby = () => {
    navigate("/MallLobby");
  };

  const goToTallMall = () => {
    navigate("/TallMall");
  };

  return (
    <div className="LibraryMall">
      {/* Other content */}
      <button className="sparkleButton12" onClick={goToMallLobby}>
        <img src="/sparkles.gif" alt="Go to MallLobby" />
      </button>

      <button className="backButton1" onClick={goToTallMall}></button>

      {/* Book Button */}
      <a href="https://drive.google.com/drive/folders/13qVoirdGOBQ4kV7tbg59ATgZreD7lnhX?usp=drive_link" target="_blank" rel="noopener noreferrer" className="book1">
        <img src="/book.webp" alt="Library" />
      </a>
    </div>
  );
}

export default LibraryMall;
