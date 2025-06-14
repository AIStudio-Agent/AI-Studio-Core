import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => (
  <div className="relative bg-[#0A0F0D] text-white min-h-screen flex flex-col overflow-x-hidden">
    
    {/* Teal Grid Overlay */}
    <div
      className="absolute inset-0 opacity-10 z-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default Layout;
