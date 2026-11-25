import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Video, Menu, X, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Muestras', path: '/muestras' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Métricas', path: '/metricas' },
    { label: 'Sobre mí & Contacto', path: '/yo' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-500 to-accent-purple flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Video size={22} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 tracking-tight">Sofía UGC</span>
            <span className="text-xs font-semibold text-brand-500 tracking-wider uppercase">Content Creator</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                isActive(item.path)
                  ? 'bg-brand-50 text-brand-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/yo">
            <Button variant="primary" size="md">
              <Sparkles size={16} className="mr-2" />
              Contratar
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive(item.path)
                  ? 'bg-brand-50 text-brand-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link to="/yo" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                <Sparkles size={16} className="mr-2" />
                Contratar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
