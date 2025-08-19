import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-container">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="logo-text">CoolSite</span>
        </motion.div>

        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </motion.div>

        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading amazing experience...
          </motion.span>
        </motion.div>

        <motion.div
          className="loading-progress"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <div className="progress-bar"></div>
        </motion.div>
      </div>

      <div className="loading-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 