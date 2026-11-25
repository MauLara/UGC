import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Heart, Instagram, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-500 to-accent-purple flex items-center justify-center text-white shadow-md">
                <Video size={22} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Sofía UGC Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Creadora de contenido UGC especializada en convertir marcas a través de videos auténticos, reseñas honestas y anuncios de alta conversión.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-500 hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.69a6.33 6.33 0 0 0 10.82 4.48 6.34 6.34 0 0 0 1.87-4.49V9.58a8.2 8.2 0 0 0 4.9 1.7V7.84a4.85 4.85 0 0 1-1-.15z"/></svg>
              </a>
              <a href="mailto:hola@sofiaugc.com" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-500 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Inicio</Link></li>
              <li><Link to="/muestras" className="hover:text-brand-400 transition-colors">Muestras & Trabajos</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-400 transition-colors">Servicios y Tarifas</Link></li>
              <li><Link to="/metricas" className="hover:text-brand-400 transition-colors">Métricas y Resultados</Link></li>
              <li><Link to="/yo" className="hover:text-brand-400 transition-colors">Sobre mí & Contacto</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Colaboraciones</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-500" />
                <span>Madrid, España & Global (Remoto)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-500" />
                <span>hola@sofiaugc.com</span>
              </li>
              <li className="pt-2">
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                  ● Disponible para Q1/Q2 2026
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Sofía UGC Portfolio. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Diseñado con pasión para creadores UGC <Heart size={14} className="text-brand-500 fill-brand-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
