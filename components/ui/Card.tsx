
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  // Fix: Added optional onClick prop to support click events on the card, resolving an error in AdminPage.tsx.
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div onClick={onClick} className={`bg-brand-secondary rounded-xl p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
