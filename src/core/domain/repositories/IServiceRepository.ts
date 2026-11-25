import { Service } from '../entities/Service';
import { Metric } from '../entities/Metric';

export interface IServiceRepository {
  getAllServices(): Promise<Service[]>;
  getAllMetrics(): Promise<Metric[]>;
}
