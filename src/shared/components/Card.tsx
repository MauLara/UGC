import React from 'react';
import { tx } from '@twind/core';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true, onClick }) => {
  const base = 'bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden';
  const hover = hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div className={tx(base, hover, className)} onClick={onClick}>
      {children}
    </div>
  );
};
