import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import { Button } from '../../shared/components/Button';

export const NotFoundFeature: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-brand-50 text-brand-500 flex items-center justify-center border border-brand-100 shadow-xl">
        <AlertCircle size={40} />
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Página no encontrada</h1>
        <p className="text-gray-600 text-sm">
          Lo sentimos, la página que buscas no existe o ha sido movida. Vuelve al inicio para explorar el portafolio UGC.
        </p>
      </div>
      <Link to="/">
        <Button variant="primary" size="lg">
          <Home size={18} className="mr-2" />
          Volver al Inicio
        </Button>
      </Link>
    </div>
  );
};
