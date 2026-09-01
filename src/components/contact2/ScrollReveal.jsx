import React from 'react';
import { motion } from 'framer-motion';

/**
 * Fast & Snappy ScrollReveal component
 * Optimized for ultra-fast, smooth scroll-triggered entrances.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.32,
  className = '',
  viewportAmount = 0.08,
  staggerChildren = null,
  once = true,
  ...props
}) {
  const getVariants = () => {
    const fastEase = [0.16, 1, 0.3, 1];

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 22 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: fastEase,
              ...(staggerChildren ? { staggerChildren } : {})
            }
          }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -22 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: fastEase
            }
          }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 22 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: fastEase
            }
          }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -22 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: fastEase
            }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.96, y: 16 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: fastEase
            }
          }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              ...(staggerChildren ? { staggerChildren } : {})
            }
          }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  duration = 0.3,
  direction = 'up',
  delay = 0,
  ...props
}) {
  const fastEase = [0.16, 1, 0.3, 1];

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 20 : 0, 
      scale: direction === 'scale' ? 0.96 : 1 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: fastEase
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
