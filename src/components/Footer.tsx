import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050912] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo size={42} showText={true} />
            </Link>
            
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-md">
              MEHTYS is an independent, early-stage technology venture founded by Tyson Garfield and Ajmeri Khatoon, currently developing its first software products.
            </p>
          </div>

          {/* Co-Founders Info */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
              Founders
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="font-medium text-white">TYSON GARFIELD</div>
              <div className="text-[11px] font-mono text-cyan-400">Co-Founder</div>
            </div>
            <div className="space-y-1.5 text-xs text-slate-300 pt-2">
              <div className="font-medium text-white">AJMERI KHATOON</div>
              <div className="text-[11px] font-mono text-cyan-400">Co-Founder</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors">About & Founders</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-cyan-300 transition-colors">Products</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} MEHTYS. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
