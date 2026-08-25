import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

const cardStyle = {
  padding: '1.75rem',
  backgroundColor: '#0c0606',
  border: '1.5px solid rgba(255, 2, 5, 0.28)',
  borderRadius: '20px',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 2, 5, 0.1)',
  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
};

const formCardStyle = {
  padding: '2.5rem',
  backgroundColor: '#0c0606',
  border: '1.5px solid rgba(255, 2, 5, 0.35)',
  borderRadius: '24px',
  boxShadow: '0 25px 65px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 2, 5, 0.15)'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.82rem',
  color: '#d0d0d0',
  marginBottom: '0.45rem',
  fontWeight: 700,
  fontFamily: 'var(--font-mono)'
};

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  backgroundColor: '#050505',
  border: '1px solid #282828',
  borderRadius: '12px',
  color: '#ffffff',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Admission & Enrollment',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#070707] pt-28 pb-24 min-h-screen text-white w-full">
      <section className="container" style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.15, color: '#FFFFFF' }}>
          LET'S BUILD YOUR <span className="gradient-text">NEXT STEP.</span>
        </h1>
        <p style={{ color: '#A0A0A0', fontSize: '1.15rem', lineHeight: 1.65 }}>
          Have questions regarding course enrollment, syllabus details, corporate red-team training, or university chapter setup? Reach our direct team.
        </p>
      </section>

      <section className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: 'rgba(255, 2, 5, 0.15)', color: 'var(--red)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 800 }}>Official Support Email</h3>
                  <span className="mono" style={{ fontSize: '0.92rem', color: '#ff5a5c', fontWeight: 700 }}>support@cyberpashto.com</span>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#888888', marginTop: '0.5rem', lineHeight: 1.5 }}>
                Expect replies from our academic counseling team within 6–12 hours.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: 'rgba(255, 2, 5, 0.15)', color: 'var(--red)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 800 }}>Admissions Hotline</h3>
                  <span className="mono" style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 700 }}>0325-5636856</span>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#888888', marginTop: '0.5rem', lineHeight: 1.5 }}>
                Direct student assistance: Monday to Saturday, 9:00 AM – 6:00 PM PKT.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: 'rgba(255, 2, 5, 0.15)', color: 'var(--red)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 800 }}>Regional Academy Hub</h3>
                  <span style={{ fontSize: '0.9rem', color: '#cccccc', fontWeight: 600 }}>Chakdara, Lower Dir &amp; Peshawar, KPK, Pakistan</span>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#888888', marginTop: '0.5rem', lineHeight: 1.5 }}>
                Onsite workshops, student lab access, and chapter coordination center.
              </p>
            </div>
          </div>

          <div style={formCardStyle}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(255, 2, 5, 0.15)', border: '2px solid var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle2 size={38} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: '#ffffff', fontWeight: 800 }}>Inquiry Submitted</h3>
                <p style={{ color: '#888888', fontSize: '0.98rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                  Thank you for reaching out to Cyber Pashto. A senior academic advisor will contact you within 12 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn primary" style={{ padding: '0.85rem 2.2rem', borderRadius: '12px' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.35rem', color: '#ffffff', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    Send Us an Inquiry
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#888888', margin: 0, lineHeight: 1.5 }}>
                    Fill out the form below to receive syllabus previews and enrollment details.
                  </p>
                </div>

                <div>
                  <label style={labelStyle}>Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Tariq Khattak"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="tariq@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input 
                      type="text" 
                      placeholder="03XX-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Subject / Interest Area</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer', backgroundColor: '#050505' }}
                  >
                    <option value="Course Admission & Enrollment">Course Admission & Enrollment</option>
                    <option value="Web Development & Full Stack Cohort">Web Development & Full Stack Cohort</option>
                    <option value="Cybersecurity Level 2 (VAPT)">Cybersecurity Level 2 (VAPT)</option>
                    <option value="Ethical Hacking & Red Team Cohort">Ethical Hacking & Red Team Cohort</option>
                    <option value="Artificial Intelligence & GenAI">Artificial Intelligence & GenAI</option>
                    <option value="University Chapter Setup">University Chapter Setup</option>
                    <option value="Enterprise Security Audit">Enterprise Security Audit</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Your Message *</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell us about your learning goals or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn primary" 
                  style={{ 
                    width: '100%', 
                    padding: '14px 24px', 
                    fontSize: '14px', 
                    marginTop: '0.4rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '850px', marginTop: '3rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#FFFFFF', fontWeight: 800 }}>Direct Admission Assistance</h3>
        <p style={{ color: '#8A8A8A', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Have immediate questions? You can also message our admissions counselors directly on WhatsApp at <strong style={{ color: 'var(--red)' }}>0325-5636856</strong>.
        </p>
        <a 
          href="https://cyberpashtopremium.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn secondary"
          style={{ padding: '14px 28px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <span>Visit LMS Portal</span>
          <ArrowRight size={16} style={{ color: 'var(--red)' }} />
        </a>
      </section>
    </div>
  );
}
