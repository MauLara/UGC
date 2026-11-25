import React, { useState } from 'react';
import { Sparkles, Play, Filter, ExternalLink, CheckCircle } from 'lucide-react';
import { usePosts } from '../../context/PostsContext';
import { Card } from '../../shared/components/Card';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Modal } from '../../shared/components/Modal';
import { LoadingSpinner } from '../../shared/components/LoadingSpinner';
import { Post } from '../../core/domain/entities/Post';

export const MuestrasFeature: React.FC = () => {
  const { posts, loading, selectedCategory, setSelectedCategory } = usePosts();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const categories = ['Todos', 'Belleza', 'Fitness', 'Tecnología', 'Viajes', 'Comida'];

  const filtered = selectedCategory === 'Todos'
    ? posts
    : posts.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="pink">Portafolio & Trabajos</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Muestras de Contenido en Cámara
        </h1>
        <p className="text-gray-600 text-lg">
          Explora unboxings, reseñas honestas, tutoriales y videos estilo lifestyle creados para marcas líderes. Haz clic en cualquiera para ver los detalles y resultados de conversión.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filtered.map((post) => (
            <Card key={post.id} className="group cursor-pointer" onClick={() => setSelectedPost(post)}>
              <div className="relative aspect-[9/16] overflow-hidden bg-gray-900">
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="pink" className="bg-white/90 backdrop-blur-md">
                    {post.category}
                  </Badge>
                  <Badge variant="purple" className="bg-purple-900/80 text-white backdrop-blur-md border-transparent">
                    {post.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{post.brandName}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-brand-300 transition-colors">{post.title}</h3>
                  {post.metricsResult && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-semibold text-white w-max">
                      <Sparkles size={14} className="text-amber-400" />
                      {post.metricsResult}
                    </div>
                  )}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Play size={28} className="fill-white ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedPost && (
        <Modal isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} title={selectedPost.title}>
          <div className="space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
              <img src={selectedPost.thumbnailUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="w-16 h-16 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <Play size={28} className="fill-white ml-1" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="pink">{selectedPost.category}</Badge>
              <Badge variant="purple">{selectedPost.type}</Badge>
              <Badge variant="gold">Marca: {selectedPost.brandName}</Badge>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 text-lg">Descripción de la Campaña</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedPost.description}</p>
            </div>

            {selectedPost.metricsResult && (
              <div className="bg-brand-50 p-4 rounded-2xl border border-brand-100 flex items-center gap-3">
                <CheckCircle className="text-brand-500 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Resultado Obtenido</h5>
                  <p className="text-xs text-brand-700 font-semibold">{selectedPost.metricsResult}</p>
                </div>
              </div>
            )}

            <div className="pt-4 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedPost(null)}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={() => { setSelectedPost(null); window.location.href = '/yo'; }}>
                Solicitar video similar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
