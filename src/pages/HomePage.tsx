import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import { projectsData } from '../data/projects';
import { 
  ArrowRight, 
  Clock, 
  Users
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <SEO 
        title="Intelligent Software, AI Tools & Digital Solutions" 
        description="MEHTYS is an independent technology company founded by Tyson Garfield and Mehvish (Ajmeri), building software products, AI tools, and digital solutions."
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-tech-grid">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Mission & Identity */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>INDEPENDENT TECHNOLOGY COMPANY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Building intelligent software,{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  AI tools
                </span>
                , and digital solutions.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                MEHTYS is an independent technology company focused on engineering software products, applied artificial intelligence tools, and purposeful digital platforms.
              </p>

              {/* Co-Founders Display (Prominent on Home) */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Founders</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-panel p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-white text-base">TYSON GARFIELD</div>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">Co-Founder</div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-white text-base">MEHVISH (AJMERI)</div>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">Co-Founder</div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all group"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Column: Original Brand Mark Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800/80 shadow-2xl flex flex-col items-center text-center max-w-sm">
                <div className="w-44 h-44 relative flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-2xl"></div>
                  <BrandLogo size={160} animated={true} />
                </div>
                <div className="font-mono text-sm uppercase tracking-wider text-white font-bold">
                  MEHTYS
                </div>
                <div className="text-xs font-mono text-cyan-400 mt-1">
                  Technology Company
                </div>
                <p className="text-xs text-slate-400 mt-3 font-light leading-relaxed">
                  Founded by Tyson Garfield and Mehvish (Ajmeri).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects Overview */}
      <section className="py-20 border-t border-slate-800/80 bg-[#060b15]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                PROJECT PORTFOLIO
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Projects Overview
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="glass-card-interactive p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {project.status}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-[11px]">{project.accessNotice}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Link Card */}
      <section className="py-16 border-t border-slate-800/80 bg-[#070d19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Learn more about MEHTYS
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Read about the company background, our founders Tyson Garfield and Mehvish (Ajmeri), and our project roadmap.
          </p>
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
            >
              <span>About MEHTYS & Founders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
