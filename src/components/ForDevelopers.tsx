import React from 'react';
import { Code, ChevronRight } from 'lucide-react';
import { colors } from '../theme/colors';

const ForDevelopers: React.FC = () => {
  return (
    <section id="for-developers" className="py-20 bg-[#1E2117] relative">
  {/* Grid pattern overlay */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    ></div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      
      {/* Left side - image */}
      <div className="lg:w-1/2 order-2 lg:order-1">
        <div className="relative rounded-xl overflow-hidden transition-transform duration-700 delay-150 hover:scale-[1.03]">
          <img
            src="image-mockup.png"
            alt="AI Marketplace Illustration"
            className="w-[108%] h-auto object-cover rounded-xl transition-transform duration-700 delay-150"
          />

          {/* Radial glow on hover - subtle */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700 delay-150"
            style={{
              background: 'radial-gradient(circle, rgba(0,179,159,0.08) 0%, transparent 70%)',
              zIndex: 1,
            }}
          />

          {/* Decorative gradients */}
          <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-2xl opacity-10 transform translate-x-4 translate-y-4 rounded-xl"></div>
          <div
            className="absolute -top-4 -right-4 w-20 h-20 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.secondary[500]})`,
              opacity: 0.7,
              zIndex: -1,
            }}
          ></div>
        </div>
      </div>


          {/* Right side - content */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="lg:ml-6">
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: `${colors.primary[500]}20`,
                  color: colors.primary[500],
                }}
              >
                <Code size={16} className="mr-2" />
                For Developers
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-6 text-white">
                Build and Monetize Your AI Innovations
              </h2>
              <p className="text-lg text-neutral-300 mb-8">
                iotastudio.ai provides everything developers need to create, deploy,
                and monetize AI models and agents. From powerful APIs to
                comprehensive documentation, we've got you covered.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Simple API integration with multiple language support',
                  'Built-in testing and optimization tools',
                  'Flexible pricing models for your AI solutions',
                  'Usage analytics and performance monitoring',
                  'Global distribution with automatic scaling',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0"
                      style={{
                        backgroundColor: `${colors.primary[500]}20`,
                        color: colors.primary[500],
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#publish-model"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#00B39F] rounded-lg hover:bg-[#00a38f] hover:scale-[1.03] transition-transform duration-300"
                >
                  Publish Your Model
                  <ChevronRight size={18} className="ml-2" />
                </a>
                <a
                  href="#developer-docs"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 hover:scale-[1.03] transition-transform duration-300"
                >
                  Developer Docs
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDevelopers;
