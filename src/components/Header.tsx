import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="w-full px-2 md:px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-10">
              <svg
                viewBox="0 0 24 24"
                width="56"
                height="56"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-4"
                style={{ color: colors.primary[500] }}
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span 
                className="text-5xl font-bold" 
                style={{ 
                  color: isScrolled ? colors.neutral[800] : colors.primary[500],
                  fontFamily: '"Qanelas Soft", "Open Sans", sans-serif'
                }}
              >
                AI Studio
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="#features"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: isScrolled ? colors.neutral[700] : colors.neutral[100] }}
            >
              Features
            </a>
            <a
              href="#for-developers"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: isScrolled ? colors.neutral[700] : colors.neutral[100] }}
            >
              For Developers
            </a>
            <a
              href="#for-users"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: isScrolled ? colors.neutral[700] : colors.neutral[100] }}
            >
              For Users
            </a>
            <a
              href="#pricing"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: isScrolled ? colors.neutral[700] : colors.neutral[100] }}
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button
              className="flex items-center justify-center w-14 h-14 rounded-full hover:bg-opacity-10 hover:bg-white transition-colors"
              aria-label="Search"
            >
              <Search size={28} color={isScrolled ? colors.neutral[700] : colors.neutral[100]} />
            </button>
            <a
              href="#login"
              className="px-8 py-4 text-xl font-semibold rounded-lg transition-all"
              style={{ 
                color: isScrolled ? colors.primary[500] : colors.neutral[100],
                borderColor: isScrolled ? colors.primary[500] : colors.neutral[100],
                borderWidth: '2px'
              }}
            >
              Log In
            </a>
            <a
              href="#signup"
              className="px-8 py-4 text-xl font-semibold rounded-lg text-white transition-all"
              style={{ backgroundColor: colors.primary[500] }}
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={32} color={colors.neutral[800]} />
            ) : (
              <Menu size={32} color={isScrolled ? colors.neutral[800] : colors.neutral[100]} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 p-8 border-t border-gray-200">
          <nav className="flex flex-col space-y-6">
            <a
              href="#features"
              className="text-xl font-semibold text-neutral-700 hover:text-primary-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#for-developers"
              className="text-xl font-semibold text-neutral-700 hover:text-primary-500 transition-colors"
            >
              For Developers
            </a>
            <a
              href="#for-users"
              className="text-xl font-semibold text-neutral-700 hover:text-primary-500 transition-colors"
            >
              For Users
            </a>
            <a
              href="#pricing"
              className="text-xl font-semibold text-neutral-700 hover:text-primary-500 transition-colors"
            >
              Pricing
            </a>
            <div className="pt-6 border-t border-gray-200 flex flex-col space-y-5">
              <a
                href="#login"
                className="px-8 py-4 text-xl font-semibold rounded-lg border-2 border-primary-500 text-primary-500 text-center"
              >
                Log In
              </a>
              <a
                href="#signup"
                className="px-8 py-4 text-xl font-semibold rounded-lg bg-primary-500 text-white text-center"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;