'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './orb.css';
export default function Orb() {
  const pathname = usePathname();

 
  if (pathname === '/') return null;

  return (
    <div className="orb-nav-wrapper">
      {/* The Pop-up Menu */}
      <div className="orb-menu">
        <Link href="/" className="orb-menu-link">Landing</Link>
        <Link href="/intro" className="orb-menu-link">Intro</Link>
        <Link href="/supporters" className="orb-menu-link">Supporters</Link>
        <Link href="/contact" className="orb-menu-link">Contact Me</Link>
      </div>

    
      <button className="nav-orb">
        <span style={{ fontSize: '10px', color: 'white' }}>✨</span>
      </button>
    </div>
  );
}
