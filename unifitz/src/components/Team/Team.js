import React from 'react';

const TeamSection = () => {
    const team = [
      {
        name: "Sarah Johnson",
        role: "Zumba Instructor",
        description: "10+ years of dance and fitness experience",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Michael Chen",
        role: "Yoga Master",
        description: "Certified yoga instructor with focus on mindfulness",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Alex Rodriguez",
        role: "Body Weight Training Expert",
        description: "Former athlete specializing in calisthenics",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Emma Wilson",
        role: "Nutrition Coach",
        description: "Helping you achieve your goals through proper nutrition",
        image: "/api/placeholder/300/300"
      }
    ];
  
    return (
      <section id="team" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Expert Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-orange-500">{member.name}</h3>
                  <p className="text-white font-semibold">{member.role}</p>
                  <p className="text-gray-300 text-sm mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TeamSection;