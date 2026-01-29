"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import hook to track current route
import './sidebar.css'; 

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current URL path

  // 1. If the current path is exactly "/", don't render anything
  if (pathname === "/") {
    return null;
  }

  return (
    <>
      {/* Trigger: Fixed to Top Right */}
      <div className="fixed-button-container">
        <button className="menu-trigger" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar Panel */}
      <div className={`sidebar-panel ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button onClick={() => setIsOpen(false)} className="close-btn">
            ✕ 
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <a href="/" className="nav-item">Landing</a>
          <a href="/intro" className="nav-item">Intro</a>
          <a href="/supporters" className="nav-item">Supporters</a>
          <a href="/contact" className="nav-item">Contact Me</a>
          <a href="https://imvu.com" target="_blank" className="nav-item">IMVU Store</a>
          <a href="https://secondlife.com" target="_blank" className="nav-item">SL Store</a>
        </nav>
      </div>
    </>
  );
}
