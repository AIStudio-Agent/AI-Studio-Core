import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ForDevelopers from './components/ForDevelopers';
import ForUsers from './components/ForUsers';
import ModelShowcase from './components/ModelShowcase';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ForDevelopers />
      <ForUsers />
      <ModelShowcase />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;