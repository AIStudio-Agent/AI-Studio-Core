import React from 'react';
import { Code, ChevronRight } from 'lucide-react';
import { colors } from '../theme/colors';

const ForDevelopers: React.FC = () => {
  return (
    <section id="for-developers" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* Code editor mockup */}
              <div className="bg-neutral-900 rounded-xl p-4 shadow-xl border border-neutral-800">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-neutral-400 text-xs">ai-model.js</div>
                </div>
                <div className="font-mono text-sm leading-relaxed">
                  <div className="flex">
                    <span className="text-neutral-500 w-8">1</span>
                    <span className="text-primary-300">import</span>
                    <span className="text-white"> &#123; AIStudio &#125; </span>
                    <span className="text-primary-300">from</span>
                    <span className="text-accent-300"> 'ai-studio'</span>;
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">2</span>
                    <span className="text-white"></span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">3</span>
                    <span className="text-primary-300">const</span>
                    <span className="text-white"> studio = </span>
                    <span className="text-primary-300">new</span>
                    <span className="text-secondary-300"> AIStudio</span>
                    <span className="text-white">(&#123;</span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">4</span>
                    <span className="text-white pl-8">apiKey: </span>
                    <span className="text-accent-300">'your_api_key'</span>,
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">5</span>
                    <span className="text-white pl-8">modelName: </span>
                    <span className="text-accent-300">'my-awesome-model'</span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">6</span>
                    <span className="text-white">&#125;);</span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">7</span>
                    <span className="text-white"></span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">8</span>
                    <span className="text-primary-300">async function</span>
                    <span className="text-secondary-300"> deployModel</span>
                    <span className="text-white">() &#123;</span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">9</span>
                    <span className="text-white pl-8">
                      <span className="text-primary-300">await</span> studio.deploy(&#123;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">10</span>
                    <span className="text-white pl-16">
                      version: <span className="text-accent-300">'1.0.0'</span>,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">11</span>
                    <span className="text-white pl-16">
                      files: [<span className="text-accent-300">'./model/*'</span>],
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">12</span>
                    <span className="text-white pl-16">
                      runtime: <span className="text-accent-300">'node16'</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">13</span>
                    <span className="text-white pl-8">&#125;);</span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-500 w-8">14</span>
                    <span className="text-white">&#125;</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -z-10 w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-2xl opacity-10 transform translate-x-4 translate-y-4 rounded-xl"
              ></div>
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full"
                style={{ background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.secondary[500]})`, opacity: 0.7, zIndex: -1 }}
              ></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="lg:ml-6">
              <div 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: colors.primary[50], color: colors.primary[500] }}
              >
                <Code size={16} className="mr-2" />
                For Developers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                Build and Monetize Your AI Innovations
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                AI Studio provides everything developers need to create, deploy, and monetize AI models and agents. From powerful APIs to comprehensive documentation, we've got you covered.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Simple API integration with multiple language support",
                  "Built-in testing and optimization tools",
                  "Flexible pricing models for your AI solutions",
                  "Usage analytics and performance monitoring",
                  "Global distribution with automatic scaling"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0"
                      style={{ backgroundColor: colors.primary[100], color: colors.primary[500] }}
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
                  href="#publish-model" 
                  className="px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all"
                  style={{ backgroundColor: colors.primary[500] }}
                >
                  Publish Your Model
                </a>
                <a 
                  href="#developer-docs" 
                  className="px-6 py-3 rounded-lg font-medium text-neutral-700 border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition-all"
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