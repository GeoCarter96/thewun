'use client'
import './Home.css'
import Link from 'next/link';
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
   
         <img 
    src="/wun1.png" 
    className="logo-image" 
    alt="Wun Logo" 
  />
       
      </div>

    
      <div className="fixed-button-container">
        
        <div className={`tooltip-bubble ${showMessage ? 'is-visible' : ''}`}>
          click me to get started
        </div>

         <Link href="/intro" style={{ textDecoration: 'none' }}>
    <button className="heart-button">
      START
    </button>
  </Link>
      </div>
    </div>
  );
}
