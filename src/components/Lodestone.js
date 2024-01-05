import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import RandomContentDisplay from './RandomContentDisplay';

function Lodestone() {
    let navigate = useNavigate();
  
    const goToZenBlossom = () => {
      navigate("/ZenBlossom");
    };
  
    return (
      <div className="Lodestone">
        <RandomContentDisplay />
  
        <a href="https://docs.google.com/document/d/1MrAQw9UoWDRP-Rx3t-pZjTXF9XwoXtVIuarjQCQyYZI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="LodestoneBtn">
          <img src="/lodestone.png" alt="Lodestone" />
        </a>
        
        {/* Back Button */}
        <button className="backButton1" onClick={goToZenBlossom}></button>
      </div>
    );
  }
  
  export default Lodestone;
  