import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../shared/components/Navbar';
import { Footer } from '../../shared/components/Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
