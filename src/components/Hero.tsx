import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { colors } from '../theme/colors';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const fullText = 'The AI Marketplace For Next-Gen Solutions';

  useEffect(() => {
    if (window.innerWidth < 768) {
      setTypedText(fullText);
      setShowContent(true);
      return;
    }

    const charsPerSecond = 20;
    const frameRate = 60;
    const charsPerFrame = charsPerSecond / frameRate;
    let charAccumulator = 0;
    let currentIndex = 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const targetChars = Math.min(fullText.length, (elapsed * charsPerSecond) / 1000);

      while (charAccumulator < targetChars && currentIndex < fullText.length) {
        charAccumulator += charsPerFrame;
        currentIndex = Math.floor(charAccumulator);
        setTypedText(fullText.slice(0, currentIndex));
      }

      if (currentIndex < fullText.length) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setShowContent(true), 300);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const prefix = typedText.startsWith('The ') ? 'The ' : '';
  const suffix = prefix ? typedText.slice(4) : typedText;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#1E2117] transition-colors">
      {/* NEW Badge */}
      <div className="absolute top-20 left-16 sm:left-[5.5rem] md:left-[6.5rem] lg:left-[7rem] z-20">

        <div className="flex items-center">
          <span
            className="px-3 py-1 text-xs sm:text-sm md:text-base font-semibold rounded-full mr-3 animate-pulse shadow-md"
            style={{
              backgroundColor: colors.accent[500],
              color: '#111827',
            }}
          >
            NEW
          </span>
          <span className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">
            Launching our beta program for AI developers
          </span>
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center min-h-screen lg:min-h-0">
          {/* Left Section */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 pt-32 lg:pt-24">
            <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white mb-6 min-h-[5.5rem] sm:min-h-[7rem] md:min-h-[8.5rem] lg:min-h-[11rem]">
              {prefix}
              <span className="text-teal-500">{suffix}</span>
            </h1>

            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-100 mb-8 max-w-lg opacity-90">
              Create, discover, and integrate powerful AI models and agents in one unified platform. Connect with developers and users in the world's most innovative AI ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="px-6 py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg text-white bg-teal-500 hover:opacity-90 transition-all flex items-center justify-center"
              >
                Get Started <ArrowRight size={20} className="ml-2" />
              </Link>

              <Link
                to="/browse-models"
                className="px-6 py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium border flex items-center justify-center backdrop-blur-sm transition-all 
                  text-neutral-900 bg-white border-black border-opacity-20 hover:bg-opacity-80 hover:border-opacity-50
                  dark:text-white dark:border-white dark:border-opacity-30 dark:bg-white/10 dark:hover:bg-opacity-20"
              >
                Browse All Models
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md bg-neutral-200 dark:bg-neutral-800 rounded-xl p-6 shadow-lg transition-all">
              <div
                className="rounded-xl overflow-hidden shadow-2xl transform rotate-1"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.accent[500]})`,
                  padding: '2px',
                }}
              >
                <div className="bg-white dark:bg-[#1E2117] rounded-lg p-4 transition-colors">
                  <div className="mb-4 flex items-center">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-6 w-full rounded-md bg-neutral-200 dark:bg-neutral-800 transition-colors"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[colors.primary[500], colors.accent[500], colors.secondary[500]].map((color, i) => (
                      <div key={i} className="aspect-square rounded-md bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color }} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 w-full"></div>
                    <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 w-5/6"></div>
                    <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 w-4/6"></div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-10 rounded-md" style={{ backgroundColor: colors.primary[500] }}></div>
                    <div className="h-10 rounded-md bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 transition-colors"></div>
                  </div>
                </div>
              </div>

              {/* Floating Boxes */}
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg shadow-lg transform -rotate-6 animate-float"
                style={{ background: colors.primary[500], animationDelay: '0.5s', zIndex: -1 }}
              ></div>
              <div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-lg shadow-lg transform rotate-12 animate-float"
                style={{ background: colors.accent[500], animationDelay: '1s', zIndex: -1 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
