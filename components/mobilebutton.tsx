"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './mobilebutton.css';

export default function MobileLandingButton() {
  const [showMessage, setShowMessage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return; 

    const trigger = () => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    };
    trigger();
    const interval = setInterval(trigger, 15000);
    return () => clearInterval(interval);
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <div className="mobile-landing-container">
      <div className={`landing-tooltip ${showMessage ? 'is-visible' : ''}`}>
        Click me to get started
      </div>
      <Link href="/intro" style={{ textDecoration: 'none' }}>
        <button className="landing-heart-button">
       
        </button>
      </Link>
    </div>
  );
}
