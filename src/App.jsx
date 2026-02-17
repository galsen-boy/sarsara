import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Formats from './components/Formats';
import Pillars from './components/Pillars';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-body text-gray-900 bg-white">
      <Header />
      <Hero />
      <Formats />
      <Pillars />
      <Footer />
    </div>
  );
}

export default App;
