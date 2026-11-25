import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Camera, PackageCheck, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useServices } from '../../context/ServicesContext';
import { Card } from '../../shared/components/Card';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { LoadingSpinner } from '../../shared/components/LoadingSpinner';

export const ServiciosFeature: React.FC = () => {
  const { services, loading } = useServices();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Video': return <Video className="w-8 h-8 text-brand-500" />;
      case 'Camera': return <Camera className="w-8 h-8 text-accent-purple" />;
      case 'PackageCheck': return <PackageCheck className="w-8 h-8 text-amber-500" />;
      default: return <ShieldCheck className="w-8 h-8 text-indigo-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="purple">Servicios & Entregables</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Soluciones UGC para tu marca
        </h1>
        <p className="text-gray-600 text-lg">
          Paquetes diseñados a medida para agencias y marcas de e-commerce que buscan escalar su inversión publicitaria con contenido de alto impacto.
        </p>
      </div>

      {/* Services Grid */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                    {getIcon(service.iconName)}
                  </div>
                  <Badge variant="pink">{service.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">¿Qué incluye?</h4>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Inversión estimada</span>
                  <span className="text-lg font-black text-gray-900">{service.priceEstimate}</span>
                </div>
                <Link to="/yo">
                  <Button variant="primary" size="md">
                    Contratar pack <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* FAQ / Process Section */}
      <div className="bg-gradient-to-tr from-brand-900 to-accent-purple rounded-3xl p-8 sm:p-14 text-white space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="gold" className="bg-white/20 text-white border-white/20">Proceso de Trabajo</Badge>
          <h2 className="text-3xl font-bold">¿Cómo colaboramos paso a paso?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="text-3xl font-black text-brand-300">01</span>
            <h3 className="font-bold text-lg text-white">Briefing & Producto</h3>
            <p className="text-sm text-gray-200">Me envías el producto y definimos los ganchos, objetivos de la campaña y guiones preliminares.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="text-3xl font-black text-brand-300">02</span>
            <h3 className="font-bold text-lg text-white">Grabación & Edición</h3>
            <p className="text-sm text-gray-200">Produzco los videos en alta definición con iluminación profesional, subtítulos dinámicos y música trending.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="text-3xl font-black text-brand-300">03</span>
            <h3 className="font-bold text-lg text-white">Entrega & Ads</h3>
            <p className="text-sm text-gray-200">Recibes los archivos listos en 48-72h con una revisión gratuita incluida para asegurar el éxito en tus anuncios.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
