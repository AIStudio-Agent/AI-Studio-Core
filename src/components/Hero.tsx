import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
      const targetChars = Math.min(fullText.length, elapsed * charsPerSecond / 1000);

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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* NEW Badge - Fixed at top */}
      <div className="absolute top-24 left-7 md:left-16 z-20">
        <div className="flex items-center">
          <span
            className="px-3 py-1 text-xs font-medium rounded-full mr-3 animate-pulse"
            style={{
              backgroundColor: colors.accent[500],
              color: colors.neutral[900],
            }}
          >
            NEW
          </span>
          <span className="text-sm font-medium text-neutral-100">
            Launching our beta program for AI developers
          </span>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-[#1E2117] z-0" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center min-h-screen lg:min-h-0">
          {/* Left Section */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 pt-32 lg:pt-24">
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 min-h-[1.2em]">
              {prefix}
              <span style={{ color: colors.accent[500] }}>{suffix}</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-100 mb-8 max-w-lg opacity-90">
              Create, discover, and integrate powerful AI models and agents in
              one unified platform. Connect with developers and users in the
              world's most innovative AI ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="px-8 py-4 rounded-lg text-lg font-medium text-neutral-900 flex items-center justify-center transition-transform hover:transform hover:-translate-y-1"
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

          {/* Right Section */}
          <div className="lg:w-1/2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:pr-8">
            <div className="relative">
              <div
                className="rounded-xl overflow-hidden shadow-2xl transform rotate-1"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.accent[500]})`,
                  padding: '3px',
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
                    {[colors.primary[500], colors.accent[500], colors.secondary[500]].map((color, i) => (
                      <div key={i} className="aspect-square rounded-md bg-neutral-800 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color }} />
                      </div>
                    ))}
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

              {/* Floating Boxes */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg shadow-lg transform -rotate-6 animate-float"
                style={{ background: colors.primary[500], animationDelay: '0.5s', zIndex: -1 }}
              ></div>
              <div
                className="absolute -top-8 -right-4 w-24 h-24 rounded-lg shadow-lg transform rotate-12 animate-float"
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