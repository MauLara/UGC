import { IServiceRepository } from '../../core/domain/repositories/IServiceRepository';
import { Service } from '../../core/domain/entities/Service';
import { Metric } from '../../core/domain/entities/Metric';

const MOCK_SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Pack Videos para Ads (TikTok / Reels / Shorts)',
    deliverables: ['3 Variaciones de gancho (Hook)', 'Edición dinámica con subtítulos', 'Derechos de uso pagados por 3 meses', 'Formato vertical 9:16 HD'],
    description: 'Videos altamente persuasivos diseñados específicamente para campañas de Paid Media con alta retención en los primeros 3 segundos.',
    priceEstimate: 'Desde $150 USD / video',
    category: 'Video para Ads',
    iconName: 'Video'
  },
  {
    id: 's2',
    title: 'Fotografía UGC & Lifestyle para E-commerce',
    deliverables: ['5 Fotos en alta resolución por producto', 'Uso de escenarios reales (casa, exterior, estudio)', 'Modelado de producto y unboxing estático', 'Edición profesional de color'],
    description: 'Imágenes auténticas que generan confianza en fichas de producto y anuncios de carrusel en Meta.',
    priceEstimate: 'Desde $250 USD / pack',
    category: 'Fotografía UGC',
    iconName: 'Camera'
  },
  {
    id: 's3',
    title: 'Pack Reseñas Honestas & Unboxing',
    deliverables: ['Video 60-90 segundos hablando a cámara', 'Prueba de producto en vivo', 'Llamada a la acción (CTA) optimizada', 'Revisión de feedback incluida'],
    description: 'Contenido orgánico de alta conversión que humaniza tu marca y resuelve objeciones de clientes.',
    priceEstimate: 'Desde $200 USD',
    category: 'Pack Reseñas',
    iconName: 'PackageCheck'
  },
  {
    id: 's4',
    title: 'Derechos de Uso & Whitelisting',
    deliverables: ['Autorización para Spark Ads / Whitelisting', 'Ampliación de derechos por 6 o 12 meses', 'Permiso para uso en sitio web y emails'],
    description: 'Escala tus campañas publicitaria utilizando el perfil del creador como anunciante autorizado.',
    priceEstimate: 'Consultar tarifa',
    category: 'Derechos de Uso',
    iconName: 'ShieldCheck'
  }
];

const MOCK_METRICS: Metric[] = [
  {
    id: 'm1',
    brand: 'GlowSkin Co.',
    campaignTitle: 'Lanzamiento Serum Vitamina C',
    roi: '3.8x ROAS',
    views: '120,000+',
    conversionRate: '4.2%',
    testimonial: 'Trabajar con esta creadora superó todas nuestras expectativas. Su capacidad para conectar con la audiencia en TikTok duplicó nuestra tasa de conversión en menos de una semana.'
  },
  {
    id: 'm2',
    brand: 'AeroStride',
    campaignTitle: 'Campaña Zapatillas Running 2026',
    roi: '4.5x ROAS',
    views: '250,000+',
    conversionRate: '5.1%',
    testimonial: 'Los videos de unboxing y testeo en exteriores fueron un éxito rotundo en nuestros anuncios de Meta Ads. Altamente profesional y puntual con las entregas.'
  },
  {
    id: 'm3',
    brand: 'FitBite',
    campaignTitle: 'Snacks Saludables ASMR',
    roi: '3.2x ROAS',
    views: '85,000+',
    conversionRate: '3.9%',
    testimonial: 'La estética y el tono de voz capturaron exactamente lo que nuestra marca necesitaba para conectar con la generación Z.'
  }
];

export class MockServiceRepository implements IServiceRepository {
  async getAllServices(): Promise<Service[]> {
    return MOCK_SERVICES;
  }

  async getAllMetrics(): Promise<Metric[]> {
    return MOCK_METRICS;
  }
}
