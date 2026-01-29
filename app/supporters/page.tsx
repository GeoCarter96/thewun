'use client'; // Required for interactivity
import React, { useState } from 'react';
import './supporters.css';
import Link from 'next/link';

export default function SupportersPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const placeholders = Array.from({ length: 10 });

  return (
    <main className="supporters-page">
   <div className="title-container">
  <h1 className="supporters-title">THE WUN'S SUPPORTERS</h1>
  <p className="supporters-subtitle">click to view images</p>
</div>
      
      <div className="supporters-grid">
        {placeholders.map((_, i) => {
          const imgSrc = `/supporter-${i + 1}.png`;
          return (
            <div 
              key={i} 
              className="supporter-placeholder" 
              onClick={() => setSelectedImg(imgSrc)}
            >
              <img src={imgSrc} alt={`Supporter ${i + 1}`} className="supporter-img" />
             
            </div>
          );
        })}
      </div>

      
      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content">
            <img src={selectedImg} alt="Enlarged view" className="lightbox-img" />
            <button className="close-btn">CLICK ANYWHERE TO CLOSE</button>
          </div>
        </div>
      )}

    
      <footer className="fancy-footer">
        <Link href="https://www.imvu.com" target="_blank" className="fancy-link">IMVU STORE</Link>
        <Link href="https://secondlife.com" target="_blank" className="fancy-link">SECOND LIFE STORE</Link>
      </footer>
    </main>
  );
}
