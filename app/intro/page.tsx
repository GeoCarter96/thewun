"use client";
import './intro.css';
import Link from 'next/link';

export default function IntroPage() {
  return (
    <main className="intro-page-wrapper">
      <section className="hero-flex-container">
        {/* Top/Left Section: Image */}
        <div className="image-placeholder-box">
          <img 
            src="/tee.png" 
            className="hero-tee-img" 
            alt="Tee Image" 
          />
        </div>

        {/* Bottom/Right Section: Text Card */}
        <article className="side-summary-card">
          <h2 className="intro-title-pink"> 
            THE DONDADA 
          </h2>
          <p className="intro-description">
            "Hello, and welcome to my world! I am a Virtual Artist of 8+ Years! Throughout this page, you can find  my links to my catalog(s) and know more about me!"
          </p>
        </article>
      </section>

      <footer className="bottom-summary-wide">
        <h3>How To Navigate</h3>
        <p className="footer-subtext">
          Click On The Heart Shaped Orb
        </p>
      </footer>
    </main>
  );
}
