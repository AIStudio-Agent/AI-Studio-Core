import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../theme/colors';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="w-full px-2 md:px-4">
        <div className="flex items-center justify-between">
          {/* logo/title */}
          <div className="flex items-center">
            {/* … */}
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 text-xl font-semibold rounded-lg transition-all"
              style={{
                color: isScrolled ? colors.primary[500] : colors.neutral[100],
                borderColor: isScrolled ? colors.primary[500] : colors.neutral[100],
                borderWidth: '2px',
              }}
            >
              Log In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 text-xl font-semibold rounded-lg text-white transition-all"
              style={{ backgroundColor: colors.primary[500] }}
            >
              Sign Up
            </button>
            <button
              className="flex items-center justify-center w-14 h-14 rounded-full hover:bg-opacity-10 hover:bg-white transition-colors"
              aria-label="Search"
            >
              <Search
                size={28}
                color={isScrolled ? colors.neutral[700] : colors.neutral[100]}
              />
            </button>
          </nav>

          {/* Mobile menu toggle */}
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
            {/* …other links… */}
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 text-xl font-semibold rounded-lg border-2 border-primary-500 text-primary-500 text-center"
            >
              Log In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 text-xl font-semibold rounded-lg bg-primary-500 text-white text-center"
            >
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
