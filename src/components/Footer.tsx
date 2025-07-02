import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white dark:bg-[#1E2117] py-12 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/iotastudiologo.png" alt="iotastudio logo" className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                iotastudio.<span className="text-[#00B39F]">ai</span>
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md leading-relaxed">
              iotastudio.ai is the premier marketplace connecting AI developers with users seeking powerful, customized AI solutions. Build, discover, and integrate cutting-edge AI models.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-5 h-5">
                  <path d="M666.647 662.106L1074.44 182.343h-91.776L624.553 607.761 304.925 182.343H92.581L524.509 745.79 92 1227.01h91.776l385.55-457.575 337.867 457.575H1120z" />
                </svg>
              </a>
              <a href="#github" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#linkedin" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#mail" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Marketplace", "Enterprise", "Case Studies"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Developers</h3>
            <ul className="space-y-3">
              {["Documentation", "API Reference", "SDK & Tools", "Community", "Status"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact", "Legal"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} iotastudio.ai. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Terms", "Privacy", "Cookies"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
