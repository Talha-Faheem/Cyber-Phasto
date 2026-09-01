import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FAQ_DATA = {
  general: [
    {
      id: 'gen-1',
      question: 'What is an AI workflow agent?',
      answer: 'An AI workflow agent is an autonomous, software-driven system powered by large language models and deterministic rules that can plan, execute, and verify multi-step business processes across your applications without manual intervention.'
    },
    {
      id: 'gen-2',
      question: 'What types of tasks can I automate?',
      defaultOpen: true,
      answer: 'You can automate anything from lead routing, email follow-ups, and HR onboarding to IT ticketing or analytics reports. The platform adapts to different industries through modular AI agents.'
    },
    {
      id: 'gen-3',
      question: 'Can I integrate the platform with my existing tools?',
      answer: 'Yes! Moniveo provides 120+ pre-built connectors for Slack, HubSpot, Salesforce, GitHub, Jira, PostgreSQL, Snowflake, and Google Workspace, along with custom REST/GraphQL webhook nodes.'
    },
    {
      id: 'gen-4',
      question: 'Is there a free plan or trial available?',
      answer: 'Yes. We offer a 14-day full-featured enterprise trial with up to 5,000 automated workflow executions and dedicated onboarding assistance so your team can measure ROI risk-free.'
    },
    {
      id: 'gen-5',
      question: 'What happens if I exceed my workflow limit?',
      answer: 'Workflows are never abruptly terminated. You will receive an automated threshold alert at 80% and 95% capacity, with flexible overage protection and 1-click tier scaling directly in your console.'
    }
  ],
  product: [
    {
      id: 'prod-1',
      question: 'How does Moniveo handle edge cases and agent errors?',
      answer: 'Moniveo incorporates human-in-the-loop (HITL) checkpoints. When an agent detects ambiguity or a confidence score below your preset threshold, it triggers a Slack or email prompt for human sign-off.'
    },
    {
      id: 'prod-2',
      question: 'Is our corporate data used to train public AI models?',
      answer: 'No. All enterprise workspaces run in isolated, SOC2 Type II and HIPAA-compliant environments with zero data retention for model retraining.'
    },
    {
      id: 'prod-3',
      question: 'Can we build custom agents using code or visual builders?',
      answer: 'Both! You can build workflows visually using our drag-and-drop node graph, or write custom Python / TypeScript execution scripts with full IDE debugging.'
    }
  ],
  pricing: [
    {
      id: 'price-1',
      question: 'How is Moniveo priced?',
      answer: 'Pricing is based on active monthly autonomous workflows and execution runs. We offer transparent monthly/annual billing with no hidden seat fees for view-only collaborators.'
    },
    {
      id: 'price-2',
      question: 'Do you offer custom enterprise Service Level Agreements (SLAs)?',
      answer: 'Yes, our Enterprise tier includes a 99.99% uptime guarantee, 24/7 priority phone and Slack channel support, and custom dedicated VPC hosting.'
    },
    {
      id: 'price-3',
      question: 'Are there discounts for startups and non-profits?',
      answer: 'Yes, qualifying early-stage startups and educational or non-profit organizations receive up to 50% off for their first 12 months.'
    }
  ]
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [openItems, setOpenItems] = useState({ 'gen-2': true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentQuestions = FAQ_DATA[activeTab] || FAQ_DATA.general;

  const faqContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.02
      }
    }
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-[#1a1a1a] relative text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Tabs */}
        <ScrollReveal direction="up" delay={0.02} duration={0.3} className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222]">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Frequently Asked <span className="gradient-text">Question</span>
              </h2>
              <p className="text-[#a1a1aa] text-sm sm:text-base mt-1.5">
                Quick answers to common questions about our AI workflow platform.
              </p>
            </div>

            {/* Tab Pills Top-Right */}
            <div className="inline-flex p-1 rounded-full bg-[#0d0d0d] border border-[#262626] shadow-md shrink-0 self-start md:self-auto">
              {[
                { key: 'general', label: 'General' },
                { key: 'product', label: 'Product' },
                { key: 'pricing', label: 'Pricing' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.key
                      ? 'bg-[#FF0205] text-white shadow-[0_0_15px_rgba(255,2,5,0.5)]'
                      : 'text-[#888] hover:text-white hover:bg-[#181818]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Accordion List with Staggered Scroll Entrance */}
        <motion.div
          variants={faqContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-3.5"
        >
          {currentQuestions.map((item, idx) => {
            const isOpen = !!openItems[item.id];

            return (
              <motion.div
                key={item.id}
                variants={faqItemVariants}
                className={`transition-all duration-300 bg-[#0a0a0a]/90 backdrop-blur-md overflow-hidden ${
                  isOpen 
                    ? 'rounded-2xl border border-[#FF0205] shadow-[0_0_25px_rgba(255,2,5,0.22)] ring-1 ring-[#FF0205]/20' 
                    : 'rounded-full border border-[#262626] hover:border-[#3a3a3a] shadow-sm'
                }`}
              >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex items-center justify-between text-left gap-4 cursor-pointer transition-all duration-200 ${
                      isOpen ? 'py-4 px-6 sm:px-7' : 'py-3.5 px-6 sm:px-7'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Number Pill Capsule */}
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tracking-tight shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-[#1c1c1c] text-[#a1a1aa] border border-[#333]' 
                          : 'bg-[#151515] text-[#71717a] border border-[#262626]'
                      }`}>
                        0{idx + 1}
                      </span>
                      
                      {/* Question Text */}
                      <span className="text-[15.5px] sm:text-[17px] font-bold text-white tracking-tight font-sans truncate sm:whitespace-normal">
                        {item.question}
                      </span>
                    </div>
                    
                    {/* Right Circular Toggle Button */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#FF0205] text-white shadow-[0_0_15px_rgba(255,2,5,0.7)]' 
                        : 'bg-[#161616] text-[#777] border border-[#262626]'
                    }`}>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-[#888]'}`} 
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: 'auto',
                          transition: { 
                            height: { duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] },
                            opacity: { duration: 0.22, delay: 0.05 }
                          } 
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: { 
                            height: { duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] },
                            opacity: { duration: 0.12 }
                          } 
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-1 text-[#a1a1aa] text-sm sm:text-[15px] leading-relaxed font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

      </div>
    </section>
  );
}
