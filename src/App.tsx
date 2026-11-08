import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070d19] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Universal Sticky Navbar */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* Redirect legacy/contact URLs to About page */}
            <Route path="/contact" element={<Navigate to="/about" replace />} />
            <Route path="/products" element={<Navigate to="/projects" replace />} />
            <Route path="/services" element={<Navigate to="/projects" replace />} />
            <Route path="/signin" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Universal Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
