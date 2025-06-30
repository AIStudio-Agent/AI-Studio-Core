import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/RequireAuth';
import PublishModel from './pages/publish';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForDevelopers from './components/ForDevelopers';
import ForUsers from './components/ForUsers';
import ModelShowcase from './components/ModelShowcase';
import Cta from './components/Cta';
import BrowseModels from './pages/BrowseModels';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

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
  <Router>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-models" element={<BrowseModels />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/publish" element={<PublishModel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;

