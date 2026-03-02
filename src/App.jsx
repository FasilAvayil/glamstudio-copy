import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';
import LoadingScreen from './components/LoadingScreen';
import SalonMenu from './components/SalonMenu';
import FloatingInstagram from './components/FloatingInstagram';


function Home() {
  const [selectedService, setSelectedService] = useState('');

  const handleBookNow = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div key="main-content" className="min-h-screen bg-glam-dark selection:bg-glam-gold selection:text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services onBookNow={handleBookNow} />
      <SalonMenu />
      <Testimonials />
      <Booking selectedService={selectedService} />
      <Location />
      <Footer />
    </div>

  );
}

function App() {
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/salon-menu" element={<SalonMenu />} /> */}
            </Routes>
            <FloatingCall />
            {/* <FloatingInstagram /> */}
          </>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
