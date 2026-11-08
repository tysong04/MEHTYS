import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-24 min-h-[80vh] flex items-center justify-center bg-[#070d19] px-4">
      <SEO title="404 — Page Not Found" />
      <div className="text-center max-w-md space-y-6">
        <BrandLogo size={64} animated={true} className="mx-auto" />
        <div className="space-y-2">
          <div className="text-4xl font-mono font-extrabold text-cyan-400">404</div>
          <h1 className="text-2xl font-bold text-white">Route Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            The page you are looking for does not exist or has been relocated within the MEHTYS platform.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/25"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
