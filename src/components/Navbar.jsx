import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const navRef = useRef(null);

  useGSAP(
    () => {
      // Staggered drop-in animation on initial render
      gsap.from('.nav-item', {
        y: -25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="w-full bg-[#EBF7F2] border-b border-emerald-100/50 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="nav-item flex items-center gap-2">
          <a href="#" className="text-2xl font-black text-slate-900 tracking-tight">
            Jobify<span className="text-[#6C72E6]">.</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <li className="nav-item">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#5057D7] transition-colors py-1 relative group"
            >
              Demos <FiChevronDown className="text-xs transition-transform group-hover:rotate-180" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#5057D7] transition-colors py-1 relative group"
            >
              Pages <FiChevronDown className="text-xs transition-transform group-hover:rotate-180" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="hover:text-[#5057D7] transition-colors py-1">
              Support
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="hover:text-[#5057D7] transition-colors py-1">
              Contact
            </a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4 text-sm font-semibold">
          <a
            href="#"
            className="nav-item text-slate-700 hover:text-[#5057D7] px-3 py-2 transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="nav-item bg-[#5057D7] hover:bg-[#4046BC] text-white px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}