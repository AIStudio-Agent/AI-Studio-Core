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
      className={`fixed w-full z-50 transition-all duration-300 min-h-[72px] ${
        isScrolled
          ? 'backdrop-blur-sm shadow-lg py-2'  // Removed bg-gray-900/95, increased padding
          : 'bg-transparent py-3'  // Increased padding for unscrolled state
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(31, 41, 55, 0.95)' : 'transparent'  // Custom dark green/teal background
      }}
    >
              <div className="w-full px-4 md:px-8">  {/* Increased horizontal padding */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-12">  {/* Increased right margin */}
              <svg
                viewBox="0 0 24 24"
                width="64"  // Increased from 56
                height="64" // Increased from 56
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-5"  // Increased margin
                style={{ color: colors.primary[500] }}
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span 
                className="text-5xl font-bold"  
                style={{ 
                  color: colors.primary[500],  // Keep consistent color
                  fontFamily: '"Qanelas Soft", "Open Sans", sans-serif'
                }}
              >
                AI Studio
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-16">  {/* Increased spacing */}
            <a
              href="#features"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}  // Keep consistent white color
            >
              Features
            </a>
            <a
              href="#for-developers"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              For Developers
            </a>
            <a
              href="#for-users"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              For Users
            </a>
            <a
              href="#pricing"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: colors.neutral[100] }}
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-8">  {/* Increased spacing */}
            <button
              className="flex items-center justify-center w-16 h-16 rounded-full hover:bg-opacity-10 hover:bg-white transition-colors"  // Increased size
              aria-label="Search"
            >
              <Search size={32} color={colors.neutral[100]} />  {/* Increased icon size */}
            </button>
            <a
              href="#login"
              className="px-10 py-5 text-xl font-semibold rounded-lg transition-all border-2"  // Increased padding
              style={{ 
                color: colors.neutral[100],  // Keep consistent white color
                borderColor: colors.neutral[100]
              }}
            >
              Log In
            </a>
            <a
              href="#signup"
              className="px-10 py-5 text-xl font-semibold rounded-lg text-white transition-all"  // Increased padding
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
              <X size={32} color={colors.neutral[100]} />  // Changed to white
            ) : (
              <Menu size={32} color={colors.neutral[100]} />  // Keep consistent white
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden backdrop-blur-sm shadow-lg absolute w-full top-full left-0 p-10 border-t border-gray-700"  // Removed bg-gray-900/95, increased padding
          style={{ backgroundColor: 'rgba(31, 41, 55, 0.95)' }}  // Custom dark green/teal background
        >
          <nav className="flex flex-col space-y-6">
            <a
              href="#features"
              className="text-xl font-semibold text-neutral-100 hover:text-primary-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#for-developers"
              className="text-xl font-semibold text-neutral-100 hover:text-primary-500 transition-colors"
            >
              For Developers
            </a>
            <a
              href="#for-users"
              className="text-xl font-semibold text-neutral-100 hover:text-primary-500 transition-colors"
            >
              For Users
            </a>
            <a
              href="#pricing"
              className="text-xl font-semibold text-neutral-100 hover:text-primary-500 transition-colors"
            >
              Pricing
            </a>
            <div className="pt-6 border-t border-gray-700 flex flex-col space-y-5">
              <a
                href="#login"
                className="px-8 py-4 text-xl font-semibold rounded-lg border-2 border-neutral-100 text-neutral-100 text-center"
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