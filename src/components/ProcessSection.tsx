
import { useState } from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('process.discovery.title'),
      timeframe: t('process.discovery.timeframe'),
      description: t('process.discovery.description'),
      activities: [
        "Stakeholder interviews",
        "Market research", 
        "Technical requirements",
        "Project roadmap"
      ],
      deliverables: ["Project brief", "Technical specification", "Timeline"]
    },
    {
      icon: Palette,
      title: t('process.design.title'),
      timeframe: t('process.design.timeframe'),
      description: t('process.design.description'),
      activities: [
        "Wireframing",
        "Visual design",
        "Interactive prototypes", 
        "User testing"
      ],
      deliverables: ["Design system", "High-fidelity mockups", "Prototype"]
    },
    {
      icon: Code,
      title: t('process.development.title'),
      timeframe: t('process.development.timeframe'),
      description: t('process.development.description'),
      activities: [
        "Frontend development",
        "Backend development",
        "Quality assurance",
        "Performance optimization"
      ],
      deliverables: ["Working application", "Test reports", "Documentation"]
    },
    {
      icon: Rocket,
      title: t('process.launch.title'),
      timeframe: t('process.launch.timeframe'),
      description: t('process.launch.description'),
      activities: [
        "Deployment setup",
        "User training",
        "Performance monitoring",
        "Ongoing maintenance"
      ],
      deliverables: ["Live application", "Training materials", "Support plan"]
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-brand-navy mb-6 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
            {t('process.title')}
          </h2>
          <p className={`text-xl text-brand-gray max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative mb-16">
          <div className={`hidden md:flex items-center justify-between mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;
              
              return (
                <div key={index} className="flex flex-col items-center relative">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${
                      isActive
                        ? 'bg-brand-primary text-white scale-110'
                        : 'bg-white border-2 border-gray-200 text-gray-400 hover:border-brand-primary hover:text-brand-primary'
                    }`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </button>
                  <span className={`text-sm font-semibold ${
                    isActive ? 'text-brand-primary' : 'text-gray-400'
                  }`}>
                    {step.timeframe}
                  </span>
                  {index < steps.length - 1 && (
                    <div 
                      className={`absolute top-8 ${isRTL ? 'right-full' : 'left-full'} w-full h-0.5 ${
                        isCompleted ? 'bg-brand-primary' : 'bg-gray-200'
                      }`} 
                      style={{ width: 'calc(100vw / 4 - 4rem)' }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="md:hidden space-y-4 mb-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full flex items-center p-4 rounded-lg transition-all ${
                    isActive
                      ? 'bg-brand-primary text-white'
                      : 'bg-white border border-gray-200 hover:border-brand-primary'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <IconComponent className={`w-8 h-8 ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-semibold">{step.title}</h3>
                    <span className="text-sm opacity-75">{step.timeframe}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
              {steps[activeStep] && (() => {
                const IconComponent = steps[activeStep].icon;
                return <IconComponent className="w-6 h-6 text-brand-primary" />;
              })()}
            </div>
            <div className={isRTL ? 'text-right' : ''}>
              <h3 className={`text-2xl font-bold text-brand-navy ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {steps[activeStep]?.title}
              </h3>
              <p className="text-brand-gray">{steps[activeStep]?.timeframe}</p>
            </div>
          </div>

          <p className={`text-lg text-brand-gray mb-8 ${isRTL ? 'text-right font-arabic' : ''}`}>
            {steps[activeStep]?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className={`font-semibold text-brand-navy mb-4 ${isRTL ? 'text-right font-arabic' : 'font-heading'}`}>
                {t('process.activities')}
              </h4>
              <ul className="space-y-2">
                {steps[activeStep]?.activities.map((activity, idx) => (
                  <li key={idx} className={`flex items-center text-brand-gray ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className={`w-2 h-2 bg-brand-primary rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className={`font-semibold text-brand-navy mb-4 ${isRTL ? 'text-right font-arabic' : 'font-heading'}`}>
                {t('process.deliverables')}
              </h4>
              <ul className="space-y-2">
                {steps[activeStep]?.deliverables.map((deliverable, idx) => (
                  <li key={idx} className={`flex items-center text-brand-gray ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className={`w-2 h-2 bg-green-500 rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className={`font-semibold text-brand-navy mb-4 ${isRTL ? 'text-right font-arabic' : 'font-heading'}`}>
                {t('process.involvement')}
              </h4>
              <p className={`text-brand-gray ${isRTL ? 'text-right font-arabic' : ''}`}>
                {t('process.involvement.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
