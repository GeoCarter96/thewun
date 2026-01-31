"use client";

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const sparkles = Array.from({ length: 20 });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;


    emailjs.sendForm(
      'service_d14ywqc', 
      'template_84mjjgf', 
      form.current, 
      'BVERea-f4iBG3WZtP'
    )
      .then(() => {
          alert("Message sent! 💖");
          e.currentTarget.reset(); 
      }, (error) => {
          console.error('FAILED...', error.text);
      });
  };

  return (
    <main className="contact-container">
     
      <div className="sparkle-field">
        {sparkles.map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              '--duration': `${Math.random() * 5 + 3}s`,
              '--delay': `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="contact-card">
        <h1 className="contact-title">CONTACT THE WUN 💅🏽</h1>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <label className="input-label">Which Grid?</label>
            <select name="grid_type" className="contact-select" defaultValue="" required>
              <option value="" disabled>Select IMVU or Second Life</option>
              <option value="imvu">IMVU</option>
              <option value="sl">Second Life (SL)</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Avatar / Real Name</label>
            <input name="user_name" type="text" className="contact-input" placeholder="Who are you?" required />
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input name="user_email" type="email" className="contact-input" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <label className="input-label">Reason for Contact</label>
            <textarea 
              name="message" 
              className="contact-textarea" 
              rows={4} 
              placeholder="Custom mesh? Collaboration? Say hello!" 
              required 
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message 💖
          </button>
        </form>
      </div>
    </main>
  );
}
