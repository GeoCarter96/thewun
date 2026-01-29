import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Orb from "@/components/orb";
import Sidebar from "@/components/sidebar";
import MobileLandingButton from "@/components/mobilebutton";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE WUN",
  description: "Second Life And IMVU Creator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  

 
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <MobileLandingButton/>
        <Sidebar />
        <Orb />
        {children}
      </body>
    </html>
  );
}
