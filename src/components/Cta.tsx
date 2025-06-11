import React from 'react';
import { ArrowRight } from 'lucide-react';
import { colors } from '../theme/colors';

const Cta: React.FC = () => {
  return (
    <section className="py-20 bg-[#1E2117] relative">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
          backgroundSize: '44px 44px'
        }}></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary-500 opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent-500 opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your AI Journey?
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Join our growing community of developers and users building the future of AI. Whether you're creating or implementing AI solutions, AI Studio has everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#developer-signup"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#00B39F] rounded-lg hover:bg-[#00a38f] hover:scale-[1.03] transition-transform duration-300"
            >
              Start Building <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#user-signup"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 hover:scale-[1.03] transition-transform duration-300"
            >
              Explore AI Models
            </a>
          </div>

          
          <p className="mt-8 text-neutral-400">
            No credit card required. Free tier available for all users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;