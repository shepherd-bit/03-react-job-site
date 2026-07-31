export default function Footer() {
  const socialLinks = [
    { name: 'X', logoPath: './socials/x.svg', href: '#' },
    { name: 'Facebook', logoPath: './socials/fb.svg', href: '#' },
    { name: 'Instagram', logoPath: './socials/insta.svg', href: '#' },
    { name: 'LinkedIn', logoPath: './socials/in.svg', href: '#' },
  ];

  return (
    <footer className="bg-[#121629] text-slate-300 py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-5">
          <h2 className="text-2xl font-black text-white tracking-tight">
            Jobify
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
            Connecting talented professionals with world-class opportunities. Your next career milestone starts here.
          </p>

          {/* Social Media Links (Pure White Filter) */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 group"
              >
                <img
                  src={social.logoPath}
                  alt={`${social.name} icon`}
                  className="w-full h-full object-cover filter brightness-0 invert opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden w-full h-full bg-slate-800/80 text-white rounded-full text-xs font-bold items-center justify-center border border-slate-700">
                  {social.name.charAt(0)}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 1: Company */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 tracking-wider">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact us
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#press" className="hover:text-white transition-colors">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Product */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 tracking-wider">
            Product
          </h3>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-white transition-colors">
                News
              </a>
            </li>
            <li>
              <a href="#help" className="hover:text-white transition-colors">
                Help desk
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 tracking-wider">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <a href="#digital-marketing" className="hover:text-white transition-colors">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#content-writing" className="hover:text-white transition-colors">
                Content Writing
              </a>
            </li>
            <li>
              <a href="#seo" className="hover:text-white transition-colors">
                SEO for Business
              </a>
            </li>
            <li>
              <a href="#ui-design" className="hover:text-white transition-colors">
                UI Design
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 tracking-wider">
            Legal
          </h3>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#returns" className="hover:text-white transition-colors">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Jobify Inc. All rights reserved.</p>
        <p>Built for career growth and seamless hiring.</p>
      </div>
    </footer>
  );
}