export interface Post {
  id: string;
  title: string;
  category: 'Belleza' | 'Fitness' | 'Viajes' | 'Comida' | 'Tecnología' | 'Lifestyle';
  type: 'Unboxing' | 'Reseña' | 'Tutorial' | 'Lifestyle';
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  brandName: string;
  metricsResult?: string;
  createdAt: string;
}
