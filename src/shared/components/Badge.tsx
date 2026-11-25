import React from 'react';
import { tx } from '@twind/core';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pink' | 'purple' | 'gold' | 'gray';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'pink', className = '' }) => {
  const base = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold';
  
  const variants = {
    pink: 'bg-brand-50 text-brand-700 border border-brand-100',
    purple: 'bg-purple-50 text-purple-700 border border-purple-100',
    gold: 'bg-amber-50 text-amber-700 border border-amber-100',
    gray: 'bg-gray-100 text-gray-700 border border-gray-200'
  };

  return (
    <span className={tx(base, variants[variant], className)}>
      {children}
    </span>
  );
};
