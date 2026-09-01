import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Custom X (formerly Twitter) SVG Icon
function XIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  {
    id: 'github',
    name: 'GitHub',
    title: 'Build with us',
    description: 'Explore our open-source tools and templates.',
    buttonText: 'Visit GitHub',
    link: 'https://github.com',
    icon: Github,
    iconBg: 'bg-[#181818] text-white border border-[#2a2a2a] group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white',
    borderGlow: 'group-hover:border-[#FF0205]/60'
  },
  {
    id: 'x',
    name: 'X',
    title: 'Stay in the loop',
    description: 'Get the latest updates and insights.',
    buttonText: 'Follow on X',
    link: 'https://x.com',
    customIcon: XIcon,
    iconBg: 'bg-[#181818] text-white border border-[#2a2a2a] group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white',
    borderGlow: 'group-hover:border-[#FF0205]/60'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    title: 'See the journey',
    description: 'Behind the scenes of AI in action.',
    buttonText: 'Follow on Instagram',
    link: 'https://instagram.com',
    icon: Instagram,
    iconBg: 'bg-[#181818] text-white border border-[#2a2a2a] group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white',
    borderGlow: 'group-hover:border-[#FF0205]/60'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    title: 'Grow with us',
    description: 'Connect for ideas, updates, and stories.',
    buttonText: 'Connect on LinkedIn',
    link: 'https://linkedin.com',
    icon: Linkedin,
    iconBg: 'bg-[#181818] text-white border border-[#2a2a2a] group-hover:bg-[#FF0205] group-hover:border-[#FF0205] group-hover:text-white',
    borderGlow: 'group-hover:border-[#FF0205]/60'
  }
];

export default function SocialLinksSection() {
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
    <section className="py-14 md:py-20 border-t border-[#1e1e1e] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <ScrollReveal direction="up" delay={0.02} duration={0.3}>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              Join the Moniveo Global Community
            </h3>
          </ScrollReveal>
        </div>

        {/* 4-Column Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SOCIAL_ITEMS.map((item) => {
            const IconComp = item.icon;
            const CustomIconComp = item.customIcon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`group bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl border border-[#222222] p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,2,5,0.18)] hover:-translate-y-1.5 transition-all duration-300 ${item.borderGlow}`}
              >
                <div>
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-md ${item.iconBg}`}>
                    {CustomIconComp ? (
                      <CustomIconComp className="w-5 h-5" />
                    ) : (
                      <IconComp size={22} />
                    )}
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-lg font-bold text-white mb-1.5 font-sans group-hover:text-[#FF1616] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#888] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Pill Outline Button */}
                <div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full border border-[#333] group-hover:border-[#FF0205] text-[#ccc] group-hover:text-white group-hover:bg-[#FF0205] font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 no-underline shadow-sm hover:shadow-[0_0_15px_rgba(255,2,5,0.4)]"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
