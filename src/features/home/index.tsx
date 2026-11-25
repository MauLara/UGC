import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Play, CheckCircle2, Star, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Badge } from '../../shared/components/Badge';
import { usePosts } from '../../context/PostsContext';

export const HomeFeature: React.FC = () => {
  const { posts } = usePosts();
  const featuredPosts = posts.slice(0, 3);

  const niches = [
    { name: 'Belleza & Skincare', icon: '✨', desc: 'Rutinas glow up, testeos y unboxings de cosmética.' },
    { name: 'Fitness & Wellness', icon: '⚡', desc: 'Ropa deportiva, suplementos y rutinas en acción.' },
    { name: 'Tecnología & Gadgets', icon: '📱', desc: 'Reseñas honestas y demostraciones de uso diario.' },
    { name: 'Viajes & Lifestyle', icon: '✈️', desc: 'Hoteles boutique, experiencias y destinos aesthetic.' },
    { name: 'Comida & Gastronomía', icon: '🥑', desc: 'ASMR, recetas rápidas y productos saludables.' },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 bg-gradient-to-b from-brand-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <Badge variant="pink" className="text-sm px-4 py-1.5">
                <Sparkles size={14} className="mr-1.5 inline text-brand-500" />
                Creadora UGC Profesional en Madrid & Global
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Convierto espectadores en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-purple">clientes leales</span> con videos reales.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Hola, soy Sofía. Creo contenido dinámico, auténtico y de alta conversión para TikTok, Instagram Reels y Ads que conectan con tu audiencia desde el primer segundo.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link to="/muestras">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Ver mis muestras <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Consultar Servicios y Tarifas
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-black text-gray-900">+4.2x</p>
                  <p className="text-xs text-gray-500 font-medium">ROAS promedio</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">48h</p>
                  <p className="text-xs text-gray-500 font-medium">Entrega de borradores</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">+50</p>
                  <p className="text-xs text-gray-500 font-medium">Marcas colaboradoras</p>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 to-accent-purple/20 rounded-3xl blur-2xl -z-10"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                    alt="Sofía - Creadora UGC"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-brand-500 text-white rounded-full text-xs font-semibold w-max mb-2">
                      Destacado Q1
                    </span>
                    <h3 className="text-xl font-bold">Unboxing & Reseña en Vivo</h3>
                    <p className="text-sm text-gray-300 mt-1">Formato vertical optimizado para TikTok Ads</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer group-hover:scale-110 transition-transform">
                    <Play size={28} className="fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="purple">Nichos de Especialidad</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Experiencia comprobada en múltiples industrias
          </h2>
          <p className="text-gray-600 text-base">
            Adapto mi tono, voz y estética al ADN de tu marca para que cada video parezca orgánico y genuino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {niches.map((niche, idx) => (
            <Card key={idx} className="p-6 text-center flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl">{niche.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg">{niche.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{niche.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Content / Muestras Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-16 rounded-3xl border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <Badge variant="pink">Portafolio en Acción</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Últimos Trabajos y Muestras</h2>
          </div>
          <Link to="/muestras" className="mt-4 md:mt-0">
            <Button variant="outline" size="md">
              Ver catálogo completo <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group">
              <div className="relative aspect-[9/16] overflow-hidden bg-gray-900">
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="pink" className="bg-white/90 backdrop-blur-md">
                    {post.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{post.brandName}</span>
                  <h3 className="text-lg font-bold mt-1">{post.title}</h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-2">{post.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why UGC Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-brand-900 to-accent-purple rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold" className="bg-white/20 text-white border-white/20">
                Por qué elegir UGC
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                El contenido generado por usuarios supera a la publicidad tradicional.
              </h2>
              <p className="text-gray-200 text-base leading-relaxed">
                Los consumidores confían en personas reales antes que en marcas corporativas. Mis videos están diseñados para generar confianza instantánea y disparar tus conversiones en Paid Media.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-300 shrink-0" />
                  <span className="text-sm font-medium">Ganchos irresistibles probados para retener la atención.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-300 shrink-0" />
                  <span className="text-sm font-medium">Locución natural, cercana y sin apariencia de guion forzado.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-300 shrink-0" />
                  <span className="text-sm font-medium">Derechos de uso listos para anuncios en Meta, TikTok y Google.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-6">
              <h3 className="text-xl font-bold text-white">¿Listo para impulsar tu marca?</h3>
              <p className="text-sm text-gray-200">
                Hablemos sobre tu próxima campaña o producto. Cuéntame qué necesitas y te enviaré una propuesta personalizada.
              </p>
              <Link to="/yo" className="block">
                <Button variant="primary" size="lg" className="w-full bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                  Contactar ahora <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
