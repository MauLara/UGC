import { IPostRepository } from '../../core/domain/repositories/IPostRepository';
import { Post } from '../../core/domain/entities/Post';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Rutina de Skincare Glow Up en 3 pasos',
    category: 'Belleza',
    type: 'Tutorial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
    description: 'Video dinámico mostrando la aplicación del sérum con acabado natural y reacción en directo.',
    brandName: 'GlowSkin Co.',
    metricsResult: '+320% ROAS en TikTok Ads',
    createdAt: '2026-01-15'
  },
  {
    id: '2',
    title: 'Unboxing y Testeo de Zapatillas Running Pro',
    category: 'Fitness',
    type: 'Unboxing',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    description: 'Prueba de amortiguación en exteriores y primeras impresiones sinceras.',
    brandName: 'AeroStride',
    metricsResult: '45k visualizaciones orgánicas',
    createdAt: '2026-02-01'
  },
  {
    id: '3',
    title: 'Cafetera Espresso Inteligente: ¿Vale la pena?',
    category: 'Tecnología',
    type: 'Reseña',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    description: 'Reseña honesta enfocada en la facilidad de uso y calidad del café matutino.',
    brandName: 'BrewMaster',
    metricsResult: '12.5% tasa de clics (CTR)',
    createdAt: '2026-02-10'
  },
  {
    id: '4',
    title: 'Fin de semana en Hotel Boutique Escapada',
    category: 'Viajes',
    type: 'Lifestyle',
    thumbnailUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    description: 'Recorrido aesthetic por las instalaciones, habitaciones y desayuno.',
    brandName: 'Sanctuary Retreats',
    metricsResult: '+1,500 seguidores para la marca',
    createdAt: '2026-02-18'
  },
  {
    id: '5',
    title: 'Snack Saludable Proteico: Healthy Crunch',
    category: 'Comida',
    type: 'Reseña',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    description: 'ASMR de apertura y degustación con comparativa de sabores.',
    brandName: 'FitBite',
    metricsResult: '28% aumento en ventas web',
    createdAt: '2026-02-20'
  },
  {
    id: '6',
    title: 'Serum Anti-Edad con Vitamina C - 7 Días',
    category: 'Belleza',
    type: 'Tutorial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    description: 'Seguimiento diario de la textura de la piel y luminosidad.',
    brandName: 'Lumina Derma',
    metricsResult: '+410% conversiones en IG',
    createdAt: '2026-02-22'
  }
];

export class MockPostRepository implements IPostRepository {
  async getAllPosts(): Promise<Post[]> {
    return MOCK_POSTS;
  }

  async getPostsByCategory(category: string): Promise<Post[]> {
    if (category === 'Todos') return MOCK_POSTS;
    return MOCK_POSTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  async getPostById(id: string): Promise<Post | null> {
    return MOCK_POSTS.find(p => p.id === id) || null;
  }
}
