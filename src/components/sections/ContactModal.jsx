import React, { useState } from 'react';
import { X, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

const labelStyle = {
  display: 'block',
  fontSize: '0.8rem',
  color: 'var(--paper)',
  marginBottom: '0.35rem',
  fontWeight: 700,
  fontFamily: 'var(--font-mono)'
};

const inputStyle = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  color: '#FFFFFF',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.88rem',
  outline: 'none'
};

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Enrollment / Admission',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(5, 5, 5, 0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          maxWidth: '580px',
          width: '100%',
          backgroundColor: 'rgba(18, 12, 14, 0.75)',
          backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '22px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 0 35px rgba(255, 2, 5, 0.15)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          style={{
            padding: '1.25rem 1.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.45rem', borderRadius: '8px', backgroundColor: 'rgba(255, 2, 5, 0.15)', border: '1px solid rgba(255, 2, 5, 0.3)', color: '#FF0205' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: 0, fontWeight: 700 }}>Admission &amp; Inquiry</h3>
              <span className="gradient-text font-mono text-[0.72rem] tracking-wider font-bold">
                CYBERPASHTO ECOSYSTEM
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--muted)',
              cursor: 'pointer',
              padding: '0.35rem',
              transition: 'color 0.2s ease'
            }}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        <div style={{ padding: '1.75rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '65px', height: '65px', borderRadius: '50%', backgroundColor: 'var(--red-subtle)', border: '2px solid var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', margin: '0 auto 1.25rem auto' }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.65rem', color: '#FFFFFF' }}>Inquiry Received</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Thank you for reaching out to CyberPashto. An academic advisor will contact you within 12 hours.
              </p>
              <button onClick={resetForm} className="btn primary" style={{ padding: '0.75rem 2rem' }}>
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Ahmad Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="ahmad@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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

                <div>
                  <label style={labelStyle}>Area of Interest</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ ...inputStyle, appearance: 'none', backgroundColor: 'var(--ink)', cursor: 'pointer' }}
                  >
                    <option value="Course Enrollment / Admission">Course Enrollment / Admission</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                    <option value="Cybersecurity Fundamentals">Cybersecurity Fundamentals</option>
                    <option value="AI & GenAI Engineering">AI & GenAI Engineering</option>
                    <option value="Programming & Software Engineering">Programming & Software Engineering</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Message / Questions *</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="Ask about syllabus details, prerequisite guidance, or batch timing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn primary" style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', marginTop: '0.4rem', justifyContent: 'center' }}>
                <Send size={16} />
                <span>Submit Admission Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
