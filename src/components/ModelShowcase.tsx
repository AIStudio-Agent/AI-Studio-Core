import React, { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

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
    <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-out border border-gray-300 dark:border-neutral-700 cursor-pointer hover:scale-105">
      <div
        className="h-48 relative overflow-hidden"
        style={{ backgroundColor: `${color}10` }}
      >
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium"
          style={{ backgroundColor: color, color: "white" }}
        >
          {category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{title}</h3>
          <div className="flex items-center">
            <Star size={16} fill="#FFD700" stroke="#FFD700" className="mr-1" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">{rating}</span>
            <span className="text-xs text-gray-500 dark:text-neutral-400 ml-1">({reviewCount})</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-neutral-400 mb-1">By {developer}</p>
        <p className="text-sm text-gray-700 dark:text-neutral-300 mb-4">{description}</p>
        <Link
          to="browse-models"
          className="text-sm font-medium flex items-center hover:opacity-80 transition-opacity"
          style={{ color }}
        >
          Learn more <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ModelShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Text Generation",
    "Image Creation",
    "Data Analysis",
    "Voice & Audio",
    "Code Assistant",
  ];

  const models = [
    {
      title: "TextGenius Pro",
      developer: "AI Labs",
      description:
        "Advanced text generation model with context awareness and natural language understanding.",
      category: "Text Generation",
      rating: 4.8,
      reviewCount: 342,
      imageUrl:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[500],
    },
    {
      title: "ImageCraft AI",
      developer: "Creative Tech",
      description:
        "Generate stunning images from text prompts with precise style control and high resolution.",
      category: "Image Creation",
      rating: 4.9,
      reviewCount: 278,
      imageUrl:
        "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[500],
    },
    {
      title: "DataAnalyst GPT",
      developer: "Quantum AI",
      description:
        "Automated data analysis and visualization with natural language querying capabilities.",
      category: "Data Analysis",
      rating: 4.7,
      reviewCount: 215,
      imageUrl:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[500],
    },
    {
      title: "VoiceWizard",
      developer: "Audio Intelligence",
      description:
        "High-quality text-to-speech and voice cloning with emotion control and multiple languages.",
      category: "Voice & Audio",
      rating: 4.6,
      reviewCount: 189,
      imageUrl:
        "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.primary[600],
    },
    {
      title: "CodeAssist Pro",
      developer: "DevTools Inc",
      description:
        "AI-powered code completion and refactoring for multiple programming languages.",
      category: "Code Assistant",
      rating: 4.8,
      reviewCount: 256,
      imageUrl:
        "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.secondary[600],
    },
    {
      title: "Sentiment Analyzer",
      developer: "NLP Solutions",
      description:
        "Advanced sentiment analysis for social media, reviews, and customer feedback.",
      category: "Text Generation",
      rating: 4.5,
      reviewCount: 178,
      imageUrl:
        "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: colors.accent[600],
    },
  ];

  const filteredModels =
    activeCategory === "All"
      ? models
      : models.filter((model) => model.category === activeCategory);

  return (
    <section
      id="models"
      className="py-20 relative overflow-hidden bg-white dark:bg-[#1E2117]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured AI Models
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Explore our curated collection of high-performance AI models created by top developers from around the world.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                activeCategory === category
                  ? "text-neutral-900 bg-[#A7D1CC]"
                  : "text-neutral-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-300 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700"
              }`}
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
          <div className="inline-block">
            <Link
              to="browse-models"
              className="px-8 py-4 rounded-xl text-lg font-semibold text-white flex items-center justify-center bg-teal-500 hover:bg-teal-600 transition-all duration-200"
            >
              Browse All Models
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;
