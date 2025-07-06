import React from 'react';
import { Search, Filter, Download, ArrowRight, ChevronRight } from 'lucide-react';
import { colors } from '../theme/colors';
import { useNavigate } from 'react-router-dom';

const ForUsers: React.FC = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: "TextGenius Pro",
      developer: "AI Labs",
      category: "Text Generation",
      rating: 4.8,
      color: colors.primary[500]
    },
    {
      name: "ImageCraft AI",
      developer: "Creative Tech",
      category: "Image Generation",
      rating: 4.9,
      color: colors.secondary[500]
    },
    {
      name: "DataAnalyst GPT",
      developer: "Quantum AI",
      category: "Data Analysis",
      rating: 4.7,
      color: colors.accent[500]
    }
  ];

  return (
    <section id="for-users" className="py-20 bg-white dark:bg-[#1E2117] relative transition-colors">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px'
          }}
        ></div>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="lg:mr-6">
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: `${colors.secondary[500]}20`, color: colors.secondary[500] }}
              >
                <Search size={16} className="mr-2" />
                For Users
              </div>

              <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
                Discover the Perfect AI for Your Needs
              </h2>

              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                Browse our extensive marketplace of AI solutions created by world-class developers. Find the right tools to enhance your workflow, boost productivity, and unlock new possibilities.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Advanced search with filters for specific use cases",
                  "Verified models with transparent performance metrics",
                  "Try before you buy with free trial periods",
                  "One-click integration with your existing tools",
                  "Direct support from model creators"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0"
                      style={{ backgroundColor: `${colors.secondary[500]}20`, color: colors.secondary[500] }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/browse-models')}
                  className="px-8 py-4 rounded-xl text-lg font-semibold text-white flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: colors.accent[500] }}
                >
                  Explore AI Models
                </button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/30 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 hover:scale-[1.03] transition-transform duration-300"
                >
                  How It Works
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="lg:w-1/2 flex items-stretch">
            <div className="relative  w-full flex flex-col h-full">
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6 shadow-lg border border-neutral-300 dark:border-neutral-800 flex flex-col h-full max-h-[600px] min-h-[420px]">
                {/* Search */}
                <div className="flex items-center mb-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search for AI models..."
                      className="w-full py-3 pl-10 pr-4 rounded-lg bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  </div>
                  <button
                    className="ml-3 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    aria-label="Filter"
                  >
                    <Filter size={18} />
                  </button>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {["All Models", "Text Generation", "Image Creation", "Data Analysis", "Voice & Audio", "Code Assistant"].map((category, i) => (
                    <div
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                        i === 0
                          ? 'text-white'
                          : 'text-neutral-700 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                      }`}
                      style={i === 0 ? { backgroundColor: colors.primary[500] } : {}}
                    >
                      {category}
                    </div>
                  ))}
                </div>

                {/* Featured Models */}
                <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">TRENDING MODELS</h3>
                <div className="space-y-3 overflow-y-auto flex-1 min-h-0">
                  {models.map((model, i) => (
                    <div key={i} className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                      <div className="flex items-start">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white mr-3 flex-shrink-0"
                          style={{ backgroundColor: model.color }}
                        >
                          {model.name.charAt(0)}
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-neutral-900 dark:text-white">{model.name}</h4>
                              <p className="text-sm text-neutral-500 dark:text-neutral-400">By {model.developer}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-neutral-900 dark:text-white mr-1">{model.rating}</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span
                              className="px-2 py-1 rounded-md text-xs font-medium"
                              style={{ backgroundColor: `${model.color}20`, color: model.color }}
                            >
                              {model.category}
                            </span>
                            <button className="p-2 rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors" aria-label="Install">
                              <Download size={18} className="text-neutral-600 dark:text-neutral-300" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <a href="#view-all" className="text-sm font-medium inline-flex items-center text-primary-500 dark:text-primary-400 hover:underline">
                    View All Models
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>

              {/* Decorative background */}
              <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-2xl opacity-10 transform -translate-x-4 translate-y-4 rounded-xl" />
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${colors.secondary[500]}, ${colors.accent[500]})`,
                  opacity: 0.7,
                  zIndex: -1
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForUsers;
