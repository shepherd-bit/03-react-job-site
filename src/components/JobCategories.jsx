import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiLayout, 
  FiCode, 
  FiTrendingUp, 
  FiBriefcase, 
  FiDollarSign, 
  FiHeadphones, 
  FiArrowUpRight,
  FiZap
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 'design',
    title: 'Design & Creative',
    jobsCount: 47,
    icon: FiLayout,
    featured: true,
    badge: 'Trending',
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    accentColor: 'text-purple-400',
    glowColor: 'group-hover:border-purple-500/50 group-hover:shadow-purple-500/20',
    topRoles: ['UI/UX', 'Figma', 'Product Design', 'Brand']
  },
  {
    id: 'engineering',
    title: 'Engineering & Dev',
    jobsCount: 89,
    icon: FiCode,
    featured: true,
    badge: 'High Demand',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: 'text-emerald-400',
    glowColor: 'group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/20',
    topRoles: ['React', 'Node.js', 'Python', 'DevOps']
  },
  {
    id: 'marketing',
    title: 'Marketing & Growth',
    jobsCount: 51,
    icon: FiTrendingUp,
    featured: false,
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'text-amber-400',
    glowColor: 'group-hover:border-amber-500/50 group-hover:shadow-amber-500/20',
    topRoles: ['SEO', 'Content', 'Paid Ads']
  },
  {
    id: 'management',
    title: 'Product & Management',
    jobsCount: 16,
    icon: FiBriefcase,
    featured: false,
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    accentColor: 'text-blue-400',
    glowColor: 'group-hover:border-blue-500/50 group-hover:shadow-blue-500/20',
    topRoles: ['Scrum', 'Product Owner', 'Strategy']
  },
  {
    id: 'finance',
    title: 'Finance & Banking',
    jobsCount: 23,
    icon: FiDollarSign,
    featured: false,
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    accentColor: 'text-green-400',
    glowColor: 'group-hover:border-green-500/50 group-hover:shadow-green-500/20',
    topRoles: ['Fintech', 'Audit', 'Analytics']
  },
  {
    id: 'support',
    title: 'Customer Success',
    jobsCount: 34,
    icon: FiHeadphones,
    featured: false,
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    accentColor: 'text-rose-400',
    glowColor: 'group-hover:border-rose-500/50 group-hover:shadow-rose-500/20',
    topRoles: ['Zendesk', 'Support', 'Ops']
  },
];

export default function JobCategories() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Safe Entrance Animation using gsaps batch / smooth reveal without hiding elements upfront
      gsap.from('.cat-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all' // Ensures opacity and transforms are wiped clean after animation finishes
      });

      // 2. Animated Counter Numbers
      const counters = gsap.utils.toArray('.counter-num');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        gsap.to(counter, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
          innerText: target,
          duration: 1.5,
          snap: { innerText: 1 },
          ease: 'power2.out',
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#0B0F17] text-white relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <FiZap className="text-indigo-400" />
              Explore Opportunities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Jobs by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">category</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Find your next career milestone across top high-demand tech fields and global enterprises.
            </p>
          </div>

          <a
            href="#categories"
            className="group inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-all text-sm sm:text-base self-start md:self-end"
          >
            Explore all categories
            <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`cat-card group relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden ${cat.glowColor}`}
              >
                {/* Radial Gradient Backdrop Effect on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Card Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl bg-white/5 border border-white/10 ${cat.accentColor} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300`}>
                      <Icon className="text-2xl" />
                    </div>

                    {cat.badge ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {cat.badge}
                      </span>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                        <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    )}
                  </div>

                  {/* Title & Count */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {cat.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <span
                      className={`counter-num text-lg font-extrabold ${cat.accentColor}`}
                      data-target={cat.jobsCount}
                    >
                      {cat.jobsCount}
                    </span>
                    <span>open positions available</span>
                  </div>
                </div>

                {/* Micro-Pills */}
                <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {cat.topRoles.map((role) => (
                    <span
                      key={role}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400 border border-white/5 group-hover:border-white/10 group-hover:text-slate-200 group-hover:bg-white/10 transition-all"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}