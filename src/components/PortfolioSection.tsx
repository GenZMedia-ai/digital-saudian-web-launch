
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioSection = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const filters = [
    { key: 'All', label: t('portfolio.filter.all') },
    { key: 'E-commerce', label: t('portfolio.filter.ecommerce') },
    { key: 'SaaS', label: t('portfolio.filter.saas') },
    { key: 'Mobile Apps', label: t('portfolio.filter.mobile') },
    { key: 'Corporate', label: t('portfolio.filter.corporate') }
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      client: "Fashion Forward",
      category: "E-commerce",
      description: "Modern e-commerce platform with advanced filtering",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      metrics: "300% increase in conversions"
    },
    {
      id: 2,
      title: "Project Management SaaS",
      client: "TaskFlow",
      category: "SaaS",
      description: "Collaborative project management tool",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "AWS", "PostgreSQL"],
      metrics: "10,000+ active users"
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      client: "FitLife",
      category: "Mobile Apps",
      description: "Cross-platform fitness and nutrition tracker",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "HealthKit"],
      metrics: "4.8★ App Store rating"
    },
    {
      id: 4,
      title: "Corporate Website",
      client: "Tech Solutions Inc",
      category: "Corporate",
      description: "Professional corporate website with CMS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Strapi", "Tailwind"],
      metrics: "50% faster load times"
    },
    {
      id: 5,
      title: "Banking Dashboard",
      client: "SecureBank",
      category: "SaaS",
      description: "Secure banking dashboard with real-time analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Node.js"],
      metrics: "99.9% uptime"
    },
    {
      id: 6,
      title: "Delivery App",
      client: "QuickDelivery",
      category: "Mobile Apps",
      description: "On-demand delivery app with real-time tracking",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Google Maps", "Firebase"],
      metrics: "1M+ downloads"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-devora-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-hanson font-bold mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all font-roboto ${
                activeFilter === filter.key
                  ? 'bg-devora-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-devora-primary/20 text-devora-primary text-sm rounded-full font-roboto">
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-sm font-roboto">{project.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-hanson font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 font-roboto">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-xs rounded-md text-gray-300 font-roboto">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-sm font-roboto">{project.metrics}</span>
                    <Button variant="ghost" size="sm" className="text-devora-primary hover:text-blue-400">
                      {t('portfolio.case.study')}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
                    </Button>
                  </div>
                </div>
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
            {t('portfolio.cta')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
