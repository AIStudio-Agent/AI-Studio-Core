import React, { useEffect, useState, useRef } from 'react';
import { colors } from '../theme/colors';

const Hero: React.FC = () => {
  const lines = ['The AI Marketplace', 'For Next-Gen', 'Solutions'];
  const lineLengths = lines.map((l) => l.length);
  const totalLen = lineLengths.reduce((sum, l) => sum + l, 0);

  // 1) Combined stage (0..totalLen). direction = +1 (typing) or -1 (deleting)
  const [stage, setStage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // 2) Blink cursor via CSS (no React state needed)
  const [showCursor, setShowCursor] = useState(true);

  // 3) Timeout ref so we can clear on cleanup
  const timeoutRef = useRef<number | null>(null);

  // Blink-cursor effect can be removed if using CSS keyframes:
  useEffect(() => {
    const iv = window.setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(iv);
  }, []);

  // Main typing/deleting effect
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = window.setTimeout(fn, delay);
    };

    if (direction === 1) {
      // typing forward
      if (stage < totalLen) {
        schedule(() => setStage((s) => s + 1), 100);
      } else {
        // fully typed → pause 1.5s → switch to deleting
        schedule(() => setDirection(-1), 1500);
      }
    } else {
      // deleting backward
      if (stage > 0) {
        schedule(() => setStage((s) => s - 1), 50);
      } else {
        // fully erased → pause 300ms → switch to typing
        schedule(() => setDirection(1), 300);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [stage, direction, totalLen]);

  // Derive each line’s visible character count from “stage”
  const charCounts = lines.map((_, idx) => {
    const start = lineLengths.slice(0, idx).reduce((a, b) => a + b, 0);
    return Math.max(0, Math.min(lineLengths[idx], stage - start));
  });

  // Render helper: always output exactly lineLengths[idx] slots
  const renderLine = (line: string, idx: number) => {
    const visible = charCounts[idx];
    return (
      <div key={idx} className="leading-tight">
        {line.split('').map((ch, i) => {
          if (i < visible) {
            // Already “typed” → final color
            if (idx === 0 && i >= 4) {
              // “AI Marketplace” part in teal
              return (
                <span key={i} style={{ color: colors.accent[500] }}>
                  {ch}
                </span>
              );
            }
            // Otherwise, in white
            return (
              <span key={i} style={{ color: '#FFF' }}>
                {ch}
              </span>
            );
          }
          // Not yet typed → transparent NBSP
          return (
            <span key={i} className="text-transparent">
              {'\u00A0'}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1E2117] z-0" />

      {/* Grid overlay */}
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

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="flex items-center mb-6">
              <span
                className="px-3 py-1 text-xs font-medium rounded-full mr-3"
                style={{ backgroundColor: colors.accent[500], color: colors.neutral[900] }}
              >
                NEW
              </span>
              <span className="text-sm font-medium text-neutral-100">
                Launching our beta program for AI developers
              </span>
            </div>

            {/* A fixed-height container: always exactly three lines tall, responsive */}
            <div
              className="
                overflow-hidden
                h-[8.4375rem]      /* 3×(2.25rem×1.25) for text-4xl */
                md:h-[11.25rem]    /* 3×(3rem×1.25)   for text-5xl */
                lg:h-[14.0625rem]  /* 3×(3.75rem×1.25) for text-6xl */
              "
            >
              <h1 className={`
                font-['Space_Grotesk']
                text-4xl md:text-5xl lg:text-6xl
                font-bold leading-tight mb-6
              `}>
                {lines.map((ln, i) => renderLine(ln, i))}
                {/* The cursor span can be unconditional (CSS handles blinking) */}
                <span className="inline-block w-[2px] bg-current ml-1 animate-blink" />
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-neutral-100 mb-8 max-w-lg opacity-90">
              Create, discover, and integrate powerful AI models and agents in one unified
              platform. Connect with developers and users in the world’s most innovative AI
              ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="px-8 py-4 rounded-lg text-lg font-medium text-neutral-900 flex items-center justify-center transition-transform hover:transform hover:-translate-y-1"
                style={{ backgroundColor: colors.accent[500] }}
              >
                Get Started
              </a>
              <a
                href="#explore"
                className="px-8 py-4 rounded-lg text-lg font-medium text-white border border-white border-opacity-30 flex items-center justify-center backdrop-blur-sm bg-white bg-opacity-10 transition-all hover:bg-opacity-20"
              >
                Explore AI Models
              </a>
            </div>
          </div>

          {/* Right column: mockup */}
          <div className="lg:w-1/2">
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
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="h-6 w-full rounded-md bg-neutral-800" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[colors.primary[500], colors.accent[500], colors.secondary[500]].map((c, idx) => (
                      <div
                        key={idx}
                        className="aspect-square rounded-md bg-neutral-800 flex items-center justify-center"
                      >
                        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: c }} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 rounded-md bg-neutral-800 w-full" />
                    <div className="h-4 rounded-md bg-neutral-800 w-5/6" />
                    <div className="h-4 rounded-md bg-neutral-800 w-4/6" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-10 rounded-md" style={{ backgroundColor: colors.primary[500] }} />
                    <div className="h-10 rounded-md bg-neutral-800 border border-neutral-700" />
                  </div>
                </div>
              </div>

              {/* Floating accent blocks */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg shadow-lg transform -rotate-6 animate-float"
                style={{
                  background: colors.primary[500],
                  animationDelay: '0.5s',
                  zIndex: -1,
                }}
              />
              <div
                className="absolute -top-8 -right-4 w-24 h-24 rounded-lg shadow-lg transform rotate-12 animate-float"
                style={{
                  background: colors.accent[500],
                  animationDelay: '1s',
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </div>

        {/* Logos/Partners Section */}
        <div className="mt-20 text-center">
          <p className="text-neutral-300 text-sm font-medium mb-6">
            TRUSTED BY LEADING AI DEVELOPERS AND ENTERPRISES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-white bg-opacity-20 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
