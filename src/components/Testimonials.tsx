import React from 'react';
import { colors } from '../theme/colors';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  type: 'developer' | 'user';
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company, type }) => {
  const bgColor = type === 'developer' ? colors.primary[500] : colors.secondary[500];
  
  return (
    <div className="relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-5"
        style={{ backgroundColor: bgColor }}
      ></div>
      
      {/* Quote mark */}
      <div 
        className="absolute top-6 left-6 text-5xl leading-none opacity-10"
        style={{ color: bgColor }}
      >
        "
      </div>
      
      {/* Content */}
      <div className="relative p-8 rounded-2xl border border-neutral-200">
        <div className="mb-6">
          <p className="text-neutral-700 text-lg relative z-10">{quote}</p>
        </div>
        
        <div className="flex items-center">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-lg mr-4"
            style={{ backgroundColor: bgColor }}
          >
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900">{name}</h4>
            <p className="text-sm text-neutral-600">{role}, {company}</p>
          </div>
        </div>
        
        {/* Tag */}
        <div 
          className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium"
          style={{ 
            backgroundColor: type === 'developer' ? colors.primary[50] : colors.secondary[50],
            color: bgColor 
          }}
        >
          {type === 'developer' ? 'Developer' : 'User'}
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "AI Studio has completely transformed how I develop and monetize my AI models. The platform makes it incredibly easy to reach users worldwide.",
      name: "Sarah Chen",
      role: "AI Engineer",
      company: "TechVision AI",
      type: 'developer' as const
    },
    {
      quote: "We found exactly the AI solution we needed for our business analytics. The integration was seamless and the performance has exceeded our expectations.",
      name: "Michael Rodriguez",
      role: "CTO",
      company: "DataDrive Inc",
      type: 'user' as const
    },
    {
      quote: "As a solo developer, AI Studio gave me the tools and audience I needed to turn my side project into a profitable AI product within weeks.",
      name: "Alex Johnson",
      role: "Independent Developer",
      company: "NLP Solutions",
      type: 'developer' as const
    },
    {
      quote: "The variety of AI models available is impressive. We've implemented three different solutions from AI Studio that have transformed our workflow.",
      name: "Emily Williams",
      role: "Product Manager",
      company: "Innovate Corp",
      type: 'user' as const
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Success Stories from Our Community
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from developers and users who are creating and leveraging powerful AI solutions on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              type={testimonial.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;