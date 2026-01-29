'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './orb.css';
export default function Orb() {
  const pathname = usePathname();

 
  if (pathname === '/') return null;

  return (
    <div className="orb-nav-wrapper">
     
      <div className="orb-menu">
        <Link href="/" className="orb-menu-link">Landing</Link>
        <Link href="/intro" className="orb-menu-link">Intro</Link>
        <Link href="/supporters" className="orb-menu-link">Supporters</Link>
                  <Link href="/upcoming" className="orb-menu-link">Upcoming</Link>
        <Link href="/contact" className="orb-menu-link">Contact Me</Link>
        <Link href="https://www.imvu.com/shop/web_search.php?manufacturers_id=195283496" target="_blank" className="orb-menu-link">IMVU Store</Link>
        <Link href="https://marketplace.secondlife.com/en-US/stores/226082" target="_blank" className="orb-menu-link">SL Store</Link>
      </div>

    
      <button className="nav-orb">
        <span style={{ fontSize: '10px', color: 'white' }}>✨</span>
      </button>
    </div>
  );
}
