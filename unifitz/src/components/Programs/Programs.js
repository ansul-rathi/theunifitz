// src/components/Programs/Programs.js
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Zumba",
      description: "High-energy dance workouts that feel like a party",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Yoga",
      description: "Find balance, flexibility and inner peace",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Bodyweight Training",
      description: "Build strength using just your body",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-500">{program.title}</h3>
                <p className="text-gray-300">{program.description}</p>
                <button className="mt-4 text-orange-500 flex items-center hover:text-orange-400">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;