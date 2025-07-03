
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { colors } from '../theme/colors';
import { useTheme } from '../context/ThemeContext'; // Ensure you have this

interface ModelCardProps {
  title: string;
  developer: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  color: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  title,
  developer,
  description,
  category,
  rating,
  reviewCount,
  imageUrl,
  color,
}) => {
  return (
  <div
  id={`model-${title.toLowerCase().replace(/\s+/g, '-')}`}
  className="scroll-mt-64 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-out border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:scale-105 cursor-pointer"
>

    <div className="h-48 relative overflow-hidden" style={{ backgroundColor: `${color}10` }}>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div
        className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium"
        style={{ backgroundColor: color, color: 'white' }}
      >
        {category}
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">{title}</h3>
        <div className="flex items-center">
          <Star size={16} fill="#FFD700" stroke="#FFD700" className="mr-1" />
          <span className="text-sm font-medium text-neutral-900 dark:text-white">{rating}</span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-1">({reviewCount})</span>
        </div>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">By {developer}</p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>
      <a
        href={`#model-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-sm font-medium flex items-center"
        style={{ color }}
      >
        Learn more <ArrowRight size={14} className="ml-1" />
      </a>
    </div>
  </div>
);

};

const BrowseModels: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();

  const categories = [
    'All',
    'Text Generation',
    'Image Creation',
    'Data Analysis',
    'Voice & Audio',
    'Code Assistant',
    'Chat Bot',
    'Translation',
    'Video Generation',
  ];
  const models = [
    {
      title: "TextGenius Pro",
      developer: "AI Labs",
      description: "Advanced text generation model with context awareness and natural language understanding.",
      category: "Text Generation",
      rating: 4.8,
      reviewCount: 342,
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500]
    },
    {
      title: "ImageCraft AI",
      developer: "Creative Tech",
      description: "Generate stunning images from text prompts with precise style control and high resolution.",
      category: "Image Creation",
      rating: 4.9,
      reviewCount: 278,
      imageUrl: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[500]
    },
    {
      title: "DataSense Analytics",
      developer: "Data Solutions Inc",
      description: "Powerful data analysis model that uncovers insights and patterns in complex datasets.",
      category: "Data Analysis",
      rating: 4.7,
      reviewCount: 195,
      imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    },
    {
      title: "VoiceForge AI",
      developer: "Audio Tech Labs",
      description: "Natural voice synthesis and audio processing with emotion control.",
      category: "Voice & Audio",
      rating: 4.6,
      reviewCount: 156,
      imageUrl: "https://images.pexels.com/photos/3779446/pexels-photo-3779446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500]
    },
    {
      title: "CodeCopilot Pro",
      developer: "Dev Tools Inc",
      description: "Intelligent code completion and generation across multiple programming languages.",
      category: "Code Assistant",
      rating: 4.9,
      reviewCount: 423,
      imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[500]
    },
    {
      title: "ChatMaster AI",
      developer: "Conversation Labs",
      description: "Advanced chatbot with personality customization and multilingual support.",
      category: "Chat Bot",
      rating: 4.7,
      reviewCount: 289,
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    },
    {
      title: "LingualGenius",
      developer: "Translation Tech",
      description: "Real-time translation with context awareness and idiom understanding.",
      category: "Translation",
      rating: 4.8,
      reviewCount: 312,
      imageUrl: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500]
    },
    {
      title: "VideoGen AI",
      developer: "Visual Labs",
      description: "Create and edit videos using AI with style transfer and motion synthesis.",
      category: "Video Generation",
      rating: 4.6,
      reviewCount: 178,
      imageUrl: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[500]
    },
    {
      title: "SmartWrite Pro",
      developer: "Writing Labs",
      description: "AI-powered writing assistant for content creation and editing.",
      category: "Text Generation",
      rating: 4.7,
      reviewCount: 245,
      imageUrl: "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    },
    {
      title: "ArtStyle Transfer",
      developer: "Creative AI Labs",
      description: "Transform images using various artistic styles and techniques.",
      category: "Image Creation",
      rating: 4.8,
      reviewCount: 198,
      imageUrl: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500]
    },
    {
      title: "NeuralComposer",
      developer: "Music AI Labs",
      description: "Create original music compositions using deep learning algorithms.",
      category: "Voice & Audio",
      rating: 4.8,
      reviewCount: 267,
      imageUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    },
    {
      title: "BioMedAI",
      developer: "Health Tech Solutions",
      description: "Medical image analysis and diagnosis assistance using AI.",
      category: "Data Analysis",
      rating: 4.9,
      reviewCount: 412,
      imageUrl: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500]
    },
    {
      title: "SecurityAI Guard",
      developer: "Cyber Defense Labs",
      description: "AI-powered security system for threat detection and prevention.",
      category: "Data Analysis",
      rating: 4.7,
      reviewCount: 345,
      imageUrl: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[500]
    },
    {
      title: "EduBot Tutor",
      developer: "Education AI Inc",
      description: "Personalized AI tutor for adaptive learning and education.",
      category: "Chat Bot",
      rating: 4.8,
      reviewCount: 523,
      imageUrl: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    },
    {
      title: "ResearchGPT",
      developer: "Academic AI Solutions",
      description: "AI research assistant for literature review and analysis.",
      category: "Text Generation",
      rating: 4.6,
      reviewCount: 289,
      imageUrl: "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500]
    },
    {
      title: "3D Model Generator",
      developer: "3D AI Tech",
      description: "Generate 3D models from text descriptions or 2D images.",
      category: "Image Creation",
      rating: 4.7,
      reviewCount: 234,
      imageUrl: "https://images.pexels.com/photos/2777430/pexels-photo-2777430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[500]
    },
    {
      title: "AIFinance Advisor",
      developer: "FinTech AI Labs",
      description: "AI-powered financial analysis and investment recommendations.",
      category: "Data Analysis",
      rating: 4.8,
      reviewCount: 456,
      imageUrl: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    },
    {
      title: "GameNPC Creator",
      developer: "Game AI Studios",
      description: "Create intelligent NPCs with dynamic personalities for games.",
      category: "Chat Bot",
      rating: 4.7,
      reviewCount: 345,
      imageUrl: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500]
    },
    {
      title: "DroneVision AI",
      developer: "Robotics AI Corp",
      description: "Computer vision system for autonomous drone navigation.",
      category: "Image Creation",
      rating: 4.9,
      reviewCount: 234,
      imageUrl: "https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[500]
    },
    {
      title: "AIoT Platform",
      developer: "Smart Device Labs",
      description: "AI platform for IoT device management and analytics.",
      category: "Data Analysis",
      rating: 4.7,
      reviewCount: 312,
      imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    }
  ]; // Keep as-is

  const filteredModels = activeCategory === 'All' ? models : models.filter((m) => m.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-neutral-900 dark:text-white">Browse AI Models</h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModels.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseModels;
