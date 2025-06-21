
import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-devora-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-hanson font-bold mb-4">{t('footer.newsletter.title')}</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto font-roboto">
            {t('footer.newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder={t('footer.newsletter.placeholder')}
              className="bg-gray-900 border-gray-800 text-white flex-1"
            />
            <Button className="bg-devora-primary hover:bg-blue-600">
              {t('footer.newsletter.submit')}
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.company.about')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.company.services')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.company.portfolio')}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.company.blog')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.company.careers')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.resources.cases')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.resources.tech')}
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.resources.process')}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.resources.faq')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">{t('footer.platforms')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.platforms.shopify')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.platforms.wordpress')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.platforms.react')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.platforms.flutter')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.legal.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.legal.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  {t('footer.legal.cookies')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`flex items-center mb-4 md:mb-0 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <h4 className={`text-xl font-hanson font-bold ${isRTL ? 'ml-6' : 'mr-6'}`}>Devora</h4>
              <div className={`flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:hello@devora.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className={`text-gray-400 text-center font-roboto ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
