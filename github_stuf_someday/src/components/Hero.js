import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiDownload } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Typed from 'react-typed';
import './Hero.css';

const Hero = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
  };

  const floatingCards = [
    {
      icon: '🚀',
      title: 'Fast & Modern',
      description: 'Lightning-fast performance',
      delay: 0,
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning visual appeal',
      delay: 0.2,
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Works on all devices',
      delay: 0.4,
    },
    {
      icon: '⚡',
      title: 'Interactive',
      description: 'Engaging user experience',
      delay: 0.6,
    },
  ];

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="hero" ref={ref}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: isDark ? '#121212' : 'transparent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: isDark ? '#ffffff' : '#667eea',
            },
            links: {
              color: isDark ? '#ffffff' : '#667eea',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={heroVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Welcome to the Future of{' '}
            <span className="gradient-text">
              <Typed
                strings={[
                  'Web Design',
                  'Digital Experience',
                  'Innovation',
                  'Technology',
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
              />
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Experience cutting-edge design, smooth animations, and modern technology 
            all in one place. Let's build something amazing together.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <FiArrowRight />
            </Link>
            <button className="btn btn-secondary">
              <FiPlay />
              Watch Demo
            </button>
            <button className="btn btn-outline">
              <FiDownload />
              Download CV
            </button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={heroVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="floating-cards">
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="floating-card"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: card.delay,
                  ease: 'easeInOut',
                }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-placeholder">
              <div className="gradient-sphere"></div>
              <div className="floating-elements">
                <motion.div
                  className="floating-element"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ⚡
                </motion.div>
                <motion.div
                  className="floating-element"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  🎯
                </motion.div>
                <motion.div
                  className="floating-element"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                >
                  💡
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="scroll-arrow"></div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero; 