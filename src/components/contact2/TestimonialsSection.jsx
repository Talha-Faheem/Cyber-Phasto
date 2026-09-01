import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TESTIMONIALS = [
  // 1. Featured Large Card: Forter (Jamierson Silva)
  {
    id: 'forter-main',
    type: 'featured',
    company: 'Forter',
    quote: "Moniveo's modular AI agents reduced our tier-1 manual verification workloads by 78% within the first month. The autonomous workflows feel seamless and allow our fraud analytics engineers to focus entirely on high-impact anomaly patterns.",
    author: 'Jamierson Silva',
    role: 'Product Manager',
    companyBold: 'Forter',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=160',
    rating: 5
  },
  // 2. Dark Cyber Contrast Card: HubSpot (Sarah Tan)
  {
    id: 'hubspot-main',
    type: 'dark',
    company: 'HubSpot',
    quote: "The ability to plug AI agents directly into our inbound CRM routing revolutionized our response latency. Customer satisfaction rose immediately because routine triage happens in under 4 seconds.",
    author: 'Sarah Tan',
    role: 'Operations Lead',
    companyBold: 'HubSpot',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=160',
    rating: 5
  },
  // 3. Smaller Card: Slack (Samuel)
  {
    id: 'slack-samuel',
    type: 'standard',
    company: 'Slack',
    quote: "Our cross-department IT escalation times dropped by 64%. The Slack bot integrations are incredibly responsive and accurate.",
    author: 'Samuel',
    role: 'System Architect',
    companyBold: 'Slack',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=160',
    rating: 5
  },
  // 4. Smaller Card: HubSpot (Alex R)
  {
    id: 'hubspot-alex',
    type: 'standard',
    company: 'HubSpot',
    quote: "Seamless sync with our internal knowledge base. It handles edge cases without breaking context or hallucinating steps.",
    author: 'Alex R',
    role: 'IT Manager',
    companyBold: 'HubSpot',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=160',
    rating: 5
  },
  // 5. Smaller Card: Google (Daniel)
  {
    id: 'google-daniel',
    type: 'standard',
    company: 'Google',
    quote: "The architecture reliability and modular micro-agent orchestration are world class. Production deployment took less than an hour.",
    author: 'Daniel',
    role: 'Cloud Engineer',
    companyBold: 'Google',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=160',
    rating: 5
  },
  // 6. Smaller Card: Forter (Jordan M)
  {
    id: 'forter-jordan',
    type: 'standard',
    company: 'Forter',
    quote: "Automated root-cause diagnostics cut down our infrastructure incident triage cycle from 45 minutes to under 3 minutes.",
    author: 'Jordan M',
    role: 'Infrastructure Lead',
    companyBold: 'Forter',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=160',
    rating: 5
  },
  // 7. Smaller Card: Salesforce (Emma Watson)
  {
    id: 'salesforce-emma',
    type: 'standard',
    company: 'Salesforce',
    quote: "Scales effortlessly across multi-tenant enterprise accounts without operational friction. Highly recommended for RevOps.",
    author: 'Emma Watson',
    role: 'Ops Director',
    companyBold: 'Salesforce',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=160',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.04
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const featured = TESTIMONIALS.find(t => t.id === 'forter-main');
  const darkCard = TESTIMONIALS.find(t => t.id === 'hubspot-main');
  const standardCards = TESTIMONIALS.filter(t => t.type === 'standard');

  return (
    <section className="py-16 md:py-24 border-t border-[#1e1e1e] relative overflow-hidden text-white">
      
      {/* Ambient Red Glow Halo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF0205]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <ScrollReveal direction="up" delay={0.02} duration={0.3}>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
              Trusted by company driving change with <span className="gradient-text">AI</span>
            </h2>
            <p className="mt-2.5 text-[#a1a1aa] text-base sm:text-lg">
              Empowering forward-thinking product, engineering, and operations teams to automate mission-critical workflows.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {/* CARD 1: Featured Large Card (Forter - Jamierson Silva) - White Background */}
          {featured && (
            <motion.div
              key={featured.id}
              variants={cardVariants}
              className="lg:col-span-2 bg-white text-slate-900 rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-xl shadow-black/40 hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-50/70 rounded-bl-full pointer-events-none" />

              <div>
                {/* Header: Star Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(featured.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={26} className="text-[#FF0205]/40" />
                </div>

                {/* Quote Body */}
                <p className="text-slate-800 text-base sm:text-lg lg:text-xl font-semibold leading-relaxed mb-8">
                  "{featured.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={featured.avatar}
                  alt={featured.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF0205] shadow-sm ring-2 ring-red-100"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-sans">
                    {featured.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {featured.role} at <strong className="font-bold text-slate-900">{featured.companyBold}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CARD 2: Dark Contrast Card (HubSpot - Sarah Tan) */}
          {darkCard && (
            <motion.div
              key={darkCard.id}
              variants={cardVariants}
              className="bg-[#080808] text-white rounded-2xl p-7 sm:p-8 shadow-2xl border border-[#FF0205]/30 hover:border-[#FF0205]/60 hover:shadow-[0_0_30px_rgba(255,2,5,0.2)] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF0205]/[0.08] rounded-bl-full pointer-events-none" />

              <div>
                {/* Header: Star Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(darkCard.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={22} className="text-[#FF0205]/40" />
                </div>

                <p className="text-[#d8d8d8] text-sm sm:text-base font-normal leading-relaxed mb-6">
                  "{darkCard.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e1e]">
                <img
                  src={darkCard.avatar}
                  alt={darkCard.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FF0205] shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    {darkCard.author}
                  </h4>
                  <p className="text-xs text-[#888]">
                    {darkCard.role} at <strong className="font-bold text-white">{darkCard.companyBold}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CARDS 3-7: Standard Dark Cards */}
          {standardCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="bg-[#0c0c0c]/80 backdrop-blur-sm rounded-2xl border border-[#202020] p-6 shadow-md hover:shadow-xl hover:border-[#FF0205]/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(card.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-[#bbb] text-sm font-normal leading-relaxed mb-5">
                  "{card.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3.5 border-t border-[#1a1a1a]">
                <img
                  src={card.avatar}
                  alt={card.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#333] shadow-sm"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white truncate font-sans">
                    {card.author}
                  </h4>
                  <p className="text-xs text-[#777] truncate">
                    {card.role} at <strong className="font-bold text-[#bbb]">{card.companyBold}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
