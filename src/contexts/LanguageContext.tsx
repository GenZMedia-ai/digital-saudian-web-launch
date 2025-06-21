
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

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
    'nav.logo': 'DevAgency',

    // Hero Section
    'hero.title': 'We Build Digital Solutions',
    'hero.subtitle': 'That Scale Your Business',
    'hero.description': 'From web applications to native mobile apps, we transform ideas into powerful digital products',
    'hero.cta.portfolio': 'View Our Work',
    'hero.cta.consultation': 'Get Free Consultation',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.satisfaction': 'Client Satisfaction',
    'hero.stats.experience': 'Years Experience',

    // Problem Solution Section
    'problem.title': 'We Understand Your Challenges',
    'problem.subtitle': 'Every business faces unique digital challenges. We\'ve helped hundreds of companies overcome theirs.',
    'problem.outdated.title': 'Outdated Website Losing Customers',
    'problem.outdated.solution': 'Modern, conversion-focused redesigns',
    'problem.outdated.description': 'Transform your digital presence with responsive designs that convert visitors into customers',
    'problem.manual.title': 'Manual Processes Slowing Growth',
    'problem.manual.solution': 'Custom automation systems',
    'problem.manual.description': 'Streamline operations with intelligent automation that saves time and reduces errors',
    'problem.mobile.title': 'No Mobile Presence',
    'problem.mobile.solution': 'Native apps for iOS & Android',
    'problem.mobile.description': 'Reach customers wherever they are with powerful native mobile applications',
    'problem.cta': 'See How We Solve These',

    // Services Section
    'services.title': 'Our Core Services',
    'services.subtitle': 'End-to-end development solutions tailored to your needs',
    'services.web.title': 'Web Development',
    'services.web.description': 'Build powerful, scalable web applications',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.description': 'Native and cross-platform mobile solutions',
    'services.custom.title': 'Custom Software',
    'services.custom.description': 'Tailored solutions for your business needs',
    'services.design.title': 'UI/UX Design',
    'services.design.description': 'Create intuitive and beautiful user experiences',
    'services.cta': 'Discuss Your Project',

    // Process Section
    'process.title': 'Our Proven Process',
    'process.subtitle': 'From concept to launch in 4 steps',
    'process.discovery.title': 'Discovery & Planning',
    'process.discovery.timeframe': 'Week 1-2',
    'process.discovery.description': 'We dive deep into your business goals and user needs',
    'process.design.title': 'Design & Prototyping',
    'process.design.timeframe': 'Week 3-4',
    'process.design.description': 'Creating beautiful, user-centered designs',
    'process.development.title': 'Development & Testing',
    'process.development.timeframe': 'Week 5-10',
    'process.development.description': 'Building robust, scalable solutions',
    'process.launch.title': 'Launch & Support',
    'process.launch.timeframe': 'Ongoing',
    'process.launch.description': 'Ensuring a successful launch and continued success',
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
    'team.cta': 'Work With Us'
  },
  ar: {
    // Navigation
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.process': 'عمليتنا',
    'nav.team': 'فريقنا',
    'nav.contact': 'تواصل معنا',
    'nav.cta': 'احصل على استشارة مجانية',
    'nav.logo': 'وكالة التطوير',

    // Hero Section
    'hero.title': 'نبني الحلول الرقمية',
    'hero.subtitle': 'التي تنمي أعمالك',
    'hero.description': 'من تطبيقات الويب إلى تطبيقات الهاتف المحمول الأصلية، نحول الأفكار إلى منتجات رقمية قوية',
    'hero.cta.portfolio': 'شاهد أعمالنا',
    'hero.cta.consultation': 'احصل على استشارة مجانية',
    'hero.stats.projects': 'مشروع منجز',
    'hero.stats.satisfaction': 'رضا العملاء',
    'hero.stats.experience': 'سنوات خبرة',

    // Problem Solution Section
    'problem.title': 'نحن نفهم تحدياتك',
    'problem.subtitle': 'كل شركة تواجه تحديات رقمية فريدة. لقد ساعدنا مئات الشركات على التغلب عليها.',
    'problem.outdated.title': 'موقع قديم يفقد العملاء',
    'problem.outdated.solution': 'إعادة تصميم حديثة تركز على التحويل',
    'problem.outdated.description': 'حول حضورك الرقمي بتصاميم متجاوبة تحول الزوار إلى عملاء',
    'problem.manual.title': 'العمليات اليدوية تبطئ النمو',
    'problem.manual.solution': 'أنظمة أتمتة مخصصة',
    'problem.manual.description': 'بسط العمليات بالأتمتة الذكية التي توفر الوقت وتقلل الأخطاء',
    'problem.mobile.title': 'لا يوجد حضور على الهاتف المحمول',
    'problem.mobile.solution': 'تطبيقات أصلية لنظامي iOS و Android',
    'problem.mobile.description': 'تواصل مع العملاء أينما كانوا بتطبيقات هاتف محمول قوية وأصلية',
    'problem.cta': 'شاهد كيف نحل هذه المشاكل',

    // Services Section
    'services.title': 'خدماتنا الأساسية',
    'services.subtitle': 'حلول تطوير شاملة مصممة حسب احتياجاتك',
    'services.web.title': 'تطوير الويب',
    'services.web.description': 'بناء تطبيقات ويب قوية وقابلة للتوسع',
    'services.mobile.title': 'تطوير تطبيقات الهاتف',
    'services.mobile.description': 'حلول هاتف محمول أصلية ومتعددة المنصات',
    'services.custom.title': 'برمجيات مخصصة',
    'services.custom.description': 'حلول مصممة خصيصاً لاحتياجات عملك',
    'services.design.title': 'تصميم واجهة المستخدم',
    'services.design.description': 'إنشاء تجارب مستخدم جميلة وبديهية',
    'services.cta': 'ناقش مشروعك',

    // Process Section
    'process.title': 'عمليتنا المُثبتة',
    'process.subtitle': 'من الفكرة إلى الإطلاق في 4 خطوات',
    'process.discovery.title': 'الاستكشاف والتخطيط',
    'process.discovery.timeframe': 'الأسبوع 1-2',
    'process.discovery.description': 'نتعمق في أهداف عملك واحتياجات المستخدمين',
    'process.design.title': 'التصميم والنماذج الأولية',
    'process.design.timeframe': 'الأسبوع 3-4',
    'process.design.description': 'إنشاء تصاميم جميلة تتمحور حول المستخدم',
    'process.development.title': 'التطوير والاختبار',
    'process.development.timeframe': 'الأسبوع 5-10',
    'process.development.description': 'بناء حلول قوية وقابلة للتوسع',
    'process.launch.title': 'الإطلاق والدعم',
    'process.launch.timeframe': 'مستمر',
    'process.launch.description': 'ضمان إطلاق ناجح ونجاح مستمر',
    'process.activities': 'الأنشطة الرئيسية',
    'process.deliverables': 'النتائج المتوقعة',
    'process.involvement': 'مشاركة العميل',
    'process.involvement.description': 'فحوصات منتظمة وجلسات ملاحظات واتخاذ قرارات تعاونية لضمان تحقيق رؤيتك.',

    // Team Section
    'team.title': 'تعرف على الفريق وراء نجاحك',
    'team.subtitle': 'فريق متحمس من الخبراء مكرس لتحقيق رؤيتك',
    'team.stats.developers': 'مطور',
    'team.stats.designers': 'مصمم',
    'team.stats.managers': 'مدير مشروع',
    'team.cta': 'اعمل معنا'
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
