import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForDevelopers from './components/ForDevelopers';
import ForUsers from './components/ForUsers';
import ModelShowcase from './components/ModelShowcase';
import Cta from './components/Cta';

const App: React.FC = () => (
  <div className="bg-white text-black dark:bg-[#1E2117] dark:text-white transition-colors duration-300">
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
    <ForDevelopers />
    <ForUsers />
    <ModelShowcase />
    <Cta />
  </div>
);

export default App;
