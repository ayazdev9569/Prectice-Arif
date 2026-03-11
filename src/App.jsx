import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import WhyHireMe from './components/WhyHireMe';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // On mount (which happens on reload), if not already at home, navigate to home
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <div className="min-h-screen bg-light text-text-dark font-sans flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <div className="flex flex-col lg:flex-row my-20">
                <Experience />
                <WhyHireMe />
              </div>
              <Portfolio />
              <Testimonials />
              <CallToAction />
              <Blog />
            </>
          } />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
