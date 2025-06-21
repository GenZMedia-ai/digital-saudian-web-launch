
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "10+ years leading digital transformation projects",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=300&h=300&fit=crop&crop=face",
      skills: ["Strategy", "Leadership", "Business Development"],
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Full-stack architect with expertise in scalable systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["System Architecture", "DevOps", "Team Leadership"],
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      bio: "Award-winning UX designer focused on user-centered design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["UX Research", "Visual Design", "Prototyping"],
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      bio: "React and Node.js expert with a passion for clean code",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript"],
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6">
            Meet the Team Behind Your Success
          </h2>
          <p className="text-xl text-agency-gray max-w-3xl mx-auto">
            A passionate team of experts dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-agency-blue/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <a 
                    href={member.linkedin}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-agency-blue rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-agency-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-agency-blue font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-agency-gray text-sm mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-xs rounded-md text-agency-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-agency-blue to-blue-600 rounded-2xl p-8 text-white text-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Designers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Project Managers</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-agency-blue hover:bg-blue-600 text-white px-8 py-4"
          >
            Work With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
