import React from 'react';
import { ArrowRight } from 'lucide-react';
import { colors } from '../theme/colors';

const Cta: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 z-0"></div>
      
      {/* Mesh-like pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary-500 opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent-500 opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your AI Journey?
          </h2>
          <p className="text-lg md:text-xl text-neutral-100 opacity-90 mb-12 max-w-2xl mx-auto">
            Join our growing community of developers and users building the future of AI. Whether you're creating or implementing AI solutions, AI Studio has everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#developer-signup" 
              className="px-8 py-4 rounded-lg font-medium text-neutral-900 flex items-center justify-center transition-transform hover:transform hover:translate-y-[-2px] text-lg"
              style={{ backgroundColor: colors.accent[500] }}
            >
              Start Building <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#user-signup" 
              className="px-8 py-4 rounded-lg font-medium text-white border border-white border-opacity-30 flex items-center justify-center backdrop-blur-sm bg-white bg-opacity-10 transition-all hover:bg-opacity-20 text-lg"
            >
              Explore AI Models
            </a>
          </div>
          
          <p className="mt-8 text-neutral-200">
            No credit card required. Free tier available for all users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;