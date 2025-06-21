
import { Button } from '@/components/ui/button';
import { TrendingDown, Wrench, Smartphone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProblemSolutionSection = () => {
  const { t, isRTL } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    {
      icon: TrendingDown,
      problem: t('problems.problem1.title'),
      solution: t('problems.problem1.solution'),
      description: t('problems.problem1.description')
    },
    {
      icon: Wrench,
      problem: t('problems.problem2.title'),
      solution: t('problems.problem2.solution'),
      description: t('problems.problem2.description')
    },
    {
      icon: Smartphone,
      problem: t('problems.problem3.title'),
      solution: t('problems.problem3.solution'),
      description: t('problems.problem3.description')
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-hanson font-bold text-devora-navy mb-6">
            {t('problems.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            {t('problems.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-200 transition-colors">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                
                <h3 className="text-xl font-hanson font-bold text-devora-navy mb-4">
                  {item.problem}
                </h3>
                
                <div className="flex items-center mb-4">
                  <ArrowRight className={`w-5 h-5 text-devora-primary ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  <span className="text-devora-primary font-semibold font-roboto">{item.solution}</span>
                </div>
                
                <p className="text-gray-600 font-roboto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="bg-devora-primary hover:bg-blue-600 text-white px-8 py-4"
          >
            {t('problems.cta')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
