import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'branding', name: 'Branding' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce',
      description: 'A modern e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      image: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Task+App',
      description: 'Cross-platform mobile app for task management',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Design System',
      category: 'design',
      image: 'https://via.placeholder.com/400x300/ffd89b/333333?text=Design+System',
      description: 'Comprehensive design system for web applications',
      technologies: ['Figma', 'Storybook', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Brand Identity',
      category: 'branding',
      image: 'https://via.placeholder.com/400x300/19547b/ffffff?text=Brand+Identity',
      description: 'Complete brand identity design for startup',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      category: 'web',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Analytics',
      description: 'Real-time analytics dashboard with data visualization',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Fitness+App',
      description: 'Mobile fitness tracking application',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Showcasing our best work and creative solutions</p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`portfolio-item ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <motion.button
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <FiEye />
                      </motion.button>
                      <motion.button
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <FiExternalLink />
                      </motion.button>
                      <motion.button
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <FiGithub />
                      </motion.button>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Ready to start your project?</h3>
          <p>Let's create something amazing together</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 