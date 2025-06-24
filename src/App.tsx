import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForDevelopers from './components/ForDevelopers';
import ForUsers from './components/ForUsers';
import ModelShowcase from './components/ModelShowcase';
import Cta from './components/Cta';

const Home: React.FC = () => (
  <>
    <Hero />
    <Features />
    <HowItWorks />
    <ForDevelopers />
    <ForUsers />
    <ModelShowcase />
    <Cta />
  </>
);

const App: React.FC = () => (
  <Home />
);

export default App;

