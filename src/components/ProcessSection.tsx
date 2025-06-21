
import { useState } from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessSection = () => {
  const { t, isRTL } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: t('process.step1.title'),
      timeframe: t('process.step1.timeframe'),
      description: t('process.step1.description'),
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
      title: t('process.step2.title'),
      timeframe: t('process.step2.timeframe'),
      description: t('process.step2.description'),
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
      title: t('process.step3.title'),
      timeframe: t('process.step3.timeframe'),
      description: t('process.step3.description'),
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
      title: t('process.step4.title'),
      timeframe: t('process.step4.timeframe'),
      description: t('process.step4.description'),
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
          <h2 className="text-4xl md:text-5xl font-hanson font-bold text-devora-navy mb-6">
            {t('process.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative mb-16">
          <div className="hidden md:flex items-center justify-between mb-8">
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
                        ? 'bg-devora-primary text-white scale-110'
                        : 'bg-white border-2 border-gray-200 text-gray-400 hover:border-devora-primary hover:text-devora-primary'
                    }`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </button>
                  <span className={`text-sm font-semibold font-roboto ${
                    isActive ? 'text-devora-primary' : 'text-gray-400'
                  }`}>
                    {step.timeframe}
                  </span>
                  {index < steps.length - 1 && (
                    <div 
                      className={`absolute top-8 ${isRTL ? 'right-full' : 'left-full'} w-full h-0.5 ${
                        isCompleted ? 'bg-devora-primary' : 'bg-gray-200'
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
                      ? 'bg-devora-primary text-white'
                      : 'bg-white border border-gray-200 hover:border-devora-primary'
                  }`}
                >
                  <IconComponent className={`w-8 h-8 ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-semibold font-hanson">{step.title}</h3>
                    <span className="text-sm opacity-75 font-roboto">{step.timeframe}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 bg-devora-primary/10 rounded-full flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
              {steps[activeStep] && (() => {
                const IconComponent = steps[activeStep].icon;
                return <IconComponent className="w-6 h-6 text-devora-primary" />;
              })()}
            </div>
            <div>
              <h3 className="text-2xl font-hanson font-bold text-devora-navy">
                {steps[activeStep]?.title}
              </h3>
              <p className="text-gray-600 font-roboto">{steps[activeStep]?.timeframe}</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-8 font-roboto">
            {steps[activeStep]?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-devora-navy mb-4 font-hanson">{t('process.activities')}</h4>
              <ul className="space-y-2">
                {steps[activeStep]?.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 font-roboto">
                    <div className={`w-2 h-2 bg-devora-primary rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-devora-navy mb-4 font-hanson">{t('process.deliverables')}</h4>
              <ul className="space-y-2">
                {steps[activeStep]?.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 font-roboto">
                    <div className={`w-2 h-2 bg-green-500 rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-devora-navy mb-4 font-hanson">{t('process.involvement')}</h4>
              <p className="text-gray-600 font-roboto">
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
