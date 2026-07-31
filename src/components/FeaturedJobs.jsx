import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { 
  FiMapPin, 
  FiClock, 
  FiDollarSign, 
  FiArrowRight, 
  FiBookmark,
  FiZap,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

const featuredJobs = [
  {
    id: 1,
    title: 'Senior Blockchain Engineer',
    company: 'Coinbase',
    logoPlaceholder: './featured-jobs-logos/Coinbase.png',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-Time',
    typeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    salary: '$160k - $210k',
    posted: '2h ago',
    tags: ['Crypto', 'Go', 'React', 'Web3'],
  },
  {
    id: 2,
    title: 'Lead Product Designer',
    company: 'InVision',
    logoPlaceholder: './featured-jobs-logos/InVision.png',
    location: 'New York, NY (Hybrid)',
    type: 'Full-Time',
    typeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    salary: '$140k - $185k',
    posted: '4h ago',
    tags: ['UI/UX', 'Figma', 'Design Systems'],
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Architect',
    company: 'Microsoft',
    logoPlaceholder: './featured-jobs-logos/Microsoft.png',
    location: 'Redmond, WA',
    type: 'Full-Time',
    typeColor: 'text-blue-600 bg-blue-50 border-blue-200',
    salary: '$175k - $230k',
    posted: '1d ago',
    tags: ['Azure', 'Kubernetes', 'C#', 'DevOps'],
  },
  {
    id: 4,
    title: 'Senior Frontend Developer',
    company: 'Zoom',
    logoPlaceholder: './featured-jobs-logos/Zoom.png',
    location: 'San Jose, CA (Remote)',
    type: 'Remote',
    typeColor: 'text-purple-600 bg-purple-50 border-purple-200',
    salary: '$135k - $170k',
    posted: '5h ago',
    tags: ['React', 'TypeScript', 'WebRTC'],
  },
  {
    id: 5,
    title: 'People Operations Manager',
    company: 'Lattice',
    logoPlaceholder: './featured-jobs-logos/Lattice.png',
    location: 'Austin, TX',
    type: 'Full-Time',
    typeColor: 'text-teal-600 bg-teal-50 border-teal-200',
    salary: '$110k - $145k',
    posted: '1d ago',
    tags: ['HR Tech', 'Analytics', 'Culture'],
  },
  {
    id: 6,
    title: 'Senior CMS Architect',
    company: 'Contentful',
    logoPlaceholder: './featured-jobs-logos/Contentful.png',
    location: 'Berlin, Germany (Remote)',
    type: 'Contract',
    typeColor: 'text-amber-600 bg-amber-50 border-amber-200',
    salary: '$90/hr - $120/hr',
    posted: '3h ago',
    tags: ['GraphQL', 'Next.js', 'Headless CMS'],
  },
  {
    id: 7,
    title: 'Video Streaming Specialist',
    company: 'Loom',
    logoPlaceholder: './featured-jobs-logos/Loom.png',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    typeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    salary: '$150k - $190k',
    posted: '6h ago',
    tags: ['FFmpeg', 'Node.js', 'AWS'],
  },
  {
    id: 8,
    title: 'Lifecycle Marketing Lead',
    company: 'Attentive',
    logoPlaceholder: './featured-jobs-logos/Attentive.png',
    location: 'Chicago, IL (Hybrid)',
    type: 'Full-Time',
    typeColor: 'text-rose-600 bg-rose-50 border-rose-200',
    salary: '$125k - $160k',
    posted: '2d ago',
    tags: ['SMS Marketing', 'Growth', 'CRM'],
  },
  {
    id: 9,
    title: 'Payroll Product Specialist',
    company: 'Gusto',
    logoPlaceholder: './featured-jobs-logos/Gusto.png',
    location: 'Denver, CO',
    type: 'Full-Time',
    typeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    salary: '$115k - $150k',
    posted: '12h ago',
    tags: ['Fintech', 'Ruby on Rails', 'API'],
  },
  {
    id: 10,
    title: 'Data Platform Engineer',
    company: 'Segment',
    logoPlaceholder: './featured-jobs-logos/Segment.png',
    location: 'Seattle, WA (Remote)',
    type: 'Remote',
    typeColor: 'text-purple-600 bg-purple-50 border-purple-200',
    salary: '$155k - $200k',
    posted: '1d ago',
    tags: ['Data Pipelines', 'Python', 'Kafka'],
  },
];

export default function FeatureJobs() {
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(
    () => {
      const track = marqueeRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth / 2;

      // Ultra-slow smooth continuous loop (140 seconds total duration)
      tweenRef.current = gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 140,
        ease: 'none',
        repeat: -1,
      });
    },
    { scope: marqueeRef }
  );

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  // Manual Scroll Controls (Step 1 card at a time smoothly)
  const handleManualScroll = (direction) => {
    if (!marqueeRef.current) return;
    
    const cardShift = 404; // 380px card width + 24px gap
    const currentX = gsap.getProperty(marqueeRef.current, 'x');
    const newX = direction === 'left' ? currentX + cardShift : currentX - cardShift;

    gsap.to(marqueeRef.current, {
      x: newX,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  const doubleJobs = [...featuredJobs, ...featuredJobs];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200/80 text-[#5057D7] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <FiZap className="text-[#5057D7]" />
            Verified Opportunities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5057D7] to-indigo-500">jobs</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Handpicked career openings from top technology leaders looking for outstanding talent.
          </p>
        </div>

        {/* Explore Button + Manual Arrow Controls */}
        <div className="flex items-center gap-3 self-start md:self-end flex-wrap">
          <a
            href="#all-jobs"
            className="inline-flex items-center gap-2 bg-[#5057D7] hover:bg-[#4046b9] text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200"
          >
            Explore All Jobs
            <FiArrowRight className="text-sm" />
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleManualScroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#5057D7] hover:border-indigo-300 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              type="button"
              onClick={() => handleManualScroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#5057D7] hover:border-indigo-300 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Super Slow Infinite Marquee Track Container */}
      <div 
        className="w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={marqueeRef} className="flex gap-6 w-max">
          {doubleJobs.map((job, index) => (
            <div
              key={`${job.id}-${index}`}
              className="w-[340px] sm:w-[380px] bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shrink-0 group relative"
            >
              <div>
                {/* Header: Company Logo Placeholder + Bookmark */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Clear Colored Logo Container */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={job.logoPlaceholder}
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full rounded-lg bg-indigo-500/10 text-[#5057D7] font-extrabold text-lg items-center justify-center">
                        {job.company.charAt(0)}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#5057D7] transition-colors">
                        {job.company}
                      </h4>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-medium mt-0.5">
                        <FiClock className="text-slate-400 text-[10px]" />
                        {job.posted}
                      </span>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    aria-label="Bookmark job"
                    className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    <FiBookmark className="text-base" />
                  </button>
                </div>

                {/* Job Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#5057D7] transition-colors line-clamp-1">
                  {job.title}
                </h3>

                {/* Meta details */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <FiMapPin className="text-slate-400" />
                      {job.location}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${job.typeColor}`}>
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <FiDollarSign className="text-emerald-500 text-sm" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-[#5057D7] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
                >
                  Apply Now
                  <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}