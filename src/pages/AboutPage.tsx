import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import { Users, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#060b15]">
      <SEO 
        title="About Us & Founders" 
        description="Learn about MEHTYS, founded by Tyson Garfield and Mehvish (Ajmeri). An independent technology company building software products and AI tools."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>COMPANY & FOUNDERS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              MEHTYS
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            MEHTYS is an independent technology company founded by two co-founders, building software products, AI tools, and digital solutions.
          </p>
        </div>

        {/* Founders Prominent Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Company Co-Founders</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Leadership directing product vision, software initiatives, and technology design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Founder 1 */}
            <div className="glass-panel rounded-2xl p-8 border border-slate-800 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 text-2xl font-bold font-mono mb-5 shadow-lg">
                TG
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                TYSON GARFIELD
              </h3>
              <div className="text-xs font-mono uppercase text-cyan-400 mt-1 font-semibold tracking-wider">
                Co-Founder
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light mt-4 max-w-xs">
                Co-founder directing software product development, technical architecture, and system implementation at MEHTYS.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="glass-panel rounded-2xl p-8 border border-slate-800 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 text-2xl font-bold font-mono mb-5 shadow-lg">
                MA
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                MEHVISH (AJMERI)
              </h3>
              <div className="text-xs font-mono uppercase text-indigo-400 mt-1 font-semibold tracking-wider">
                Co-Founder
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light mt-4 max-w-xs">
                Co-founder directing product strategy, concept development, and digital solutions at MEHTYS.
              </p>
            </div>

          </div>
        </div>

        {/* Brand Emblem Showcase */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-slate-800 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 bg-slate-950/70 rounded-2xl border border-slate-800">
              <div className="w-36 h-36 flex items-center justify-center mb-4">
                <BrandLogo size={140} animated={true} />
              </div>
              <div className="font-mono text-sm text-white font-bold uppercase tracking-wider">
                MEHTYS Emblem
              </div>
              <div className="text-xs text-cyan-400 font-mono mt-0.5">
                Brand Mark & Identity
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                COMPANY MISSION
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Purpose-Built Software & AI Initiatives
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                At MEHTYS, our mission is to build practical software applications and explore applied artificial intelligence. We believe in building clean, maintainable systems that address real workflow challenges.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                From developer tooling such as Code Bridge to exploration in satellite data queries, conversation organizers, and workflow assistance, our projects reflect our commitment to continuous experimentation and thoughtful engineering.
              </p>

              <div className="pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  <span>Explore our project portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
