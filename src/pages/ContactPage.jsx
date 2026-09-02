import React, { useState } from 'react';
import HomeBackground from '../components/home/HomeBackground';
import { 
  CheckCircle2, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Github 
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Course Admission & Syllabus Details',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contactPageWrapper contact-page-container min-h-screen text-white w-full relative overflow-x-hidden">
      <HomeBackground />

      {/* 1. Contact Us Heading Section (White & Red) */}
      <section className="contact-header-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="contact-main-heading">
            <span className="heading-white">Contact </span>
            <span className="heading-red">Us</span>
          </h1>
          <p className="contact-main-desc">
            Have questions about admissions, cohort tracks, or corporate defense? We're here to help.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Tone Contact Card Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-showcase-card">
            
            {/* Left Form Column */}
            <div className="contact-form-col">
              <div className="contact-form-header">
                <div>
                  <span className="contact-eyebrow">— Contact Us</span>
                  <h2 className="contact-heading">
                    Join Us in Creating<br />Something Great
                  </h2>
                </div>
              </div>

              {submitted ? (
                <div className="contact-success-box">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3>Message Dispatched!</h3>
                  <p>
                    Thank you for contacting Cyber Pashto. An academic advisor or technical mentor will reach back to you within 6–12 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="contact-submit-btn"
                    style={{ marginTop: '1.5rem', alignSelf: 'center' }}
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-grid">
                  {/* Row 1: First Name & Last Name */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Ahmad"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Khan"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="ahmad@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="0325-5636856"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input form-select"
                    >
                      <option value="Course Admission & Syllabus Details">Course Admission &amp; Syllabus Details</option>
                      <option value="Cybersecurity Level 2 (VAPT Cohort)">Cybersecurity Level 2 (VAPT Cohort)</option>
                      <option value="Web Development & Full Stack Bootcamp">Web Development &amp; Full Stack Bootcamp</option>
                      <option value="Artificial Intelligence & GenAI">Artificial Intelligence &amp; GenAI</option>
                      <option value="University Chapter / Society Partnership">University Chapter / Society Partnership</option>
                      <option value="Corporate Enterprise Training">Corporate Enterprise Training</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Write your message or questions here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    />
                  </div>

                  {/* Send Button */}
                  <div style={{ marginTop: '0.5rem' }}>
                    <button type="submit" className="contact-submit-btn">
                      <span>Send Message</span>
                      <span className="submit-btn-circle">
                        <ArrowRight size={16} />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Integrated Cyber-Red Accent Info Card */}
            <div className="contact-info-accent-card">
              <div className="info-block">
                <h4 className="info-block-title">Address</h4>
                <p className="info-block-text">
                  Regional Academy Campus: Chakdara, Lower Dir &amp; University Town, Peshawar, Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>

              <div className="info-block">
                <h4 className="info-block-title">Contact</h4>
                <p className="info-block-text">
                  <strong>Phone:</strong> 0325-5636856<br />
                  <strong>WhatsApp:</strong> +92 325 5636856<br />
                  <strong>Email:</strong> support@cyberpashto.com
                </p>
              </div>

              <div className="info-block">
                <h4 className="info-block-title">Open Time</h4>
                <p className="info-block-text">
                  <strong>Mon – Sat:</strong> 9:00 AM – 6:00 PM PKT<br />
                  <strong>Virtual Labs &amp; Discord:</strong> 24/7 Active
                </p>
              </div>

              <div className="info-block" style={{ marginBottom: 0 }}>
                <h4 className="info-block-title">Stay Connected</h4>
                <div className="social-icons-row">
                  <a href="https://www.facebook.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Facebook" aria-label="Facebook">
                    <Facebook size={16} />
                  </a>
                  <a href="https://twitter.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Twitter" aria-label="Twitter">
                    <Twitter size={16} />
                  </a>
                  <a href="https://www.instagram.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                  <a href="https://www.linkedin.com/company/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href="https://youtube.com/@cyberpashto" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="YouTube" aria-label="YouTube">
                    <Youtube size={16} />
                  </a>
                  <a href="https://github.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "Let's Connect there" Callout Bar */}
      <section className="contact-connect-bar-section">
        <div className="container">
          <div className="connect-bar-card">
            <div>
              <h3 className="connect-bar-title">
                Let's <span style={{ color: 'var(--red)' }}>Connect</span> there
              </h3>
              <p className="connect-bar-sub">
                Prefer direct WhatsApp messaging or instant enrollment assistance? Our counselors are available right now.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/923255636856"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-action-btn"
              >
                <span>Chat on WhatsApp</span>
                <span className="connect-btn-arrow">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Component Styles */}
      <style>{`
        .contact-page-container {
          min-height: 100vh;
          color: #ffffff;
          padding-top: 110px;
          padding-bottom: 60px;
          position: relative;
          overflow-x: hidden;
        }

        /* 1. Contact Us Heading Section */
        .contact-header-section {
          padding: 24px 0 32px 0;
          text-align: center;
        }

        .contact-main-heading {
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 1.1;
          margin: 0 0 12px 0;
          font-family: var(--font-sans);
        }

        .heading-white {
          color: #FFFFFF;
        }

        .heading-red {
          color: var(--red);
        }

        .contact-main-desc {
          font-size: 15px;
          color: var(--muted);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* 2. Main Showcase Card */
        .contact-main-section {
          padding: 0 0 40px 0;
        }

        .contact-showcase-card {
          background-color: var(--paper);
          color: var(--ink);
          border-radius: 12px;
          padding: clamp(24px, 4vw, 48px);
          display: grid;
          grid-template-columns: 1.4fr 0.9fr;
          gap: clamp(28px, 4vw, 56px);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(255, 255, 255, 0.04);
          position: relative;
        }

        @media (max-width: 960px) {
          .contact-showcase-card {
            grid-template-columns: 1fr;
          }
        }

        .contact-form-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-form-header {
          margin-bottom: 28px;
        }

        .contact-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 6px;
        }

        .contact-heading {
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 900;
          color: var(--ink);
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0;
        }

        /* Form Controls */
        .contact-form-grid {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 12px;
          font-weight: 700;
          color: #333333;
          font-family: var(--font-mono);
        }

        .form-input {
          width: 100%;
          padding: 12px 14px;
          background-color: #ebe7e3;
          border: 1px solid #d4cfc9;
          border-radius: 8px;
          font-size: 13.5px;
          color: var(--ink);
          font-family: var(--font-sans);
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--red);
          background-color: #FFFFFF;
          box-shadow: 0 0 0 3px var(--red-subtle);
        }

        .form-select {
          cursor: pointer;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        /* Submit Button */
        .contact-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: var(--ink);
          color: #FFFFFF;
          border: 1px solid var(--ink);
          border-radius: 999px;
          padding: 6px 6px 6px 20px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .contact-submit-btn:hover {
          background-color: var(--red);
          border-color: var(--red);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--red-glow);
        }

        .submit-btn-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #FFFFFF;
          color: var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .contact-submit-btn:hover .submit-btn-circle {
          transform: translateX(2px);
        }

        /* Success Box */
        .contact-success-box {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--red-subtle);
          color: var(--red);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .contact-success-box h3 {
          font-size: 22px;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 8px 0;
        }

        .contact-success-box p {
          font-size: 14px;
          color: #555555;
          max-width: 440px;
          line-height: 1.6;
          margin: 0;
        }

        /* Right Integrated Accent Card - Cyber Pashto Red Gradient */
        .contact-info-accent-card {
          background: linear-gradient(145deg, var(--red) 0%, var(--red-dark) 100%);
          color: #FFFFFF;
          border-radius: 10px;
          padding: clamp(24px, 3.5vw, 36px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 24px;
          box-shadow: 0 16px 36px var(--red-glow), inset 0 1px 0 rgba(255, 255, 255, 0.25);
        }

        .info-block-title {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin: 0 0 8px 0;
          opacity: 0.95;
        }

        .info-block-text {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.92);
          margin: 0;
        }

        .info-block-text strong {
          color: #FFFFFF;
        }

        .social-icons-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background-color: rgba(0, 0, 0, 0.35);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .social-icon-btn svg {
          display: block;
          margin: auto;
        }

        .social-icon-btn:hover {
          background-color: #FFFFFF;
          border-color: #FFFFFF;
          color: var(--red);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        /* 3. Let's Connect Bar */
        .contact-connect-bar-section {
          padding: 20px 0 20px 0;
        }

        .connect-bar-card {
          background: rgba(9, 9, 9, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .connect-bar-title {
          font-size: clamp(24px, 3.5vw, 32px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
        }

        .connect-bar-sub {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
          max-width: 580px;
          line-height: 1.55;
        }

        .connect-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
          color: #FFFFFF;
          padding: 8px 8px 8px 22px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 20px var(--red-glow);
          transition: all 0.25s ease;
        }

        .connect-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 2, 5, 0.6);
        }

        .connect-btn-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .connect-action-btn:hover .connect-btn-arrow {
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
}
