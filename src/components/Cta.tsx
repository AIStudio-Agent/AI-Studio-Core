import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cta: React.FC = () => {
  return (
    <section className="py-20 bg-white text-black dark:bg-[#1E2117] dark:text-white relative transition-colors duration-300">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-teal-400 dark:bg-primary-500 opacity-10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-teal-500 dark:bg-accent-500 opacity-10 blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            Ready to Transform Your AI Journey?
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            Join our growing community of developers and users building the future of AI.
            Whether you're creating or implementing AI solutions, AI Studio has everything you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-all duration-200"
            >
              Start Building <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/browse-models"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-black dark:text-white border border-black/20 dark:border-white/30 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
            >
              Explore AI Models <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <p className="mt-8 text-neutral-500 dark:text-neutral-400">
            No credit card required. Free tier available for all users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
