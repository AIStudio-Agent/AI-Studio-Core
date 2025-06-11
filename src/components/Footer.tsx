import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1E2117] text-neutral-300 py-12 overflow-hidden">
      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/iotastudiologo.png"
                alt="iotastudio logo"
                className="w-8 h-8 mr-2"
              />
              <span className="text-2xl font-bold text-white">
                iotastudio.<span className="text-[#00B39F]">ai</span>
              </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              iotastudio.ai is the premier marketplace connecting AI developers with users seeking powerful, customized AI solutions. Build, discover, and integrate cutting-edge AI models.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-neutral-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-5 h-5">
                  <path d="M666.647 662.106L1074.44 182.343h-91.776L624.553 607.761 304.925 182.343H92.581L524.509 745.79 92 1227.01h91.776l385.55-457.575 337.867 457.575H1120z" />
                </svg>
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

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#enterprise" className="hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Developer Links */}
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

          {/* Company Links */}
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
            © {new Date().getFullYear()} iotastudio.ai. All rights reserved.
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
