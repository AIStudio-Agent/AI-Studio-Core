import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { colors } from '../theme/colors';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'The AI Marketplace For Next-Gen Solutions';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Stop cursor blinking after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100); // Adjust speed here (lower = faster)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1E2117] z-0"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
          backgroundSize: '44px 44px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-28">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="flex items-center mb-6">
              <span 
                className="px-3 py-1 text-xs font-medium rounded-full mr-3"
                style={{ backgroundColor: colors.accent[500], color: colors.neutral[900] }}
              >
                NEW
              </span>
              <span className="text-sm font-medium text-neutral-100">Launching our beta program for AI developers</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 min-h-[1.2em]">
              {typedText.split('The ')[0]}
              {typedText.includes('The ') && (
                <>
                  The <span style={{ color: colors.accent[500] }}>
                    {typedText.split('The ')[1]}
                  </span>
                </>
              )}
              {showCursor && typedText.length < fullText.length && (
                <span 
                  className="animate-pulse"
                  style={{ color: colors.accent[500] }}
                >
                  |
                </span>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 mb-8 max-w-lg opacity-90">
              Create, discover, and integrate powerful AI models and agents in one unified platform. Connect with developers and users in the world's most innovative AI ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#get-started" 
                className="px-8 py-4 rounded-lg text-lg font-medium text-neutral-900 flex items-center justify-center transition-transform hover:transform hover:translate-y-[-2px]"
                style={{ backgroundColor: colors.accent[500] }}
              >
                Get Started <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="#explore" 
                className="px-8 py-4 rounded-lg text-lg font-medium text-white border border-white border-opacity-30 flex items-center justify-center backdrop-blur-sm bg-white bg-opacity-10 transition-all hover:bg-opacity-20"
              >
                Explore AI Models
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main image container with fancy border */}
              <div 
                className="rounded-xl overflow-hidden shadow-2xl transform rotate-1"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.accent[500]})`,
                  padding: '3px'
                }}
              >
                <div className="bg-[#1E2117] rounded-lg p-4">
                  <div className="mb-4 flex items-center">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-6 w-full rounded-md bg-neutral-800"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="aspect-square rounded-md bg-neutral-800 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.primary[500] }}></div>
                    </div>
                    <div className="aspect-square rounded-md bg-neutral-800 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.accent[500] }}></div>
                    </div>
                    <div className="aspect-square rounded-md bg-neutral-800 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.secondary[500] }}></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 rounded-md bg-neutral-800 w-full"></div>
                    <div className="h-4 rounded-md bg-neutral-800 w-5/6"></div>
                    <div className="h-4 rounded-md bg-neutral-800 w-4/6"></div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-10 rounded-md" style={{ backgroundColor: colors.primary[500] }}></div>
                    <div className="h-10 rounded-md bg-neutral-800 border border-neutral-700"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg shadow-lg transform -rotate-6 animate-float"
                style={{ 
                  background: colors.primary[500],
                  animationDelay: '0.5s',
                  zIndex: -1 
                }}
              ></div>
              <div 
                className="absolute -top-8 -right-4 w-24 h-24 rounded-lg shadow-lg transform rotate-12 animate-float"
                style={{ 
                  background: colors.accent[500],
                  animationDelay: '1s',
                  zIndex: -1 
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Logos/Partners section */}
        <div className="mt-20 text-center">
          <p className="text-neutral-300 text-sm font-medium mb-6">TRUSTED BY LEADING AI DEVELOPERS AND ENTERPRISES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-white bg-opacity-20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;