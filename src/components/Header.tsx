import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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
      className={`absolute w-full z-50 transition-all duration-300 min-h-[72px] ${
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
              <span
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                style={{
                  color: '#FFFFFF',
                  fontFamily: '"Inter", "Roboto", sans-serif',
                  fontWeight: '700',
                  letterSpacing: '-0.02em'
                }}
              >
                iotastudio
              </span>
              <span
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                style={{
                  color: '#14B8A6',
                  fontFamily: '"Inter", "Roboto", sans-serif',
                  fontWeight: '700',
                  letterSpacing: '-0.02em'
                }}
              >
                .ai
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <Link
              to="#features"
              className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              Features
            </Link>
            <Link
              to="browse-models"
              className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              Browse Models
            </Link>
            <Link
              to="#for-developers"
              className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              For Developers
            </Link>
            <Link
              to="#for-users"
              className="text-lg xl:text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              For Users
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button
              className="flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full hover:bg-opacity-10 hover:bg-white transition-colors"
              aria-label="Search"
            >
              <Search size={24} color={colors.neutral[100]} />
            </button>
            <Link
              to="/login"
              className="px-6 py-3 xl:px-8 xl:py-4 text-lg xl:text-xl font-semibold rounded-lg transition-all border-2 hover:bg-white hover:bg-opacity-10"
              style={{
                color: colors.neutral[100],
                borderColor: colors.neutral[100]
              }}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 xl:px-8 xl:py-4 text-lg xl:text-xl font-semibold rounded-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#14B8A6' }}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
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
        <div
          className="lg:hidden backdrop-blur-sm shadow-lg absolute w-full top-full left-0 p-6 border-t border-gray-700"
          style={{ backgroundColor: 'rgba(31, 41, 55, 0.95)' }}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-lg xl:text-xl font-semibold hover:text-teal-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#for-developers"
              className="text-lg xl:text-xl font-semibold hover:text-teal-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Developers
            </a>
            <a
              href="#for-users"
              className="text-lg font-semibold text-neutral-100 hover:text-green-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Users
            </a>
            <button
              className="flex items-center justify-center w-full py-3 text-lg font-semibold text-neutral-100 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="mr-2" />
              Search
            </button>
            <div className="pt-4 border-t border-gray-700 flex flex-col space-y-3">
              <Link
                to="/login"
                className="px-6 py-3 text-lg font-semibold rounded-lg border-2 border-neutral-100 text-neutral-100 text-center hover:bg-white hover:bg-opacity-10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-3 text-lg font-semibold rounded-lg text-white text-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#14B8A6' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
