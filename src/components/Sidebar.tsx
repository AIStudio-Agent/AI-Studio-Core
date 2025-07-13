import React from 'react';
import { X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'For Developers', href: '#for-developers' },
  { name: 'For Users', href: '#for-users' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Menu</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <X className="w-6 h-6 text-neutral-900 dark:text-white" />
          </button>
        </div>
        <nav className="p-4">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <HashLink
                  smooth
                  to={link.href}
                  onClick={onClose}
                  className="block py-3 px-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100 hover:bg-teal-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;