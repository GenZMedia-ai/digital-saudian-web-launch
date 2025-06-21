
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Palette, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Build powerful, scalable web applications",
      features: ["Custom Websites", "E-commerce Platforms", "Progressive Web Apps"],
      technologies: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions",
      features: ["iOS Native Apps", "Android Native Apps", "Cross-Platform Solutions"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored solutions for your business needs",
      features: ["Enterprise Solutions", "SaaS Development", "API Integration"],
      technologies: ["Python", "Java", "AWS", "Docker"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive and beautiful user experiences",
      features: ["User Research", "Interface Design", "Prototyping"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-hanson font-bold text-devora-navy mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            End-to-end development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-devora-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-devora-primary/10 rounded-full mb-6 group-hover:bg-devora-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-devora-primary" />
                </div>
                
                <h3 className="text-xl font-hanson font-bold text-devora-navy mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 font-roboto">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 font-roboto">
                      <div className="w-1.5 h-1.5 bg-devora-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-xs rounded-md text-gray-600 font-roboto">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-devora-primary group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-devora-primary hover:bg-blue-600 text-white px-8 py-4"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
