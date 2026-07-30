import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiSearch, FiMapPin, FiBriefcase, FiUsers } from 'react-icons/fi';

export default function Hero() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const smallCircleRef = useRef(null);

  useGSAP(
    () => {
      // Main Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -15,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-subtitle',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-search',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-tags',
          {
            opacity: 0,
            duration: 0.5,
          },
          '-=0.2'
        )
        .from(
          '.hero-image-container',
          {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.2)',
          },
          '-=0.8'
        )
        .from(
          '.floating-badge',
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );

      // Continuous Floating Animations
      gsap.to(circleRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });

      gsap.to(smallCircleRef.current, {
        y: 12,
        x: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[#EBF7F2] min-h-[calc(100vh-80px)] flex items-center pt-8 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Search Box */}
        <div className="lg:col-span-7 space-y-6 z-10">
          <div className="hero-badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#5057D7] border border-emerald-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5057D7] animate-pulse"></span>
            #1 Job Search Platform
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Find a dream job <br />
            that <span className="text-[#5057D7]">changes life.</span>
          </h1>

          <p className="hero-subtitle text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next job website.
          </p>

          {/* Search Form Container */}
          <div className="hero-search bg-white p-2.5 rounded-2xl shadow-lg border border-emerald-100/60 max-w-2xl flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-3 px-3 py-2 w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-slate-100">
              <FiSearch className="text-slate-400 text-lg flex-shrink-0" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full bg-transparent text-sm font-medium text-slate-800 focus:outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3 px-3 py-2 w-full sm:w-1/2">
              <FiMapPin className="text-slate-400 text-lg flex-shrink-0" />
              <select className="w-full bg-transparent text-sm font-medium text-slate-700 focus:outline-none cursor-pointer">
                <option value="">City or Location</option>
                <option value="remote">Remote</option>
                <option value="ny">New York, USA</option>
                <option value="ldn">London, UK</option>
              </select>
            </div>

            <button className="w-full sm:w-auto bg-[#6C72E6] hover:bg-[#5057D7] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center gap-2">
              Search
            </button>
          </div>

          {/* Popular Tag suggestions */}
          <p className="hero-tags text-xs text-slate-500 pt-1">
            <span className="font-semibold text-slate-600">Try:</span> Product Designer, Software Engineer, Data Analyst
          </p>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main Background Purple Circle */}
          <div
            ref={circleRef}
            className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-[#9DA3FC]/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          {/* Secondary Floating Circle */}
          <div
            ref={smallCircleRef}
            className="absolute w-24 h-24 bg-[#9DA3FC]/40 rounded-full -top-4 right-8"
          />

          {/* Image Container with SVG Placeholder Mask */}
          <div className="hero-image-container relative z-10">
            {/* Person Placeholder Illustration / Replace src with your image asset */}
            <div className="relative w-[300px] sm:w-[380px] h-[360px] sm:h-[440px] flex items-end justify-center">
              <img
                src="./hero.png"
                alt="Job Seeker"
                className="w-full h-full object-cover object-top rounded-b-full drop-shadow-xl"
              />
            </div>

            {/* Floating Interactive Badge 1 */}
            <div className="floating-badge absolute top-12 -left-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5057D7]">
                <FiBriefcase className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Active Jobs</p>
                <p className="text-sm font-bold text-slate-800">12,450+</p>
              </div>
            </div>

            {/* Floating Interactive Badge 2 */}
            <div className="floating-badge absolute bottom-8 -right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <FiUsers className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Companies</p>
                <p className="text-sm font-bold text-slate-800">800+ Hiring</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}