import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function MallLobby() {
  let navigate = useNavigate();

  const goToLibraryMall = () => {
    navigate("/LibraryMall");
  };

  return (
    <div className="MallLobby">
      {/* Add more content here */}

      <button className="backButton7" onClick={goToLibraryMall}>
      </button>
    </div>
  );
}

export default MallLobby;

