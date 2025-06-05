import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { colors } from '../theme/colors';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1E2117] text-neutral-300 py-12 overflow-hidden">

      {/* Grid pattern overlay */}
      

      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
                style={{ color: colors.primary[500] }}
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="text-2xl font-bold text-white">AI Studio</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              AI Studio is the premier marketplace connecting AI developers with users seeking powerful, customized AI solutions. Build, discover, and integrate cutting-edge AI models.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#github" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#linkedin" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#mail" className="text-neutral-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#enterprise" className="hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Developers</h3>
            <ul className="space-y-3">
              <li><a href="#documentation" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#sdk" className="hover:text-white transition-colors">SDK & Tools</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#status" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#legal" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#terms" className="text-neutral-500 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#privacy" className="text-neutral-500 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#cookies" className="text-neutral-500 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
