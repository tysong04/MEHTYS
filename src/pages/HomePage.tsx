import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import { productsData } from '../data/projects';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Target, 
  Compass, 
  CheckCircle2, 
  Code2, 
  FileText 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <SEO 
        title="Early-Stage Technology Venture" 
        description="MEHTYS is an independent, early-stage technology venture founded by Tyson Garfield and Ajmeri Khatoon, currently developing its first products: MTCodeBridge (MTCB) and MTnote."
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-tech-grid">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Identity & Mission */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>EARLY-STAGE TECHNOLOGY VENTURE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Building useful, accessible technology that solves{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  practical problems
                </span>.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                MEHTYS is an independent, early-stage venture currently developing its first software products. We focus on straightforward engineering, practical utility, and software that makes digital work simpler.
              </p>

              {/* Co-Founders Display */}
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
                    <div className="font-bold text-white text-base">AJMERI KHATOON</div>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">Co-Founder</div>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all group"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
                >
                  Our Philosophy
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
                  Early-Stage Venture
                </div>
                <p className="text-xs text-slate-400 mt-3 font-light leading-relaxed">
                  Founded by Tyson Garfield and Ajmeri Khatoon.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Two Products Section */}
      <section className="py-20 border-t border-slate-800/80 bg-[#060b15]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                CURRENT PRODUCTS
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Products in Development
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Our initial development focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsData.map((product) => {
              const isBridge = product.id === 'mtcodebridge';
              return (
                <div
                  key={product.id}
                  className="glass-card-interactive p-8 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                        {isBridge ? <Code2 className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                      </div>
                      <span className="text-[11px] font-mono uppercase px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">
                        {product.status}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                      {product.category}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {product.name}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs">{product.accessNotice}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="py-20 border-t border-slate-800/80 bg-[#070d19]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Build useful, accessible technology that solves practical problems. We design software from first principles to help users accomplish daily tasks without unnecessary overhead.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Gradually develop a portfolio of independent software products that make everyday digital work simpler, faster, and more efficient.
              </p>
            </div>
          </div>

          {/* Philosophy Pillars */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                OUR CORE PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                How We Approach What We Build
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Build for real problems.',
                'Keep products simple and useful.',
                'Prefer practical engineering over unnecessary complexity.',
                'Use AI where it genuinely adds value.',
                'Improve through real user feedback.',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                <span>Read our full philosophy and approach &rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
