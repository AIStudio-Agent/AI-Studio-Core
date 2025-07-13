import React, { useState, useEffect } from 'react';
import { Menu, Search, Sun, Moon } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    'text-lg xl:text-xl font-semibold transition-colors text-neutral-900 dark:text-neutral-100 hover:text-teal-500';

  const iconButtonClass =
    'flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors';

  const borderButtonClass =
    'px-6 py-3 xl:px-8 xl:py-4 text-lg xl:text-xl font-semibold rounded-lg transition-all border-2 text-center';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-sm shadow-lg py-2 bg-white/90 dark:bg-[rgba(31,41,55,0.95)]'
          : 'py-3 bg-white dark:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Hamburger Menu */}
            <button
              className="mr-4 focus:outline-none"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Toggle menu"
            >
              <Menu size={28} className="text-neutral-900 dark:text-neutral-100" />
            </button>
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/iotastudiologo.png"
                alt="iotastudio logo"
                className="h-12 w-12 mr-4 drop-shadow-lg object-contain"
              />
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  iotastudio
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-teal-500">
                  .ai
                </span>
              </div>
            </Link>
          </div>



          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button onClick={toggleTheme} className={iconButtonClass} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <Sun size={24} className="text-neutral-900 dark:text-neutral-100" />
              ) : (
                <Moon size={24} className="text-neutral-900 dark:text-neutral-100" />
              )}
            </button>

            <button className={iconButtonClass} aria-label="Search">
              <Search size={24} className="text-neutral-900 dark:text-neutral-100" />
            </button>

            <Link
              to="/login"
              className={`${borderButtonClass} border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10`}
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="px-6 py-3 xl:px-8 xl:py-4 text-lg xl:text-xl font-semibold rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button onClick={toggleTheme} className={iconButtonClass} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <Sun size={24} className="text-neutral-900 dark:text-neutral-100" />
              ) : (
                <Moon size={24} className="text-neutral-900 dark:text-neutral-100" />
              )}
            </button>

            <button className={iconButtonClass} aria-label="Search">
              <Search size={24} className="text-neutral-900 dark:text-neutral-100" />
            </button>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
