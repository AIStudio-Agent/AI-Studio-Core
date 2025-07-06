import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    if (!isLandingPage) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLandingPage]);

  const commonLinkClasses =
    'text-sm md:text-base font-medium transition-colors text-neutral-900 dark:text-neutral-100 hover:text-teal-500';

  const iconButtonClass =
    'flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors';

  const borderButtonClass =
    'px-4 py-2 md:px-5 md:py-2.5 text-base md:text-lg font-semibold rounded-lg transition-all border-2 text-center';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-sm shadow-md py-2 bg-[#F3F4F6] dark:bg-neutral-800'
          : 'py-3 bg-white dark:bg-[#1E2117]'
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/iotastudiologo.png"
              alt="iotastudio logo"
              className="h-10 w-10 mr-3 drop-shadow-md object-contain"
            />
            <div className="flex items-center leading-tight">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                iotastudio
              </span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-teal-500 ml-0.5">
                .ai
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {['#features', '#how-it-works', '#for-developers', '#for-users'].map((href) => (
              <a key={href} href={href} className={commonLinkClasses}>
                {href.replace('#', '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </a>
            ))}
          </nav>

          {/* Icons + Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
            <button onClick={toggleTheme} className={iconButtonClass} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <Sun size={20} className="text-neutral-900 dark:text-neutral-100" />
              ) : (
                <Moon size={20} className="text-neutral-900 dark:text-neutral-100" />
              )}
            </button>

            <button className={iconButtonClass} aria-label="Search">
              <Search size={20} className="text-neutral-900 dark:text-neutral-100" />
            </button>

            <Link
              to="/login"
              className={`${borderButtonClass} border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10`}
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 md:px-5 md:py-2.5 text-base md:text-lg font-semibold rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={26} className="text-neutral-900 dark:text-neutral-100" />
            ) : (
              <Menu size={26} className="text-neutral-900 dark:text-neutral-100" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full left-0 top-full bg-white dark:bg-[#1E2117] border-t border-neutral-300 dark:border-neutral-800 backdrop-blur-sm transition-colors">
          <div className="px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {['#features', '#how-it-works', '#for-developers', '#for-users'].map((href) => (
                <a
                  key={href}
                  href={href}
                  className={`${commonLinkClasses} py-2`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {href.replace('#', '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              ))}

              <div className="pt-4 border-t border-neutral-300 dark:border-neutral-800 flex flex-col space-y-3">
                <Link
                  to="/login"
                  className={`${borderButtonClass} border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className={`${borderButtonClass} bg-teal-500 text-white hover:bg-teal-600`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>

              <button
                onClick={toggleTheme}
                className="mt-4 flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-neutral-900 dark:text-neutral-100" />
                ) : (
                  <Moon size={20} className="text-neutral-900 dark:text-neutral-100" />
                )}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
