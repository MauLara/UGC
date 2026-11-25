import React, { createContext, useContext, useEffect, useState } from 'react';
import { Service } from '../core/domain/entities/Service';
import { Metric } from '../core/domain/entities/Metric';
import { MockServiceRepository } from '../infrastructure/repositories/MockServiceRepository';

interface ServicesContextType {
  services: Service[];
  metrics: Metric[];
  loading: boolean;
}

const serviceRepository = new MockServiceRepository();
const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [servs, mets] = await Promise.all([
          serviceRepository.getAllServices(),
          serviceRepository.getAllMetrics()
        ]);
        setServices(servs);
        setMetrics(mets);
      } catch (err) {
        console.error('Error loading services and metrics', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <ServicesContext.Provider value={{ services, metrics, loading }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) throw new Error('useServices must be used within a ServicesProvider');
  return context;
};
