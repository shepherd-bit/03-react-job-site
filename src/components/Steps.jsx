import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiSearch, 
  FiSend, 
  FiCheckCircle, 
  FiArrowRight, 
  FiBell, 
  FiBriefcase,
  FiZap 
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
  {
    id: 1,
    title: 'Search for a job',
    description: 'Filter thousands of active listings by keyword, industry workspace, or city location to pinpoint exactly what you need.',
    icon: FiSearch,
    badgeText: 'Instant Search Active',
    badgeIcon: FiBriefcase,
    accent: 'from-emerald-500 to-teal-500',
    borderGlow: 'hover:border-emerald-500/40 hover:shadow-emerald-500/10',
  },
  {
    id: 2,
    title: 'Apply within our website',
    description: 'Submit your digital portfolio, target resume, and professional credentials cleanly through our instant-apply mechanism.',
    icon: FiSend,
    badgeText: 'Application Sent!',
    badgeIcon: FiCheckCircle,
    accent: 'from-indigo-500 to-purple-500',
    borderGlow: 'hover:border-indigo-500/40 hover:shadow-indigo-500/10',
  },
  {
    id: 3,
    title: 'Get interview call',
    description: 'Track your recruitment status directly on your dashboard and connect face-to-face with direct hiring managers.',
    icon: FiBell,
    badgeText: 'Interview Invitation at Greener',
    badgeIcon: FiBell,
    accent: 'from-pink-500 to-rose-500',
    borderGlow: 'hover:border-pink-500/40 hover:shadow-pink-500/10',
  },
];

export default function Steps() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Entrance animation with automatic prop cleanup
      gsap.from('.step-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all', // Clears opacity and transform overrides once finished
      });
    },
    { scope: containerRef }
  );

  const currentStepData = stepsData.find((s) => s.id === activeStep) || stepsData[0];
  const BadgeIcon = currentStepData.badgeIcon;

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-white border-b border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EBF7F2] border border-emerald-200/60 text-[#5057D7] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <FiZap className="text-[#5057D7]" />
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Find jobs with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5057D7] to-emerald-500">3 easy steps</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
            Explore a seamless approach to advancing your career and matching with industry leading companies.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Image Showcase with Floating Dynamic Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                  alt="Candidate applying for jobs"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Status Card */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 right-6 sm:right-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-xl text-white flex items-center gap-3.5">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentStepData.accent} text-white shadow-md transition-all duration-300`}>
                  <BadgeIcon className="text-xl" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Step 0{currentStepData.id} Status
                  </span>
                  <p className="text-sm font-semibold text-white tracking-tight">
                    {currentStepData.badgeText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="relative space-y-6">
              
              {/* Vertical Connector Line */}
              <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-slate-200 -z-0" />

              {stepsData.map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;

                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onClick={() => setActiveStep(step.id)}
                    className={`step-item group relative z-10 p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-5 ${
                      isActive
                        ? 'bg-slate-50 border-slate-300 shadow-lg translate-x-1'
                        : 'bg-white border-slate-100 hover:bg-slate-50/50 hover:border-slate-200'
                    } ${step.borderGlow}`}
                  >
                    {/* Step Icon/Number */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 shadow-md ${
                        isActive
                          ? `bg-gradient-to-r ${step.accent} text-white scale-110`
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="text-lg" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-lg sm:text-xl font-bold transition-colors ${
                            isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          0{step.id}
                        </span>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* CTA Button */}
              <div className="pt-4 pl-14">
                <a
                  href="#jobs"
                  className="inline-flex items-center gap-2.5 bg-[#5057D7] hover:bg-[#4046b9] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start Your Search Now
                  <FiArrowRight className="text-base" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}