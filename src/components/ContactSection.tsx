
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.description')
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-agency-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 py-[20px]">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {t('contact.form.name')} *
                  </label>
                  <Input 
                    required 
                    value={formData.name} 
                    onChange={e => handleInputChange('name', e.target.value)} 
                    placeholder={t('contact.form.name.placeholder')} 
                    className="border-gray-700 text-white bg-slate-700" 
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {t('contact.form.email')} *
                  </label>
                  <Input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => handleInputChange('email', e.target.value)} 
                    placeholder={t('contact.form.email.placeholder')} 
                    className="border-gray-700 text-white bg-gray-700" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {t('contact.form.phone')}
                  </label>
                  <Input 
                    value={formData.phone} 
                    onChange={e => handleInputChange('phone', e.target.value)} 
                    placeholder={t('contact.form.phone.placeholder')} 
                    className="border-gray-700 text-white bg-gray-700" 
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {t('contact.form.company')}
                  </label>
                  <Input 
                    value={formData.company} 
                    onChange={e => handleInputChange('company', e.target.value)} 
                    placeholder={t('contact.form.company.placeholder')} 
                    className="border-gray-700 text-white bg-gray-700" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {t('contact.form.project.type')}
                  </label>
                  <Select onValueChange={value => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder={t('contact.form.project.placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="web">{t('contact.form.project.web')}</SelectItem>
                      <SelectItem value="mobile">{t('contact.form.project.mobile')}</SelectItem>
                      <SelectItem value="software">{t('contact.form.project.software')}</SelectItem>
                      <SelectItem value="design">{t('contact.form.project.design')}</SelectItem>
                      <SelectItem value="other">{t('contact.form.project.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {t('contact.form.budget')}
                  </label>
                  <Select onValueChange={value => handleInputChange('budget', value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder={t('contact.form.budget.placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="10k-25k">{t('contact.form.budget.10k')}</SelectItem>
                      <SelectItem value="25k-50k">{t('contact.form.budget.25k')}</SelectItem>
                      <SelectItem value="50k-100k">{t('contact.form.budget.50k')}</SelectItem>
                      <SelectItem value="100k+">{t('contact.form.budget.100k')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>
                  {t('contact.form.message')} *
                </label>
                <Textarea 
                  required 
                  value={formData.message} 
                  onChange={e => handleInputChange('message', e.target.value)} 
                  placeholder={t('contact.form.message.placeholder')} 
                  className="border-gray-700 text-white min-h-[120px] bg-gray-700" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-agency-blue hover:bg-blue-600 text-white py-4 text-lg font-semibold">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className={`w-6 h-6 text-agency-blue ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <div className="font-semibold">{t('contact.info.phone')}</div>
                    <div className="text-gray-400">{t('contact.info.phone.number')}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className={`w-6 h-6 text-agency-blue ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <div className="font-semibold">{t('contact.info.email')}</div>
                    <div className="text-gray-400">{t('contact.info.email.address')}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className={`w-6 h-6 text-agency-blue ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <div className="font-semibold">{t('contact.info.office')}</div>
                    <div className="text-gray-400">{t('contact.info.office.address')}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className={`w-6 h-6 text-agency-blue ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <div className="font-semibold">{t('contact.info.response')}</div>
                    <div className="text-gray-400">{t('contact.info.response.time')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Widget Placeholder */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">{t('contact.schedule.title')}</h3>
              <p className="text-gray-400 mb-4">
                {t('contact.schedule.description')}
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                {t('contact.schedule.cta')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">{t('contact.social.title')}</h3>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-agency-blue transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-agency-blue transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
