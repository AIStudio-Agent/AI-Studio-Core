import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { colors } from '../theme/colors';

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
  color
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-neutral-200">
      <div 
        className="h-48 relative overflow-hidden"
        style={{ backgroundColor: `${color}10` }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium"
          style={{ backgroundColor: color, color: 'white' }}
        >
          {category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-neutral-900">{title}</h3>
          <div className="flex items-center">
            <Star size={16} fill="#FFD700" stroke="#FFD700" className="mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-neutral-500 ml-1">({reviewCount})</span>
          </div>
        </div>
        <p className="text-sm text-neutral-500 mb-1">By {developer}</p>
        <p className="text-sm text-neutral-600 mb-4">{description}</p>
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

const ModelShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All',
    'Text Generation',
    'Image Creation',
    'Data Analysis',
    'Voice & Audio',
    'Code Assistant'
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
      title: "DataAnalyst GPT",
      developer: "Quantum AI",
      description: "Automated data analysis and visualization with natural language querying capabilities.",
      category: "Data Analysis",
      rating: 4.7,
      reviewCount: 215,
      imageUrl: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500]
    },
    {
      title: "VoiceWizard",
      developer: "Audio Intelligence",
      description: "High-quality text-to-speech and voice cloning with emotion control and multiple languages.",
      category: "Voice & Audio",
      rating: 4.6,
      reviewCount: 189,
      imageUrl: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[600]
    },
    {
      title: "CodeAssist Pro",
      developer: "DevTools Inc",
      description: "AI-powered code completion and refactoring for multiple programming languages.",
      category: "Code Assistant",
      rating: 4.8,
      reviewCount: 256,
      imageUrl: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[600]
    },
    {
      title: "Sentiment Analyzer",
      developer: "NLP Solutions",
      description: "Advanced sentiment analysis for social media, reviews, and customer feedback.",
      category: "Text Generation",
      rating: 4.5,
      reviewCount: 178,
      imageUrl: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[600]
    }
  ];
  
  const filteredModels = activeCategory === 'All' 
    ? models 
    : models.filter(model => model.category === activeCategory);

  return (
    <section id="models" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Featured AI Models
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our curated collection of high-performance AI models created by top developers from around the world.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'text-white' 
                  : 'text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100'
              }`}
              style={activeCategory === category ? { backgroundColor: colors.primary[500] } : {}}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Model grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model, index) => (
            <ModelCard
              key={index}
              title={model.title}
              developer={model.developer}
              description={model.description}
              category={model.category}
              rating={model.rating}
              reviewCount={model.reviewCount}
              imageUrl={model.imageUrl}
              color={model.color}
            />
          ))}
        </div>
        
        {/* View more button */}
        <div className="text-center mt-12">
          <a
            href="#browse-all"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white transition-transform hover:transform hover:translate-y-[-2px]"
            style={{ backgroundColor: colors.primary[500] }}
          >
            Browse All Models
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;