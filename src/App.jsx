import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import Partners from './views/Partners';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-primary font-sans">
      {/* Navigation Header */}
      <Header
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Main Viewport Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onContactClick={() => setIsContactOpen(true)} />} />
          <Route path="/about" element={<About onContactClick={() => setIsContactOpen(true)} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Contact Modal Overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
