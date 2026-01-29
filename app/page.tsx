'use client'
import './Home.css'
import React, { useState, useEffect } from 'react';
export default function ModernPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {

    const triggerMessage = () => {
      setShowMessage(true);
     
      setTimeout(() => setShowMessage(false), 3000); 
    };

    triggerMessage();

    const intervalId = setInterval(triggerMessage, 15000);


    return () => clearInterval(intervalId);
  }, []); 
  return (
    <div className="modern-container">
      

      <div className="image-background-placeholder">
        <p style={{ opacity: '100%', fontSize: '2rem', fontWeight: 'bold' }}>
         <img 
    src="/wun1.png" 
    className="logo-image" 
    alt="Wun Logo" 
  />
        </p>
      </div>

    
      <div className="fixed-button-container">
        {/* Message appears above the heart */}
        <div className={`tooltip-bubble ${showMessage ? 'is-visible' : ''}`}>
          click me to get started
        </div>

        <button className="heart-button">
          START
        </button>
      </div>
    </div>
  );
}
