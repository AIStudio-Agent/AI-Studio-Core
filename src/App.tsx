import React from 'react';
import Header from './components/Header'; // Add this line
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForDevelopers from './components/ForDevelopers';
import ForUsers from './components/ForUsers';
import ModelShowcase from './components/ModelShowcase';
import Cta from './components/Cta';

const App: React.FC = () => (
  <>
    <Header /> {/* Add this line */}
    <Hero />
    <Features />
    <HowItWorks />
    <ForDevelopers />
    <ForUsers />
    <ModelShowcase />
    <Cta />
  </>
);

export default App;

