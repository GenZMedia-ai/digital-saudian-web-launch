import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const HeroSection = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-devora-light via-white to-blue-50">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-devora-primary/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-devora-cyan/5 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-green-500/5 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-1/6 rtl:right-1/6 rtl:left-auto text-devora-primary/20 w-8 h-8 animate-float" />
        <Smartphone className="absolute top-1/3 right-1/6 rtl:left-1/6 rtl:right-auto text-devora-cyan/20 w-8 h-8 animate-float" style={{
        animationDelay: '1.5s'
      }} />
        <Globe className="absolute bottom-1/3 left-1/3 rtl:right-1/3 rtl:left-auto text-green-500/20 w-8 h-8 animate-float" style={{
        animationDelay: '0.5s'
      }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`animate-fade-in ${isRTL ? 'animate-slide-in-rtl' : ''}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-hanson font-bold text-devora-navy mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-devora-primary py-[25px]">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-roboto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-devora-primary hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold">
              {t('hero.cta.primary')}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="border-devora-primary text-devora-primary hover:bg-devora-primary hover:text-white px-8 py-4 text-lg font-semibold">
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-devora-primary font-hanson">500+</span>
              <span className="font-roboto">{t('hero.stats.projects')}</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-devora-primary font-hanson">98%</span>
              <span className="font-roboto">{t('hero.stats.satisfaction')}</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-devora-primary font-hanson">10+</span>
              <span className="font-roboto">{t('hero.stats.experience')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;