import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { LoadingSpinner } from '../../shared/components/LoadingSpinner';

const HomeFeature = lazy(() => import('../../features/home').then(m => ({ default: m.HomeFeature })));
const MuestrasFeature = lazy(() => import('../../features/muestras').then(m => ({ default: m.MuestrasFeature })));
const ServiciosFeature = lazy(() => import('../../features/servicios').then(m => ({ default: m.ServiciosFeature })));
const MetricasFeature = lazy(() => import('../../features/metricas').then(m => ({ default: m.MetricasFeature })));
const YoFeature = lazy(() => import('../../features/yo').then(m => ({ default: m.YoFeature })));
const NotFoundFeature = lazy(() => import('../../features/notfound').then(m => ({ default: m.NotFoundFeature })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomeFeature />
          </Suspense>
        ),
      },
      {
        path: 'muestras',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MuestrasFeature />
          </Suspense>
        ),
      },
      {
        path: 'servicios',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ServiciosFeature />
          </Suspense>
        ),
      },
      {
        path: 'metricas',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MetricasFeature />
          </Suspense>
        ),
      },
      {
        path: 'yo',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <YoFeature />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundFeature />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
