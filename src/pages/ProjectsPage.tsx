import React, { useState } from 'react';
import SEO from '../components/SEO';
import { projectsData, ProjectItem } from '../data/projects';
import { 
  FolderGit2, 
  Clock, 
  Code2, 
  Satellite, 
  BookOpen, 
  Briefcase, 
  Users, 
  MapPin,
  Sparkles
} from 'lucide-react';

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'code-bridge':
      return Code2;
    case 'satquery-ai':
      return Satellite;
    case 'octonote':
      return BookOpen;
    case 'ai-job-assistant':
      return Briefcase;
    case 'deleg-ai':
      return Users;
    case 'instant-workers':
      return MapPin;
    default:
      return Sparkles;
  }
};

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.status.toLowerCase().includes(filter));

  return (
    <div className="pt-28 pb-20 bg-[#070d19]">
      <SEO 
        title="Project Showcase & Software Portfolio" 
        description="Review actual projects and platforms developed by MEHTYS, including Code Bridge, SatQuery AI, Octonote, AI Job Assistant, Deleg-AI, and Instant Workers."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PROJECT SHOWCASE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software Products &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Technology Projects
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A portfolio of software tools, applied artificial intelligence projects, and digital platform concepts built by MEHTYS.
          </p>
        </div>

        {/* Status Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'development', label: 'In Development' },
            { id: 'prototype', label: 'Prototypes' },
            { id: 'planned', label: 'Planned Concepts' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                filter === btn.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project: ProjectItem) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="glass-panel p-7 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                    {project.category}
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2.5">
                    {project.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-[11px]">{project.accessNotice}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
