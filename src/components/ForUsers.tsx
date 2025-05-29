import React from 'react';
import { Search, Filter, Download, ArrowRight, ChevronRight } from 'lucide-react';
import { colors } from '../theme/colors';

const ForUsers: React.FC = () => {
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
    <section id="for-users" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="lg:mr-6">
              <div 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: colors.secondary[50], color: colors.secondary[500] }}
              >
                <Search size={16} className="mr-2" />
                For Users
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                Discover the Perfect AI for Your Needs
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
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
                      style={{ backgroundColor: colors.secondary[100], color: colors.secondary[500] }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#browse-models" 
                  className="px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all"
                  style={{ backgroundColor: colors.secondary[500] }}
                >
                  Browse AI Models
                </a>
                <a 
                  href="#how-it-works" 
                  className="px-6 py-3 rounded-lg font-medium text-neutral-700 border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition-all"
                >
                  How It Works
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* AI model marketplace mockup */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200">
                {/* Search bar */}
                <div className="flex items-center mb-6">
                  <div className="relative flex-grow">
                    <input 
                      type="text" 
                      placeholder="Search for AI models..." 
                      className="w-full py-3 pl-10 pr-4 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  </div>
                  <button 
                    className="ml-3 p-3 rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                    aria-label="Filter"
                  >
                    <Filter size={18} />
                  </button>
                </div>
                
                {/* Category pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["All Models", "Text Generation", "Image Creation", "Data Analysis", "Voice & Audio", "Code Assistant"].map((category, i) => (
                    <div 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${i === 0 ? 'text-white' : 'text-neutral-700 bg-neutral-100 hover:bg-neutral-200'} cursor-pointer transition-colors`}
                      style={i === 0 ? { backgroundColor: colors.primary[500] } : {}}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                
                {/* Featured models */}
                <h3 className="text-sm font-medium text-neutral-500 mb-3">TRENDING MODELS</h3>
                <div className="space-y-3">
                  {models.map((model, i) => (
                    <div key={i} className="p-4 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow">
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
                              <h4 className="font-medium text-neutral-900">{model.name}</h4>
                              <p className="text-sm text-neutral-500">By {model.developer}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-neutral-900 mr-1">{model.rating}</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                            <button 
                              className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                              aria-label="Install"
                            >
                              <Download size={18} className="text-neutral-700" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <a 
                    href="#view-all" 
                    className="text-sm font-medium inline-flex items-center"
                    style={{ color: colors.primary[500] }}
                  >
                    View All Models
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -z-10 w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-2xl opacity-10 transform -translate-x-4 translate-y-4 rounded-xl"
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full"
                style={{ background: `linear-gradient(135deg, ${colors.secondary[500]}, ${colors.accent[500]})`, opacity: 0.7, zIndex: -1 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForUsers;