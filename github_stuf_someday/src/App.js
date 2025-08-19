import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from 'react-use';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import Cursor from './components/Cursor';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowScrollTop(scrollPosition > 500);
  }, [scrollPosition]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>Cool Website React | Modern & Interactive</title>
          <meta name="description" content="A modern, responsive React website with stunning animations and interactive features" />
          <meta name="keywords" content="react, website, modern, responsive, animations, portfolio" />
          <meta property="og:title" content="Cool Website React" />
          <meta property="og:description" content="A modern, responsive React website with stunning animations" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cool Website React" />
          <meta name="twitter:description" content="A modern, responsive React website with stunning animations" />
        </Helmet>

        <div className="App">
          <Cursor />
          <Navbar />
          <ThemeToggle />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                  <About />
                  <Services />
                  <Portfolio />
                  <Team />
                  <Testimonials />
                  <Pricing />
                  <Blog />
                  <Contact />
                </motion.div>
              } />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/team" element={<Team />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>

          <Footer />
          
          {showScrollTop && <ScrollToTop />}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 