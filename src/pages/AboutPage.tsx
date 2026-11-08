import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import { 
  Users, 
  Target, 
  Compass, 
  Lightbulb, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#060b15]">
      <SEO 
        title="About Us, Founders & Philosophy" 
        description="Learn about MEHTYS, an early-stage technology venture founded by Tyson Garfield and Mehvish (Ajmeri). Discover our mission, vision, philosophy, and approach to technology."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>EARLY-STAGE VENTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              MEHTYS
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            MEHTYS is an independent, early-stage technology venture currently developing its first software products. We are dedicated to creating useful, accessible digital tools that solve practical problems.
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider mb-1">
              LEADERSHIP
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Co-Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
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
                Co-founder directing software product development and engineering at MEHTYS.
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
                Co-founder directing product strategy and digital solution concepts at MEHTYS.
              </p>
            </div>

          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Build useful, accessible technology that solves practical problems. We focus on software that removes friction from everyday tasks, prioritizing utility, clarity, and ease of use over unnecessary complexity.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Gradually develop a portfolio of independent software products that make everyday digital work simpler and more efficient. We aim to grow steadily through disciplined engineering and genuine user value.
            </p>
          </div>

        </div>

        {/* Why We Build */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            <Lightbulb className="w-4 h-4" />
            <span>ORIGIN MOTIVATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Why We Build
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            We started MEHTYS because digital work frequently encounters unnecessary barriers: tools weighed down by bloated interfaces, complex configurations, or artificial intelligence features implemented without a clear purpose.
          </p>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            We build to create alternatives that are direct, dependable, and responsive to real user workflows. As an early-stage venture, we are taking deliberate steps to engineer focused products that do their core jobs exceptionally well.
          </p>
        </div>

        {/* Our Approach to Technology */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            <Cpu className="w-4 h-4" />
            <span>PRACTICAL ENGINEERING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Our Approach to Technology
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Our approach is rooted in practical engineering. We choose proven, lightweight architectures that offer fast performance and minimal maintenance overhead.
          </p>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            When integrating artificial intelligence, we apply it where it provides genuine, observable leverage—such as assisting developers with code translation or organizing scattered conversational knowledge—rather than treating AI as a buzzword.
          </p>
        </div>

        {/* Our Philosophy */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider mb-1">
              PRINCIPLES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Philosophy</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
              The foundational ideas guiding every product we develop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Build for real problems.',
                desc: 'Focus strictly on tangible difficulties that users encounter in their day-to-day digital work.',
              },
              {
                title: 'Keep products simple and useful.',
                desc: 'Prioritize clarity, clean interfaces, and features that serve an unmistakable purpose.',
              },
              {
                title: 'Prefer practical engineering over unnecessary complexity.',
                desc: 'Choose lean architectures with zero unnecessary bloat or fragile dependencies.',
              },
              {
                title: 'Use AI where it genuinely adds value.',
                desc: 'Deploy machine intelligence purposefully to assist and accelerate, not as decorative marketing.',
              },
              {
                title: 'Improve through real user feedback.',
                desc: 'Iterate constantly based on actual usage, honest critiques, and practical user experiences.',
              },
            ].map((principle, index) => (
              <div key={index} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>0{index + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{principle.title}</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emblem & Products Callout */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <BrandLogo size={56} animated={true} />
            <div>
              <h3 className="font-bold text-white text-base">Explore Our Products</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Learn more about MTCodeBridge (MTCB) and MTnote.
              </p>
            </div>
          </div>
          <Link
            to="/products"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-md"
          >
            <span>View Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
