
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Palette, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [t('services.web.feature1'), t('services.web.feature2'), t('services.web.feature3')],
      technologies: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [t('services.mobile.feature1'), t('services.mobile.feature2'), t('services.mobile.feature3')],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Code,
      title: t('services.software.title'),
      description: t('services.software.description'),
      features: [t('services.software.feature1'), t('services.software.feature2'), t('services.software.feature3')],
      technologies: ["Python", "Java", "AWS", "Docker"]
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.description'),
      features: [t('services.design.feature1'), t('services.design.feature2'), t('services.design.feature3')],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-hanson font-bold text-devora-navy mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            {t('services.subtitle')}
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
                      <div className={`w-1.5 h-1.5 bg-devora-primary rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
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
                  {t('services.learn.more')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
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
            {t('services.cta')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
