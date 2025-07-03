import React from 'react';
import { Zap, Code, Users, Lock, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 4px 15px ${colors.primary[500]}40`,
        transition: { type: 'spring', stiffness: 200, damping: 18 },
      }}
      className="bg-[#F3F4F6] dark:bg-neutral-800 rounded-xl p-6 shadow-lg transition-all 
                border border-neutral-200 dark:border-neutral-700 cursor-pointer hover:backdrop-blur-md"
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${colors.primary[500]}20` }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
    </motion.div>

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
    <section id="features" className="relative py-20 bg-white dark:bg-[#1E2117] transition-colors overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Powerful Features for AI Innovation
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Everything you need to create, publish, and monetize cutting-edge AI solutions in one integrated platform.
          </motion.p>
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
