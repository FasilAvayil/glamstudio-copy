import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';

import LoadingScreen from './components/LoadingScreen';

function App() {
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="main-content" className="min-h-screen bg-glam-dark selection:bg-glam-gold selection:text-black font-sans">
            <Navbar />
            <Hero />
            <About />
            <Services onBookNow={handleBookNow} />
            <Gallery />
            <Testimonials />
            <Booking selectedService={selectedService} />
            <Location />
            <Footer />
            <FloatingCall />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
