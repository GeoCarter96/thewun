"use client";
import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';

export default function SidebarTracker() {
  const pathname = usePathname();
  
  // The 'key' forces React to destroy and rebuild the component 
  // every time the URL changes, fixing the "ghosting" button issue.
  return <Sidebar key={pathname} />;
}
