import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Replace logo paths here with your own image files inside public/logos/
const allPartners = [
  { name: 'CareerBuilder', category: 'Tech Giants', logo: './partner-logos/careerbuilder-logo.png' },
  { name: 'FlexJobs', category: 'Fortune 500', logo: './partner-logos/flexJobs-logo.png' },
  { name: 'Indeed', category: 'Tech Giants', logo: './partner-logos/Indeed_logo.webp' },
  { name: 'Randstad', category: 'Fortune 500', logo: './partner-logos/randstad-logo.webp' },
  { name: 'Upwork', category: 'Startups', logo: './partner-logos/upwork-logo (2).png' },
  { name: 'VETTERY', category: 'Startups', logo: './partner-logos/Vettery-logo.png' },
  { name: 'Airbnb', category: 'Tech Giants', logo: './partner-logos/airbnb_logo.webp' },
  { name: 'Spotify', category: 'Startups', logo: './partner-logos/spotify_logo.webp' },
];

const categories = ['All', 'Tech Giants', 'Fortune 500', 'Startups'];

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  // Filter partners based on active category
  const filteredPartners = activeCategory === 'All' 
    ? allPartners 
    : allPartners.filter(p => p.category === activeCategory);

  useGSAP(
    () => {
      // 1. Entrance Animations via ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      tl.from('.partners-badge', {
        y: -15,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from(
          '.partners-title',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.partners-desc',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          '.partners-filters',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.partners-marquee-wrapper',
          {
            opacity: 0,
            scale: 0.98,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.4'
        );

      // 2. Infinite Continuous Marquee Loop
      if (marqueeRef.current) {
        tweenRef.current = gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 25,
          ease: 'none',
        });
      }
    },
    { scope: containerRef, dependencies: [filteredPartners] }
  );

  // Handle Pause / Resume on Hover
  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 bg-white border-y border-slate-100 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-10">
        {/* Animated Pill Badge */}
        <div className="partners-badge inline-flex items-center gap-2 bg-[#EBF7F2] text-[#5057D7] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-emerald-100/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5057D7]"></span>
          Top Employers
        </div>

        {/* Headline */}
        <h2 className="partners-title text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Big companies are here
        </h2>

        {/* Subtitle */}
        <p className="partners-desc text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Our platform allows you to access some of the most lucrative gigs and
          connect with the best employers—ranging from Fortune 500 giants to high-growth startups.
        </p>

        {/* Interactive Filter Pills */}
        <div className="partners-filters flex flex-wrap justify-center items-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Logo Marquee Wrapper */}
      <div
        className="partners-marquee-wrapper relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_10%,_black_90%,_transparent_100%)] py-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeRef}
          className="flex items-center gap-12 sm:gap-16 whitespace-nowrap w-max"
        >
          {[...filteredPartners, ...filteredPartners, ...filteredPartners].map(
            (partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center justify-center h-16 px-8 py-3 rounded-xl bg-slate-50/60 hover:bg-slate-100 border border-slate-100 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-none hover:shadow-md group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-7 sm:h-8 w-auto max-w-[140px] object-contain transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if the image isn't added yet
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-base font-bold text-slate-800 tracking-tight">
                  {partner.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}