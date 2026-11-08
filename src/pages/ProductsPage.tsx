import React from 'react';
import SEO from '../components/SEO';
import { 
  Code2, 
  FileText, 
  Clock, 
  Layers, 
  Lightbulb 
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#070d19]">
      <SEO 
        title="Products — MTCodeBridge (MTCB) & MTnote" 
        description="Discover MEHTYS products currently in development: MTCodeBridge (MTCB) for code translation and MTnote for chat knowledge organization."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>PRODUCT PORTFOLIO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software Tools in{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            MEHTYS is an early-stage technology venture currently focusing its engineering efforts on two software products designed to address specific, everyday workflow needs.
          </p>
        </div>

        {/* The Two Products Showcase */}
        <div className="space-y-8 mb-20">
          
          {/* Product 1: MTCodeBridge (MTCB) */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 hover:border-cyan-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Code2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    Developer Tool
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    MTCodeBridge (MTCB)
                  </h2>
                </div>
              </div>
              <span className="self-start sm:self-auto text-xs font-mono uppercase px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-semibold">
                In Development
              </span>
            </div>

            <p className="text-base text-slate-200 leading-relaxed font-light">
              A developer tool designed to translate code between programming languages while helping users understand the translated output.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-semibold text-white text-xs">Code Translation</div>
                <div className="text-slate-400 text-xs font-light">Assists with translating logic and syntax between programming languages.</div>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-semibold text-white text-xs">Output Comprehension</div>
                <div className="text-slate-400 text-xs font-light">Provides context and explanations to help developers understand code adjustments.</div>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-semibold text-white text-xs">Developer-Centric</div>
                <div className="text-slate-400 text-xs font-light">Built to assist developers and students during migration and learning.</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5 text-xs font-mono text-slate-400 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/60">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs">Access link will be available soon.</span>
            </div>
          </div>

          {/* Product 2: MTnote */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 hover:border-indigo-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    Knowledge Organizer
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    MTnote
                  </h2>
                </div>
              </div>
              <span className="self-start sm:self-auto text-xs font-mono uppercase px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold">
                In Development
              </span>
            </div>

            <p className="text-base text-slate-200 leading-relaxed font-light">
              A knowledge organizer designed to extract, organize and retrieve useful information from exported chat conversations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-semibold text-white text-xs">Information Extraction</div>
                <div className="text-slate-400 text-xs font-light">Identifies valuable takeaways, code snippets, and action points from chat exports.</div>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-semibold text-white text-xs">Structured Organization</div>
                <div className="text-slate-400 text-xs font-light">Categorizes knowledge into coherent topics for seamless long-term reference.</div>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-semibold text-white text-xs">Fast Retrieval</div>
                <div className="text-slate-400 text-xs font-light">Enables quick search and discovery across stored conversation archives.</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5 text-xs font-mono text-slate-400 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/60">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs">Access link will be available soon.</span>
            </div>
          </div>

        </div>

        {/* Clear Distinction: Current Products vs Future Ambitions */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            <Lightbulb className="w-4 h-4" />
            <span>DEVELOPMENT ROADMAP</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Current Focus & Future Ambitions
          </h3>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            As an early-stage technology venture, our current engineering bandwidth is dedicated entirely to completing and validating MTCodeBridge (MTCB) and MTnote. We do not claim active commercial deployments or completed enterprise solutions.
          </p>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Our future ambition is to gradually develop an independent portfolio of practical software tools that streamline digital work, grounded in direct feedback from real users.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
