import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form data:', data);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'hello@coolsite.com',
      link: 'mailto:hello@coolsite.com',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's start a conversation and bring your ideas to life</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <p>
              Ready to start your next project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className={`social-icon ${social}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`fab fa-${social}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            variants={itemVariants}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Subject is required' })}
                className={errors.subject ? 'error' : ''}
                placeholder="What's this about?"
              />
              {errors.subject && <span className="error-message">{errors.subject.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className={errors.message ? 'error' : ''}
                placeholder="Tell us about your project..."
              />
              {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 