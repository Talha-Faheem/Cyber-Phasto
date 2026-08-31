import React, { useState } from 'react';
import HomeBackground from '../components/home/HomeBackground';
import { 
  Phone, 
  Building2, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function ContactPage2() {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState('+92');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      workEmail: '',
      phoneNumber: '',
      jobTitle: '',
      companyName: '',
      message: ''
    });
  };

  return (
    <div className="contact2-wrapper min-h-screen text-white w-full relative overflow-x-hidden">
      <HomeBackground />

      <main className="contact2-main-container relative z-10">
        <div className="contact2-layout-grid">

          {/* =================================================================
              LEFT COLUMN: Header, Overview & 2x2 Quick Contact Cards Grid
              ================================================================= */}
          <div className="contact2-left-col">

            {/* 1. Main Two-Tone Heading */}
            <h1 className="contact2-heading">
              <span className="text-[#FF0205] block">Get In Touch</span>
              <span className="text-white block">With Our Team</span>
            </h1>

            {/* 3. Subheading Description */}
            <p className="contact2-subdesc">
              Fill out the form below and our team will get back to you within 1–2 business days.
            </p>

            {/* 4. 2x2 Quick Info Cards Grid */}
            <div className="contact2-cards-grid">
              
              {/* Card 1: Head Office */}
              <div className="contact2-info-card">
                <div className="contact2-card-header">
                  <div className="contact2-icon-box">
                    <Building2 size={18} />
                  </div>
                  <h3 className="contact2-card-title">Head Office</h3>
                </div>
                <p className="contact2-card-val">
                  Chakdara &amp; Peshawar, KPK, Pakistan
                </p>
              </div>

              {/* Card 2: Call Center */}
              <div className="contact2-info-card">
                <div className="contact2-card-header">
                  <div className="contact2-icon-box">
                    <Phone size={18} />
                  </div>
                  <h3 className="contact2-card-title">Call Center</h3>
                </div>
                <a href="tel:+923255636856" className="contact2-card-val contact2-link">
                  +92 325 5636856
                </a>
              </div>

              {/* Card 3: Email */}
              <div className="contact2-info-card">
                <div className="contact2-card-header">
                  <div className="contact2-icon-box">
                    <Mail size={18} />
                  </div>
                  <h3 className="contact2-card-title">Email</h3>
                </div>
                <a href="mailto:support@cyberpashto.com" className="contact2-card-val contact2-link">
                  support@cyberpashto.com
                </a>
              </div>

              {/* Card 4: Working Hours */}
              <div className="contact2-info-card">
                <div className="contact2-card-header">
                  <div className="contact2-icon-box">
                    <Clock size={18} />
                  </div>
                  <h3 className="contact2-card-title">Working Hours</h3>
                </div>
                <p className="contact2-card-val">
                  Monday - Friday (09:00 am - 06:00 pm)
                </p>
              </div>

            </div>
          </div>

          {/* =================================================================
              RIGHT COLUMN: Contact Us Form Card with Curved Laser Accent Top
              ================================================================= */}
          <div className="contact2-right-col">
            <div className="contact2-form-card">
              
              {/* Top Vibrant Red Curved Laser Header Accent */}
              <div className="contact2-card-top-laser" />

              <div className="contact2-form-card-inner">
                {submitted ? (
                  <div className="contact2-success-container">
                    <div className="contact2-success-icon-wrap">
                      <CheckCircle2 size={44} className="text-[#FF0205]" />
                    </div>
                    <h2 className="contact2-success-title">Message Received!</h2>
                    <p className="contact2-success-desc">
                      Thank you, <b>{formData.firstName || 'there'}</b>. We have logged your request into our priority system. An academic advisor or security consultant will contact you within 1–2 business days.
                    </p>

                    <div className="contact2-summary-box">
                      <div className="contact2-summary-row">
                        <span>Email:</span>
                        <b>{formData.workEmail || 'support@cyberpashto.com'}</b>
                      </div>
                      <div className="contact2-summary-row">
                        <span>Phone:</span>
                        <b>{countryCode} {formData.phoneNumber || 'Provided'}</b>
                      </div>
                      {formData.jobTitle && (
                        <div className="contact2-summary-row">
                          <span>Role:</span>
                          <b>{formData.jobTitle} {formData.companyName ? `at ${formData.companyName}` : ''}</b>
                        </div>
                      )}
                    </div>

                    <button 
                      type="button" 
                      onClick={handleReset}
                      className="contact2-submit-btn"
                      style={{ marginTop: '1.5rem' }}
                    >
                      <span>Submit Another Inquiry</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact2-form">
                    
                    {/* Row 1: First Name & Last Name */}
                    <div className="contact2-form-row-2">
                      <div className="contact2-form-group">
                        <label className="contact2-form-label" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="contact2-input"
                        />
                      </div>

                      <div className="contact2-form-group">
                        <label className="contact2-form-label" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          required
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="contact2-input"
                        />
                      </div>
                    </div>

                    {/* Row 2: Work Email & Phone Number */}
                    <div className="contact2-form-row-2">
                      <div className="contact2-form-group">
                        <label className="contact2-form-label" htmlFor="workEmail">
                          Work Email
                        </label>
                        <input
                          id="workEmail"
                          type="email"
                          required
                          placeholder="Enter work email"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="contact2-input"
                        />
                      </div>

                      <div className="contact2-form-group">
                        <label className="contact2-form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                        <div className="contact2-phone-input-wrap">
                          <div className="contact2-country-selector">
                            <select 
                              value={countryCode} 
                              onChange={(e) => setCountryCode(e.target.value)}
                              aria-label="Country Dial Code"
                              className="contact2-country-select"
                            >
                              <option value="+92">+92 (PK)</option>
                              <option value="+1">+1 (US)</option>
                              <option value="+44">+44 (UK)</option>
                              <option value="+971">+971 (UAE)</option>
                              <option value="+966">+966 (KSA)</option>
                              <option value="+49">+49 (DE)</option>
                            </select>
                            <ChevronDown size={14} className="contact2-select-arrow" />
                          </div>
                          <input
                            id="phoneNumber"
                            type="tel"
                            placeholder="Enter phone number"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            className="contact2-input contact2-phone-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Job Title & Company Name */}
                    <div className="contact2-form-row-2">
                      <div className="contact2-form-group">
                        <label className="contact2-form-label" htmlFor="jobTitle">
                          Job Title
                        </label>
                        <input
                          id="jobTitle"
                          type="text"
                          placeholder="Enter job title"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                          className="contact2-input"
                        />
                      </div>

                      <div className="contact2-form-group">
                        <label className="contact2-form-label" htmlFor="companyName">
                          Company Name
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          placeholder="Enter company name"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="contact2-input"
                        />
                      </div>
                    </div>

                    {/* Row 4: Message (Full Width) */}
                    <div className="contact2-form-group">
                      <label className="contact2-form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Enter message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="contact2-textarea"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="contact2-submit-wrap">
                      <button type="submit" className="contact2-submit-btn">
                        <span>Submit</span>
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>

      <style>{`
        /* ===================================================================
           Contact-2 Custom Scoped Styles (Cyber Pashto Dark Palette)
           =================================================================== */
        .contact2-wrapper {
          background-color: #050505;
          min-height: 100vh;
        }

        .contact2-main-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: clamp(120px, 14vw, 150px) 24px clamp(60px, 8vw, 90px);
        }

        .contact2-layout-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(32px, 5vw, 60px);
          align-items: start;
        }

        /* ---------- Left Column ---------- */
        .contact2-left-col {
          display: flex;
          flex-direction: column;
        }

        .contact2-eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: flex-start;
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 800;
          color: #FF0205;
          background: rgba(255, 2, 5, 0.08);
          border: 1px solid #FF0205;
          padding: 7px 18px;
          border-radius: 999px;
          letter-spacing: 0.08em;
          margin-bottom: 22px;
          box-shadow: 0 0 18px rgba(255, 2, 5, 0.35);
          user-select: none;
        }

        .contact2-heading {
          font-family: var(--font-sans);
          font-size: clamp(38px, 4.8vw, 56px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.035em;
          margin: 0 0 18px 0;
        }

        .contact2-subdesc {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.6;
          color: #a1a1aa;
          max-width: 480px;
          margin: 0 0 36px 0;
        }

        /* 2x2 Quick Contact Cards Grid */
        .contact2-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact2-info-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 22px 20px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justifyContent: center;
        }

        .contact2-info-card:hover {
          background: rgba(255, 2, 5, 0.04);
          border-color: rgba(255, 2, 5, 0.35);
          transform: translateY(-2px);
          box-shadow: 0 10px 26px -8px rgba(255, 2, 5, 0.25);
        }

        .contact2-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .contact2-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 2, 5, 0.12);
          border: 1px solid rgba(255, 2, 5, 0.25);
          color: #FF0205;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact2-card-title {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        .contact2-card-val {
          font-family: var(--font-sans);
          font-size: 13.5px;
          line-height: 1.5;
          color: #8d8d8d;
          margin: 0;
        }

        .contact2-link {
          color: #8d8d8d;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact2-link:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }

        /* ---------- Right Column (Form Card - Crisp White Theme) ---------- */
        .contact2-right-col {
          display: flex;
          flex-direction: column;
        }

        .contact2-form-card {
          background: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.75), 0 0 50px -10px rgba(255, 2, 5, 0.22);
          color: #0f172a;
        }

        .contact2-card-top-laser {
          height: 9px;
          width: 100%;
          background: linear-gradient(90deg, #D60003 0%, #FF0205 35%, #FF3B3E 65%, #D60003 100%);
          box-shadow: 0 4px 16px rgba(255, 2, 5, 0.65);
        }

        .contact2-form-card-inner {
          padding: clamp(24px, 3.8vw, 38px);
        }

        .contact2-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact2-form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact2-form-group {
          display: flex;
          flex-direction: column;
        }

        .contact2-form-label {
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 7px;
          letter-spacing: -0.01em;
        }

        .contact2-input,
        .contact2-textarea {
          width: 100%;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          color: #0f172a;
          font-weight: 500;
          font-family: var(--font-sans);
          outline: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .contact2-input::placeholder,
        .contact2-textarea::placeholder {
          color: #94a3b8;
          font-size: 13.5px;
          font-weight: 400;
        }

        .contact2-input:focus,
        .contact2-textarea:focus {
          border-color: #FF0205;
          background: #ffffff;
          box-shadow: 0 0 0 3.5px rgba(255, 2, 5, 0.15);
        }

        .contact2-textarea {
          resize: vertical;
          min-height: 110px;
        }

        /* Phone Input with Country Code Selector */
        .contact2-phone-input-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact2-country-selector {
          position: relative;
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        .contact2-country-select {
          appearance: none;
          -webkit-appearance: none;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 28px 12px 12px;
          font-size: 13.5px;
          font-weight: 600;
          color: #0f172a;
          font-family: var(--font-mono);
          cursor: pointer;
          outline: none;
          transition: all 0.2s ease;
        }

        .contact2-country-select:focus {
          border-color: #FF0205;
          background: #ffffff;
          box-shadow: 0 0 0 3.5px rgba(255, 2, 5, 0.15);
        }

        .contact2-country-select option {
          background: #ffffff;
          color: #0f172a;
        }

        .contact2-select-arrow {
          position: absolute;
          right: 9px;
          pointer-events: none;
          color: #64748b;
        }

        .contact2-phone-input {
          flex: 1;
        }

        /* Submit Button */
        .contact2-submit-wrap {
          margin-top: 6px;
        }

        .contact2-submit-btn {
          width: 100%;
          height: 50px;
          border-radius: 999px;
          background: linear-gradient(135deg, #FF0205 0%, #D60003 100%);
          color: #FFFFFF;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.01em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 24px -4px rgba(255, 2, 5, 0.55);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact2-submit-btn:hover {
          background: linear-gradient(135deg, #FF1616 0%, #FF0205 100%);
          box-shadow: 0 14px 30px -4px rgba(255, 2, 5, 0.75);
          transform: translateY(-2px);
        }

        .contact2-submit-btn:active {
          transform: translateY(0);
        }

        /* Submission Feedback */
        .contact2-success-container {
          text-align: center;
          padding: 24px 12px;
        }

        .contact2-success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(255, 2, 5, 0.1);
          border: 1px solid rgba(255, 2, 5, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 0 28px rgba(255, 2, 5, 0.35);
        }

        .contact2-success-title {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 10px;
        }

        .contact2-success-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #475569;
          max-width: 420px;
          margin: 0 auto 22px;
        }

        .contact2-summary-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 18px;
          text-align: left;
          max-width: 420px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact2-summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #64748b;
        }

        .contact2-summary-row b {
          color: #0f172a;
          font-weight: 600;
        }

        /* ---------- Responsive Breakpoints ---------- */
        @media (max-width: 980px) {
          .contact2-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact2-subdesc {
            max-width: 100%;
          }
        }

        @media (max-width: 580px) {
          .contact2-form-row-2 {
            grid-template-columns: 1fr;
          }

          .contact2-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
