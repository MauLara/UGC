import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="w-10 h-10 text-brand-500 animate-spin mb-3" />
      <p className="text-sm font-medium text-gray-500">Cargando contenido UGC...</p>
    </div>
  );
};
