import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ForDevelopers from './components/ForDevelopers';
import ForUsers from './components/ForUsers';
import ModelShowcase from './components/ModelShowcase';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';

const App: React.FC = () => (
  <>
    <Hero />
    <Features />
    <ForDevelopers />
    <ForUsers />
    <ModelShowcase />
    <Testimonials />
    <Cta />
  </>
);

export default App;
