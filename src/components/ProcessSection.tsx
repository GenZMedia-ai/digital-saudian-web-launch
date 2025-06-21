
import { useState } from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "Discovery & Planning",
      timeframe: "Week 1-2",
      description: "We dive deep into your business goals and user needs",
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
      title: "Design & Prototyping",
      timeframe: "Week 3-4",
      description: "Creating beautiful, user-centered designs",
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
      title: "Development & Testing",
      timeframe: "Week 5-10",
      description: "Building robust, scalable solutions",
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
      title: "Launch & Support",
      timeframe: "Ongoing",
      description: "Ensuring a successful launch and continued success",
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
          <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-agency-gray max-w-3xl mx-auto">
            From concept to launch in 4 steps
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Desktop Timeline */}
          <div className="hidden md:flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${
                    activeStep === index
                      ? 'bg-agency-blue text-white scale-110'
                      : 'bg-white border-2 border-gray-200 text-gray-400 hover:border-agency-blue hover:text-agency-blue'
                  }`}
                >
                  <step.icon className="w-8 h-8" />
                </button>
                <span className={`text-sm font-semibold ${
                  activeStep === index ? 'text-agency-blue' : 'text-gray-400'
                }`}>
                  {step.timeframe}
                </span>
                {index < steps.length - 1 && (
                  <div className={`absolute top-8 left-full w-full h-0.5 ${
                    activeStep > index ? 'bg-agency-blue' : 'bg-gray-200'
                  }`} style={{ width: 'calc(100vw / 4 - 4rem)' }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4 mb-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full flex items-center p-4 rounded-lg transition-all ${
                  activeStep === index
                    ? 'bg-agency-blue text-white'
                    : 'bg-white border border-gray-200 hover:border-agency-blue'
                }`}
              >
                <step.icon className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <h3 className="font-semibold">{step.title}</h3>
                  <span className="text-sm opacity-75">{step.timeframe}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-agency-blue/10 rounded-full flex items-center justify-center mr-4">
              {steps[activeStep] && <steps[activeStep].icon className="w-6 h-6 text-agency-blue" />}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-agency-navy">
                {steps[activeStep]?.title}
              </h3>
              <p className="text-agency-gray">{steps[activeStep]?.timeframe}</p>
            </div>
          </div>

          <p className="text-lg text-agency-gray mb-8">
            {steps[activeStep]?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-agency-navy mb-4">Key Activities</h4>
              <ul className="space-y-2">
                {steps[activeStep]?.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-center text-agency-gray">
                    <div className="w-2 h-2 bg-agency-blue rounded-full mr-3"></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-agency-navy mb-4">Deliverables</h4>
              <ul className="space-y-2">
                {steps[activeStep]?.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-center text-agency-gray">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-agency-navy mb-4">Client Involvement</h4>
              <p className="text-agency-gray">
                Regular check-ins, feedback sessions, and collaborative decision-making ensure your vision is realized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
