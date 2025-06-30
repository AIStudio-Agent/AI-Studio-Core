import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { models, ModelData } from '../data/models';

type ModelCardProps = ModelData;

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
    <Link to={`/model/${title.toLowerCase().replace(/\s+/g, '-')}`} className="block bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-out border border-neutral-700 cursor-pointer hover:scale-105">
      <div 
        className="h-48 relative overflow-hidden"
        style={{ backgroundColor: `${color}10` }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/600x400/1f2937/e5e7eb?text=AI+Model';
          }}
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
          <h3 className="font-semibold text-lg text-white">{title}</h3>
          <div className="flex items-center">
            <Star size={16} fill="#FFD700" stroke="#FFD700" className="mr-1" />
            <span className="text-sm font-medium text-white">{rating}</span>
            <span className="text-xs text-neutral-400 ml-1">({reviewCount})</span>
          </div>
        </div>
        <p className="text-sm text-neutral-400 mb-1">By {developer}</p>
        <p className="text-sm text-neutral-300 mb-4">{description}</p>
        <span 
          className="text-sm font-medium flex items-center"
          style={{ color }}
        >
          Learn more <ArrowRight size={14} className="ml-1" />
        </span>
      </div>
    </Link>
  );
};

const categories = [
    'All',
    'Text Generation',
    'Image Creation',
    'Data Analysis',
    'Voice & Audio',
    'Code Assistant',
    'Chat Bot',
    'Translation',
    'Video Generation'
];

const BrowseModels: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredModels, setFilteredModels] = useState<ModelData[]>(models);

  useEffect(() => {
    console.log('Models data:', models);
    const filtered = models.filter(model => {
      const matchesSearch = searchQuery === '' || [
        model.title,
        model.developer,
        model.description,
        model.category
      ].some(field => field.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'All' || model.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
    setFilteredModels(filtered);
  }, [searchQuery, activeCategory, models]);

  // Sort models by rating and review count to determine trending
  const trendingModels = [...models]
    .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
    .slice(0, 4);

  // Simulated frequently used models (in a real app, this would come from user data)
  const frequentlyUsedModels = [...models]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  
  const categories = [
    'All',
    'Text Generation',
    'Image Creation',
    'Data Analysis',
    'Voice & Audio',
    'Code Assistant',
    'Chat Bot',
    'Translation',
    'Video Generation'
  ];
  
  // Search input component
  const SearchBar = () => (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search models by name, category, or keywords..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-teal-500 transition-colors"
      />
    </div>
  );



  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Browse AI Models</h1>
        
        {/* Search Bar */}
        <SearchBar />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-teal-500 text-white' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Trending Models */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Trending Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingModels.map((model, index) => (
              <ModelCard key={`trending-${index}`} {...model} />
            ))}
          </div>
        </div>

        {/* Frequently Used Models */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Used Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frequentlyUsedModels.map((model, index) => (
              <ModelCard key={`frequent-${index}`} {...model} />
            ))}
          </div>
        </div>

        {/* All Models */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">All Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredModels.length > 0 ? (
              filteredModels.map((model, index) => (
                <ModelCard key={`all-${index}`} {...model} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-400 text-lg">No models found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseModels;