import React from 'react';
import { Zap, Code, Users, Lock, Globe, Cpu } from 'lucide-react';
import { colors } from '../theme/colors';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-neutral-700">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${colors.primary[500]}20` }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} style={{ color: colors.primary[500] }} />,
      title: "Rapid Integration",
      description: "Connect and integrate AI models with just a few clicks, no complex configuration required."
    },
    {
      icon: <Code size={24} style={{ color: colors.primary[500] }} />,
      title: "Developer Tools",
      description: "Comprehensive SDK and API tools to build, test, and deploy your AI models seamlessly."
    },
    {
      icon: <Users size={24} style={{ color: colors.primary[500] }} />,
      title: "Growing Community",
      description: "Join thousands of AI enthusiasts and developers to collaborate and innovate together."
    },
    {
      icon: <Lock size={24} style={{ color: colors.primary[500] }} />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols to protect your models, data, and intellectual property."
    },
    {
      icon: <Globe size={24} style={{ color: colors.primary[500] }} />,
      title: "Global Reach",
      description: "Distribute your AI solutions to users worldwide with our scalable infrastructure."
    },
    {
      icon: <Cpu size={24} style={{ color: colors.primary[500] }} />,
      title: "Compute Resources",
      description: "Access powerful computing resources optimized for AI model training and inference."
    }
  ];

  return (
    <section id="features" className="relative py-20 bg-[#1E2117] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px'
          }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful Features for AI Innovation
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Everything you need to create, publish, and monetize cutting-edge AI solutions in one integrated platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
