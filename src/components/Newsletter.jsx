import { useState } from 'react';
import { 
  FiMail, 
  FiSend, 
  FiLock, 
  FiCheckCircle, 
  FiZap 
} from 'react-icons/fi';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Glass/Dark Card Container */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-14 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Background Blur Accents */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#5057D7]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            
            {/* Animated Icon Ring Header */}
            <div className="inline-flex items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#5057D7] to-indigo-400 p-0.5 shadow-lg shadow-indigo-500/30">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-emerald-400">
                  <FiMail className="text-2xl" />
                </div>
              </div>
            </div>

            {/* Badge & Headlines */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <FiZap className="text-emerald-400" />
                Stay Ahead
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Get our latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">updates</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                Subscribe to our newsletter to receive curated job alerts, industry trends, and career advice directly in your inbox.
              </p>
            </div>

            {/* Subscription Form / Success Message */}
            {isSubscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-2xl p-4 flex items-center justify-center gap-3 text-sm font-semibold animate-fadeIn">
                <FiCheckCircle className="text-xl text-emerald-400 shrink-0" />
                <span>You’re subscribed! Check your inbox for your welcome digest.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-2">
                <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-800/80 p-2 rounded-2xl sm:rounded-full border border-slate-700/60 shadow-inner focus-within:border-[#5057D7] transition-colors">
                  <div className="flex items-center gap-3 px-4 py-2 w-full">
                    <FiMail className="text-slate-400 text-lg shrink-0" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl sm:rounded-full bg-[#5057D7] hover:bg-[#4046b9] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-indigo-500/25 transition-all duration-200 shrink-0"
                  >
                    Subscribe
                    <FiSend className="text-xs" />
                  </button>
                </div>
              </form>
            )}

            {/* Privacy Trust Footer */}
            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
              <FiLock className="text-slate-400 text-xs" />
              <span>We respect your privacy. No spam, unsubscribe at any time. Read our{' '}
                <a href="#privacy" className="text-indigo-400 hover:underline">
                  Privacy Policy
                </a>.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}