import './intro.css';
import Link from 'next/link';

export default function IntroPage() {
  return (
    <main className="intro-page-wrapper">
      
      <section className="hero-flex-container">
        <div className="image-placeholder-box">
          <img 
            src="/tee.png" 
            className="hero-tee-img" 
            alt="Tee Image" 
          />
        </div>

        <article className="side-summary-card">
          <h2 style={{ color: 'hotpink', marginBottom: '1rem', fontFamily: 'Fredoka' }}> 
            THE DONDADA 
          </h2>
          <p style={{ lineHeight: '1.6', color: '#444' }}>
            "Welcome to the inner SIM. This summary is where we track the mesh 
            attachments and script updates. I've optimized this space so your 
            avatar feels light, even when the textures are heavy."
          </p>
        </article>
      </section>

      <footer className="bottom-summary-wide">
        <h3>How To Navigate</h3>
        <p style={{ opacity: 0.8 }}>
     Click On The Heart Shaped Orb
        </p>
      </footer>

    </main>
  );
}
