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
        <div className="flex items-center justify-between">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <HashLink smooth to="/#features" className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity text-white">
              Features
            </HashLink>
            <HashLink
              smooth
              to="/#how-it-works"
              className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              How It Works
            </HashLink>

            <HashLink smooth to="/#for-developers" className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity text-white">
              For Developers
            </HashLink>
            <HashLink smooth to="/#for-users" className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity text-white">
              For Users
            </HashLink>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button className="flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full hover:bg-opacity-10 hover:bg-white transition-colors" aria-label="Search">
              <Search size={24} color={colors.neutral[100]} />
            </button>
            <Link to="/login" className="px-6 py-3 xl:px-8 xl:py-4 text-lg xl:text-xl font-semibold rounded-lg transition-all border-2 hover:bg-white hover:bg-opacity-10 text-white border-white">
              Log In
            </Link>
            <Link to="/signup" className="px-6 py-3 xl:px-8 xl:py-4 text-lg xl:text-xl font-semibold rounded-lg text-white transition-all hover:opacity-90" style={{ backgroundColor: '#14B8A6' }}>
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <X size={28} color={colors.neutral[100]} />
            ) : (
              <Menu size={28} color={colors.neutral[100]} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-sm shadow-lg absolute w-full top-full left-0 p-6 border-t border-gray-700" style={{ backgroundColor: 'rgba(31, 41, 55, 0.95)' }}>
          <nav className="flex flex-col space-y-4">
            <HashLink smooth to="/#features" className="text-lg font-semibold hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </HashLink>
            <HashLink smooth to="/#for-developers" className="text-lg font-semibold hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              For Developers
            </HashLink>
            <HashLink smooth to="/#for-users" className="text-lg font-semibold text-white hover:text-green-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              For Users
            </HashLink>
            <Link to="/login" className="px-6 py-3 text-lg font-semibold rounded-lg border-2 border-neutral-100 text-neutral-100 text-center hover:bg-white hover:bg-opacity-10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Log In
            </Link>
            <Link to="/signup" className="px-6 py-3 text-lg font-semibold rounded-lg text-white text-center hover:opacity-90 transition-opacity" style={{ backgroundColor: '#14B8A6' }} onClick={() => setIsMobileMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
