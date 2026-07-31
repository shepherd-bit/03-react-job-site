import { 
  FiClock, 
  FiArrowRight, 
  FiZap, 
  FiBookmark,
  FiUser
} from 'react-icons/fi';

const newsArticles = [
  {
    id: 1,
    title: 'How to win any job you want. Get started with 5 steps.',
    category: 'Career Growth',
    categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    image: './related-news/career-growth.jpg',
    readTime: '5 min read',
    date: 'Jul 28, 2026',
    authorName: 'Sarah Jenkins',
    authorRole: 'Career Coach',
  },
  {
    id: 2,
    title: '10 ways to reduce your office work depression and burnout.',
    category: 'Wellness',
    categoryColor: 'bg-rose-50 text-rose-700 border-rose-200',
    image: './related-news/wellness.jpg',
    readTime: '7 min read',
    date: 'Jul 25, 2026',
    authorName: 'David Chen',
    authorRole: 'Workplace Psychologist',
  },
  {
    id: 3,
    title: 'Why should you work as a team even on small individual projects.',
    category: 'Team Dynamics',
    categoryColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    image: './related-news/team-dynamics.jpg',
    readTime: '4 min read',
    date: 'Jul 22, 2026',
    authorName: 'Elena Rostova',
    authorRole: 'Product Lead',
  },
  {
    id: 4,
    title: 'Mastering the AI-assisted technical interview process in 2026.',
    category: 'Tech Trends',
    categoryColor: 'bg-purple-50 text-purple-700 border-purple-200',
    image: './related-news/tech-trends.jpg',
    readTime: '6 min read',
    date: 'Jul 19, 2026',
    authorName: 'Marcus Vance',
    authorRole: 'Senior Tech Recruiter',
  },
  {
    id: 5,
    title: 'How to negotiate a remote salary without losing the offer.',
    category: 'Compensation',
    categoryColor: 'bg-amber-50 text-amber-700 border-amber-200',
    image: './related-news/compensation.jpg',
    readTime: '8 min read',
    date: 'Jul 14, 2026',
    authorName: 'Amanda Hays',
    authorRole: 'HR Consultant',
  },
  {
    id: 6,
    title: 'Building a authentic personal brand that attracts recruiters naturally.',
    category: 'Networking',
    categoryColor: 'bg-blue-50 text-blue-700 border-blue-200',
    image: './related-news/networking.jpg',
    readTime: '5 min read',
    date: 'Jul 10, 2026',
    authorName: 'Liam O’Connor',
    authorRole: 'Talent Strategist',
  },
];

export default function RelatedNews() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EBF7F2] border border-emerald-200/60 text-[#5057D7] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <FiZap className="text-[#5057D7]" />
            Career Insights
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            News that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5057D7] to-emerald-500">helps</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
            Stay ahead with the latest career insights, workplace strategies, and expert advice to scale your professional growth.
          </p>
        </div>

        {/* 6 Article Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Badge */}
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-sm ${article.categoryColor}`}>
                    {article.category}
                  </span>

                  {/* Bookmark Button */}
                  <button
                    type="button"
                    aria-label="Save article"
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-[#5057D7] backdrop-blur-md transition-colors shadow-sm"
                  >
                    <FiBookmark className="text-sm" />
                  </button>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <FiClock className="text-slate-400" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#5057D7] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer: Author Bio */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">
                    <FiUser />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 leading-none">
                      {article.authorName}
                    </p>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {article.authorRole}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#5057D7] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read <FiArrowRight className="text-xs" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#all-news"
            className="inline-flex items-center gap-2.5 bg-[#5057D7] hover:bg-[#4046b9] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore All Articles
            <FiArrowRight className="text-base" />
          </a>
        </div>

      </div>
    </section>
  );
}