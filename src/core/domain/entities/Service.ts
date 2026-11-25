export interface Service {
  id: string;
  title: string;
  deliverables: string[];
  description: string;
  priceEstimate?: string;
  category: 'Video para Ads' | 'Fotografía UGC' | 'Pack Reseñas' | 'Derechos de Uso';
  iconName: string;
}
