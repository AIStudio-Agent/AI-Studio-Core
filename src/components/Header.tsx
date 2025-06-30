import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { colors } from '../theme/colors';


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 min-h-[72px] ${
        isScrolled ? 'backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-3'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(31, 41, 55, 0.95)' : 'transparent'
      }}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            {/* Menu Toggle Button */}
            <button className="focus:outline-none mr-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <X size={28} color={colors.neutral[100]} />
              ) : (
                <Menu size={28} color={colors.neutral[100]} />
              )}
            </button>

            {/* Logo Section */}
            <Link to="/" className="flex items-center">
              <img
                src="/iotastudiologo.png"
                alt="iotastudio logo"
                className="h-12 w-12 mr-4 drop-shadow-lg"
              />
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  iotastudio
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-teal-500">
                  .ai
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors" aria-label="Search">
              <Search size={20} color={colors.neutral[100]} />
            </button>
            <Link to="/login" className="hidden md:block px-6 py-2 text-base font-semibold rounded-lg transition-all border-2 hover:bg-white hover:bg-opacity-10 text-white border-white">
              Log In
            </Link>
            <Link to="/signup" className="hidden md:block px-6 py-2 text-base font-semibold rounded-lg text-white transition-all hover:opacity-90 bg-teal-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className={`fixed inset-0 z-50 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`} 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-teal-400">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-6">
              <div className="space-y-4">
                <Link to="/browse-models" className="block text-lg font-semibold text-white hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
                <HashLink smooth to="/#features" className="block text-lg font-semibold text-white hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </HashLink>
                <HashLink smooth to="/#how-it-works" className="block text-lg font-semibold text-white hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  How It Works
                </HashLink>
                <HashLink smooth to="/#for-developers" className="block text-lg font-semibold text-white hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  For Developers
                </HashLink>
                <HashLink smooth to="/#for-users" className="block text-lg font-semibold text-white hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  For Users
                </HashLink>
              </div>
              {/* Mobile-only navigation items can be added here if needed */}
            </nav>
          </div>
        </div>
      )
    </header>
  );
};

export default Header;
