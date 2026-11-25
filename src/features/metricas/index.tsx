import React from 'react';
import { TrendingUp, Award, Users, Star, ArrowRight, Quote } from 'lucide-react';
import { useServices } from '../../context/ServicesContext';
import { Card } from '../../shared/components/Card';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { LoadingSpinner } from '../../shared/components/LoadingSpinner';
import { Link } from 'react-router-dom';

export const MetricasFeature: React.FC = () => {
  const { metrics, loading } = useServices();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="gold">Resultados & Casos de Éxito</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Métricas que respaldan cada video
        </h1>
        <p className="text-gray-600 text-lg">
          No solo creamos videos estéticos, sino campañas orientadas a performance, ROAS y conversión real para marcas de comercio electrónico.
        </p>
      </div>

      {/* Stats Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center space-y-2 bg-gradient-to-b from-brand-50/50 to-white">
          <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/20">
            <TrendingUp size={24} />
          </div>
          <p className="text-3xl font-black text-gray-900">+4.2x</p>
          <p className="text-sm font-semibold text-gray-600">ROAS Promedio en Ads</p>
          <p className="text-xs text-gray-400">En campañas de Meta y TikTok</p>
        </Card>

        <Card className="p-6 text-center space-y-2 bg-gradient-to-b from-purple-50/50 to-white">
          <div className="w-12 h-12 rounded-2xl bg-accent-purple text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
            <Users size={24} />
          </div>
          <p className="text-3xl font-black text-gray-900">1.2M+</p>
          <p className="text-sm font-semibold text-gray-600">Visualizaciones Orgánicas</p>
          <p className="text-xs text-gray-400">Generadas en 2026</p>
        </Card>

        <Card className="p-6 text-center space-y-2 bg-gradient-to-b from-amber-50/50 to-white">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
            <Award size={24} />
          </div>
          <p className="text-3xl font-black text-gray-900">4.5%</p>
          <p className="text-sm font-semibold text-gray-600">Conversión Media (CTR)</p>
          <p className="text-xs text-gray-400">Superando el benchmark</p>
        </Card>

        <Card className="p-6 text-center space-y-2 bg-gradient-to-b from-indigo-50/50 to-white">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20">
            <Star size={24} />
          </div>
          <p className="text-3xl font-black text-gray-900">98%</p>
          <p className="text-sm font-semibold text-gray-600">Clientes Satisfechos</p>
          <p className="text-xs text-gray-400">Con contratos recurrentes</p>
        </Card>
      </div>

      {/* Case Studies / Testimonials */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Casos de Éxito Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric) => (
              <Card key={metric.id} className="p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-brand-100 -z-0">
                  <Quote size={80} />
                </div>
                <div className="space-y-4 relative z-10">
                  <Badge variant="pink">{metric.brand}</Badge>
                  <h3 className="text-xl font-bold text-gray-900">{metric.campaignTitle}</h3>
                  <div className="flex gap-4 py-2 border-y border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 block">ROAS</span>
                      <span className="text-lg font-black text-brand-600">{metric.roi}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block">Alcance</span>
                      <span className="text-lg font-black text-gray-900">{metric.views}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed">"{metric.testimonial}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* CTA Box */}
      <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold">¿Quieres estos resultados en tu próxima campaña?</h3>
          <p className="text-gray-400 text-sm">Conversemos sobre cómo podemos escalar tu ROAS con videos UGC de alta conversión.</p>
        </div>
        <Link to="/yo">
          <Button variant="primary" size="lg">
            Empezar ahora <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
