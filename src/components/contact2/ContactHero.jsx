import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Loader2,
  AlertCircle
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ContactMap from './ContactMap';

const COUNTRY_CODES = [
  { code: '+1', flag: '🇺🇸', label: 'US/CA (+1)' },
  { code: '+44', flag: '🇬🇧', label: 'UK (+44)' },
  { code: '+49', flag: '🇩🇪', label: 'DE (+49)' },
  { code: '+33', flag: '🇫🇷', label: 'FR (+33)' },
  { code: '+971', flag: '🇦🇪', label: 'UAE (+971)' },
  { code: '+966', flag: '🇸🇦', label: 'KSA (+966)' },
  { code: '+92', flag: '🇵🇰', label: 'PK (+92)' },
  { code: '+91', flag: '🇮🇳', label: 'IN (+91)' },
  { code: '+61', flag: '🇦🇺', label: 'AU (+61)' },
  { code: '+65', flag: '🇸🇬', label: 'SG (+65)' },
];

export default function ContactHero() {
  const [countryCode, setCountryCode] = useState('+1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid work email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or project overview';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
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
    setErrors({});
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.04
      }
    }
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative pt-4 pb-14 md:py-16 text-white">
      
      {/* Background Subtle Red Ambient Glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#FF0205]/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#FF0205]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* =========================================================
              LEFT COLUMN: Header, Overview, 2x2 Info Grid & Map
              ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Two-Tone Heading */}
            <ScrollReveal direction="up" delay={0.02} duration={0.3}>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] text-white mb-3 font-sans">
                <span className="gradient-text block sm:inline">Get In Touch </span>
                <span className="text-white block sm:inline">With Our Team</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-xl mb-6">
                Fill out the form below and our team will get back to you within 1–2 business days.
              </p>
            </ScrollReveal>

            {/* 2x2 Grid of Frosted Glass Info Cards - Stagger Animated on Scroll */}
            <motion.div
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              
              {/* 1. Building icon — Head Office */}
              <motion.div
                variants={cardItemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-lg shadow-black/20 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/90 group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,2,5,0.5)] transition-all duration-300">
                    <Building2 size={18} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#888] group-hover:text-[#bbb] transition-colors font-mono">
                    Head Office
                  </span>
                </div>
                <p className="text-[15px] font-bold text-white leading-snug">
                  Metrotech Center, NY 11201
                </p>
              </motion.div>

              {/* 2. Phone icon — Call Center */}
              <motion.div
                variants={cardItemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-lg shadow-black/20 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/90 group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,2,5,0.5)] transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#888] group-hover:text-[#bbb] transition-colors font-mono">
                    Call Center
                  </span>
                </div>
                <a 
                  href="tel:+1499549194004" 
                  className="text-[15px] font-bold text-white hover:text-[#FF3B3E] transition-colors leading-snug block"
                >
                  +1 4995 4919 4004
                </a>
              </motion.div>

              {/* 3. Mail icon — Email */}
              <motion.div
                variants={cardItemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-lg shadow-black/20 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/90 group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,2,5,0.5)] transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#888] group-hover:text-[#bbb] transition-colors font-mono">
                    Email
                  </span>
                </div>
                <a 
                  href="mailto:hello@moniveo.com" 
                  className="text-[15px] font-bold text-white hover:text-[#FF3B3E] transition-colors leading-snug block"
                >
                  hello@moniveo.com
                </a>
              </motion.div>

              {/* 4. Clock icon — Working Hours */}
              <motion.div
                variants={cardItemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-lg shadow-black/20 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/90 group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,2,5,0.5)] transition-all duration-300">
                    <Clock size={18} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#888] group-hover:text-[#bbb] transition-colors font-mono">
                    Working Hours
                  </span>
                </div>
                <p className="text-[15px] font-bold text-white leading-snug">
                  Monday – Friday (07 am – 05 pm)
                </p>
              </motion.div>

            </motion.div>

            {/* Embedded Map pinned to Metrotech Center */}
            <ScrollReveal direction="up" delay={0.06} duration={0.32}>
              <ContactMap />
            </ScrollReveal>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Clean White Form Card with Red Laser Top Accent
              ========================================================= */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.04} duration={0.32}>
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-black/40 overflow-hidden relative text-slate-900">
                
                {/* Vibrant Cyber Red Top Accent Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#B00000] via-[#FF0205] to-[#FF3B3E] shadow-[0_0_15px_rgba(255,2,5,0.4)]" />

                <div className="p-6 sm:p-8 lg:p-9">
                  {submitted ? (
                    <div className="py-8 text-center flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#FF0205] mb-5 shadow-inner">
                        <CheckCircle2 size={36} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 font-sans">
                        Message Sent Successfully!
                      </h3>
                      
                      <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
                        Thank you, <strong className="text-slate-900">{formData.firstName}</strong>. Our workflow automation team has received your request and will reach out to you within 1–2 business days.
                      </p>

                      <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto mb-6 text-xs space-y-2">
                        <div className="flex justify-between text-slate-600">
                          <span className="font-medium">Work Email:</span>
                          <span className="font-semibold text-slate-900">{formData.workEmail}</span>
                        </div>
                        {formData.phoneNumber && (
                          <div className="flex justify-between text-slate-600">
                            <span className="font-medium">Phone:</span>
                            <span className="font-semibold text-slate-900">{countryCode} {formData.phoneNumber}</span>
                          </div>
                        )}
                        {formData.companyName && (
                          <div className="flex justify-between text-slate-600">
                            <span className="font-medium">Company:</span>
                            <span className="font-semibold text-slate-900">{formData.companyName}</span>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-[#FF0205] text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(255,2,5,0.4)]"
                      >
                        <span>Send Another Message</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
                          Send a Message
                        </h2>
                        <p className="text-slate-500 text-sm mt-1">
                          Tell us about your organization's automation goals.
                        </p>
                      </div>

                      {/* Row 1: First Name / Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                            First Name <span className="text-[#FF0205]">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            placeholder="Alex"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white transition-all outline-none ${
                              errors.firstName 
                                ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                                : 'border-slate-200 focus:border-[#FF0205] focus:ring-2 focus:ring-[#FF0205]/15'
                            }`}
                          />
                          {errors.firstName && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} /> {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                            Last Name <span className="text-[#FF0205]">*</span>
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Rivera"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white transition-all outline-none ${
                              errors.lastName 
                                ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                                : 'border-slate-200 focus:border-[#FF0205] focus:ring-2 focus:ring-[#FF0205]/15'
                            }`}
                          />
                          {errors.lastName && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} /> {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Work Email / Phone Number w/ "+1" country dropdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                            Work Email <span className="text-[#FF0205]">*</span>
                          </label>
                          <input
                            id="workEmail"
                            type="email"
                            placeholder="alex@company.com"
                            value={formData.workEmail}
                            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white transition-all outline-none ${
                              errors.workEmail 
                                ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                                : 'border-slate-200 focus:border-[#FF0205] focus:ring-2 focus:ring-[#FF0205]/15'
                            }`}
                          />
                          {errors.workEmail && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} /> {errors.workEmail}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                            Phone Number
                          </label>
                          <div className="flex rounded-xl border border-slate-200 bg-slate-50/70 focus-within:bg-white focus-within:border-[#FF0205] focus-within:ring-2 focus-within:ring-[#FF0205]/15 transition-all overflow-hidden">
                            <div className="relative border-r border-slate-200 bg-slate-100/90 hover:bg-slate-200 transition-colors shrink-0">
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="appearance-none pl-3 pr-7 py-2.5 bg-transparent text-xs font-semibold text-slate-800 outline-none cursor-pointer"
                                aria-label="Country Code"
                              >
                                {COUNTRY_CODES.map((item) => (
                                  <option key={item.code} value={item.code} className="bg-white text-slate-900">
                                    {item.flag} {item.code}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown size={12} className="absolute right-2 top-3.5 text-slate-500 pointer-events-none" />
                            </div>
                            <input
                              id="phoneNumber"
                              type="tel"
                              placeholder="(555) 000-1234"
                              value={formData.phoneNumber}
                              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                              className="w-full px-3 py-2.5 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Job Title / Company Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="jobTitle" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                            Job Title
                          </label>
                          <input
                            id="jobTitle"
                            type="text"
                            placeholder="VP of Engineering"
                            value={formData.jobTitle}
                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:border-[#FF0205] focus:ring-2 focus:ring-[#FF0205]/15 transition-all outline-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                            Company Name
                          </label>
                          <input
                            id="companyName"
                            type="text"
                            placeholder="Acme Corp"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:border-[#FF0205] focus:ring-2 focus:ring-[#FF0205]/15 transition-all outline-none"
                          />
                        </div>
                      </div>

                      {/* Row 4: Message (Full Width) */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                          Message <span className="text-[#FF0205]">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="How can our AI workflow agents assist your team?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white transition-all outline-none resize-y min-h-[100px] ${
                            errors.message 
                              ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#FF0205] focus:ring-2 focus:ring-[#FF0205]/15'
                          }`}
                        />
                        {errors.message && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle size={12} /> {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button: Cyber Red Gradient Pill */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FF0205] via-[#FF1616] to-[#D60003] hover:from-[#FF1616] hover:to-[#FF0205] text-white font-bold text-sm tracking-wide shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={18} className="animate-spin text-white" />
                              <span>Submitting Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Message</span>
                              <Send size={15} className="transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
