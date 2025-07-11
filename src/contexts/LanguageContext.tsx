
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Free Consultation',
    
    // Hero Section
    'hero.title': 'We Build Digital Solutions',
    'hero.subtitle': 'That Scale Your Business',
    'hero.description': 'From web applications to native mobile apps, we transform ideas into powerful digital products',
    'hero.cta.primary': 'View Our Work',
    'hero.cta.secondary': 'Get Free Consultation',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.satisfaction': 'Client Satisfaction',
    'hero.stats.experience': 'Years Experience',
    
    // Problem Solution Section
    'problems.title': 'We Understand Your Challenges',
    'problems.subtitle': 'Every business faces unique digital challenges. We\'ve helped hundreds of companies overcome theirs.',
    'problems.problem1.title': 'Outdated Website Losing Customers',
    'problems.problem1.solution': 'Modern, conversion-focused redesigns',
    'problems.problem1.description': 'Transform your digital presence with responsive designs that convert visitors into customers',
    'problems.problem2.title': 'Manual Processes Slowing Growth',
    'problems.problem2.solution': 'Custom automation systems',
    'problems.problem2.description': 'Streamline operations with intelligent automation that saves time and reduces errors',
    'problems.problem3.title': 'No Mobile Presence',
    'problems.problem3.solution': 'Native apps for iOS & Android',
    'problems.problem3.description': 'Reach customers wherever they are with powerful native mobile applications',
    'problems.cta': 'See How We Solve These',
    
    // Services Section
    'services.title': 'Our Core Services',
    'services.subtitle': 'End-to-end development solutions tailored to your needs',
    'services.web.title': 'Web Development',
    'services.web.description': 'Build powerful, scalable web applications',
    'services.web.feature1': 'Custom Websites',
    'services.web.feature2': 'E-commerce Platforms',
    'services.web.feature3': 'Progressive Web Apps',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.description': 'Native and cross-platform mobile solutions',
    'services.mobile.feature1': 'iOS Native Apps',
    'services.mobile.feature2': 'Android Native Apps',
    'services.mobile.feature3': 'Cross-Platform Solutions',
    'services.software.title': 'Custom Software',
    'services.software.description': 'Tailored solutions for your business needs',
    'services.software.feature1': 'Enterprise Solutions',
    'services.software.feature2': 'SaaS Development',
    'services.software.feature3': 'API Integration',
    'services.design.title': 'UI/UX Design',
    'services.design.description': 'Create intuitive and beautiful user experiences',
    'services.design.feature1': 'User Research',
    'services.design.feature2': 'Interface Design',
    'services.design.feature3': 'Prototyping',
    'services.cta': 'Discuss Your Project',
    'services.learn.more': 'Learn More',
    
    // Portfolio Section
    'portfolio.title': 'Our Recent Work',
    'portfolio.subtitle': 'Real projects, real results',
    'portfolio.filter.all': 'All',
    'portfolio.filter.ecommerce': 'E-commerce',
    'portfolio.filter.saas': 'SaaS',
    'portfolio.filter.mobile': 'Mobile Apps',
    'portfolio.filter.corporate': 'Corporate',
    'portfolio.case.study': 'View Case Study',
    'portfolio.cta': 'Start Your Project',
    
    // Process Section
    'process.title': 'Our Proven Process',
    'process.subtitle': 'From concept to launch in 4 steps',
    'process.step1.title': 'Discovery & Planning',
    'process.step1.timeframe': 'Week 1-2',
    'process.step1.description': 'We dive deep into your business goals and user needs',
    'process.step2.title': 'Design & Prototyping',
    'process.step2.timeframe': 'Week 3-4',
    'process.step2.description': 'Creating beautiful, user-centered designs',
    'process.step3.title': 'Development & Testing',
    'process.step3.timeframe': 'Week 5-10',
    'process.step3.description': 'Building robust, scalable solutions',
    'process.step4.title': 'Launch & Support',
    'process.step4.timeframe': 'Ongoing',
    'process.step4.description': 'Ensuring a successful launch and continued success',
    'process.activities': 'Key Activities',
    'process.deliverables': 'Deliverables',
    'process.involvement': 'Client Involvement',
    'process.involvement.description': 'Regular check-ins, feedback sessions, and collaborative decision-making ensure your vision is realized.',
    
    // Team Section
    'team.title': 'Meet the Team Behind Your Success',
    'team.subtitle': 'A passionate team of experts dedicated to bringing your vision to life',
    'team.stats.developers': 'Developers',
    'team.stats.designers': 'Designers',
    'team.stats.managers': 'Project Managers',
    'team.cta': 'Work With Us',
    
    // Contact Section
    'contact.title': 'Let\'s Build Something Amazing Together',
    'contact.subtitle': 'Ready to transform your digital presence? Get in touch and let\'s discuss your project.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company',
    'contact.form.project.type': 'Project Type',
    'contact.form.budget': 'Budget Range',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.phone.placeholder': '+966 50 123 4567',
    'contact.form.company.placeholder': 'Your company',
    'contact.form.project.placeholder': 'Select project type',
    'contact.form.budget.placeholder': 'Select budget range',
    'contact.form.message.placeholder': 'Tell us about your project...',
    'contact.form.project.web': 'Web Development',
    'contact.form.project.mobile': 'Mobile App',
    'contact.form.project.software': 'Custom Software',
    'contact.form.project.design': 'UI/UX Design',
    'contact.form.project.other': 'Other',
    'contact.form.budget.10k': '40k SAR - 95k SAR',
    'contact.form.budget.25k': '95k SAR - 190k SAR',
    'contact.form.budget.50k': '190k SAR - 375k SAR',
    'contact.form.budget.100k': '375k SAR+',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Get in Touch',
    'contact.info.phone': 'Phone',
    'contact.info.phone.number': '+966 11 123 4567',
    'contact.info.email': 'Email',
    'contact.info.email.address': 'hello@devora.sa',
    'contact.info.office': 'Office',
    'contact.info.office.address': 'Riyadh, Saudi Arabia',
    'contact.info.response': 'Response Time',
    'contact.info.response.time': 'We respond within 24 hours',
    'contact.schedule.title': 'Schedule a Call',
    'contact.schedule.description': 'Prefer to talk? Book a free 30-minute consultation call.',
    'contact.schedule.cta': 'Book a Call',
    'contact.social.title': 'Follow Us',
    'contact.toast.title': 'Message Sent!',
    'contact.toast.description': 'We\'ll get back to you within 24 hours.',
    
    // Footer
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.description': 'Stay updated with our latest projects and insights from the development world',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.submit': 'Subscribe',
    'footer.company': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.services': 'Services',
    'footer.company.portfolio': 'Portfolio',
    'footer.company.blog': 'Blog',
    'footer.company.careers': 'Careers',
    'footer.resources': 'Resources',
    'footer.resources.cases': 'Case Studies',
    'footer.resources.tech': 'Tech Stack',
    'footer.resources.process': 'Process',
    'footer.resources.faq': 'FAQs',
    'footer.platforms': 'Platforms',
    'footer.platforms.shopify': 'Shopify Expert',
    'footer.platforms.wordpress': 'WordPress Pro',
    'footer.platforms.react': 'React Native',
    'footer.platforms.flutter': 'Flutter',
    'footer.legal': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.cookies': 'Cookie Policy',
    'footer.copyright': '© 2024 Devora. All rights reserved.'
  },
  ar: {
    // Navigation
    'nav.about': 'عن الشركة',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.process': 'منهجية العمل',
    'nav.team': 'الفريق',
    'nav.contact': 'تواصل معنا',
    'nav.cta': 'احصل على استشارة مجانية',
    
    // Hero Section
    'hero.title': 'نبني الحلول الرقمية',
    'hero.subtitle': 'التي تُنمي أعمالك',
    'hero.description': 'من تطبيقات الويب إلى التطبيقات المحمولة، نحول أفكارك إلى منتجات رقمية قوية',
    'hero.cta.primary': 'شاهد أعمالنا',
    'hero.cta.secondary': 'احصل على استشارة مجانية',
    'hero.stats.projects': 'مشروع منجز',
    'hero.stats.satisfaction': 'رضا العملاء',
    'hero.stats.experience': 'سنوات خبرة',
    
    // Problem Solution Section
    'problems.title': 'نحن نفهم تحدياتك',
    'problems.subtitle': 'كل شركة تواجه تحديات رقمية فريدة. لقد ساعدنا مئات الشركات على التغلب على تحدياتها.',
    'problems.problem1.title': 'موقع إلكتروني قديم يفقد العملاء',
    'problems.problem1.solution': 'تصاميم عصرية تركز على التحويل',
    'problems.problem1.description': 'تحويل حضورك الرقمي بتصاميم متجاوبة تحول الزوار إلى عملاء',
    'problems.problem2.title': 'العمليات اليدوية تبطئ النمو',
    'problems.problem2.solution': 'أنظمة أتمتة مخصصة',
    'problems.problem2.description': 'تبسيط العمليات بأتمتة ذكية توفر الوقت وتقلل الأخطاء',
    'problems.problem3.title': 'عدم وجود تطبيق محمول',
    'problems.problem3.solution': 'تطبيقات أصلية لـ iOS و Android',
    'problems.problem3.description': 'الوصول للعملاء أينما كانوا بتطبيقات محمولة قوية',
    'problems.cta': 'شاهد كيف نحل هذه المشاكل',
    
    // Services Section
    'services.title': 'خدماتنا الأساسية',
    'services.subtitle': 'حلول تطوير شاملة مصممة لاحتياجاتك',
    'services.web.title': 'تطوير المواقع',
    'services.web.description': 'بناء تطبيقات ويب قوية وقابلة للتوسع',
    'services.web.feature1': 'مواقع مخصصة',
    'services.web.feature2': 'منصات التجارة الإلكترونية',
    'services.web.feature3': 'تطبيقات الويب التقدمية',
    'services.mobile.title': 'تطوير التطبيقات المحمولة',
    'services.mobile.description': 'حلول محمولة أصلية ومتعددة المنصات',
    'services.mobile.feature1': 'تطبيقات iOS أصلية',
    'services.mobile.feature2': 'تطبيقات Android أصلية',
    'services.mobile.feature3': 'حلول متعددة المنصات',
    'services.software.title': 'البرمجيات المخصصة',
    'services.software.description': 'حلول مصممة خصيصاً لاحتياجات عملك',
    'services.software.feature1': 'حلول المؤسسات',
    'services.software.feature2': 'تطوير SaaS',
    'services.software.feature3': 'تكامل API',
    'services.design.title': 'تصميم UI/UX',
    'services.design.description': 'إنشاء تجارب مستخدم بديهية وجميلة',
    'services.design.feature1': 'بحث المستخدم',
    'services.design.feature2': 'تصميم الواجهات',
    'services.design.feature3': 'النماذج الأولية',
    'services.cta': 'ناقش مشروعك',
    'services.learn.more': 'اعرف أكثر',
    
    // Portfolio Section
    'portfolio.title': 'أعمالنا الحديثة',
    'portfolio.subtitle': 'مشاريع حقيقية، نتائج حقيقية',
    'portfolio.filter.all': 'الكل',
    'portfolio.filter.ecommerce': 'التجارة الإلكترونية',
    'portfolio.filter.saas': 'SaaS',
    'portfolio.filter.mobile': 'التطبيقات المحمولة',
    'portfolio.filter.corporate': 'مؤسسي',
    'portfolio.case.study': 'عرض دراسة الحالة',
    'portfolio.cta': 'ابدأ مشروعك',
    
    // Process Section
    'process.title': 'منهجيتنا المثبتة',
    'process.subtitle': 'من الفكرة إلى الإطلاق في 4 خطوات',
    'process.step1.title': 'الاستكشاف والتخطيط',
    'process.step1.timeframe': 'الأسبوع 1-2',
    'process.step1.description': 'نتعمق في أهداف عملك واحتياجات المستخدمين',
    'process.step2.title': 'التصميم والنماذج الأولية',
    'process.step2.timeframe': 'الأسبوع 3-4',
    'process.step2.description': 'إنشاء تصاميم جميلة تتمحور حول المستخدم',
    'process.step3.title': 'التطوير والاختبار',
    'process.step3.timeframe': 'الأسبوع 5-10',
    'process.step3.description': 'بناء حلول قوية وقابلة للتوسع',
    'process.step4.title': 'الإطلاق والدعم',
    'process.step4.timeframe': 'مستمر',
    'process.step4.description': 'ضمان إطلاق ناجح ونجاح مستمر',
    'process.activities': 'الأنشطة الرئيسية',
    'process.deliverables': 'المخرجات',
    'process.involvement': 'مشاركة العميل',
    'process.involvement.description': 'المتابعة المنتظمة وجلسات التغذية الراجعة واتخاذ القرارات التعاونية تضمن تحقيق رؤيتك.',
    
    // Team Section
    'team.title': 'تعرف على الفريق وراء نجاحك',
    'team.subtitle': 'فريق متحمس من الخبراء المكرسين لتحقيق رؤيتك',
    'team.stats.developers': 'مطور',
    'team.stats.designers': 'مصمم',
    'team.stats.managers': 'مدير مشروع',
    'team.cta': 'اعمل معنا',
    
    // Contact Section
    'contact.title': 'لنبني شيئاً مذهلاً معاً',
    'contact.subtitle': 'مستعد لتحويل حضورك الرقمي؟ تواصل معنا ولنناقش مشروعك.',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'الهاتف',
    'contact.form.company': 'الشركة',
    'contact.form.project.type': 'نوع المشروع',
    'contact.form.budget': 'نطاق الميزانية',
    'contact.form.message': 'الرسالة',
    'contact.form.name.placeholder': 'اسمك',
    'contact.form.email.placeholder': 'email@example.com',
    'contact.form.phone.placeholder': '+966 50 123 4567',
    'contact.form.company.placeholder': 'شركتك',
    'contact.form.project.placeholder': 'اختر نوع المشروع',
    'contact.form.budget.placeholder': 'اختر نطاق الميزانية',
    'contact.form.message.placeholder': 'أخبرنا عن مشروعك...',
    'contact.form.project.web': 'تطوير المواقع',
    'contact.form.project.mobile': 'تطبيق محمول',
    'contact.form.project.software': 'برمجيات مخصصة',
    'contact.form.project.design': 'تصميم UI/UX',
    'contact.form.project.other': 'أخرى',
    'contact.form.budget.10k': '40 ألف ريال - 95 ألف ريال',
    'contact.form.budget.25k': '95 ألف ريال - 190 ألف ريال',
    'contact.form.budget.50k': '190 ألف ريال - 375 ألف ريال',
    'contact.form.budget.100k': '375 ألف ريال+',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'تواصل معنا',
    'contact.info.phone': 'الهاتف',
    'contact.info.phone.number': '+966 11 123 4567',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.email.address': 'hello@devora.sa',
    'contact.info.office': 'المكتب',
    'contact.info.office.address': 'الرياض، المملكة العربية السعودية',
    'contact.info.response': 'وقت الاستجابة',
    'contact.info.response.time': 'نرد خلال 24 ساعة',
    'contact.schedule.title': 'حدد موعد مكالمة',
    'contact.schedule.description': 'تفضل المحادثة؟ احجز مكالمة استشارية مجانية لمدة 30 دقيقة.',
    'contact.schedule.cta': 'احجز مكالمة',
    'contact.social.title': 'تابعنا',
    'contact.toast.title': 'تم إرسال الرسالة!',
    'contact.toast.description': 'سنعود إليك خلال 24 ساعة.',
    
    // Footer
    'footer.newsletter.title': 'ابق على اطلاع',
    'footer.newsletter.description': 'ابق على اطلاع بأحدث مشاريعنا ورؤى من عالم التطوير',
    'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'footer.newsletter.submit': 'اشترك',
    'footer.company': 'الشركة',
    'footer.company.about': 'عن الشركة',
    'footer.company.services': 'خدماتنا',
    'footer.company.portfolio': 'أعمالنا',
    'footer.company.blog': 'المدونة',
    'footer.company.careers': 'الوظائف',
    'footer.resources': 'الموارد',
    'footer.resources.cases': 'دراسات الحالة',
    'footer.resources.tech': 'التقنيات المستخدمة',
    'footer.resources.process': 'منهجية العمل',
    'footer.resources.faq': 'الأسئلة الشائعة',
    'footer.platforms': 'المنصات',
    'footer.platforms.shopify': 'خبير Shopify',
    'footer.platforms.wordpress': 'محترف WordPress',
    'footer.platforms.react': 'React Native',
    'footer.platforms.flutter': 'Flutter',
    'footer.legal': 'قانوني',
    'footer.legal.privacy': 'سياسة الخصوصية',
    'footer.legal.terms': 'شروط الخدمة',
    'footer.legal.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.copyright': '© 2024 ديفورا. جميع الحقوق محفوظة.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
