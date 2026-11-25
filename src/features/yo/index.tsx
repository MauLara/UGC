import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { Badge } from '../../shared/components/Badge';
import { Card } from '../../shared/components/Card';
import { Input } from '../../shared/components/Input';
import { Button } from '../../shared/components/Button';

export const YoFeature: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    projectType: 'Video para Ads',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="pink">Sobre Mí & Colaboraciones</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Hablemos de tu marca
        </h1>
        <p className="text-gray-600 text-lg">
          ¿Tienes un producto innovador y quieres conectar con la audiencia en redes? Escríbeme y diseñemos juntos la campaña perfecta.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Bio & Info */}
        <div className="lg:col-span-5 space-y-8">
          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900 shadow-md shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                  alt="Sofía - UGC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Sofía Navarro</h3>
                <p className="text-xs font-semibold text-brand-500 uppercase tracking-wider">Creadora de Contenido UGC</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <MapPin size={14} className="text-brand-500" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Apasionada por el marketing digital y la creación de vídeos que generan impacto real. Con más de 3 años de experiencia colaborando con marcas de belleza, tecnología y lifestyle a nivel internacional.
            </p>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span>hola@sofiaugc.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Instagram size={18} className="text-brand-500 shrink-0" />
                <span>@sofia.ugc.creator</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Linkedin size={18} className="text-brand-500 shrink-0" />
                <span>linkedin.com/in/sofiaugc</span>
              </div>
            </div>
          </Card>

          <div className="bg-gradient-to-tr from-brand-900 to-accent-purple p-8 rounded-3xl text-white space-y-4">
            <Sparkles className="text-brand-300" size={28} />
            <h4 className="text-xl font-bold">¿Por qué trabajar conmigo?</h4>
            <p className="text-sm text-gray-200 leading-relaxed">
              Equipamiento de alta gama (Sony A7IV, iluminación profesional, micrófonos Rode), entrega rápida en 48 horas y enfoque absoluto en conversiones para Paid Media.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-8 sm:p-10">
            {formSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto border border-green-100">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">¡Mensaje enviado con éxito!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Gracias por ponerte en contacto. Revisaré los detalles de tu marca y te responderé en menos de 24 horas.
                  </p>
                </div>
                <Button variant="primary" onClick={() => setFormSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Formulario de Colaboración</h3>
                  <p className="text-gray-500 text-sm">Completa los datos de tu marca y te enviaré un presupuesto detallado.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Tu Nombre"
                    placeholder="Ej. Laura Gómez"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Nombre de la Marca"
                    placeholder="Ej. GlowSkin Co."
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Correo Electrónico"
                    type="email"
                    placeholder="laura@tuempresa.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de Servicio</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Video para Ads">Video para Ads (TikTok / Reels)</option>
                      <option value="Fotografía UGC">Fotografía UGC & E-commerce</option>
                      <option value="Pack Reseñas">Pack Reseñas Honestas</option>
                      <option value="Derechos de Uso">Derechos de Uso & Whitelisting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Cuéntame sobre tu campaña</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm"
                    placeholder="Describe los productos, objetivos y plazos de entrega..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  <Send size={18} className="mr-2" />
                  Enviar propuesta a Sofía
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
